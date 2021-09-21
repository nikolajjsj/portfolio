import React from 'react'
import TimelineBlock from './TimelineBlock'
import styles from '../../styles/Timeline.module.css'

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <TimelineBlock
        company="Skipit"
        positionType="Freelance"
        description="Flutter development on Skipit's first time user flow"
        skills={['Flutter', 'Dart', 'Flutter_bloc', 'iOS', 'Android']}
        time="Aug 2021 - Sep 2021 ~ 2 month"
        position="Flutter Developer"
        image="/work/skipit-icon.jpeg"
      />

      <TimelineBlock
        company="Novicell"
        positionType="Fulltime"
        description="Web development working with Vue, Angular, and React."
        skills={['Vue', 'Angular', 'React', 'JavaScript', 'C#', '.NET']}
        time="Apr 2021 - now"
        position="Web Developer"
        image="/work/novicell-icon.jpeg"
      />

      <TimelineBlock
        company="Raven Biosciences"
        positionType="Freelance"
        description="Web app for testing PCR pipelines."
        skills={['Vue', 'Python', 'WebAssembly', 'JavaScript']}
        time="Feb 2021 - Mar 2021 ~ 2 months"
        position="Web Developer"
        image="/work/raven-icon.png"
      />

      <TimelineBlock
        position="Flutter Developer"
        company="LifeBonder"
        positionType="Freelance"
        description="Worked with Flutter, primarly on the onboarding flow."
        skills={['Flutter', 'Dart', 'Android', 'iOS']}
        time="Aug 2020 - Sep 2020 ~ 2 months"
        image="/work/lifebonder-icon.png"
      />
    </section>
  )
}
