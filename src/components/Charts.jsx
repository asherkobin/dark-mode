import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ChartContainer from "./ChartContainer";

const Charts = ({ coinData, darkMode }) => {
  return (
    <div className="charts">
      <Switch>
      {
        coinData.map(coinInfo => (
          <Route path={`/${coinInfo.name.replace("/", "_")}`} exact key={coinInfo.name}>
            <ChartContainer coinInfo={coinInfo} darkMode={darkMode} />
          </Route>))
      }
      {
        <Route to="/" exact><div style={{ fontSize: "20px", marginTop: "20px" }}>Select a Coin from the Navigation</div></Route>
      }
      </Switch>
    </div>
  );
};

export default Charts;
