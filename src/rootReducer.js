// const INITIAL_STATE = {
//   cart: [{
//     id: "ownat1w",
//     name: "Ownboard AT1W",
//     brand: "Ownboard",
//     price: "799.00",
//     img: "/img/boards/ownboard-at1w.jpg",
//     qty: 1
//   }, {
//     id: "meeponlspro",
//     name: "Meepo NLS Pro",
//     brand: "Meepo",
//     price: "689.00",
//     img: "/img/boards/meepo-nls-pro.jpg",
//     qty: 1
//   }],
//   subtotal: 1488.00
// };

const INITIAL_STATE = {
  cart: [],
  subtotal: 0
}

//initial state holds cart with array of item objects - hardcoded initial state for now

//TODO: Fill out actions!

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {...state, ...action.payload};

    case "REMOVE_ITEM":
      return {...state, ...action.payload};

    case "INCREMENT_QTY":
      return {...state, ...action.payload};
    
    case "DECREMENT_QTY":
      return {...state};

    default:
      return state;
  }
}

export default rootReducer;
