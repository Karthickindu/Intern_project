const initialState = {
  cartItems: [], 
  totalAmount: 0,
};


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      let updatedCartItems;
      if (existingItemIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [
          
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        totalAmount: state.totalAmount + action.payload.price,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
          
        ),
        totalAmount:  
          state.totalAmount - action.payload.quantity 
           * action.payload.price,
      };

    case "UPDATE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
        totalAmount: state.cartItems.reduce((acc, item) => {
          const quantity = item.id === action.payload.id ? action.payload.quantity : item.quantity
          acc += quantity * item.price;
          return acc;
        }, 0), 
      };
    case "CLEAR_ALL_CART_ITEMS":
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
