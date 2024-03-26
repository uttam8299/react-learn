import { useContext, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const context = useContext(TodoItemsContext);
  const todoItems = context.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
