import Item from "./Item";

const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
