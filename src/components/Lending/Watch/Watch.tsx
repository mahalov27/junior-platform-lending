import { useState, useRef, useEffect } from "react";
import styles from "./Watch.module.scss";

const Watch: React.FC = () => {
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");

  const intervalRef = useRef<NodeJS.Timeout | undefined>();

  const formatting = (num: number) => {
    return num.toString().length > 1 ? num.toString() : `0${num.toString()}`;
  }

  const timer = () => {
    const coountdownDate = new Date("October 31, 2023 00:00:00").getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = coountdownDate - now;

      const daysCount = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursCount = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesCount = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        clearInterval(intervalRef.current);
      } else {
        setDays(formatting(daysCount));
        setHours(formatting(hoursCount));
        setMinutes(formatting(minutesCount));
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
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
