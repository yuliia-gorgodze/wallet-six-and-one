import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalLogoutState } from '../redux/global/global-operations';
import { getModalLogoutState } from '../redux/global/global-selectors';
import style from './componentsCSS/ModalLogout.module.css';
import { authOperations } from '../redux/auth';

export default function ModalLogout() {
  const dispatch = useDispatch();
  const closeModal = e => {
    if (e.target.dataset.closemodal) {
      dispatch(setModalLogoutState(false));
    }
  };
  return (
    <div
      data-closemodal
      tabIndex="0"
      onClick={closeModal}
      className={
        useSelector(getModalLogoutState)
          ? style.modalLogoutOverlay_active
          : style.modalLogoutOverlay
      }
    >
      <div className={style.modal}>
        <h2 className={style.modal__title}>Вы действительно хотите выйти?</h2>
        <ul className={style.buttonsList}>
          <li>
            <button
              onClick={() => dispatch(authOperations.logOut())}
              data-closemodal
              className={style.button__submit}
              type="button"
            >
              Да
            </button>
          </li>
          <li>
            <button
              data-closemodal
              className={style.button__undo}
              type="button"
            >
              Нет
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
