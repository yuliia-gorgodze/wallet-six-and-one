import axios from 'axios';
import statisticActions from './statistic-actions';

export const filteredMounthAndYearsTransactions =
  transaction => async dispatch => {
    const monthCorrect =
      transaction.month < 10
        ? `0${transaction.month}`
        : String(transaction.month);
    dispatch(statisticActions.FILTERED_TRANSACTION_REQUEST());

    try {
      const filteredTransactions = await axios.get(
        `/transactions?&filter=day|month|year|category|amount&month=${monthCorrect}&year=${String(
          transaction.year,
        )}`,
      );

      dispatch(
        statisticActions.FILTERED_TRANSACTION_SUCCESS(
          filteredTransactions.data.data,
        ),
      );
    } catch (error) {
      console.log(error);
      dispatch(statisticActions.FILTERED_TRANSACTION_ERROR(error.message));
    }
  };
