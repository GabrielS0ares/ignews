import Head from 'next/head'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

import styles  from '../styles/home.module.scss'

export default function Home() {

  return (
    <>
      <main>
        <h1 className={styles.title}>Hello <span>World</span></h1>
      </main>
    </>
  )
}
