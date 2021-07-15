import React, { Component } from 'react';
import style from './componentsCSS/Statistic.module.css';
import Table from './Table';
import Chart from './Diagram';

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
  getChartData() {
    this.setState({
      chartData: {
        labels: ['Продукты', 'Такси', 'Бананы', 'Апельсины'],
        datasets: [
          {
            label: 'Population',
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
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

export default Statistic;
