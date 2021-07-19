import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import GroupIcon from '@material-ui/icons/Group';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux';
import { setModalFooterState } from '../redux/global/global-operations';
import FooterModal from './FooterModal';

function Copyright() {
  const dispatch = useDispatch();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Button
        color="primary"
        startIcon={<GroupIcon />}
        onClick={() => dispatch(setModalFooterState(true))}
      >
        Team Developers
      </Button>{' '}
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    padding: theme.spacing(2, 2),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'textSecondary',
    boxShadow: '-1px -7px 8px 0px rgba(34, 60, 80, 0.2)',
  },
  typography: {
    fontFamily: 'Circe-regular, sans-serif',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography
          variant="body1"
          align="center"
          className={classes.typography}
        >
          Made by FS25 "Пирожки" Corporation.
        </Typography>
        <Copyright />
      </Container>
      <FooterModal />
    </footer>
  );
}
