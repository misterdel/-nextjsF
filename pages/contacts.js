import Head from 'next/head'
import Link from 'next/link'

export default function Contacts() {
  return (
    <>
<Head>
  <title>Página de Contatos</title>
</Head>

<h1>Página de contatos</h1>
<Link href="/">
    <a>Voltar</a>
</Link>

    </>
  )
}

