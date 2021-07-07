import React from 'react';
import NavBar from './NavBar';
import Balance from './Balance';
import Currency from './Currency';

function SideBar() {
  return (
    <>
      <div>
        <NavBar />
        <Balance />
        <Currency />
      </div>
    </>
  );
}

export default SideBar;
