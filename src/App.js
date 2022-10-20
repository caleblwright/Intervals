import "./App.css";
import { propTypes } from "prop-types";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
      <AddItem text="Caleb" number={2} />
      <Info />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text_form"> Type something: </label>
      <input type="text" value={props.text} id="text_form" />
      <p> {props.number} </p>
    </form>
  );
}

//https://www.youtube.com/watch?v=vMeR1aaNhtk&list=PLzMcBGfZo4-nRV61oEu3KfMwWKI571uPT&index=5

AddItem.defaultProps = {
  number: 1,
};

AddItem.propTypes = {
  number: propTypes.number,
};

export default App;
