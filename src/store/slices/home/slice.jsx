/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

import REDUX_HOME, {
  contactUsAction,
  getGalleryAction,
  getMapCoordsAction,
  getReviewsAction,
  getServicesAction,
} from './actions';

const initialState = {
  loading: 'not loaded',
  error: null,
  success: false,
  coordinates: [],
  services: [],
  gallery: [],
  reviews: [],
  contactInfo: [],
};

const homeSlice = createSlice({
  name: REDUX_HOME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(contactUsAction.pending, (state) => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(contactUsAction.fulfilled, (state) => {
      state.loading = 'loaded';
      state.success = true;
    });
    builder.addCase(contactUsAction.rejected, (state, payload) => {
      state.loading = 'error';
      state.error = payload;
    });

    builder.addCase(getServicesAction.pending, (state) => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(getServicesAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.services = action.payload;
    });
    builder.addCase(getServicesAction.rejected, (state, payload) => {
      state.loading = 'error';
      state.error = payload;
    });

    builder.addCase(getGalleryAction.pending, (state) => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(getGalleryAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.gallery = action.payload;
    });
    builder.addCase(getGalleryAction.rejected, (state, payload) => {
      state.loading = 'error';
      state.error = payload;
    });

    builder.addCase(getReviewsAction.pending, (state) => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(getReviewsAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.reviews = action.payload;
    });
    builder.addCase(getReviewsAction.rejected, (state, payload) => {
      state.loading = 'error';
      state.error = payload;
    });

    builder.addCase(getMapCoordsAction.pending, (state) => {
      state.loading = 'loading';
      state.error = null;
    });
    builder.addCase(getMapCoordsAction.fulfilled, (state, action) => {
      state.loading = 'loaded';
      state.contactInfo = action.payload;
    });
    builder.addCase(getMapCoordsAction.rejected, (state, payload) => {
      state.loading = 'error';
      state.error = payload;
    });
  },
});

export default homeSlice.reducer;
