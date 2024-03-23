import { useState } from "react";

function AddTodo({ handleAddItem }) {
  const [newName, setNewName] = useState();
  const [newDate, setNewDate] = useState();

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleDateChange = (event) => {
    setNewDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleAddItem(newName, newDate);
    setNewName("");
    setNewDate("");
  };

  return (
    <div className="container text-center">
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
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
