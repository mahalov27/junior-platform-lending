import { DubleArrowIcon } from "../../../assets/Icons";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleContent}>
        <h1 className={styles.mainTitle}>
          Допоможемо знайти роботу в команді у один клік
        </h1>
        <p className={styles.mainDescription}>
          Знайди свій ідеальний пет-проєкт або команду для реалізації власної
          ідеї
        </p>
        <button className={styles.linkBtn}>
          <a href="#form" className={styles.link}>
            Залишити контактні дані
          </a>
        </button>
      </div>
      <div className={styles.arrow}>
        <DubleArrowIcon className={styles.arrow} />
      </div>
    </div>
  );
};

export default Title;
