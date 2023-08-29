import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../../assets/Icons';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
        <p className={styles.title}>Розробка DigitalMindsUA. 2023</p>
        <div className={styles.linkNetwork}>
            <Link to="https://www.linkedin.com/company/digitalmindsua/"  target="_blank"><LinkedInIcon/></Link>
        </div>
    </div>
  )
}

export default Footer
