import { MODAL_IS_OPEN } from './modalTransactionActions';

export const modalTrancactionIsOpen = modalState => async dispatch => {
  dispatch(MODAL_IS_OPEN(modalState));
};
