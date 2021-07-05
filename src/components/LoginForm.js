import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './componentsCSS/LoginForm.module.css';
import routes from '../routes';
import { authSelectors } from '../redux/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const isError = useSelector(authSelectors.getError);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {isError && <b>Что то пошло не так или пароль меньше 6 символов!</b>}
      <label className="form__field">
        <input
          className="form__input"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          placeholder="E-mail"
          required
        />
      </label>
      <label className="form__field">
        <input
          className="form__input"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          placeholder="Пароль"
          required
        />
      </label>
      <button className="form__button" type="submit">
        Вход
      </button>
      <NavLink to={routes.registration}>Регистрация</NavLink>
    </form>
  );
};

export default LoginForm;
