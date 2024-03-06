import Item from "./Item";

const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.foodItems.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyItem={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
