# next-notion-boilerplate

minimal implementation of [react-notion](https://github.com/splitbee/react-notion) and [next.js](https://nextjs.org).

## Features

**Sort articles** and the rest is create your own feature, make your site/blog unique.

## react-notion

[react-notion](https://github.com/splitbee/react-notion) act as renderer for blog page/article page/page or whatever you call it.

for the API itself, this app using API directly from Splitbee, or you can deploy your own, instruction read more at [notion-api-worker](https://github.com/splitbee/notion-api-worker) 

## Deployment

Remember, there are some ENV variable to be set:

- NOTION_API_WRAPPER (optional)
- NOTION_BLOG_ID (required)

Deploy wherever you want, Vercel, Netlify, or any other provider, even with your own server. Please take a note, this code is not ready for production, you need to customize the content inside, boilerplate.

## How to get NOTION_BLOG_ID

([Template for the database](https://www.notion.so/554ce8d3874f49a89354b90a21a147b2?v=cb6b4cbbd4544435a19dd6c07994eba0))

Just share your notion post, and there is url like this

```
https://www.notion.so/554ce8d3874f49a89354b90a21a147b2?v=cb6b4cbbd4544435a19dd6c07994eba0
```

Then your id is: `554ce8d3874f49a89354b90a21a147b2`
