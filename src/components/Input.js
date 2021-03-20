import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onChangeText, value }) => (
  <TextInput
    placeholder="Digite uma tarefa"
    style={styles.input}
    onChangeText={onChangeText}
    value={value}
  />
);

const styles = StyleSheet.create({
  input: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
  },
});

export default Input;
