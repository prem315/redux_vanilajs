// reducer
function reducer(state, action){
  switch (action.type) {
    case 'ADD':

      break;
    case 'MINUS':

      break;
    case 'RESET':

      break;
    default:
      return state;
  }
}
// create a store
var store = Redux.store(reducer, state);

// actions
