import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { addTodoAction, setTodoTextAction, updateTodoAction } from "../actions";

import Input from "./Input";

class TodoForm extends React.Component {
  onPress() {
    const { todo } = this.props;
    if (todo.id) {
      return this.props.dispatchUpdateTodo(todo);
    }
    return this.props.dispatchAddTodo(todo.text);
  }

  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={(text) => this.onChangeText(text)}
            value={text}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.onPress()}
          style={styles.buttonContainer}
        >
          <View
            style={[styles.buttonView, id ? styles.buttonViewEditing : null]}
          >
            <Text style={styles.buttonText}>{id ? "Editar" : "Adicionar"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 5,
  },
  buttonContainer: {
    flex: 2,
  },
  buttonView: {
    backgroundColor: "blue",
    alignItems: "center",
    borderWidth: 1,
    marginLeft: 5,
    borderRadius: 10,
  },
  buttonViewEditing: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchAddTodo: text => dispatch(addTodoAction(text))
//     }
// }

// equivalente ao codigo comentado acima
const mapDispatchToProps = {
  dispatchAddTodo: addTodoAction,
  dispatchSetTodoText: setTodoTextAction,
  dispatchUpdateTodo: updateTodoAction,
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
