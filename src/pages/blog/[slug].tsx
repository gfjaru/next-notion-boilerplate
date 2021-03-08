import { NotionRenderer } from "react-notion"
import Link from "next/link"

import Header from "../../components/layout/header"
import { getAllPosts, NOTION_API_WRAPPER } from "../../components/fetchArticles"

import "react-notion/src/styles.css"

export async function getStaticPaths() {
  const table = await getAllPosts()
  return {
    paths: table.map((row) => `/blog/${row.Slug}`),
    fallback: false,
  }
}

export async function getStaticProps ({
  params: {
    slug
  }
}) {
  const posts = await getAllPosts();
  const post = posts.find((t) => t.Slug === slug);
  if (!post) {
    throw Error("No slug given");
  } 
  const blocks = await fetch(
    `${NOTION_API_WRAPPER}page/${post!.id}`
  ).then((res) => res.json());
  return {
    props: {
      blocks,
      post,
    },
  }
}

export default function ReadPost( {post, blocks}) {
  return(
    <>
      <p>So you want back to homepage? <Link href="/">Click me</Link> or back to <Link href="/blog">blog archive</Link>?</p>
      <div className="content">
        <Header titlePre={post.Title} />
        <h1>{post.Title}</h1>
        <NotionRenderer blockMap={blocks} />
      </div>
    </>
  ) 
}
