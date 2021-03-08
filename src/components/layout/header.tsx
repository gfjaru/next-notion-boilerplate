import Head from 'next/head'

export default function Header({titlePre = ''}) {
  return (
    <>
      <Head>
        <title>{titlePre ? `${titlePre} | ` : ''} is this a title?</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
    </>
  )
}
