import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./slicer/navigationSlicer";
import clothesReducer from "./slicer/clothesSlicer";
import cartReducer from "./slicer/cartSlicer";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    clothes: clothesReducer,
    cart: cartReducer,
  },
});
