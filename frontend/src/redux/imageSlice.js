import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator for fetching images by category
export const fetchImagesByCategory = createAsyncThunk(
  "images/fetchImagesByCategory",
  async ({ category, page, limit, sortBy }) => {
    try {
      const config = {
        headers: {
          "sort-by": sortBy,
          "page-number": page,
          "limit-number": limit,
        },
      };
      const { data } = await axios.get(
        `/api/images?category=${category}`,
        config
      );
      return data;
    } catch (error) {
      throw new Error("Failed to fetch images");
    }
  }
);

const initialState = {
  images: [], // Array to store fetched images
  loading: false, // Flag to indicate if images are being fetched
  error: "", // Error message if fetching images fails
  currentPage: 1, // Current page number for pagination
  category: "", // Selected category for filtering images
  limit: 9, // Number of images per page
  sortBy: "", // Sorting parameter for the images
};

// Create a slice for managing images state
const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesByCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchImagesByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImagesByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Extract the action creators and reducer from the slice
export const { setCurrentPage, setCategory, setSort } = imageSlice.actions;
export default imageSlice.reducer;
