import React from 'react';
import Chart from "./Chart";

const ChartContainer = ({coinInfo, darkMode}) => {
  return (
    <div className="chart__container" key={coinInfo.name}>
      <h2 className="coin__title">{coinInfo.name}</h2>
      <h4 className="coin__symbol">{coinInfo.symbol}</h4>
      <div className="coin__logo">
        <img src={coinInfo.image} height="40" alt={coinInfo.name} />
      </div>
      <Chart sparklineData={coinInfo.sparkline_in_7d.price} darkMode={darkMode} />
    </div>
  )
}

export default ChartContainer;