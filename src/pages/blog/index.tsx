import Link from "next/link"

import Header from "../../components/layout/header"
import { getAllPosts } from "../../components/fetchArticles"

import "react-notion/src/styles.css"

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Header titlePre="Blog" />
      <div className="content">
        <h1>Blog Archive</h1>
        <p>So you want back to homepage? <Link href="/">Click me</Link></p>
          {posts.map((post) => (
            <div key={post.Date}>
              <Link href="/blog/[slug]" as={`/blog/${post.Slug}`}>
                <a>
                  <b>{post.Title}</b>
                  <div>posted on {post.Date}</div>
                  <div>tagged: {post.Category}</div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}
