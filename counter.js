// reducer
function counter(state, action){
  var nextState = {
    counter: state.counter
  }
  switch (action.type) {
    case 'ADD':
        nextState.counter = state.counter + 1;
        return nextState;
      break;
    case 'MINUS':
        nextState.counter = state.counter - 1;
        return nextState;
      break;
    case 'RESET':
        nextState.counter = 0;
        return nextState;
      break;
    default:
      return state;
  }
}
// create a state
var state = { counter: 0 }
// create a store
var store = Redux.createStore(counter, state);

var counterEl = document.getElementById('counter');
// render function
function render(){
  var state = store.getState();
  counterEl.innerHTML = state.counter.toString();
}
// subscribe render function
store.subscribe(render);

// actions
document.getElementById('add')
  .addEventListener('click', function(){
    store.dispatch({type: 'ADD'})
  })
document.getElementById('minus')
  .addEventListener('click', function(){
    store.dispatch({type: 'MINUS'})
  })
document.getElementById('reset')
  .addEventListener('click', function(){
    store.dispatch({type: 'RESET'})
  })
