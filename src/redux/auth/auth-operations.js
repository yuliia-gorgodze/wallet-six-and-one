import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

// const getCurrentUser = () => async (dispatch, getState) => {
//     const persistedToken = getState().auth.token;

//     if (!persistedToken) return;

//     token.set(persistedToken);
//     dispatch(authActions.getCurrentUserRequest());

//     try {
//       const response = await axios.get('/users/current');

//       dispatch(authActions.getCurrentUserSuccess(response.data));
//     } catch (error) {
//       dispatch(authActions.getCurrentUserError(error.message));
//     }
//   };

// eslint-disable-next-line
export default { register, logIn };
