const INIT_STATE = { carts: [] };

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const exist = state.carts.find(item => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          carts: state.carts.map(item =>
            item.id === action.payload.id
              ? { ...item, qnty: item.qnty + action.payload.qnty }
              : item
          )
        };
      }
      return { ...state, carts: [...state.carts, action.payload] };

    case "RMV_CART":
      return { ...state, carts: state.carts.filter(item => item.id !== action.payload) };

    case "INCREMENT":
      return {
        ...state,
        carts: state.carts.map(item =>
          item.id === action.payload ? { ...item, qnty: item.qnty + 1 } : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        carts: state.carts
          .map(item => item.id === action.payload ? { ...item, qnty: item.qnty - 1 } : item)
          .filter(item => item.qnty > 0)
      };

    default:
      return state;
  }
};

export default cartReducer;
