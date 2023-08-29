import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import feed from "./TapeFeed.json";
import flag from "../../../assets/png/flag.png";
import styles from './Tape.module.scss';


const Tape = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
  
    gsap.registerPlugin(ScrollTrigger);
  
    useEffect(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-5000vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "lop bottom",
            end: "150000 bottom",
            scrub: 0.6,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }, []);
  return (
    <section className={styles.section}>
        <div className={styles.container} ref={triggerRef}>
        <div className={styles.background}>
           <div style={{backgroundImage: `url(${flag})`}} className={styles.flagLeft}></div>
        </div>
            <div className={styles.scrollSection} ref={sectionRef}>
                <div className={styles.content}>
        {
            feed.map(item => {
                return (
                <p key={item.id} className={styles.title}>{item.titleStart} <span>{item.titleEnd}</span></p>
                )
            })
        }

                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Tape
