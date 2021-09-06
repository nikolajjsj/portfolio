import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.navbar__container}>

        <h1 className={styles.navbar__title}>
          <Link href="/">Nikolaj Jensen.</Link>
        </h1>

        <div className={styles.navbar__links}>
          <Link href="/cv"> CV </Link>
        </div>
      </div>
    </nav>
  )
}
