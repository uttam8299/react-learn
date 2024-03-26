import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        name: action.payload.newItem,
        dueDate: action.payload.newDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsReducerProvider = ({ children }) => {
  let [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  let addNewItem = (newItem, newDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        newItem,
        newDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: itemName },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsReducerProvider;
