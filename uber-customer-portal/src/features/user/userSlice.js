import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  customerId: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.customerId = action.payload._id;
    },
    logoutUser: (state) => {
      state.userInfo = null;
      state.customerId = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
