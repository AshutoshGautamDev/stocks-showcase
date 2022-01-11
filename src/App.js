import React from "react";
import "./App.css";
import Stock from "./components/Stock";
import data from "./assets/data.json";
import Showcase from "./components/Showcase";
function App() {
  const stocks = data;
  return (
    <div className="App">
      <Showcase
        data={data.sort((a, b) => {
          if (a[0] > b[0]) return 1;
          if (a[0] < b[0]) return -1;
          return 0;
        })}
      />
    </div>
  );
}

export default App;
