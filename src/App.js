import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './views/HomePage';
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import DashboardPage from './views/DashboardPage';
import PublicRoute from './components/PublicRoute';
import ButtonAddTransaction from './components/ButtonAddTransaction';
import routes from './routes';
import { authSelectors } from './redux/auth';

export default function App() {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      {isAuth && (
        <>
          <Header />
          <ButtonAddTransaction />
        </>
      )}

      <Navigation />

      <Suspense fallback={<p>Загружаем.... </p>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <Route path={routes.dashboard} component={DashboardPage} />
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
