import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalLogoutState } from '../redux/global/global-operations';
import { getModalLogoutState } from '../redux/global/global-selectors';
import Navigation from './Navigation';
import ModalLogout from './ModalLogout';

export default function Header() {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(getModalLogoutState);
  const openModal = () => {
    dispatch(setModalLogoutState(true));
  };
  const closeModalByKey = e => {
    if (e.code === 'Escape' && isModalLogoutOpen) {
      dispatch(setModalLogoutState(false));
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModalByKey);
  });
  return (
    <header>
      <Navigation />
      <button onClick={openModal} type="button">
        Вийти
      </button>
      <ModalLogout />
    </header>
  );
}
