import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      image:
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cost: "30",
      name: "Jeans",
      gender: "man",
    },
    {
      image:
        "https://images.unsplash.com/photo-1467043237213-65f2da53396f?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cost: "30",
      name: "Jeans",
      gender: "man",
    },
  ],
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlicer.actions;

export default cartSlicer.reducer;
