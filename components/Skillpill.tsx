import PropTypes, { InferProps } from 'prop-types'
import styles from '../styles/Skillpill.module.css'

export default function Skillpill({
  text,
  image,
}: InferProps<typeof Skillpill.propTypes>) {
  return (
    <span className={styles.skillpill}>
      <img className={styles.skillpill__image} src={image} />
      {text}
    </span>
  )
}

Skillpill.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
