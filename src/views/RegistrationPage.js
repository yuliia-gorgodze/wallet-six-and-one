import { useMediaQuery } from 'react-responsive';
import RegistrationForm from '../components/RegistrationForm';
import heroImg from '../assets/images/hero-signup.png';
import heroSmallImg from '../assets/images/small-hero-signup.png';
import styles from './viewsCSS/AuthPages.module.css';

export default function RegistrationPage() {
  const matches = useMediaQuery({ maxWidth: 1279 });

  return (
    <section className={styles.sectoin}>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          {matches ? (
            <img
              src={heroSmallImg}
              alt="finance man"
              width="261px"
              height="250px"
            />
          ) : (
            <img src={heroImg} alt="finance man" width="436px" />
          )}

          <h1 className={styles.title}>Finance App</h1>
        </div>
        <div className={styles.formContainer}>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}
