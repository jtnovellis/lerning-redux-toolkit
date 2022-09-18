import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import textReducer from './text/textSlice';
import postsReducer from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    counterReducer,
    textReducer,
    postsReducer,
  },
});
