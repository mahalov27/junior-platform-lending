import styles from './ForWho.module.scss';

const ForWho = () => {
  return (
    <div className={styles.container}>
        <section className={styles.wrapper}>
        <h1 className={styles.title}>Для кого це може бути цікаво?</h1>
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle}>Не маєш досвіду</h5>
                <p className={styles.itemText}>Наша платформа допоможе тобі набути практичний досвід, розвинути комунікативні навички та стати більш конкурентоспроможним.</p>
            </div>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle + " " + styles.black}>Хочеш втілити свої ідеї в життя</h5>
                <p className={styles.itemText  + " " + styles.black}>Створи власний проєкт та знаходь команду однодумців. Це може бути звичайний пет-проєкт, або ж стартап.</p>
            </div>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle}>Можеш поділитися досвідом</h5>
                <p className={styles.itemText}>Маєш бажання стати ментором та допомогти новачкам у найскрутніші моменти (дати консультацію чи просто пораду).</p>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ForWho
