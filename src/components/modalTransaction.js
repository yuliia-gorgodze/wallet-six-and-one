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
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import checkBoxStyles from './componentsCSS/checkBox.css';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      fontFamily: 'Circe-regular, sans-serif',
      fontSize: '18px',
      lineHeight: '1.5',
    },
    '& label': {
      fontFamily: 'Circe-regular, sans-serif',
      fontSize: '18px',
    },
    '& label.Mui-focused': {
      color: '#24cca7',
      fontFamily: 'Circe-regular, sans-serif',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#24cca7',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#bdbdbd',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: 'red',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      fontFamily: 'Circe-regular, sans-serif',
      fontSize: '15px',
    },
  },
})(TextField);
const CssDate = withStyles({
  root: {
    border: 'none',
    '& .MuiInputBase-input': {
      // color: '#fff', // Text color
      fontFamily: 'Circe-regular, sans-serif',
      fontSize: '18px',
      lineHeight: '1.5',
      width: '220px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#24cca7',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#bdbdbd',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderBottomColor: 'red',
    },
    '@media screen and (min-width: 768px) ': {
      '& .data': {
        width: '200px',
      },
    },
    '@media screen and (max-width: 767px) ': {
      '& .MuiInputBase-input': {
        width: '100%',
      },
    },
  },
})(TextField);

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
            <ul className={style.changeList}>
              <li className={style.plus} id="addText">
                <span className={style.plusText}>Доходы</span>
              </li>
              <li className={style.minus} id="addСosts">
                <span className={style.minusText}>Расходы</span>
              </li>
            </ul>
          </label>
        </div>

        <div className={style.quantityAndDate}>
          <CssTextField
            className={style.inputQuantity}
            id="quantity"
            name="quantity"
            type="text"
            placeholder="0.00"
          />
          <CssDate
            className={style.data}
            id="date"
            type="date"
            defaultValue="2019-07-07"
          />
        </div>
        <CssTextField
          fullWidth
          className={style.comment}
          id="coment"
          name="comment"
          type="text"
          placeholder="Коментарий"
        />
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
