import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic" exact>
            Статистика
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
