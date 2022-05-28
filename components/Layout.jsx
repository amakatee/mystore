import React from 'react'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <>
    <Head>
    <title>Украшения из серебра - Иней</title>
    <meta name="description" content="Украшения из серебра , одежда и обувь 2022"/>

    <meta name="yandex-verification" content="16605cd7b1f8ebe2" />
    </Head>
   
        <main >
            {children}

        </main>
        <footer>
    
        </footer>

    </>
  )
}

export default Layout