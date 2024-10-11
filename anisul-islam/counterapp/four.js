//1. state
//2. dispatch action
//3. reducer
//4. store

//Define store for counter
const { createStore } = require("redux");

//Defining Constants for actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialCounterState = {
  count: 0,
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Create reducer function for counter -> state, action ->
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
store.dispatch(incrementCounter());
