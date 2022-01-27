import orderReducer from "./order";
import { combineReducers } from "redux";

const reducers = combineReducers({
  order: orderReducer,
});

export default reducers;
