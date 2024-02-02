/** @format */

import React, { useState } from "react";
import StockResults from "../StockResults/StockResults";
import { useDispatch } from "react-redux";
import { fetchStockData } from "../../redux/actions";

const StockTracker = () => {
  const [ticker, setTicker] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(fetchStockData(ticker));
  };

  return (
    <div>
      <div>
        <div>Enter a Stock Ticker</div>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <StockResults />
    </div>
  );
};

export default StockTracker;
