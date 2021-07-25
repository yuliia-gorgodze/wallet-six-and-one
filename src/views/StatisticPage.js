import React from 'react';

import SideBar from '../components/SideBar';
import Statistic from '../components/Statistic';
import Footer from '../components/Footer';

const StatisticPage = () => {
  return (
    <section className="sectionPage">
      <div className="mainPage container">
        <SideBar />
        <Statistic />
      </div>
      <Footer />
    </section>
  );
};

export default StatisticPage;
