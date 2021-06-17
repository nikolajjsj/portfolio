import React from 'react'
import TimelineBlock from './TimelineBlock'
import styles from '../../styles/Timeline.module.css'

export default function Timeline() {
  return (
    <section className={styles.timeline}>
      <TimelineBlock
        company="Novicell"
        description="Web development working with Vue, Angular, and React."
        skills={['Vue', 'Angular', 'React', 'JavaScript']}
        time="Apr 2021 - now"
        position="Web Developer"
        image="/work/novicell-icon.jpeg"
      />

      <TimelineBlock
        company="Raven Biosciences"
        description="Web app for testing PCR pipelines."
        skills={['Vue', 'Python', 'WebAssembly', 'JavaScript']}
        time="Feb 2021 - Mar 2021 ~ 2 months"
        position="Web Developer"
        image="/work/raven-icon.png"
      />

      <TimelineBlock
        position="Flutter Developer"
        company="LifeBonder"
        description="Worked with Flutter, primarly on the onboarding flow."
        skills={['Flutter', 'Dart', 'Android', 'iOS']}
        time="Aug 2020 - Sep 2020 ~ 2 months"
        image="/work/lifebonder-icon.png"
      />
    </section>
  )
}
