/** @format */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TableComponent from "../TableComponent/TableComponent";

const StockResults = () => {
  const stockData = useSelector((state) => state.stockData);
  const [hasStockData, setHasStockData] = useState(false);

  useEffect(() => {
    if (stockData && stockData.results && stockData.results.length > 0) {
      setHasStockData(true);
    } else {
      setHasStockData(false);
    }
  }, [stockData]);

  const avg = stockData?.results?.[0]?.vw || "";
  const vol = stockData?.results?.[0]?.v || "";
  const minPrice = stockData?.results?.[0]?.l || "";
  const maxPrice = stockData?.results?.[0]?.h || "";

  // I am not sure what min/max average is so keeping both the same
  // I am not sure what min/max volumne is so keeping them the same
  const tableData = [
    ["Price", maxPrice, minPrice, avg],
    ["Volume", vol, vol, avg],
  ];

  return (
    <div>
      {hasStockData ? (
        <TableComponent data={tableData} />
      ) : (
        <p>Please enter a valid symbol</p>
      )}
    </div>
  );
};

export default StockResults;
