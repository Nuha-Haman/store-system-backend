import Head from 'next/head'
import StoreRegisterForm from 'component/store/StoreRegisterForm'

export default function store() {
  return (
    <>
      <Head>
        <title>Store Register Form</title>
        <meta name="description" content="white friday registration form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       
        <StoreRegisterForm />

    </>
  )
}
