import React from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { modalTrancactionIsOpen } from '../redux/modaltransaction/modalTransactionOperations';

import style from './componentsCSS/ModalLogout.module.css';

export default function ModalLogout() {
  const dispatch = useDispatch();
  const closeModal = e => {
    if (e.target.dataset.closemodal) {
      dispatch(modalTrancactionIsOpen(false));
    }
  };
  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
}
