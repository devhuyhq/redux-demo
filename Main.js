import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";

class Main extends Component {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.xxx.length}</Text>
        <TodoList />
        <TouchableOpacity onPress={this.addNewTodo}>
          <Text style={styles.text}>Add new todo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNewTodo = () => {
    this.props.dispatch({
      type: "ADD_TODO",
      todo: { content: "ABC" }
    });
  };
}

const mapStateToProps = state => {
  return {
    xxx: state.todos
  };
};

export default connect(
  mapStateToProps,
  null
)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 60
  }
});
