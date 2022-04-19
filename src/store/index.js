import { applyMiddleware, combineReducers, createStore } from "redux";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
