// productReducer
const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//constants products
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// state initilaisation
const initialProductState = {
  products: ["Laptop", "Mobile", "Tablet"],
  numberOfProducts: 3,
};

// action creator function -> action, payload
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// reducer function for products
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    default:
      return state;
  }
};

// create store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(getProducts());
store.dispatch(addProduct("Mouse"));
store.dispatch(addProduct("Keyboard"));
store.dispatch(getProducts());
