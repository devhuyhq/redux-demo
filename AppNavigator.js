import { connect } from "react-redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { StackNavigator } from "./StackNavigator";

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(StackNavigator, "root");

const mapStateToProps = state => ({
  state: state.nav
});

export const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
