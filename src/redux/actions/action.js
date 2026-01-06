export const ADD = (item) => ({ type: "ADD_CART", payload: item });
export const DLT = (id) => ({ type: "RMV_CART", payload: id });
export const INC = (id) => ({ type: "INCREMENT", payload: id });
export const DEC = (id) => ({ type: "DECREMENT", payload: id });
