import { useTranslation } from "react-i18next";
import styles from './ForWho.module.scss';

const ForWho = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.container}>
        <section className={styles.wrapper}>
        <h1 className={styles.title}>{t("for_who.title")}</h1>
        <div className={styles.content}>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle}>{t("for_who.content.title_first")}</h5>
                <p className={styles.itemText}>{t("for_who.content.description_first")}</p>
            </div>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle + " " + styles.black}>{t("for_who.content.title_second")}</h5>
                <p className={styles.itemText  + " " + styles.black}>{t("for_who.content.description_second")}</p>
            </div>
            <div className={styles.contentItem}>
                <h5 className={styles.itemTitle}>{t("for_who.content.title_last")}</h5>
                <p className={styles.itemText}>{t("for_who.content.description_last")}</p>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ForWho
