import React from 'react';
import Currency from '../components/Currency';
import SideBar from '../components/SideBar';

function CurrencyPage() {
  return (
    <div className="page">
      <SideBar />

      <Currency />
    </div>
  );
}

export default CurrencyPage;
