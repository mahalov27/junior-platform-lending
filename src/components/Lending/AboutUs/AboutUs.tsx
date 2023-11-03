import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const [widthVw, setWidth] = useState<number | null>(null)
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const flashRef = useRef(null);
  const flashTrigetRef = useRef(null);
  const {t} = useTranslation()
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    if(window.innerWidth > 1024) {
      
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-100vw",
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

  useEffect(() => {
      const pin = gsap.fromTo(
          flashRef.current,
        {
          top: "100px",
          opacity: 1,
          borderRadius: "0px",
        },
        {
          top: "0px",
          opacity: 0,
          borderRadius: "100px",
          width: "97.5vw",
          left: "1vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: flashTrigetRef.current,
            start: "lop top",
            end: "800 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
  }, []);

  window.addEventListener('resize', () => setWidth(window.innerWidth))
  
  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.aboutUsContainer} ref={triggerRef}>
        <div className={styles.flash} ref={flashRef}></div>
        <div className={styles.horizontal} ref={sectionRef}>
          <div className={styles.aboutUsContent}>
            <h1 className={styles.aboutUsTitle}>{t("about_us.title")}</h1>
          </div>
          <div className={styles.aboutUsContentText}>
            <div className={styles.aboutUsContentTextWrapper}>
              <p className={styles.aboutUsText}>
                {parse(t("about_us.content.p_first"))}
              </p>
              <p className={styles.aboutUsText}>
                {parse(t("about_us.content.p_second"))}
              </p>
              <p className={styles.aboutUsText}>
              {parse(t("about_us.content.p_third"))}
              </p>
              <p className={styles.aboutUsText}>
              {parse(t("about_us.content.p_last"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
