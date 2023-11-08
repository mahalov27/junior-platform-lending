import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>error</h1>
      <div className={styles.content}>
        <div className={styles.errCodeOne}></div>

        <div className={styles.errCodeTwo}></div>

        <p className={styles.text}> {t("404.title")}</p>
      </div>
      <button className={styles.linkBtn}>
        <Link to="/" className={styles.link}>
          {t("404.btn")}
        </Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
