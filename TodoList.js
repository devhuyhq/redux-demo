import React, { Component, ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TodoList extends Component {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo count: {this.props.todos.length}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

export default connect(mapStateToProps)(TodoList);

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 50
  }
});
