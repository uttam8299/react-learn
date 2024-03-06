import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleChangeEvent = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      className={styles.foodInput}
      placeholder="Enter food item here"
      onChange={handleChangeEvent}
    ></input>
  );
};

export default FoodInput;
