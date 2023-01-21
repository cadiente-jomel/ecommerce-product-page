import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicon-32x32.png"></link> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
