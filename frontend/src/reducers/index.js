import cartReducer from "./cart";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cart: cartReducer,
});

export default reducers;
