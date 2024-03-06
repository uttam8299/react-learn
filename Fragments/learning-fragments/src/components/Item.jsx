import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyItem }) => {
  // let { foodItem } = props; // array-destructuring
  return (
    <li className={`${styles["food-list"]} list-group-item`}>
      <span className={styles["food-item"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyItem}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
