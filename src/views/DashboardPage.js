import React from 'react';
import Balance from '../components/Balance';
import ExRate from '../components/Currency';

const DashboardPage = () => {
  return (
    <>
      <h2>Dashboard страница</h2>
      <ExRate />
      <Balance />
    </>
  );
};

export default DashboardPage;
