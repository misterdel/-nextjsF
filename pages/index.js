import styles from '../styles/Home.module.css'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();
  return (
    <>
<Head>
  <title>Página Principal</title>
  <meta name="keyworkds" content='Roupas, calçados'></meta>
  <meta name='description' content='encontre as melhores roupas dos mercado'></meta>
</Head>

    <div >

       <h1 className={styles.title}>Hello Welcome to dev</h1>
    <Image src="/images/city.jpg" width="1000px" height="500px" alt='cidade a noite' />
    </div>
    </>
  )
}

/**
 * props guarda os dados para caso nao queres que quando o site cai, percas os dados na tela ou seja, elas sejam apresentados na mesma
 * isso pork ela é carregado e guardado logo no deploy da aplicação
 * @returns 
 */
export function getStaticProps(){
  
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();
  return {
    props: {
      staticDateString
    }
  }
}


function Contador(){
  const [contador, setContador] = useState(1);
  function adicionarContador(){
      setContador(contador +1);
  
  }
  
      return(
          <div>
              <div>{contador}</div>
              <button onClick={adicionarContador}>Adicionar</button>
          </div>
      )
  }