import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  let [onDeleteClick, setOnDeleteClick] = useState();

  let handleDelete = (item, event) => {
    debugger;
    todoItems = todoItems.filter((element) => element.name != item.name);
  };

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          todoDate={item.dueDate}
          todoName={item.name}
          handleDelete={(event) => handleDelete(item, event)}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
