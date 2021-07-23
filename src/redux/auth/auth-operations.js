import axios from 'axios';
import authActions from './auth-actions';
import notification from '../../helpers/react-toastify';
import { filteredMounthAndYearsTransactions } from '../statistic/statistic-operations';

axios.defaults.baseURL =
  'https://fs25on-team7-wallet-backend.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const register = credentials => async dispatch => {
  const { email, password } = credentials;
  dispatch(authActions.registerRequest());

  try {
    await axios.post('/users/signup', credentials);
    const response = await axios.post('/users/login', { email, password });
    token.set(response.data.data.token);

    dispatch(authActions.registerSuccess(response.data.data));
    notification.sucess('Успех!');
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    notification.error('Что-то пошло не так!');
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.data.token);

    dispatch(authActions.loginSuccess(response.data.data));

    dispatch(
      filteredMounthAndYearsTransactions({
        month: currentMonth,
        year: currentYear,
      }),
    );

    notification.sucess('Успех!');
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    notification.error('Что-то пошло не так!');
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const persistedToken = getState().auth.token;

  if (!persistedToken) return;

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data.data));

    dispatch(
      filteredMounthAndYearsTransactions({
        month: currentMonth,
        year: currentYear,
      }),
    );
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
    notification.warning('Время сессии истекло. Пожалуйста, войдите заново.');
  }
};

const logOut = () => async (dispatch, getState) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    notification.error('Что-то пошло не так!');
  }
};

// eslint-disable-next-line
export default { register, logIn, logOut, getCurrentUser };
