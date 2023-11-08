import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [
    {
      title: "Man",
      link: "/man",
    },
    {
      title: "Woman",
      link: "/woman",
    },
  ],
};

export const navigationSlicer = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
});

export default navigationSlicer.reducer;
