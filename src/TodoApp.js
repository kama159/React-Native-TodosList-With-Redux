import React from "react";
import { View, StyleSheet } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import rootReducer from "./reducers";

//import devToolsEnhancer from 'remote-redux-devtools';
//import { composeWithDevTools } from 'remote-redux-devtools';
//const composeEnhancers = composeWithDevTools({ realtime: true, port: 19002 });
//const store = createStore(rootReducer, devToolsEnhancer({ realtime: true, port:19002 }));
const store = createStore(rootReducer);

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
