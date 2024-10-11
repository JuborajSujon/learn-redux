// state - count: 0
// action - increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

//Defining Constants for actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const ADD_USER = "ADD_USER";

const initialCounterState = {
  count: 0,
  users: ["one", "two"],
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

const incrementCountByValueAction = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
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

    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
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

store.dispatch(incrementCountByValueAction(5));

store.dispatch(addUser("three"));
