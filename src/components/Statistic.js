import React from 'react';
import style from './componentsCSS/Statistic.module.css';
import Table from './Table';
import Diagram from './Diagram';
function Statistic() {
  return (
    <>
      <h1 className={style.tittle}>Статистика</h1>
      <div className={style.staticticContainer}>
        <div className={style.diagram}>
          <Diagram />
        </div>
        <div className={style.table}>
          <Table />
          <ul>
            <li>
              Расходы: <span>0</span>
            </li>
            <li>
              Доходы: <span>100000000000$</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Statistic;
