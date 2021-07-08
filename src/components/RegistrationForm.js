import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authOperations } from '../redux/auth';
import styles from './componentsCSS/RegistrationForm.module.css';
import routes from '../routes';

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
      // formik.resetForm();
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
      <label className="form__field">
        <input
          className="form__input"
          type="password"
          name="passwordConfirmation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
          placeholder="Подтвердите пароль"
          required
        />
        {formik.touched.passwordConfirmation &&
        formik.errors.passwordConfirmation ? (
          <div>{formik.errors.passwordConfirmation}</div>
        ) : null}
      </label>
      <label className="form__field">
        <input
          className="form__input"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Ваше имя"
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>
      <button className="form__button" type="submit">
        Регистрация
      </button>
      <NavLink to={routes.login}>Вход</NavLink>
    </form>
  );
}
