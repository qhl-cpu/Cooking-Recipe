import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {getInitialReviewsAsync,getReviewsAsync} from './thunks';

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
  }
});

export default usersSlice.reducer;
