// 1. state
// 2. dispatch action
// 3. reducer
// 4. store

//Defining Constants for actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state

const count = 0;

const initialCounterState = {
  count: count,
  users: [
    {
      name: "one",
      age: 20,
    },
    {
      name: "two",
      age: 21,
    },
  ],
};

const initialUserState = {
  users: [
    {
      name: "one",
      age: 20,
    },
    {
      name: "two",
      age: 21,
    },
  ],
};

// action - Object with type and payload

//INCREMENT COUNTER

//action creater function for increment counter return an object

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

//DECREMENT COUNTER

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Add user action creator function

const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "three",
      age: 22,
    },
  };
};

// add user action creator function with pass value parameter

const addUser2 = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

const addUser3 = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};
