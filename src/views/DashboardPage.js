import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SideBar from '../components/SideBar';
import HomeTab from '../components/HomeTab';
import HomeTabMobile from '../components/HomeTabMobile';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="sectionPage">
      <div className="mainPage container">
        <SideBar />
        {isMobile ? <HomeTabMobile /> : <HomeTab />}
      </div>
      <Footer />
    </section>
  );
};

export default DashboardPage;
