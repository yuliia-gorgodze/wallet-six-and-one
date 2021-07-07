import React from 'react';

import SideBar from '../components/SideBar';
import Statistic from '../components/Statistic';

const StatisticPage = () => {
  return (
    <>
      <div className="mainPage container">
        <SideBar />
        <Statistic />
      </div>
    </>
  );
};

export default StatisticPage;
