import { Route, NavLink, Switch } from 'react-router-dom';
//components
import Home from '../views/HomePage';
import RegistrationPage from '../views/RegistrationPage';
import LoginPage from '../views/LoginPage';
import DashboardPage from '../views/DashboardPage';

import routes from '../routes';

const Navigation = () => {
  return (
    <>
      <NavLink to={routes.home}>home</NavLink>
      <NavLink to={routes.dashboard}>dashboard</NavLink>
      <NavLink to={routes.login}>login</NavLink>
      <NavLink to={routes.registration}>registration</NavLink>

      <Switch>
        <Route path={routes.home} exact component={Home} />
        <Route path={routes.dashboard} component={DashboardPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.registration} component={RegistrationPage} />
      </Switch>
    </>
  );
};

export default Navigation;
