import { useMediaQuery } from 'react-responsive';
import LoginForm from '../components/LoginForm';
import heroImg from '../assets/images/hero.png';
import heroSmallImg from '../assets/images/small-hero.png';
import styles from './viewsCSS/AuthPages.module.css';

export default function LoginPage() {
  const matches = useMediaQuery({ maxWidth: 1279 });

  return (
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
        <LoginForm />
      </div>
    </div>
  );
}
