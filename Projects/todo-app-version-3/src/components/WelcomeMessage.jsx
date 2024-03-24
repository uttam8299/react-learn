const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 && <h1>Enjoy your day</h1>;
};

export default WelcomeMessage;
