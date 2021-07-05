import axios from 'axios';

export const fetchExchange = () => {
  let result = axios.get(
    'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
  );
  console.log(result);
  return result;
};
