import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';
import StatisticPage from './views/StatisticPage';
import CurrencyPage from './views/CurrencyPage';

import PublicRoute from './components/PublicRoute';
import ButtonAddTransaction from './components/ButtonAddTransaction';

import ModalAddTransaction from './components/modalTransaction';

import { useMediaQuery } from 'react-responsive';

import routes from './routes';
import { authSelectors } from './redux/auth';

export default function App() {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isAuth && (
        <>
          <Header />
          <ButtonAddTransaction />
        </>
      )}

      <ModalAddTransaction />
      <Navigation />

      <Suspense fallback={<p>Загружаем.... </p>}>
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/statistic" component={StatisticPage} />
          {isTabletOrMobile ? (
            <Route path="/currency" component={CurrencyPage} />
          ) : (
            <Redirect from="/currency" to="/" />
          )}
          <PublicRoute
            exact
            path={routes.login}
            restricted
            redirectTo={routes.home}
          >
            <LoginPage />
          </PublicRoute>
          <PublicRoute
            exact
            path={routes.registration}
            restricted
            redirectTo={routes.home}
          >
            <RegistrationPage />
          </PublicRoute>
        </Switch>
      </Suspense>
    </>
  );
}
