import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

export const textSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { changeText } = textSlice.actions;
export default textSlice.reducer;
