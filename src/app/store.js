import { configureStore } from "@reduxjs/toolkit";

//reducers
import cartReducer from "../reducers/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
