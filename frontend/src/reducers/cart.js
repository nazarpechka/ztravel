const cartReducer = (
  state = { products: {}, shipping: "", payment: "" },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload]:
            action.payload in state.products
              ? state.products[action.payload] + 1
              : 1,
        },
      };
    case "REMOVE_FROM_CART":
      if (state.products[action.payload] > 1) {
        return {
          ...state,
          products: {
            ...state.products,
            [action.payload]: state.products[action.payload] - 1,
          },
        };
      }
      const { [action.payload]: dummy, ...rest } = state.products;
      return {
        ...state,
        products: rest,
      };
    case "SET_SHIPPING_METHOD":
      return { ...state, shipping: action.payload };
    case "SET_PAYMENT_METHOD":
      return { ...state, payment: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
