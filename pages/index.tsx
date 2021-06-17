import Head from 'next/head'
import styles from '../styles/Index.module.css'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Nikolaj Jensen</title>
        <meta
          name="description"
          content="Developer portfolio of Nikolaj Jensen"
        />
      </Head>

      <section className={styles.resume}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            duration: 2,
          }}
        >
          Software
        </motion.h1>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            delay: 0.5,
            duration: 2,
          }}
        >
          Developer
        </motion.h1>

        <p className={styles.paragraph}>
          Experienced Developer proficient in Dart, JavaScript, and Python. I've
          mainly worked on frontend development for both web and mobile. Mobile
          development has been with either Flutter or some native Android
          development. Whereas web development have been done with Vue and
          React.
        </p>

        <p className={styles.paragraph}>
          I also have a education as a biologist, where my speciality is within
          Zoophysiology. This includes laboratory work with several mammals,
          reptiles, amphibians, and insects. This work has led to a published
          peer-reviewed article, on insect cold physiology. Dataanalysis has
          been performed with Python, MatLab, and R.
        </p>

        <motion.button
          onClick={() => (location.href = 'mailto:nikolajjsj@gmail.com')}
          className="btn"
          whileHover={{ borderRadius: '2px' }}
          whileTap={{ scale: 0.9 }}
        >
          Contact
        </motion.button>
      </section>

      <motion.div
        style={{ background: 'var(--color-secondary)', height: '100px', width: '100px' }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['5%', '20%', '50%', '50%', '5%'],
          border: ['2px', '1px', '1px', '1px', '1px']
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      ></motion.div>

      {/* <motion.svg
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          duration: 2,
          delay: 1,
        }}
        width="245"
        height="245"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z"
        />
      </motion.svg> */}
    </div>
  )
}
