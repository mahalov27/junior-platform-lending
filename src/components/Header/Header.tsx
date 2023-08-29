import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        <div className={styles.logo}><Link to="/">Logo</Link></div>
        <Navigation />
      </div>
    </div>
  );
};
export default Header;

