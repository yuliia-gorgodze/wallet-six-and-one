import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormControl, Modal, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  modalTrancactionIsOpen,
  addTrancaction,
} from '../redux/modaltransaction/modalTransactionOperations';
import { IsModalTrasaction } from '../redux/modaltransaction/modalTransactionSelector';
import style from './componentsCSS/ModalAddTransaction.module.css';
import checkBoxStyles from './componentsCSS/checkBox.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const CssTextField = withStyles({
  root: {
    '& .MuiMenu': {
      top: '334px',
    },
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
const CssSelect = withStyles({
  root: {
    marginBottom: '40px',
    '& label': {
      fontFamily: 'Circe-regular, sans-serif',
      fontSize: '18px',
      color: '#BDBDBD',
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

export default function ModalAddTransaction() {
  const [checkBox, setcheckBox] = useState(false);
  const [transaction, setTransaction] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(getCurrentDate());
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const closeModal = e => {
    dispatch(modalTrancactionIsOpen(false));
  };

  // const formik = useFormik({
  //   initialValues: {
  //     transaction: '',
  //     category: '',
  //     date: '',
  //     comment: '',
  //   },
  //   validationSchema: Yup.object({

  //     transaction: Yup.string().required('Это поле обязательно'),
  //     category: Yup.string().optional(),
  //     comment: Yup.string().optional(),
  //   }),
  //   onSubmit: ({ checkBox, category, transaction, date, comment }) => {
  //     dispatch(
  //       addTrancaction({ checkBox, category, transaction, date, comment }),
  //     );
  //     formik.resetForm();
  //   },
  // });

  const onSabmit = e => {
    e.preventDefault();
    dispatch(
      addTrancaction({ checkBox, category, transaction, date, comment }),
    );

    resetForm();
  };
  const resetForm = () => {
    setcheckBox(false);
    setTransaction('');
    setCategory('');
    setDate(null);
    setComment('');
  };

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function getCurrentDate() {
    const date = pad(new Date().getDate());
    const month = pad(new Date().getMonth());
    const fullYear = pad(new Date().getFullYear());
    return `${fullYear}-${month}-${date}`;
  }

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
              onChange={e => setcheckBox(e.target.checked)}
              className={style.checkbox}
              name="changesTransactions"
              type="checkbox"
              id="checkBox"
            ></input>
            <ul className={style.changeList}>
              <li className={checkBox ? 'addText' : ''} id="addText">
                <span
                  className={!checkBox ? style.plusText : style.plusTextActive}
                >
                  Доходы
                </span>
              </li>
              <li className={checkBox ? '' : 'addСosts'} id="addСosts">
                <span
                  className={checkBox ? style.minusText : style.minusTextActive}
                >
                  Расходы
                </span>
              </li>
            </ul>
          </label>
        </div>
        {checkBox ? null : (
          <CssSelect
            className={style.select}
            id="select"
            label="Выберите категорию"
            select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <MenuItem value="main">Основной</MenuItem>
            <MenuItem value="eat">Еда</MenuItem>
            <MenuItem value="car">Авто</MenuItem>
            <MenuItem value="growth">Развитие</MenuItem>
            <MenuItem value="children">Дети</MenuItem>
            <MenuItem value="house">Дом</MenuItem>
            <MenuItem value="education">Образование</MenuItem>
            <MenuItem value="other">Остальные</MenuItem>
          </CssSelect>
        )}
        <div className={style.quantityAndDate}>
          <CssTextField
            onChange={e => setTransaction(e.target.value)}
            className={style.inputQuantity}
            id="quantity"
            name="quantity"
            type="text"
            placeholder="0.00"
            value={transaction}
          />
          <CssDate
            onChange={e => setDate(e.target.value)}
            className={style.data}
            id="date"
            type="date"
            defaultValue={date}
          />
        </div>
        <CssTextField
          onChange={e => setComment(e.target.value)}
          fullWidth
          className={style.comment}
          id="coment"
          name="comment"
          type="text"
          placeholder="Коментарий"
          value={comment}
        />
        <button
          type="submit"
          onClick={onSabmit}
          className={`${style.button} ${style.buttonAdd}`}
        >
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
