import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        <div><Link to="/" className={styles.logo}></Link></div>
        {pathname === "/" && <Navigation />}
      </div>
    </div>
  );
};
export default Header;

