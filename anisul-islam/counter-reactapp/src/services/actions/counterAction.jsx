import {
  INCREMENT,
  DECREMENT,
  RESET,
} from "../../services/contants/counterConstant";
export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
