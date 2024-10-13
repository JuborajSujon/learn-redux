import { createStore } from "redux";
// import counterReducer from "./services/reducers/counterReducer";
import { thunk } from "redux-thunk";
import todosReducer from "./services/reducers/todosReducer";
import { applyMiddleware } from "redux";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
