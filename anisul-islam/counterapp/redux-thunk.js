// async action - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api call

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").thunk;

// Constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
const API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// Initial State
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// Action Creators
const getTodosRequest = () => ({ type: GET_TODOS_REQUEST });
const getTodosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  payload: todos,
});
const getTodosFailure = (error) => ({
  type: GET_TODOS_FAILURE,
  payload: error,
});

// Reducer
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case GET_TODOS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Async Action Creator (Thunk)
const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_BASE_URL)
      .then((response) => {
        const todos = response.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(getTodosFailure(errorMsg));
      });
  };
};

// Create Store with Thunk Middleware
const store = createStore(todosReducer, applyMiddleware(thunk));

// Subscribe to store updates
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// Dispatch the async action
store.dispatch(fetchData());

// store.dispatch(getTodosRequest());
// store.dispatch(getTodosSuccess([1, 2, 3]));
// store.dispatch(getTodosFailure("Something went wrong"));

// store
