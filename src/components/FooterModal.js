import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons';
import { getModalFooterState } from '../redux/global/global-selectors';
import { setModalFooterState } from '../redux/global/global-operations';
import styles from './componentsCSS/FooterModal.module.css';
import photo1 from '../assets/images/dewelopers-team/photo1.jpg';
import photo2 from '../assets/images/dewelopers-team/photo2.jpg';
import photo3 from '../assets/images/dewelopers-team/photo3.jpg';
import photo4 from '../assets/images/dewelopers-team/photo4.jpg';
import photo5 from '../assets/images/dewelopers-team/photo5.jpg';
import photo6 from '../assets/images/dewelopers-team/photo6.jpg';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    overflowY: 'scroll',
    padding: '35px 0',
  },
});

export default function ModalComponent({ children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeModal = e => {
    dispatch(setModalFooterState(false));
  };
  const isOpen = useSelector(getModalFooterState);

  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={styles.body}>
          <button
            onClick={closeModal}
            type="button"
            className={styles.clouseButton}
          ></button>
          <h2 className={styles.mainTitle}>Команда разработчиков</h2>
          <ul className={styles.container}>
            <li className={styles.item}>
              <img src={photo1} alt="developer1" className={styles.img} />
              <h3 className={styles.title}>Юлия Горгодзе</h3>
              <p className={styles.subtitle} lang="en">
                Team Lead <br />
                Front-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/yuliia-gorgozka-9b0451200/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://github.com/Yuliia-Gorgodze"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.instagram.com/mj_yuliya_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <img src={photo2} alt="developer2" className={styles.img} />
              <h3 className={styles.title}>Олександер Помалин</h3>
              <p className={styles.subtitle} lang="en">
                Scrum Master <br />
                Back-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/oleksandr-pomalin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://github.com/krasmong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.instagram.com/ol_pom/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <img src={photo3} alt="developer3" className={styles.img} />
              <h3 className={styles.title}>Цьолка Виктор</h3>
              <p className={styles.subtitle} lang="en">
                Front-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/viktor-tsolka/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://github.com/Viktor-sun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.instagram.com/viteecheck/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <img src={photo4} alt="developer4" className={styles.img} />
              <h3 className={styles.title}>Макс Шаула</h3>
              <p className={styles.subtitle} lang="en">
                Front-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/max-shaula/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href=" https://github.com/m6xcom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="http://risovach.ru/upload/2014/04/mem/toni-stark_47135944_big_.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <img src={photo5} alt="developer5" className={styles.img} />
              <h3 className={styles.title}>Михаил Бородай</h3>
              <p className={styles.subtitle} lang="en">
                Front-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="http://linkedin.com/in/mikhail-borodai-36ab2686"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://github.com/mborodaj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://instagtam.com/mboroday"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <img src={photo6} alt="developer6" className={styles.img} />
              <h3 className={styles.title}>Дмитро Панков</h3>
              <p className={styles.subtitle} lang="en">
                Back-end Developer
              </p>
              <ul className={styles.socials}>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/pankovd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://github.com/Dm3583"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="primary" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="http://risovach.ru/upload/2014/04/mem/toni-stark_47135944_big_.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="primary" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Fade>
    </Modal>
  );
}
