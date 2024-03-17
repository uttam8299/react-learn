import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  return (
    <input
      className={styles.foodInput}
      placeholder="Enter food item here"
      onKeyDown={handleOnKeyDown}
    ></input>
  );
};

export default FoodInput;
