import React from "react";

function CounterDisplay({ count }) {
  return <h1>Count: {count}</h1>;
}

function ButtonInc({ handleCountIncrement, count }) {
  return (
    <button disabled={count === 10} onClick={handleCountIncrement}>
      INC
    </button>
  );
}

function ButtonDec({ handleCountDecrement, count }) {
  return (
    <button disabled={count <= 0} onClick={handleCountDecrement}>
      DEC
    </button>
  );
}

function ButtonReset({ handleReset }) {
  return <button onClick={handleReset}>RESET</button>;
}

function Counter() {
  const [count, setCount] = React.useState(0);

  const handleCountIncrement = () => {
    setCount(count + 1);
  };

  const handleCountDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <ButtonInc count={count} handleCountIncrement={handleCountIncrement} />

      <ButtonDec count={count} handleCountDecrement={handleCountDecrement} />

      <ButtonReset handleReset={handleReset} />
    </div>
  );
}

export default Counter;
