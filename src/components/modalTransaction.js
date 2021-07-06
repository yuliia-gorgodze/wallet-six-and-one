import React from 'react';
import { FormControl, Input, FormHelperText, Modal } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrancactionIsOpen } from '../redux/modaltransaction/modalTransactionOperations';
import { IsModalTrasaction } from '../redux/modaltransaction/modalTransactionSelector';
import style from './componentsCSS/ModalAddTransaction.module.css';
import chacked from './modalTransactionFunction';
import checkBoxStyles from './componentsCSS/checkBox.css';
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
          type="button"
          className={style.clouseButton}
        ></button>
        <span className={style.text}>Добавить транзакцию</span>

        <div className={style.changesContainer}>
          <label className={style.customCheckbox}>
            <input
              onClick={chacked}
              className={style.checkbox}
              name="changesTransactions"
              type="checkbox"
              id="checkBox"
            ></input>
            <ul>
              <li id="addText">Доходы</li>
              <li id="addСosts">Расходы</li>
            </ul>
          </label>
        </div>

        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Коментарий</FormHelperText>
        <button type="submit" className={`${style.button} ${style.buttonAdd}`}>
          Добавить
        </button>
        <button
          type="button"
          className={`${style.button} ${style.undo}`}
          onClick={closeModal}
        >
          Отменить
        </button>
      </FormControl>
    </Modal>
  );
}
