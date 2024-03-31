import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter); // useSelector - this hook is used to get the store value;  choose specific property of store because app will paint the component on updation of the property

  return <p className="lead mb-4">Counter current value: {counter}</p>;
};

export default DisplayCounter;
