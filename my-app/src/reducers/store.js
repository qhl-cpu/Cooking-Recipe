import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import reviewsReducer from './users/reviewsReducer'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    reviews: reviewsReducer
  },
  devTools: true
});
