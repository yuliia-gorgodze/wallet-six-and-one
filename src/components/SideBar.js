import React from 'react';
import { useMediaQuery } from 'react-responsive';

import NavBar from './NavBar';
import Balance from './Balance';
import Currency from './Currency';

import styles from './componentsCSS/SideBar.module.css';

function SideBar() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className={styles.sideBarContainer}>
        <div className={styles.navBarContainer}>
          <NavBar />
          <Balance />
        </div>
        {!isTabletOrMobile && <Currency />}
      </div>
    </>
  );
}

export default SideBar;
