import feed from "./TapeFeed.json";
import styles from './Tape.module.scss';

const Tape = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container} >
        <div className={styles.scrollSection} >
            {
              feed.map(item => {
                return (
                  <h1 key={item.id} className={styles.title}>{item.titleStart} <span>{item.titleEnd}</span></h1>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Tape
