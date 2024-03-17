import Item from "./Item";
import { useState } from "react";

const FoodItems = (props) => {
  let [activeItems, setActiveItems] = useState([]);

  let handleBuy = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyItem={(event) => handleBuy(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
