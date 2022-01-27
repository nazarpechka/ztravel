export const addProduct = (productId) => {
  return { type: "ADD_PRODUCT", payload: productId };
};

export const removeProduct = (productId) => {
  return { type: "REMOVE_PRODUCT", payload: productId };
};

export const setShippingMethod = (shippingId) => {
  return { type: "SET_SHIPPING_METHOD", payload: shippingId };
};

export const setPaymentMethod = (paymentId) => {
  return { type: "SET_PAYMENT_METHOD", payload: paymentId };
};
