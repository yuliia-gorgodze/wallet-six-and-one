import React from 'react';
import Balance from '../components/Balance';
import ExRate from '../components/Currency';
const HomePage = () => {
  return (
    <>
      <h2>Домашняя страница</h2>
      <Balance />
      <ExRate />
    </>
  );
};

export default HomePage;
