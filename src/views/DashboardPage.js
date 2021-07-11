import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SideBar from '../components/SideBar';
import HomeTab from '../components/HomeTab';
import HomeTabMobile from '../components/HomeTabMobile';

const DashboardPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="mainPage container">
        <SideBar />
        {isMobile ? <HomeTabMobile /> : <HomeTab />}
      </div>
    </>
  );
};

export default DashboardPage;
