import Image from 'next/image'
import PropTypes, { InferProps } from 'prop-types'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  title,
  details,
  googlelink,
  applelink,
  weblink,
  image,
}: InferProps<typeof ProjectCard.propTypes>) {
  return (
    <div className={styles.projectcard}>
      <Image
        className={styles.projectcard__image}
        height="125"
        width="370"
        src={image}
        alt="Image of project"
      />
      <div className={styles.projectcard__content}>
        <h3 className={styles.content__title}>{title}</h3>

        <p className={styles.content__details}>{details}</p>

        {weblink && (
          <div className={styles.content__links}>
            <a href={weblink} target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.links__logo}
                height="30"
                width="30"
                src="/svg/chrome.svg"
                alt="Chrome browser logo"
              />
            </a>
          </div>
        )}

        {applelink && googlelink && (
          <div className={styles.content__links}>
            <a href={googlelink} target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.links__logo}
                height="30"
                width="30"
                src="/svg/google-play-icon.svg"
                alt="Google Play icon"
              />
            </a>
            <a href={applelink} target="_blank" rel="noopener noreferrer">
              <Image
                className={styles.links__logo}
                height="30"
                width="30"
                src="/svg/apple-app-store.svg"
                alt="Apple icon"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  googlelink: PropTypes.string,
  applelink: PropTypes.string,
  weblink: PropTypes.string,
  image: PropTypes.string.isRequired,
}
