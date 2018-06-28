import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "../reducers/todo.reducer";
import { combineReducers } from "redux";
import { groupReducer } from "../reducers/group.reducer";
import thunk from "redux-thunk";
import { navReducer } from "../reducers/nav.reducer";
import { middleware } from "../AppNavigator";

export const store = createStore(
  combineReducers({
    todo: todoReducer,
    group: groupReducer,
    nav: navReducer
  }),
  applyMiddleware(thunk, middleware)
);
