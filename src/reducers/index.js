import { combineReducers } from "redux";

import todoListReducer from "./todoListReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoListReducer,
  todo: todoReducer,
});

export default rootReducer;
