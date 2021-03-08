const NOTION_BLOG_ID = process.env.NOTION_BLOG_ID
export const NOTION_API_WRAPPER = process.env.NOTION_API_WRAPPER || "https://notion-api.splitbee.io/v1/"
export async function getAllPosts() {
  const postsTable = await fetch(
    `${NOTION_API_WRAPPER}table/${NOTION_BLOG_ID}`
  ).then((res) => res.json())

  // Remove "drafts"
  const posts: any[] = Object.keys(postsTable)
    .map( (slug) => {
      const post = postsTable[slug]
      if(!(post.Published === true)){
        return null
      }
      return post
    })
    .filter(Boolean)
    .sort((a,b)=>(a.Date > b.Date ? -1 : 1))
  return posts
}
