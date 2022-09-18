import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  posts: [],
  errors: null,
};
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = action.payload;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    error: (state, action) => {
      state.errors = action.payload;
    },
  },
});
export const { loading, getPosts, errors } = postsSlice.actions;
export default postsSlice.reducer;
