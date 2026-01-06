import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  cartreducer: cartReducer,
});

export default rootReducer;
