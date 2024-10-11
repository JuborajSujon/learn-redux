const Counter = () => {
  const increment = () => {};

  const decrement = () => {};
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: 0</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

// state - count : 0

// action - increment : 1, decrement : -1, reset : 0

// reducer - increment : count + 1, decrement : count - 1, reset : 0

// dispatch - increment, decrement, reset

// store - reducer

// react-redux, redux-toolkit, redux-thunk
