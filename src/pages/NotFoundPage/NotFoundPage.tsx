// import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>error</h1>
        <div className={styles.content}>

             <div className={styles.errCodeOne}></div>

             <div className={styles.errCodeTwo}></div>
   
          <p className={styles.text}>сторінка не знайдена</p>
        </div>
        <button className={styles.linkBtn}>
          <a href="/" className={styles.link}>
          На головну
          </a>
        </button>
    </div>
  )
}

export default NotFoundPage
