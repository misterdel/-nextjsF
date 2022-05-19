
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'


export default function NavBar(){
    return (
            <ul className={styles.navbar}>
                 <li>
                <Link href="/">
                <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/produts">
                <a>Produtos</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                <a>About</a>
                </Link>
              </li>
            </ul>
      )
}