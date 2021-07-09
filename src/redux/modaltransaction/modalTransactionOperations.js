import {
  MODAL_IS_OPEN,
  ADD_NEW_TRANSACTION_SUCCES,
  ADD_NEW_TRANSACTION_REQUEST,
  ADD_NEW_TRANSACTION_ERROR,
} from './modalTransactionActions';

export const modalTrancactionIsOpen = modalState => async dispatch => {
  dispatch(MODAL_IS_OPEN(modalState));
};

export const addTrancaction = transaction => async dispatch => {
  dispatch(ADD_NEW_TRANSACTION_REQUEST());
  try {
    dispatch(ADD_NEW_TRANSACTION_SUCCES(transaction));
  } catch (error) {
    dispatch(ADD_NEW_TRANSACTION_ERROR('Не удалось добавить'));
  }
};
