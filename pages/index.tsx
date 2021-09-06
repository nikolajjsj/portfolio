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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 2 }}
        >
          👋 Hello, I'm
          Nikolaj Jensen
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

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
            target="_blank"
          >
            <img
              className={styles.socials__icon}
              src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
              alt="The LinkedIn logo"
              height="30"
              width="30"
            />
          </a>
          <a href="https://github.com/nikolajjsj" target="_blank">
            <img
              className={styles.socials__icon}
              src="https://cdn.svgporn.com/logos/github-icon.svg"
              alt="The GitHub logo"
              height="30"
              width="30"
            />
          </a>
          <a href="https://twitter.com/nikolaj_jsj" target="_blank">
            <img
              className={styles.socials__icon}
              src="https://cdn.svgporn.com/logos/twitter.svg"
              alt="The twitter logo"
              height="30"
              width="30"
            />
          </a>
        </div>
        <div className={styles.socials__email}>
          <img
            src="https://cdn.svgporn.com/logos/google-gmail.svg"
            alt="Gmail icon"
            height="30"
            width="30"
          />
          <span>
            nikolajjsj@gmail.com
          </span>
        </div>
      </section>
    </div>
  )
}
