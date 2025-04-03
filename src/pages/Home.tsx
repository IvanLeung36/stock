import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Welcome to the Home Page of the stock price teller! This is a website
        where you can search for stock prices.<br></br>
        Please use the sidebar to navigate to the search page.
        <br />
        On the search page, you can enter a stock symbol to get the current
        price.<br></br>
        The stock prices are updated every second.<br></br>
        If you search for more than one stock, all the prices will still be kept
        in the list.
        <br />
      </p>
      <br />
      <br />

      <p>
        If you have no idea what stock to search for, you can try searching for
      </p>
      <ul>
        <li>MSFT (Microsoft)</li>
        <li>AAPL (Apple)</li>
        <li>GOOGL (Google)</li>
        <li>AMZN (Amazon)</li>
        <li>TSLA (Tesla)</li>
        <li>NVDA (Nvidia)</li>
      </ul>
      <p>
        This is a chart for the symbols of american stocks. 
        <br/>
        You can search for any of these symbols to get the current price.
        <br/>
        <a href="https://stockanalysis.com/stocks/" target="_blank">https://stockanalysis.com/stocks/</a>
      </p>
    </div>
  );
};

export default Home;
