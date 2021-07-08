import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authOperations } from '../redux/auth';
import styles from './componentsCSS/LoginForm.module.css';
import routes from '../routes';

export default function LoginForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Невалидный email')
        .required('Поле email обязательно'),
      password: Yup.string()
        .min(6, 'Должен состоять минимум из 6 символов')
        .max(12, 'Не более 12 символов')
        .required('Поле пароль обязательно'),
    }),
    onSubmit: values => {
      dispatch(
        authOperations.logIn({
          email: values.email,
          password: values.password,
        }),
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className="form__field">
        <input
          className="form__input"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="E-mail"
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </label>
      <label className="form__field">
        <input
          className="form__input"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Пароль"
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </label>
      <button className="form__button" type="submit">
        Вход
      </button>
      <NavLink to={routes.registration}>Регистрация</NavLink>
    </form>
  );
}
