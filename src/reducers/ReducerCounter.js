const counter = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      let incState = state + 1
      return incState
    case 'DECREMENT':
      let decState = state - 1
      return decState < 0 ? 0 : decState
    default:
      return state
  }
};
export default counter;