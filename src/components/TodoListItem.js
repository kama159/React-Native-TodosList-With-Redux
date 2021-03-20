import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
  <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
    <View style={styles.container}>
      <Text
        style={[styles.text, todo.done ? styles.lineThrough : null]}
        key={todo.id}
      >
        {todo.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "blue",
  },
  lineThrough: {
    textDecorationLine: "line-through",
    color: "green",
  },
});

export default TodoListItem;
