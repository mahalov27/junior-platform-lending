import styles from './Toggler.module.scss';
import { useTranslation } from "react-i18next";


const Toggler = () => {
    const { i18n } = useTranslation()

  return (
    <div className={styles.container}>
      <button className={styles.btnUa + " " + (i18n.language === "uk" && styles.active)} onClick={() => {i18n.changeLanguage("uk")}}>ua</button>
      <button className={styles.btnEn + " " + (i18n.language === "en" && styles.active)} onClick={() => {i18n.changeLanguage("en")}}>en</button>
    </div>
  )
}

export default Toggler
