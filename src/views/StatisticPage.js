import React from 'react';

import SideBar from '../components/SideBar';
import Statistic from '../components/Statistic';

const StatisticPage = () => {
  return (
    <section className="sectionPage">
      <div className="mainPage container">
        <SideBar />

        <Statistic />
      </div>
    </section>
  );
};

export default StatisticPage;
