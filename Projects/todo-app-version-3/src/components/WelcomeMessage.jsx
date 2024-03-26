import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const context = useContext(TodoItemsContext);
  const todoItems = context.todoItems;
  return todoItems.length === 0 && <h1>Enjoy your day</h1>;
};

export default WelcomeMessage;
