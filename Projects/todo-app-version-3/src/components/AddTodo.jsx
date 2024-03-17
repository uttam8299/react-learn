import { useState } from "react";

function AddTodo({ handleAddItem, handleDate, handleInput }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleInput}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDate} />
        </div>
        <div className="col-2 items-container">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddItem}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
