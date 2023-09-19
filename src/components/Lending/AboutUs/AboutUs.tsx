import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const [widthVw, setWidth] = useState<number | null>(null)
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const flashRef = useRef(null);
  const flashTrigetRef = useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    if(window.innerWidth > 820) {
      
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
            <h1 className={styles.aboutUsTitle}>Про нас</h1>
          </div>
          <div className={styles.aboutUsContentText}>
            <div className={styles.aboutUsContentTextWrapper}>
              <p className={styles.aboutUsText}>
                Ми - інноваційна <span>платформа</span>, яка спеціально
                розроблена для джунів та молодих професіоналів.
              </p>
              <p className={styles.aboutUsText}>
                Наша мета - надати вам зручну платформу для
                пошуку <span>команди</span> і набуття цінного{" "}
                <span>досвіду роботи</span>.
              </p>
              <p className={styles.aboutUsText}>
                Ми віримо, що кожен джун має <span>потенціал</span> і мріє
                розкритися у своїй професійній кар'єрі. Тому ми створили цей
                продукт, щоб допомогти вам знайти свою <span>команду</span>,
                отримати цінний досвід роботи та реалізувати свої{" "}
                <span>ідеї</span>.
              </p>
              <p className={styles.aboutUsText}>
                Приєднуйтесь до <span>нас</span> і давайте разом зробимо{" "}
                <span>крок у майбутнє</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
