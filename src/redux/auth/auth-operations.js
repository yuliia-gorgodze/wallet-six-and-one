import axios from 'axios';
import authActions from './auth-actions';
import notification from '../../helpers/react-toastify';

axios.defaults.baseURL =
  'https://fs25on-team7-wallet-backend.herokuapp.com/api';

const register = credentials => async dispatch => {
  const { email, password } = credentials;
  dispatch(authActions.registerRequest());

  try {
    await axios.post('/users/signup', credentials);
    const response = await axios.post('/users/login', { email, password });

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

    dispatch(authActions.loginSuccess(response.data.data));

    notification.sucess('Успех!');
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    notification.error('Что-то пошло не так!');
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const persistedToken = getState().auth.token;

  if (!persistedToken) return;

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current', {
      headers: { Authorization: `Bearer ${persistedToken}` },
    });

    dispatch(authActions.getCurrentUserSuccess(response.data.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const logOut = () => async (dispatch, getState) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post(
      '/users/logout',
      {},
      {
        headers: { Authorization: `Bearer ${getState().auth.token}` },
      },
    );

    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
    notification.error('Что-то пошло не так!');
  }
};

// eslint-disable-next-line
export default { register, logIn, logOut, getCurrentUser };
