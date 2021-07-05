import {
  SETMODALLOGOUTSTATEREQUEST,
  SETMODALLOGOUTSTATESUCCESS,
  SETMODALLOGOUTSTATEERROR,
} from './global-actions';

export const setModalLogoutState = modalState => async dispatch => {
  dispatch(SETMODALLOGOUTSTATEREQUEST());
  try {
    // const response = await axios.get('/finance');
    // const data = await response.data;
    const data = modalState;

    dispatch(SETMODALLOGOUTSTATESUCCESS(data));
  } catch (error) {
    dispatch(SETMODALLOGOUTSTATEERROR(error));
  }
};
