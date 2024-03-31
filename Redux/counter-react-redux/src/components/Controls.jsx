import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch(); // this hook provides dispatch method which is used to dispath action to reducer of store

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        -1
      </button>
      {/* <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link">
        Link
      </button> */}
    </div>
  );
};

export default Controls;
