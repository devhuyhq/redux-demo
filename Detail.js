import React, { Component, ReactNode } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import FCM, { NotificationActionType } from "react-native-fcm";
import { addGroupEvery1Second, addGroup } from "./actions/group.action";

class Detail extends Component {
  render(): ReactNode {
    if (this.props.loading) return <ActivityIndicator />;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Group count: {this.props.groups.length}</Text>
        <TodoList />
        <TouchableOpacity onPress={this.addNewTodo}>
          <Text style={styles.text}>Add new todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.addNewGroup}>
          <Text style={styles.text}>Add new group</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount = () => {
    FCM.getFCMToken().then(token => {
      console.log(token);
    });
  };

  showLocalNotification = () => {
    FCM.presentLocalNotification({
      channel: "default",
      id: new Date().valueOf().toString(), // (optional for instant notification)
      title: "Test Notification with action", // as FCM payload
      body: "Force touch to reply", // as FCM payload (required)
      priority: "high", // as FCM payload
      badge: 10, // as FCM payload IOS only, set 0 to clear badges
      number: 10, // Android only
      ticker: "My Notification Ticker", // Android only
      auto_cancel: true, // Android only (default true)
      large_icon:
        "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg", // Android only
      icon: "ic_launcher", // as FCM payload, you can relace this with custom icon you put in mipmap
      big_text: "Show when notification is expanded", // Android only
      sub_text: "This is a subText", // Android only
      color: "red", // Android only
      vibrate: 300, // Android only default: 300, no vibration if you pass 0
      wake_screen: true, // Android only, wake up screen when notification arrives
      group: "group", // Android only
      picture:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png", // Android only bigPicture style
      my_custom_data: "my_custom_field_value", // extra data you want to throw
      lights: true, // Android only, LED blinking (default false)
      show_in_foreground: true // notification when app is in foreground (local & remote)
    });
  };

  addNewTodo = () => {
    this.showLocalNotification();
    this.props.dispatch({
      type: "ADD_TODO",
      todo: { content: "ABC" }
    });
  };

  addNewGroup = () => {
    this.props.dispatch(addGroup());
  };
}

const mapStateToProps = state => {
  return {
    groups: state.group.groups,
    loading: state.group.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(Detail);

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
