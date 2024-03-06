import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleItemOnButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} bought`);
  };

  // let { foodItem } = props; // array-destructuring
  return (
    <li className={`${styles["food-list"]} list-group-item`}>
      <span className={styles["food-item"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleItemOnButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
