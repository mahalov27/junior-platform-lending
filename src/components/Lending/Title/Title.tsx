import { DubleArrowIcon } from "../../../assets/Icons";
import flag from "../../../assets/png/flag.png"
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.backgroundContainer}>
           <div style={{backgroundImage: `url(${flag})`}} className={styles.flagLeft}></div>
           <div style={{backgroundImage: `url(${flag})`}} className={styles.flagRight}></div>
      </div>
      <div className={styles.titleContent}>
        <h1 className={styles.mainTitle}>
          Допоможемо знайти роботу в команді у один клік
        </h1>
        <h5 className={styles.mainDescription}>
          Знайди свій ідеальний пет-проєкт або команду для реалізації власної
          ідеї
        </h5>
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
