// colocando apenas o caminho da pasta, ele vai pegar o arquivo index.js e fazer do destruct automaticamente
import {
  ADD_TODO_ACTION,
  TOGGLE_TODO_ACTION,
  UPDATE_TODO_ACTION,
} from "../actions";

let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      if (action.text === "") return state;

      const newTodo = {
        id: nextId++,
        text: action.text,
        done: false,
      };
      return [...state, newTodo];

    case TOGGLE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.todoId) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.todo.id) {
          return action.todo;
        }
        return todo;
      });

    default:
      return state;
  }
};

export default todoListReducer;
