import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length == 0 ? <h1>I am still hungry...</h1> : null}
      {/* null - here value can be any falsy value, falsy value --> null, undefined, empty, NaN, zero */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
