import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalLogoutState } from '../redux/global/global-operations';
import { getModalLogoutState } from '../redux/global/global-selectors';
import ModalLogout from './ModalLogout';
import style from './componentsCSS/Header.module.css';
import headerIcons from '../assets/icons/header-icons.svg';
import { authSelectors } from '../redux/auth';

export default function Header() {
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(getModalLogoutState);
  const userName = useSelector(authSelectors.getUsername);
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
    <>
      <header className={`${style.header} container`}>
        <div className={style.logo}>
          <svg className={style.logo__icon}>
            <use href={headerIcons + '#wallet'}></use>
          </svg>
          <span className={style.logo__text}>Wallet</span>
        </div>
        <div className={style.header__info}>
          <span className={style.header__name}>{userName}</span>
          <button
            className={style.exitButton}
            onClick={openModal}
            type="button"
          >
            <svg width="18" height="18">
              <use href={headerIcons + '#exit'}></use>
            </svg>
            <span className={style.exitButton__text}>Выйти</span>
          </button>
        </div>
        <ModalLogout />
      </header>
    </>
  );
}
