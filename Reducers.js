const defaultState = {counter : 0, tree : {}};

export default function counter(state = defaultState, action) {
    let newState = {};
    switch (action.type) {
    case 'TREE':
        newState = Object.assign({}, state, {tree : action.payload})
        return newState;
        
    case 'INCREMENT':
        newState = Object.assign({}, state, {counter : state.counter + 1})
        return newState;
        
    case 'DECREMENT':

        newState = Object.assign({}, state, {counter : state.counter - 1})
        return newState;

    default:
      return state
  }
}
