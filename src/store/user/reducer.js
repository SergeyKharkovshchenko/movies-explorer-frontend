import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
    logoutUser: (state, action) => {
       state.currentUser = null
    }
  }
 
});

export const { setUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;
