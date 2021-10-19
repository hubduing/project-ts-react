export const setIncrease = (num) => {
  return {
    type: "SET_INCREASE",
    payload:  num
  };
};
export const setDecrease = (num) => {
  return {
    type: "SET_DECREASE",
    payload: num
  };
};
export const setIncrement = () => {
  return {
    type: "INCREMENT",
  };
};
export const setDecrement = () => {
  return {
    type: "DECREMENT",
  };
};