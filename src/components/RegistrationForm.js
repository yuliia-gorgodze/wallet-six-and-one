import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './componentsCSS/RegistrationForm.module.css';
import routes from '../routes';
import { authSelectors } from '../redux/auth';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'repeatPassword':
        return setRepeatPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    password === repeatPassword
      ? dispatch(authOperations.register({ name, email, password }))
      : alert('пароли не совпадают');

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
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
      <label className="form__field">
        <input
          className="form__input"
          type="password"
          name="repeatPassword"
          onChange={handleChange}
          value={repeatPassword}
          placeholder="Подтвердите пароль"
          required
        />
      </label>
      <label className="form__field">
        <input
          className="form__input"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          placeholder="Ваше имя"
          required
        />
      </label>
      <button className="form__button" type="submit">
        Регистрация
      </button>
      <NavLink to={routes.login}>Вход</NavLink>
    </form>
  );
};

export default RegistrationForm;
