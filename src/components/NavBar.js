import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './componentsCSS/NavBar.module.css';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function NavBar() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className={styles.navBar}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              exact
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <HomeIcon
                color={isTabletOrMobile ? 'inherit' : 'primary.dark'}
                className={styles.icon}
              />
              {!isTabletOrMobile && (
                <span className={styles.text}>Главная</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistic"
              exact
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <TimelineIcon className={styles.icon} color="inherit" />
              {!isTabletOrMobile && (
                <span className={styles.text}>Статистика</span>
              )}
            </NavLink>
          </li>
          {isTabletOrMobile && (
            <li>
              <NavLink
                to="/currency"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                <AttachMoneyIcon color="inherit" className={styles.icon} />
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
