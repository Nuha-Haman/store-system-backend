import Head from 'next/head'
import Stores from 'component/storeList/Stores'

export default function registeredStores() {
  return (
    <>
      <Head>
        <title>Store List </title>
        <meta name="description" content="white friday registration form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Stores />

    </>
  )
}
