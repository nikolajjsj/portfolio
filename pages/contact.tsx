import styles from '../styles/contact.module.css'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function contact() {
  return (
    <>
      <Head>
        <title>Nikolaj Jensen</title>
        <meta
          name="description"
          content="Developer portfolio of Nikolaj Jensen"
        />
      </Head>
      <div className={styles.contact}>
        <div className={styles.icons}>
        </div>
        <div className={styles.information}>
          <h1 className={styles.information__name}>
            Nikolaj Johannes Skole Jensen
          </h1>
          <h2 className={styles.information__subtitle}>Personal</h2>
          <h3 className={styles.information__mail}>nikolajjsj@gmail.com</h3>
        </div>
      </div>
    </>
  )
}
