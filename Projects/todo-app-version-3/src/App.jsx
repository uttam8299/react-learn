import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, setTodoItem] = useState([]);

  let handleAddItem = (newItem, newDate) => {
    // using currentValue to set state from previous state- React uses async rendering
    setTodoItem((currentValue) => [
      ...currentValue,
      {
        name: newItem,
        dueDate: newDate,
      },
    ]);
  };

  const handleDeleteItem = (itemName) => {
    let newTodoItems = todoItems.filter((item) => item.name != itemName);
    setTodoItem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleAddItem={handleAddItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        handleDelete={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
