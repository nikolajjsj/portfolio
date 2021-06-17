import PropTypes, { InferProps } from 'prop-types'
import styles from '../styles/TitleWithBorder.module.css'

export default function TitleWithBorder({
  title,
}: InferProps<typeof TitleWithBorder.propTypes>) {
  return (
    <div className={styles.heading}>
      <h4 className={styles.heading__title}>{ title }</h4>
      <div className={styles.heading__border} />
    </div>
  )
}

TitleWithBorder.propTypes = {
  title: PropTypes.string.isRequired,
}
