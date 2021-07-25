import {
  SETMODALLOGOUTSTATEREQUEST,
  SETMODALLOGOUTSTATESUCCESS,
  SETMODALLOGOUTSTATEERROR,
  setModalFooterRequest,
  setModalFooterSuccess,
  setModalFooterError,
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

export const setModalFooterState = modalState => async dispatch => {
  dispatch(setModalFooterRequest());
  try {
    dispatch(setModalFooterSuccess(modalState));
  } catch (error) {
    dispatch(setModalFooterError(error));
  }
};
