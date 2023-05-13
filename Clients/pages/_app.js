import '@/styles/globals.css'
import Head from 'next/head'
import {Roboto} from '@next/font/google'
const roboto =Roboto({
  subsets:[],
  weight:['700']
})
export default function App({ Component, pageProps }) {
  return(
  <main className={roboto.className}>
  <Head>
  <link rel='shortcut icon' href='https://www.logo-th.com/wp-content/uploads/2019/05/%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81-300x300.jpg' />
    <title>Bangchak Corporation Thailand</title>
  </Head>
  <Component  {...pageProps} />
  </main>
  )
}
