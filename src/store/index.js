// создаем стор (configureStore раньше назывался create store)
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import moviesReducer from './movies/reducer';
import userReducer from './user/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    movies: moviesReducer,
    user: userReducer,
  },
});
