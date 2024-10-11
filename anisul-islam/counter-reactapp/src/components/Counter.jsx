import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCounter());
  };

  const decrement = () => {
    dispatch(decrementCounter());
  };

  const reset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

// state - count : 0

// action - increment : 1, decrement : -1, reset : 0

// reducer - increment : count + 1, decrement : count - 1, reset : 0

// dispatch - increment, decrement, reset

// store - reducer

// providing store to main.jsx

// react-redux, redux-toolkit, redux-thunk
