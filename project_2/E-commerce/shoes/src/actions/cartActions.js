export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};


export const updateCartItem = (item) => {
  return {
    type: 'UPDATE_CART_ITEM',
    payload: item,
  };
};

export const clearAllCartItems = () => {
  return {
    type: 'CLEAR_ALL_CART_ITEMS',
  }
}
