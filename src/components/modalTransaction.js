import React from 'react';
import {
  FormControl,
  Input,
  FormHelperText,
  Modal,
  Select,
  OutlinedInput,
  MenuItem,
} from '@material-ui/core';
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
        <Select
          className={style.catrgoryMenu}
          value="yulka"
          input={<OutlinedInput name="category" id="menuCategory" />}
        >
          <option value="none" placeholder="Выберите категорию" disabled>
            Выберите категорию
          </option>
          <MenuItem value="Основной">Основной</MenuItem>
          <MenuItem value="Еда">Еда</MenuItem>
          <MenuItem value="Авто">Авто</MenuItem>
          <MenuItem value="Развитие">Развитие</MenuItem>
          <MenuItem value="Дети">Дети</MenuItem>
          <MenuItem value="Дом">Дом</MenuItem>
          <MenuItem value="Образование">Образование</MenuItem>
          <MenuItem value="Остальное">Остальное</MenuItem>
        </Select>
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
