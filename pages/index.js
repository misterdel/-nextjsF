import styles from '../styles/Home.module.css'

export default function Home(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();
  return (
    <div >
       <h1 className={styles.title}>Hello Word Next.js branch de produção </h1>
       <div>  {dynamicDateString} (dinâmico) </div>
       <div>  {props.staticDateString} (estatico) </div>

    </div>
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