const initialState = {
  todos: [],
  loading: false
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    default:
      return state;
  }
};
