// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

//Defining Constants for actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialCounterState = {
  count: 0,
};

const incrementCounterActioin = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterActioin = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

// Creating reducer function

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

// Store  -> importance function
//1. getState() -> find state from store
//2. dispatch(action) -> change state
//3. subscribe(listener) -> listen for changes

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(incrementCounterActioin());
store.dispatch(incrementCounterActioin());
store.dispatch(incrementCounterActioin());
store.dispatch(decrementCounterActioin());
store.dispatch(resetCounterAction());
