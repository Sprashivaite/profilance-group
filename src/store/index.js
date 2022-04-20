import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import newsReducer from "./newsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
