import React from 'react';
import { NavLink } from 'react-router-dom';
//components
import routes from '../routes';

const Navigation = () => {
  return (
    <>
      <NavLink to={routes.home}>home</NavLink>
      <NavLink to={routes.dashboard}>dashboard</NavLink>
      <NavLink to={routes.login}>login</NavLink>
      <NavLink to={routes.registration}>registration</NavLink>
    </>
  );
};

export default Navigation;
