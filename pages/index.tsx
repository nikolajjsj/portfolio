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
        className={styles.animation}
        style={{ background: 'var(--color-secondary)', height: '100px', width: '100px' }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['5%', '20%', '50%', '50%', '5%'],
          border: ['2px', '1px', '1px', '1px', '1px']
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      ></motion.div>
    </div>
  )
}
