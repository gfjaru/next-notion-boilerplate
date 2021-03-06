import Link from "next/link"

import Header from "../components/layout/header"
import { getAllPosts } from "../components/fetchArticles"

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default function HomePage({ posts }) {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Hi</h1>
        <h2>This site is using notion x next</h2>
        <p>Generated by next, content handled by notion, and here is the lastest article : <Link href="/blog/[slug]" as={`/blog/${posts[0].Slug}`}>{posts[0].Title}</Link></p>
        <p>And while you wandering around why dont you look to this <Link href="/blog">blog archive</Link></p>
        <p>Please take a note, start editing files on <code>src/pages</code></p>
      </div>
    </>
  )
}
