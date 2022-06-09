import styles from '../styles/Home.module.scss'
import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from './../components/Layout'
import {StateContext} from './../context/StateContext'



function MyApp({ Component, pageProps }: AppProps) {
  return <> 
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />

  </Head>
  <StateContext>
  <Layout>
    <Component {...pageProps} />
    </Layout>
    </StateContext>
    </>
}

export default MyApp
