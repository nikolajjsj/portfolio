import Image from 'next/image'
import PropTypes, { InferProps } from 'prop-types'
import styles from '../../styles/TimelineBlock.module.css'

export default function TimelineBlock({
  description,
  skills,
  time,
  position,
  company,
  image,
}: InferProps<typeof TimelineBlock.propTypes>) {

  return (
    <div className={styles.block}>
      <div className={styles.timeline__img}>
        <Image
          src={image}
          height="50"
          width="50"
          alt="company logo"
        />
      </div>

      <div className={styles.block__content}>
        <h2>{ company }</h2>
        <div className={styles.content__info}>
          <span className={styles.title}>
            { position }
          </span>
          <span className={styles.date}>
            { time }
          </span>
        </div>
        <p>{ description }</p>
        <ul className={styles.content__skills}>
          {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </div>
  )
}

TimelineBlock.propTypes = {
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}
