import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { modalTrancactionIsOpen } from '../redux/modaltransaction/modalTransactionOperations';
import { IsModalTrasaction } from '../redux/modaltransaction/modalTransactionSelector';

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ModalComponent({ children }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  const closeModal = e => {
    dispatch(modalTrancactionIsOpen(false));
  };
  const isOpen = useSelector(IsModalTrasaction);

  return (
    <Modal
      className={styles.modal}
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={useSelector(IsModalTrasaction)}>{children}</Fade>
    </Modal>
  );
}
