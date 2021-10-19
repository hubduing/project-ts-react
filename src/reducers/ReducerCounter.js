const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let incState = state + 1
      return incState
    case 'DECREMENT':
      let decState = state - 1
      return decState
    default:
      return state
  }
};
export default counter;