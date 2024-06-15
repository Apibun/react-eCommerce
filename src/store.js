import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./pages/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
