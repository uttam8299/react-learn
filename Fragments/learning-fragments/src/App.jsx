import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  let [textStateVal, setTextState] = useState("User input will appear here");

  const handleChangeEvent = (event) => {
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodInput handleChangeEvent={handleChangeEvent}></FoodInput>
        <p>{textStateVal}</p>
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
