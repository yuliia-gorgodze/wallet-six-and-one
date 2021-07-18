import React, { Component } from 'react';
import style from './componentsCSS/Statistic.module.css';
import Table from './Table';
import Chart from './Diagram';
import StatisticSelects from './StasisticSelects';
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
    return this.state.chartData.labels.reduce((acc, el, i) => {
      let word = this.transliterate(el).toLowerCase();
      let color = this.state.chartData.datasets[0].backgroundColor[i];
      if (!Object.values(acc).includes(el)) {
        acc[word] = color;
      }
      return acc;
    }, {});
  }
  getColor() {
    const arrTransactions = this.getCategory().length;
    const color = [
      '#24cca7',
      '#ff6596',
      '#4a56e2',
      '#bd5589',
      '#55bd8c',
      '#ffc17b',
      '#fc5f5f',
      '#84df89',
      '#8bc3d4',
      '#b98bd4',
    ];
    return color.slice(0, arrTransactions);
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
            <StatisticSelects />
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
