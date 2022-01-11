import React, { useState } from "react";
import "./styles.css";

const StocksCard = ({ stock, shouldDelete, onStockClick }) => {
  const [visible, setVisible] = useState(false);
  const color = stock[1] - stock[2] > 0 ? "#30ffe3" : "#ff543d";
  const precise = (x) => {
    return Number.parseFloat(x).toPrecision(2);
  };

  return (
    <div
      className="stock-grid"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div>
        <div style={{ color: color }} className="upper-text">
          {stock[0].split("::")[0]}
        </div>
        <span className="tag">{stock[0].split("::")[1]}</span>
      </div>
      <div>
        <div style={{ color: color }} className="upper-text">
          {stock[1]}
        </div>
        <div>
          <span style={{ color: color }}>| ^ |</span>
          {precise((stock[1] - stock[2]) / stock[2])}
        </div>
      </div>
      {visible && (
        <div className="stock-grid-cover">
          <button onClick={() => onStockClick()} className="box">
            {shouldDelete ? "D" : "A"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StocksCard;
