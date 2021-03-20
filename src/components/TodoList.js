import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import TodoListItem from "./TodoListItem";

import { connect } from "react-redux";
import { toggleTodoAction, setEditingTodoAction } from "../actions";

const TodoList = ({ todos, DispatchToggleTodo, DispatchSetEditingTodo }) => (
  <ScrollView style={styles.container}>
    {todos.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => DispatchToggleTodo(todo.id)}
        onLongPressTodo={() => DispatchSetEditingTodo(todo)}
      />
    ))}
    <View style={styles.paddingBottom}></View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  paddingBottom: {
    paddingBottom: 75,
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
