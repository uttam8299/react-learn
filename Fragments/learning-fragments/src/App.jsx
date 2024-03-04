import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems}></FoodItems>
    </>
  );
}

export default App;
