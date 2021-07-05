import RegistrationForm from '../components/RegistrationForm';
import styles from './viewsCSS/RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.page}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
