import snow from "../../assets/svg/snow.png";
import styles from "./Snowfall.module.scss";

const Snowfall = () => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 100 }).map((_, index: number) => {
        return (
          <div
            key={index}
            className={styles.snow}
            style={{ backgroundImage: `url(${snow})` }}
          ></div>
        );
      })}
    </div>
  );
};

export default Snowfall;
