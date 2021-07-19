import React from 'react';
import Currency from '../components/Currency';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

function CurrencyPage() {
  return (
    <section className="sectionPage">
      <div className="page">
        <SideBar />

        <Currency />
      </div>
      <Footer />
    </section>
  );
}

export default CurrencyPage;
