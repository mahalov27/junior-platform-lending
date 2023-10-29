import { useState, useEffect } from "react";
import listenerScroll from "./listenerScroll";
import toUpPage from "./toUpPage";
import { ToUpIcon } from "../../assets/Icons";
import styles from "./ArrowToUp.module.scss";

const ArrowToUp = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setActive(listenerScroll(700)));
  }, [active]);

  return (
    <>
      <div
        className={styles.navUp + " " + (active && styles.arrowUp)}
        onClick={toUpPage}
      >
        <ToUpIcon style={{fill: "#1E9F7180", width: "20px", height: "20px"}} />
      </div>
    </>
  );
};

export default ArrowToUp;