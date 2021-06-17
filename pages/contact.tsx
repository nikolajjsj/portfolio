import styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/nikolaj-jensen-73810b137/"
          target="_blank"
        >
          <img
            className={styles.icons__image}
            src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
            alt="The LinkedIn logo"
          />
        </a>
        <a href="https://github.com/nikolajjsj" target="_blank">
          <img
            className={styles.icons__image}
            src="https://cdn.svgporn.com/logos/github-icon.svg"
            alt="The GitHub logo"
          />
        </a>
        <a href="https://twitter.com/nikolaj_jsj" target="_blank">
          <img
            className={styles.icons__image}
            src="https://cdn.svgporn.com/logos/twitter.svg"
            alt="The twitter logo"
          />
        </a>
      </div>
      <div className={styles.information}>
        <h1 className={styles.information__name}>
          Nikolaj Johannes Skole Jensen
        </h1>
        <h2 className={styles.information__subtitle}>Personal</h2>
        <h3 className={styles.information__mail}>nikolajjsj@gmail.com</h3>
      </div>
    </div>
  )
}
