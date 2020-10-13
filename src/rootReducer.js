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

function rootReducer(state = INITIAL_STATE, action) {
  let payload = action.payload;
  switch (action.type) {

    case "ADD_ITEM":
      for(let i = 0; i < state.cart.length; i++){
        if(state.cart[i].id ===  payload.id){
          return {...state, cart:[...state.cart, state.cart[i].qty  = state.cart[i].qty + 1]}
        }
      }
      return {...state, cart : [...state.cart, payload ]};

    case "REMOVE_ITEM":
      return {...state, cart: [...state.cart.filter(product => product.id !== payload.id)]};

    default:
      return state;
  }
}

export default rootReducer;
