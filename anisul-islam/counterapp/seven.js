// productReducer
const { createStore, combineReducers } = require("redux");

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

// Store  -> importance function
//1. getState() -> find state from store
//2. dispatch(action) -> change state
//3. subscribe(listener) -> listen for changes

// create store
// const store = createStore(productReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// cartReducer

// cart constants
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// state initilaisation
const initialCartState = {
  cart: ["Laptop", "Mobile", "Tablet"],
  numberOfCart: 3,
};

// action creator function -> action, payload
const getCart = () => {
  return {
    type: GET_CART,
  };
};

const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

// reducer function for cart
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
        numberOfCart: state.numberOfCart - 1,
      };
    default:
      return state;
  }
};

// Combine cart and product reducer function
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// create store
// const store = createStore(cartReducer);

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// dispatch action
store.dispatch(getCart());
store.dispatch(addToCart("Mouse"));
store.dispatch(addToCart("Keyboard"));
store.dispatch(removeFromCart("Laptop"));
store.dispatch(removeFromCart("Keyboard"));
store.dispatch(getCart());

// dispatch action
store.dispatch(getProducts());
store.dispatch(addProduct("Mouse"));
store.dispatch(addProduct("Keyboard"));
store.dispatch(getProducts());
