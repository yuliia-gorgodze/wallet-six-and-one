import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { MenuItem, TextField, InputAdornment } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
  modalTrancactionIsOpen,
  addTrancaction,
} from '../redux/modaltransaction/modalTransactionOperations';
import style from './componentsCSS/ModalAddTransaction.module.css';
import './componentsCSS/checkBox.css';

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
  const dispatch = useDispatch();

  const closeModal = e => {
    dispatch(modalTrancactionIsOpen(false));
  };

  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      checkBox: false,
      transaction: '',
      category: '',
      date: getCurrentDate(),
      comment: '',
      year: '',
      month: '',
      day: '',
    },
    validationSchema: Yup.object({
      checkBox: Yup.boolean(),
      transaction: Yup.number()
        .typeError('Это должны быть цифры')
        .required('Это поле обязательно'),
      category: Yup.string().optional(),
      date: Yup.string().required('Это поле обязательно'),
      comment: Yup.string().max(400, 'Максимум 400 символов').optional(),
    }),
    onSubmit: ({ checkBox, category, transaction, date, comment }) => {
      category = checkBox ? 'income' : category;
      date = dateFormat(date);
      let year = date.year.join('');
      let month = date.month.join('');
      let day = date.day.join('');
      dispatch(
        addTrancaction({
          checkBox,
          category,
          transaction,
          year,
          month,
          day,
          comment,
        }),
      );
      // console.log({ checkBox, category, transaction, year, month, day, comment });
      resetForm();
      closeModal();
    },
  });

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function getCurrentDate() {
    const date = pad(new Date().getDate());
    const month = pad(new Date().getMonth());
    const fullYear = pad(new Date().getFullYear());
    return `${fullYear}-${month}-${date}`;
  }

  function dateFormat(date) {
    const parseDate = date.split('').reduce(
      (acc, el, i) => {
        if (i < 4) {
          acc.year.push(el);
        }
        if (i >= 5 && i < 7) {
          acc.month.push(el);
        }
        if (i >= 8 && i < 10) {
          acc.day.push(el);
        }

        return acc;
      },
      {
        year: [],
        month: [],
        day: [],
      },
    );
    return parseDate;
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button
        onClick={closeModal}
        type="button"
        className={style.clouseButton}
      ></button>
      <span className={style.text}>Добавить транзакцию</span>
      <div className={style.changesContainer}>
        <label className={style.customCheckbox}>
          <input
            onChange={handleChange}
            className={style.checkbox}
            name="checkBox"
            type="checkbox"
            id="checkBox"
          ></input>
          <ul className={style.changeList}>
            <li className={values.checkBox ? 'addText' : ''} id="addText">
              <span
                className={
                  !values.checkBox ? style.plusText : style.plusTextActive
                }
              >
                Доходы
              </span>
            </li>
            <li className={values.checkBox ? '' : 'addСosts'} id="addСosts">
              <span
                className={
                  values.checkBox ? style.minusText : style.minusTextActive
                }
              >
                Расходы
              </span>
            </li>
          </ul>
        </label>
      </div>
      {values.checkBox ? null : (
        <CssSelect
          fullWidth
          name="category"
          label="Выберите категорию"
          type="text"
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          helperText={touched.category && errors.category}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <TextField
                  name="category"
                  select
                  value=""
                  onChange={handleChange}
                >
                  <MenuItem value="main">Основной</MenuItem>
                  <MenuItem value="eat">Еда</MenuItem>
                  <MenuItem value="car">Авто</MenuItem>
                  <MenuItem value="growth">Развитие</MenuItem>
                  <MenuItem value="children">Дети</MenuItem>
                  <MenuItem value="house">Дом</MenuItem>
                  <MenuItem value="education">Образование</MenuItem>
                  <MenuItem value="other">Остальные</MenuItem>
                </TextField>
              </InputAdornment>
            ),
          }}
        />
      )}
      <div className={style.quantityAndDate}>
        <CssTextField
          fullWidth
          className={style.inputQuantity}
          id="transaction"
          name="transaction"
          type="text"
          placeholder="0.00"
          value={values.transaction}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.transaction && Boolean(errors.transaction)}
          helperText={touched.transaction && errors.transaction}
        />
        <CssDate
          fullWidth
          onChange={handleChange}
          className={style.data}
          id="date"
          type="date"
          defaultValue={values.date}
          placeholder="dd.mm.yyyy"
        />
      </div>
      <CssTextField
        fullWidth
        className={style.comment}
        id="coment"
        name="comment"
        type="text"
        placeholder="Коментарий"
        value={values.comment}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.comment && Boolean(errors.comment)}
        helperText={touched.comment && errors.comment}
      />
      <button type="submit" className={style.button__submit}>
        Добавить
      </button>
      <button type="button" className={style.button__undo} onClick={closeModal}>
        Отменить
      </button>
    </form>
  );
}
