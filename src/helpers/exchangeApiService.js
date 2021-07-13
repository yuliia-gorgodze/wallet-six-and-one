// import axios from 'axios';

// export function fetchInfo() {
//   return axios
//     .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then(result => result.data);
// }

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// };

export function fetchInfo() {
  return fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  ).then(response => response.json());
}

fetchInfo();
