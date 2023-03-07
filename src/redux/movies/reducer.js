import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    currentMovie: null
  },
  reducers: {
    setCurrentMovie: (state, action) => {
      state.currentMovie = action.payload
    }
  }
 
});

export const { setCurrentMovie } = moviesSlice.actions;
export default moviesSlice.reducer;


