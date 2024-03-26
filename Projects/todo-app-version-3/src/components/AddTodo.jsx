import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const newName = useRef();
  const newDueDate = useRef();
  const context = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    context.addNewItem(newName.current.value, newDueDate.current.value);
    newName.current.value = "";
    newDueDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" ref={newName} placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" ref={newDueDate} />
          </div>
          <div className="col-2 items-container">
            <button type="submit" className="btn btn-success kg-button">
              <BiMessageAdd></BiMessageAdd>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
