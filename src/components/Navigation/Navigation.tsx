import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <nav className={styles.nav}>
      <div className={styles.navblock}>
        <a href="#about-us" className={styles.navLink} >{t("header.about_us")}</a>
      </div>
    </nav>
  );
};

export default Navigation;
