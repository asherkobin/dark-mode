import React from "react";
import Chart from "./Chart";
import { Switch, Route } from "react-router-dom";

const Charts = ({ coinData, darkMode, setDarkMode }) => {
  return (
    <div className="charts">
      <Switch>
      {
        coinData.map((coin, idx) => (
          <Route exact path={ idx === 0 ? ["/", `/${coin.name}`] : `/${coin.name}`}>
            <div className="chart__container" key={coin.name}>
              <h2 className="coin__title">{coin.name}</h2>
              <h4 className="coin__symbol">{coin.symbol}</h4>
              <div className="coin__logo">
                <img src={coin.image} height="40" alt={coin.name} />
              </div>
              <Chart sparklineData={coin.sparkline_in_7d.price} darkMode={darkMode} />
            </div>
          </Route>))
      }
      </Switch>
    </div>
  );
};
export default Charts;
