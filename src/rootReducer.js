const INITIAL_STATE = {
  cart: [],
};

//initial state holds cart with array of item objects

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {...state, action.payload};

    case "REMOVE_ITEM":
      return {...state, action.payload};

    default:
      return state;
  }
}

export default rootReducer;
