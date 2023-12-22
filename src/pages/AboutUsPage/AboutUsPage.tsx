import Title from '../../components/Lending/Title/Title';
import AboutUs from '../../components/Lending/AboutUs/AboutUs';
import ForWho from '../../components/Lending/ForWho/ForWho';
import Functional from '../../components/Lending/Functional/Functional';
import Tape from '../../components/Lending/Tape/Tape';
import Form from '../../components/Lending/Form/Form';
import Watch from '../../components/Lending/Watch/Watch';
import styles from './AboutUsPage.module.scss';
import Snowfall from '../../components/Snowfall/Snowfall';

const AboutUsPage = () => {

  return (
    <div className={styles.container}>
      <Snowfall />
      <Title/>
      <AboutUs />
      <ForWho />
      <Functional/>
      <Tape/>
      <Form />
      <Watch/>
    </div>
  )
}

export default AboutUsPage
