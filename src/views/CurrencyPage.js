import React from 'react';
import Currency from '../components/Currency';
import SideBar from '../components/SideBar';

function CurrencyPage() {
  return (
    <section className="sectionPage">
      <div className="page">
        <SideBar />

        <Currency />
      </div>
    </section>
  );
}

export default CurrencyPage;
