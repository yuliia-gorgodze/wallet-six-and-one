import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { filteredMounthAndYearsTransactions } from '../redux/statistic/statistic-operations';

const MuiMenuItem = withStyles({
  root: {
    justifyContent: 'center',
  },
})(MenuItem);

const useStyles = makeStyles(theme => ({
  '@media screen and (min-width: 768px)': {
    container: {
      display: 'flex',
    },
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },

  formControl: {
    margin: theme.spacing(1),
    width: '100%',

    [theme.breakpoints.up('lg')]: {
      width: '166px',
    },
  },
  select: {
    borderRadius: '30px',
  },

  icon: {
    marginRight: '10px',
  },
}));

export default function StatisticSelects() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangeMonth = event => {
    const { value } = event.target;
    setMonth(value);
    const currentYear = new Date().getFullYear();
    if (!year) {
      setYear(String(new Date().getFullYear()));
      dispatch(
        filteredMounthAndYearsTransactions({ month: value, year: currentYear }),
      );
      return;
    }
    dispatch(filteredMounthAndYearsTransactions({ month: value, year }));
  };
  const handleChangeYear = event => {
    const { value } = event.target;
    setYear(value);
    if (!month) {
      dispatch(
        filteredMounthAndYearsTransactions({ month: '01', year: value }),
      );
      return;
    }
    dispatch(filteredMounthAndYearsTransactions({ month, year: value }));
  };

  const startDate = new Date().getFullYear() - 1;

  return (
    <div className={classes.container}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Месяц</InputLabel>
        <Select
          variant="outlined"
          className={classes.select}
          value={month}
          onChange={handleChangeMonth}
          label="Месяц"
          IconComponent={ExpandMoreIcon}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => {
            if (e < 10) {
              return <MuiMenuItem value={e} key={e}>{`0${e}`}</MuiMenuItem>;
            }
            return <MuiMenuItem value={e} key={e}>{`${e}`}</MuiMenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Год</InputLabel>
        <Select
          variant="outlined"
          className={classes.select}
          value={year}
          onChange={handleChangeYear}
          label="Год"
          IconComponent={ExpandMoreIcon}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(e => {
            return (
              <MuiMenuItem value={startDate + e} key={e}>
                {startDate + e}
              </MuiMenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
