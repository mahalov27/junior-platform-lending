import { useState, useRef, useEffect } from "react";
import flag from "../../../assets/png/flag.png"
import styles from "./Watch.module.scss";

const Watch: React.FC = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  const intervalRef = useRef<number | undefined>();

  const timer = () => {
    const coountdownDate = new Date("September 30, 2023 00:00:00").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = coountdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        clearInterval(intervalRef.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
      }
    }, 1000);
  };

  useEffect(() => {
    timer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div style={{backgroundImage: `url(${flag})`}} className={styles.flagRight}></div>
      </div>
      <h1 className={styles.title}>
        Чекати залишилось <span>лише:</span>
      </h1>
      <div className={styles.watch}>
        <div className={styles.watchItem}>
          <div className={styles.clock}>
            <p>{days}</p>
          </div>
          <p className={styles.clockTitle}>ДНІВ</p>
        </div>
        <div className={styles.dots}></div>
        <div className={styles.watchItem}>
          <div className={styles.clock}>
            <p>{hours}</p>
          </div>
          <p className={styles.clockTitle}>ГОДИН</p>
        </div>
        <div className={styles.dots}></div>
        <div className={styles.watchItem}>
          <div className={styles.clock}>
            <p>{minutes}</p>
          </div>
          <p className={styles.clockTitle}>ХВИЛИН</p>
        </div>
      </div>
    </div>
  );
};

export default Watch;
