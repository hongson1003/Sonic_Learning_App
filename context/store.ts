import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer, userSliceReducer } from "./slices";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    cart: cartSliceReducer,
  },
});

export default store;
