import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotal } from "./redux/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

store.dispatch(getTotal());
