import React, { useState, useEffect } from "react";
import { getStockData } from "../services/stockService";
import { StockGraph } from "../components/StockGraph";
import "./Search.css";

let Search = () => {
  let [symbol, setSymbol] = useState("");
  let [stocks, setStocks] = useState<any[]>([]);
  let [error, setError] = useState<string>("");
  let [time, setTime] = useState<string>("");

  let handleSearch = async () => {
    try {
      let data = await getStockData(symbol);
      setStocks((prevStocks) => [
        ...prevStocks,
        { symbol: data.symbol, price: data.price, time: new Date().toLocaleTimeString() },
      ]);
      setError("");
    } catch (err) {
      setError("Failed to fetch stock data");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter stock symbol"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {stocks.length > 0 && (
        <div>
          <h3>Stock Prices</h3>
          <p>
            {stocks[stocks.length - 1].symbol} Price: $
            {stocks[stocks.length - 1].price}
          </p>
          <StockGraph stocks={stocks} time={time} />
        </div>
      )}
    </div>
  );
};

export default Search;