import {
  SET_TODO_TEXT_ACTION,
  ADD_TODO_ACTION,
  SET_EDITING_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "../actions";

const INITIAL_STATE = {
  id: null,
  text: "",
  done: false,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODO_TEXT_ACTION:
      return { ...state, text: action.text };
    case ADD_TODO_ACTION:
    case UPDATE_TODO_ACTION:
      return INITIAL_STATE;
    case SET_EDITING_TODO_ACTION:
      return action.todo;
    default:
      return state;
  }
};

export default todoReducer;
