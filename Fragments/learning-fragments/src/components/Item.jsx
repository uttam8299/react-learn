const Item = (props) => {
  let { foodItem } = props; // array-destructuring
  return <li className="list-group-item">{foodItem}</li>;
};

export default Item;
