import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

import { DarkModeContext } from './contexts/DarkModeContext'
import { useDarkMode } from './hooks/useDarkMode'

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={`App ${darkMode ? 'dark-mode' : null}`}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <Navbar />
        <Charts coinData={coinData} />

      </DarkModeContext.Provider>

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
