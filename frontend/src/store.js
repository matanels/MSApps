import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./redux/imageSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    images: imageSlice,
  },
});

// Export the configured store as the default export
export default store;
