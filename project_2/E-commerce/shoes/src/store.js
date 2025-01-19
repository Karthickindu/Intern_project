// import { createStore } from 'redux';
// import cartReducer from './reducers/cartReducer';

// const store = createStore(cartReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
