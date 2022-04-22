import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import newsReducer from "./newsReducer";
import filteredNewsReducer from "./filteredNewsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  newsReducer,
  filteredNewsReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
