import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onChangeText, value }) => (
  <TextInput style={styles.input} onChangeText={onChangeText} value={value} />
);

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 10,
  },
});

export default Input;
