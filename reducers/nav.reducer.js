import { StackNavigator } from "../StackNavigator";

const initialState = StackNavigator.router.getStateForAction(
  StackNavigator.router.getActionForPathAndParams("Main")
);

export const navReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = StackNavigator.router.getStateForAction(action, state);
  }
  return nextState || state;
};
