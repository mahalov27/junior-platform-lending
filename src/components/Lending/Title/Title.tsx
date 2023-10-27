import { DubleArrowIcon } from "../../../assets/Icons";
import { useTranslation } from "react-i18next";  
import styles from "./Title.module.scss";

const Title = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleContent}>
        <h1 className={styles.mainTitle}>
          {t('title.title')}
        </h1>
        <p className={styles.mainDescription}>
          {t("title.description")}
        </p>
        <button className={styles.linkBtn}>
          <a href="#form" className={styles.link}>
            {t("title.btn")}
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
