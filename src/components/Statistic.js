import React, { Component } from 'react';
import style from './componentsCSS/Statistic.module.css';
import Table from './Table';
import Chart from './Diagram';
import { connect } from 'react-redux';
import transactionSelectors from '../redux/transactions/transactionSelectors';

class Statistic extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getChartData();
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
  getChartData() {
    this.setState({
      chartData: {
        labels: this.getCategory(),
        datasets: [
          {
            label: 'catogory',
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
            <Table />
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
