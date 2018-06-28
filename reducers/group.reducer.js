const initialState = {
  groups: [],
  loading: false
};

export const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        ...state,
        loading: true
      };
    case "ADD_GROUP":
      return {
        ...state,
        loading: false,
        groups: [...state.groups, action.group]
      };
    case "ADD_ERROR":
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
