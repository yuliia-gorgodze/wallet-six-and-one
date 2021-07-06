import React from 'react';
import { FormControl, Input, FormHelperText, Modal } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrancactionIsOpen } from '../redux/modaltransaction/modalTransactionOperations';
import { IsModalTrasaction } from '../redux/modaltransaction/modalTransactionSelector';
import style from './componentsCSS/ModalAddTransaction.module.css';

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const closeModal = e => {
    dispatch(modalTrancactionIsOpen(false));
  };
  return (
    <Modal className={style.modal} open={useSelector(IsModalTrasaction)}>
      <FormControl className={style.form}>
        <button
          onClick={closeModal}
          type="submit"
          className={style.clouseButton}
        ></button>
        <span className={style.text}>Добавить транзакцию</span>
        <input type="checkbox" id="radioButton"></input>

        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Коментарий</FormHelperText>
        <button className={`${style.button} ${style.buttonAdd}`}>
          Добавить
        </button>
        <button
          className={`${style.button} ${style.undo}`}
          onClick={closeModal}
        >
          Отменить
        </button>
      </FormControl>
    </Modal>
  );
}
