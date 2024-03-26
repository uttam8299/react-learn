import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [todoItems, setTodoItem] = useState([]);

  let addNewItem = (newItem, newDate) => {
    // using currentValue to set state from previous state- React uses async rendering
    setTodoItem((currentValue) => [
      ...currentValue,
      {
        name: newItem,
        dueDate: newDate,
      },
    ]);
  };

  const deleteItem = (itemName) => {
    let newTodoItems = todoItems.filter((item) => item.name != itemName);
    setTodoItem(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
