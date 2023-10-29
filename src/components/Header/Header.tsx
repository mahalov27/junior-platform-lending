import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Toggler from "../Toggler/Toggler";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperNav}>
        <Link to="/" className={styles.logo}></Link>
        {pathname === "/" && <Navigation />}
        <Toggler/>
      </div>
    </div>
  );
};
export default Header;

