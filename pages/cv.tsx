import { motion } from 'framer-motion'

import TitleWithBorder from '../components/TitleWithBorder'
import Skillpill from '../components/Skillpill'
import styles from '../styles/cv.module.css'
import Timeline from '../components/timeline/Timeline'
import ProjectCard from '../components/cards/ProjectCard'

export default function cv() {
  return (
    <motion.div
      className={styles.cv}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 2,
      }}
    >
      <div className={styles.header}>
        <div className={styles.header__main}>
          <img className={styles.headshot} src="/headshot.jpg" alt="Profile picture" />
          <div>
            <h3 className={styles.name}>Nikolaj Jensen</h3>
            <p className={styles.description}>Software Developer</p>
          </div>
        </div>

        <div className={styles.header__footer}>
          <div className={styles.header__footer__details}>
            <svg
              className={styles.header__footer__details__svg}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
            nikolajjsj.com
          </div>
          <div className={styles.header__footer__details}>
            <svg
              className={styles.header__footer__details__svg}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Aarhus, Denmark
          </div>
          <div className={styles.header__footer__details}>
            <svg
              className={styles.header__footer__details__svg}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            nikolajjsj@gmail.com
          </div>
        </div>
      </div>

      <div className={styles.cv__description}>
        <div className={styles.cv__description__column}>
          <TitleWithBorder title="Skills" />
          <Skillpill
            image="https://cdn.svgporn.com/logos/flutter.svg"
            text="Flutter"
          />
          <Skillpill image="https://cdn.svgporn.com/logos/vue.svg" text="Vue" />
          <Skillpill
            image="https://cdn.svgporn.com/logos/react.svg"
            text="React"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/nuxt-icon.svg"
            text="Nuxt.js"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/nextjs-icon.svg"
            text="Next.js"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/dart.svg"
            text="Dart"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/javascript.svg"
            text="Javascript"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/typescript-icon.svg"
            text="Typescript"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/python.svg"
            text="Python"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/nodejs-icon.svg"
            text="Node.js"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
            text="Tailwind"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/webpack.svg"
            text="Webpack"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/git-icon.svg"
            text="Git"
          />
          <Skillpill image="https://cdn.svgporn.com/logos/aws.svg" text="AWS" />
          <Skillpill
            image="https://cdn.svgporn.com/logos/linux-tux.svg"
            text="Linux"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/bash-icon.svg"
            text="Bash scripts"
          />
          <Skillpill
            image="https://cdn.svgporn.com/logos/figma.svg"
            text="Figma"
          />
        </div>
        <div className={styles.cv__description__column}>
          <TitleWithBorder title="Profile" />
          I'm a self-motivated fast learner, with a a passion for programming
          and problem solving. This ensures continous improvement of the
          solutions I am doing.
          <br />
          <br />
          I'm always eager to learn more and happy to share what I've learnt or
          experienced. I've published several mobile Apps for both Android and
          iOS.
          <br />
          <br />
          I'm currently situated in Aarhus, where I enjoy my freetime reading a
          good book, going on a long walk, or tasting different types of whisky.
        </div>
      </div>

      <div className={styles.cv__section}>
        <TitleWithBorder title="Experience" />

        <Timeline />
      </div>

      <div className={styles.cv__section}>
        <TitleWithBorder title="Projects" />
        <div className={styles.projects}>
          <ProjectCard
            image="/projects/sialia.png"
            title="Sialia for Twitter"
            details="Unofficial Twitter app"
            applelink="https://apps.apple.com/us/app/sialia/id1539385837"
            googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.osprey"
          />
          <ProjectCard
            image="/projects/chess-timer.jpg"
            title="Chess timer"
            details="Simple chess timer"
            applelink="https://apps.apple.com/us/app/chess-clock-timer/id1546595452"
            googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.chessclock"
          />
          <ProjectCard
            image="/projects/sygepleje.png"
            title="Sygeplejersken"
            details="Various usefull tools for health workers"
            applelink="https://apps.apple.com/us/app/sygeplejersken/id1487942456"
            googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.sygeplejerskentool"
          />
          <ProjectCard
            image="/projects/pexels.png"
            title="Pexels"
            details="Wallpaper app using the Pexels API"
            applelink="https://apps.apple.com/us/app/wallpapers-from-pexels/id1505969872"
            googlelink="https://play.google.com/store/apps/details?id=com.nikolajjsj.pexelwalls"
          />
          <ProjectCard
            image="/projects/sorting.png"
            title="Sorting visualizer"
            details="Visualizes various sorting algorhitms"
            weblink="https://nikolajjsj.github.io/Sorting-Visualization/"
          />
          <ProjectCard
            image="/projects/pathfinder.png"
            title="Pathfinder"
            details="Visualizes various pathfinding algorhitms"
            weblink="https://nikolajjsj.github.io/Pathfinder/"
          />
        </div>
      </div>

      <p className={styles.cv__footer}>
        © 2021 nikolajjsj.com - All rights reserved
      </p>
    </motion.div>
  )
}
