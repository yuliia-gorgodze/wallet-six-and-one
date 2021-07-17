import React, { Component } from 'react';
import style from './componentsCSS/Statistic.module.css';
import Table from './Table';
import Chart from './Diagram';
import { connect } from 'react-redux';
import transactionSelectors from '../redux/transactions/transactionSelectors';

let a = {
  Ё: 'YO',
  Й: 'I',
  Ц: 'TS',
  У: 'U',
  К: 'K',
  Е: 'E',
  Н: 'N',
  Г: 'G',
  Ш: 'SH',
  Щ: 'SCH',
  З: 'Z',
  Х: 'H',
  Ъ: "'",
  ё: 'yo',
  й: 'i',
  ц: 'ts',
  у: 'u',
  к: 'k',
  е: 'e',
  н: 'n',
  г: 'g',
  ш: 'sh',
  щ: 'sch',
  з: 'z',
  х: 'h',
  ъ: "'",
  Ф: 'F',
  Ы: 'I',
  В: 'V',
  А: 'a',
  П: 'P',
  Р: 'R',
  О: 'O',
  Л: 'L',
  Д: 'D',
  Ж: 'ZH',
  Э: 'E',
  ф: 'f',
  ы: 'i',
  в: 'v',
  а: 'a',
  п: 'p',
  р: 'r',
  о: 'o',
  л: 'l',
  д: 'd',
  ж: 'zh',
  э: 'e',
  Я: 'Ya',
  Ч: 'CH',
  С: 'S',
  М: 'M',
  И: 'I',
  Т: 'T',
  Ь: "'",
  Б: 'B',
  Ю: 'YU',
  я: 'ya',
  ч: 'ch',
  с: 's',
  м: 'm',
  и: 'i',
  т: 't',
  ь: "'",
  б: 'b',
  ю: 'yu',
  '.': '',
};
class Statistic extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getData();
  }
  transliterate(word) {
    return word
      .split('')
      .map(function (char) {
        if (char === '.') {
          return;
        }
        return a[char] || char;
      })
      .join('');
  }
  dataColor() {
    return this.state.chartData.labels.reduce((acc, el) => {
      this.state.chartData.datasets[0].backgroundColor.forEach(color => {
        if (acc[el]) {
        } else {
          let word = this.transliterate(el).toLowerCase();
          console.log(typeof word);
          acc[word] = color;
        }
      });
      return acc;
    }, {});
  }
  randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
  getColor() {
    let arrayColor = [];
    const arrTransactions = this.getCategory().length;
    for (let i = 0; i < arrTransactions; i++) {
      let color = this.randomColor();
      arrayColor.push(color);
    }
    return arrayColor;
  }
  getCategory() {
    let arrayCategory = [];
    const transactionsArray = this.props.transactions.transactions;
    transactionsArray.map(
      el =>
        !arrayCategory.includes(el.category) && arrayCategory.push(el.category),
    );
    return arrayCategory;
  }
  getAmount() {
    const transactionsArray = this.props.transactions.transactions;
    const transactionsArrNotRepeat = this.getCategory();
    let amountArray = [];

    transactionsArrNotRepeat.map(category => {
      let amount = transactionsArray.reduce((acc, el) => {
        if (category === el.category) {
          acc += el.amount;
        }
        return acc;
      }, 0);
      amountArray.push(amount);
      return;
    });
    return amountArray;
  }
  getData() {
    this.setState({
      chartData: {
        labels: this.getCategory(),
        datasets: [
          {
            data: this.getAmount(),
            backgroundColor: this.getColor(),
          },
        ],
      },
    });
  }
  render() {
    return (
      <div className={style.statistic}>
        <h1 className={style.tittle}>Статистика</h1>
        <div className={style.statisticContainer}>
          <div className={style.diagram}>
            <Chart
              chartData={this.state.chartData}
              location="Massachusetts"
              legendPosition="bottom"
            />
          </div>
          <div className={style.table}>
            <Table color={this.dataColor()} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  transactions: transactionSelectors.getAllTransactions(state),
});
export default connect(mapStateToProps, null)(Statistic);
