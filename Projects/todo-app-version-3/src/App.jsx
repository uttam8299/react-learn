import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItem] = useState([]);
  let [textInput, setTextInput] = useState();
  let [dateInput, setDateInput] = useState();

  let handleInput = (event) => {
    let newInput = event.target.value;
    setTextInput(newInput);
  };

  let handleDate = (event) => {
    let newDate = event.target.value;
    setDateInput(newDate);
  };

  let handleAddItem = (event) => {
    let newItem = {
      name: textInput,
      dueDate: dateInput,
    };
    let newItems = [...todoItems, newItem];
    setTodoItem(newItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo
        handleAddItem={handleAddItem}
        handleDate={handleDate}
        handleInput={handleInput}
      />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
