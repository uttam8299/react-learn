import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetables</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </>
  );
}

export default App;
