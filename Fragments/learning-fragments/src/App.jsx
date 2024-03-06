import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
