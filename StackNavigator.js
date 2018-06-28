import Main from "./Main";
import { createStackNavigator } from "react-navigation";
import Detail from "./Detail";

export const StackNavigator = createStackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail }
});
