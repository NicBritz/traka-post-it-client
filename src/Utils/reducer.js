export const setCurrentUser = (uid) => ({
  type: "SET_CURRENT_USER",
  value: uid,
});

const globalReducer = (state = { currentUser: -1 }, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.value,
      };

    default:
      return state;
  }
};

export default globalReducer;
