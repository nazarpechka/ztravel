export const addToCart = (productId) => {
  return { type: "ADD_TO_CART", payload: productId };
};

export const removeFromCart = (productId) => {
  return { type: "REMOVE_FROM_CART", payload: productId };
};

export const setShippingMethod = (shippingId) => {
  return { type: "SET_SHIPPING_METHOD", payload: shippingId };
};

export const setPaymentMethod = (paymentId) => {
  return { type: "SET_PAYMENT_METHOD", payload: paymentId };
};
