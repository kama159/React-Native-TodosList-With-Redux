export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const addTodoAction = (text) => ({
  type: ADD_TODO_ACTION,
  text,
});

export const TOGGLE_TODO_ACTION = "TOGGLE_TODO_ACTION";
export const toggleTodoAction = (todoId) => ({
  type: TOGGLE_TODO_ACTION,
  todoId,
});

export const SET_TODO_TEXT_ACTION = "SET_TODO_TEXT_ACTION";
export const setTodoTextAction = (text) => ({
  type: SET_TODO_TEXT_ACTION,
  text,
});

export const SET_EDITING_TODO_ACTION = "SET_EDITING_TODO_ACTION";
export const setEditingTodoAction = (todo) => ({
  type: SET_EDITING_TODO_ACTION,
  todo,
});

export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const updateTodoAction = (todo) => ({
  type: UPDATE_TODO_ACTION,
  todo,
});
