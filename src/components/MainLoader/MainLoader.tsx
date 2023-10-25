import styles from './MainLoader.module.scss'

const MainLoader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  )
}

export default MainLoader
