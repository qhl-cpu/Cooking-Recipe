import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {getInitialReviewsAsync,getReviewsAsync,
        addReviewAsync,updateReviewAsync} from './thunks';

const INITIAL_STATE = {
  reviews: [],
  getUsers: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'reviews',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsAsync.pending, (state, action) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getReviewsAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.reviews = action.payload;
      })
      .addCase(getReviewsAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(getInitialReviewsAsync.pending, (state, action) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getInitialReviewsAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.reviews = action.payload;
      })
      .addCase(getInitialReviewsAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addReviewAsync.pending, (state, action) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addReviewAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.reviews.push(action.payload);
        //state.reviews[action.payload.reviewIndex].review.push(action.payload.review);
      })
      .addCase(addReviewAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(updateReviewAsync.pending, (state, action) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(updateReviewAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        state.reviews[action.payload.reviewIndex].review.push(action.payload.review);
      })
      .addCase(updateReviewAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default usersSlice.reducer;
