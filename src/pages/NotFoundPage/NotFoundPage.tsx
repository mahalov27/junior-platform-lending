import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Сторінка незнайдена :(</h1>
        <p className={styles.text}>Поверніться до головної <Link to="/" className={styles.link}>сторінки</Link></p>
    </div>
  )
}

export default NotFoundPage
