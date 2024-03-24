import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ handleAddItem }) {
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleDateChange = (event) => {
    setNewDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    handleAddItem(newName, newDate);
    setNewName("");
    setNewDate("");
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Todo Here"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={newDate} onChange={handleDateChange} />
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
