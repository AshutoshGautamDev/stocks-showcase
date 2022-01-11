import React, { useState } from "react";
import Stock from "./Stock";
import "./styles.css";
const Showcase = ({ data }) => {
  const [showCounter, setShowCounter] = useState(0);
  const stocks = data.slice(showCounter, showCounter + 8);
  const loadMore = () => {
    console.log(stocks)
    stocks.concat(data.slice(showCounter + 9, showCounter + 17));
    setShowCounter(showCounter + 8);
  };
  return (
    <div>
      <div className="header">
        <div className="heading">Stocks HERE !!</div>
        <div>
          <button className="button">+ Create</button>
        </div>
      </div>
      {stocks.map((stock) => (
        <>
          <Stock stock={stock} shouldDelete onStockClick={() => {}} />
          <hr />
        </>
      ))}
      <br />
      <br />
      <button onClick={loadMore}> Load More ........</button>
    </div>
  );
};

export default Showcase;
