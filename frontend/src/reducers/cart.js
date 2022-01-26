const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        [action.payload]:
          action.payload in state ? state[action.payload] + 1 : 1,
      };
    case "REMOVE_FROM_CART":
      if (state[action.payload] > 1) {
        return { ...state, [action.payload]: state[action.payload] - 1 };
      }
      const { [action.payload]: dummy, ...rest } = state;
      return rest;
    default:
      return state;
  }
};

export default cartReducer;
