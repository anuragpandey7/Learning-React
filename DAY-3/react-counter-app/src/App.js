import Counter from "./Components/Counter/Counter";
import ToDo from "./Components/Todo/ToDo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <hr />
      <ToDo />
    </div>
  );
}

export default App;
