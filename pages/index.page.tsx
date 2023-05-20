import Head from 'next/head'
import { HomeStyle } from '@/modules/home/style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Auth App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeStyle>
        <h1>this is the template page</h1>
      </HomeStyle>
    </>
  )
}