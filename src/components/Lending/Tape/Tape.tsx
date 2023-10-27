import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import styles from './Tape.module.scss';

const Tape = () => {
  const { t } = useTranslation();
  const tapeLength = [1, 2, 3, 4];
  return (
    <section className={styles.section}>
      <div className={styles.container} >
        <div className={styles.scrollSection} >
            {
              tapeLength.map(item => {
                return (
                  <h1 key={item} className={styles.title}>{parse(t("tape.p"))}</h1>
                )
              })
            }
        </div>
      </div>
    </section>
  )
}

export default Tape
