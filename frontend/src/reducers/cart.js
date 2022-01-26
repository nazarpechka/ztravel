const cartReducer = (state = { products: {}, shipping: "" }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        products: {
          ...state.products,
          [action.payload]:
            action.payload in state.products
              ? state.products[action.payload] + 1
              : 1,
        },
        shipping: state.shipping,
      };
    case "REMOVE_FROM_CART":
      if (state.products[action.payload] > 1) {
        return {
          products: {
            ...state.products,
            [action.payload]: state.products[action.payload] - 1,
          },
          shipping: state.shipping,
        };
      }
      const { [action.payload]: dummy, ...rest } = state.products;
      return { products: rest, shipping: state.shipping };
    case "SET_SHIPPING_METHOD":
      return { ...state, shipping: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
