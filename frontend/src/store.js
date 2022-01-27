import { createStore } from "redux";
import reducers from "./reducers";

const persistedState = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store"))
  : {};

const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
});

store.subscribe(() => {
  console.log("state", store.getState());
});
export default store;
