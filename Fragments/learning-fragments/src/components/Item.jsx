import styles from "./Item.module.css";

const Item = (props) => {
  let { foodItem } = props; // array-destructuring
  return (
    <li className={`${styles["food-list"]} list-group-item`}>
      <span className={styles["food-item"]}>{foodItem}</span>
      {/* Css modules - for component level styling, generates special hash at the end of class to differentiate b/w different components styling of same type */}
    </li>
  );
};

export default Item;
