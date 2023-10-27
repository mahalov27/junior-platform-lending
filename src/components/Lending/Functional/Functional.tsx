import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import styles from './Functional.module.scss';

const Functional = () => {
    const [widthVw, setWidth] = useState<number | null>(null)
    const { t } = useTranslation()
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
            <div className={styles.scrollSections} ref={sectionRef}>
                <h1 className={styles.title}>{t("func.title")}</h1>
                <div className={styles.content}>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>{t("func.content.title_first")}</h5>
                        <p className={styles.itemText}>{t("func.content.description_first")}</p>
                    </div>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>{t("func.content.title_second")}</h5>
                        <p className={styles.itemText}>{t("func.content.description_second")}</p>
                    </div>
                    <div className={styles.contentItem}>
                        <h5 className={styles.itemTitle}>{t("func.content.title_last")}</h5>
                        <p className={styles.itemText}>{t("func.content.description_last")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Functional;
