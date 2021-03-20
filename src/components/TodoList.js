import React from "react";
import { View, StyleSheet } from "react-native";
import TodoListItem from "./TodoListItem";

import { connect } from "react-redux";
import { toggleTodoAction, setEditingTodoAction } from "../actions";

const TodoList = ({ todos, DispatchToggleTodo, DispatchSetEditingTodo }) => (
  <View style={styles.container}>
    {todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => DispatchToggleTodo(todo.id)}
        onLongPressTodo={() => DispatchSetEditingTodo(todo)}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

const mapStateToProps = (state) => {
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = {
  DispatchToggleTodo: toggleTodoAction,
  DispatchSetEditingTodo: setEditingTodoAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
