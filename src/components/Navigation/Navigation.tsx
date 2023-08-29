import styles from "./Navigation.module.scss"

const Navigation: React.FC = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.navblock}>
        <a href="#about-us" className={styles.navLink} >Про нас</a>
      </div>
    </nav>
  );
};

export default Navigation;
