import styles from "./FoodInput.module.css";

const FoodInput = ({ handleChangeEvent }) => {
  return (
    <input
      className={styles.foodInput}
      placeholder="Enter food item here"
      onChange={handleChangeEvent}
    ></input>
  );
};

export default FoodInput;
