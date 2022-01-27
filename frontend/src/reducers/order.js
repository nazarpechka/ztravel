const orderReducer = (
  state = { products: [], shipping: {}, payment: {} },
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const indexToAdd = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (indexToAdd !== -1) {
        return {
          ...state,
          products: [
            ...state.products.slice(0, indexToAdd),
            {
              ...state.products[indexToAdd],
              quantity: state.products[indexToAdd].quantity + 1,
            },
            ...state.products.slice(indexToAdd + 1),
          ],
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      }
    case "REMOVE_PRODUCT":
      const indexToRemove = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      if (indexToRemove !== -1) {
        const product = state.products[indexToRemove];
        if (product.quantity > 1) {
          return {
            ...state,
            products: [
              ...state.products.slice(0, indexToRemove),
              {
                ...state.products[indexToRemove],
                quantity: state.products[indexToRemove].quantity - 1,
              },
              ...state.products.slice(indexToRemove + 1),
            ],
          };
        } else {
          return {
            ...state,
            products: [
              ...state.products.slice(0, indexToRemove),
              ...state.products.slice(indexToRemove + 1),
            ],
          };
        }
      }
      return state;
    case "SET_SHIPPING_METHOD":
      return { ...state, shipping: action.payload };
    case "SET_PAYMENT_METHOD":
      return { ...state, payment: action.payload };
    case "RESET_ORDER":
      return { products: [], shipping: {}, payment: {} };
    default:
      return state;
  }
};

export default orderReducer;
