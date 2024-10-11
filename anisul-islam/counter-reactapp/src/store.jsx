import { createStore } from "./../node_modules/redux/src/createStore";
import counterReducer from "./services/reducers/counterReducer";

const store = createStore(counterReducer);

export default store;
