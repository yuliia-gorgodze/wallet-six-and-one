import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authOperations } from '../redux/auth';
import styles from './componentsCSS/AuthForm.module.css';
import routes from '../routes';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import headerIcons from '../assets/icons/header-icons.svg';

const CssTextField = withStyles({
  root: {
    marginBottom: '40px',
    '& label.Mui-focused': {
      color: '#24cca7',
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
  },
})(TextField);

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Невалидный email')
        .required('Поле email обязательно'),
      password: Yup.string()
        .min(6, 'Должен состоять минимум из 6 символов')
        .max(12, 'Не более 12 символов')
        .required('Поле пароль обязательно'),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Пароли не совпадают',
      ),
      name: Yup.string()
        .min(1, 'Должено состоять минимум из 1 символа')
        .max(12, 'Не более 12 символов')
        .required('Поле имя обязательно'),
    }),
    onSubmit: ({ email, password, name }) => {
      dispatch(authOperations.register({ name, email, password }));
      formik.resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <svg className={styles.logo__icon}>
          <use href={headerIcons + '#wallet'}></use>
        </svg>
        <span className={styles.logo__text}>Wallet</span>
      </div>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <CssTextField
          fullWidth
          id="email"
          name="email"
          type="email"
          label="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="Введите email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <CssTextField
          fullWidth
          id="password"
          name="password"
          type="password"
          label="Пароль"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="Введите пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <CssTextField
          fullWidth
          id="password"
          name="passwordConfirmation"
          type="password"
          label="Пароль"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="Подтвердите пароль"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <CssTextField
          fullWidth
          id="name"
          name="name"
          type="text"
          label="Имя"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon className={styles.form__icon} />
              </InputAdornment>
            ),
          }}
          placeholder="Ваше имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <div className={styles.container__button}>
          <button className={styles.button__submit} type="submit">
            Регистрация
          </button>
          <NavLink to={routes.login} className={styles.button__redirect}>
            Вход
          </NavLink>
        </div>
      </form>
    </div>
  );
}
