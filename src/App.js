import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ButtonAddTransaction from './components/ButtonAddTransaction';

import ModalAddTransaction from './components/modalTransaction';
import ModalComponent from './components/Modal';
import Spinner from './components/Spinner';

import { useMediaQuery } from 'react-responsive';

import routes from './routes';
import { authSelectors, authOperations } from './redux/auth';
import transactionsSelectors from './redux/transactions/transactionSelectors';
import { getIsLoading } from './redux/modaltransaction/modalTransactionSelector';
import statisticSelectors from './redux/statistic/statistic-selectors';

const RegistrationPage = lazy(() =>
  import(
    './views/RegistrationPage' /* webpackChunkName: "registration-page" */
  ),
);

const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

const StatisticPage = lazy(() =>
  import('./views/StatisticPage' /* webpackChunkName: "statistic-page" */),
);

const CurrencyPage = lazy(() =>
  import(
    './views/CurrencyPage' /* webpackChunkName: "./views/currency-page" */
  ),
);

export default function App() {
  const isAuth = useSelector(authSelectors.getIsAuthenticated);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const isLoadingAuth = useSelector(authSelectors.getLoading);
  const isLoadingTransactions = useSelector(transactionsSelectors.getIsLoading);
  const isLoadingModalTransaction = useSelector(getIsLoading);
  const isLoadingFilterTransaction = useSelector(
    statisticSelectors.getIsLoading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  const shouldRenderSpinner =
    isLoadingAuth ||
    isLoadingTransactions ||
    isLoadingModalTransaction ||
    isLoadingFilterTransaction;
  return (
    <>
      {shouldRenderSpinner && <Spinner />}
      {isAuth && (
        <>
          <Header />
          <ButtonAddTransaction />
        </>
      )}
      <ModalComponent>
        <ModalAddTransaction />
      </ModalComponent>

      {/* <Navigation /> */}

      <Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRoute exact path={routes.home} redirectTo={routes.login}>
            <DashboardPage />
          </PrivateRoute>
          <PrivateRoute exact path={routes.statistic} redirectTo={routes.login}>
            <StatisticPage />
          </PrivateRoute>
          {isTabletOrMobile ? (
            <PrivateRoute
              exact
              path={routes.currency}
              redirectTo={routes.login}
            >
              <CurrencyPage />
            </PrivateRoute>
          ) : (
            <Redirect from={routes.currency} to={routes.home} />
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
