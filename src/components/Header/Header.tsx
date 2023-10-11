import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        <div><Link to="/" className={styles.logo}></Link></div>
        <Navigation />
      </div>
    </div>
  );
};
export default Header;

