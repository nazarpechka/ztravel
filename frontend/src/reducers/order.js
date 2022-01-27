const orderReducer = (
  state = { products: {}, shipping: "", payment: "" },
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
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
    case "REMOVE_PRODUCT":
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

export default orderReducer;
