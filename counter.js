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
// create a state
var state = { counter: 0 }
// create a store
var store = Redux.createStore(counter, state);

var counterEl = document.getElementById('counter');
// render function
function render(){
  var state = store.getState();
  counterEl.innerHTML = state.count.toString();
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
