import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import flag from "../../../assets/png/flag.png";
import styles from './Functional.module.scss';

const Functional = () => {
  const [widthVw, setWidth] = useState<number | null>(null)
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {

      !widthVw && setWidth(window.innerWidth)

      if( widthVw !== null && widthVw > 744) {

        const pin = gsap.fromTo(
          sectionRef.current,
          {
            translateX: 0,
          },
          {
            translateX: widthVw !== null && widthVw <= 1440 ? "-175vw" : "-140vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "lop top",
              end: "1800 top",
              scrub: 0.6,
              pin: true,
            },
          }
        );
        return () => {
          pin.kill();
        };
      }else{
        return
      }

    }, [widthVw]);

    window.addEventListener('resize', () => setWidth(window.innerWidth))

  return (
    <section className={styles.section}>
        <div className={styles.container} ref={triggerRef}>
        <div className={styles.background}>
           <div style={{backgroundImage: `url(${flag})`}} className={styles.flagLeft}></div>
        </div>
            <div className={styles.scrollSections} ref={sectionRef}>
                <h1 className={styles.title}>Що вас очікує на платформі?</h1>
                <div className={styles.content}>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>Проєкти із готовим описом</h5>
                        <p className={styles.itemText}>Ми створили для вас кілька шаблоних пет-проєктів на вибір, щоб команда швидше почала роботу і не гаяла час на довгі обговорення.  А для полегшення процесу ми додали опис із завданнями для всіх учасників</p>
                    </div>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>Можливість створити власний проєкт</h5>
                        <p className={styles.itemText}>На нашій платформі ви зможете реалізувати власні ідеї, зібрати команду та спробувати себе у ролі продакт овнера, рекрутера та багатьох інших </p>
                    </div>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>Додатковий функціонал</h5>
                        <p className={styles.itemText}>Він значно спростить роботу над вашим проєктом, а який саме – розповімо трохи згодом…</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Functional;
