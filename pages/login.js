import LoginForm from 'component/login/LoginForm'
import Head from 'next/head'

export default function login() {
  return (
<>
      <Head>
        <title>Store Register Form</title>
        <meta name="description" content="white friday registration form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginForm />

</>
  )
}
