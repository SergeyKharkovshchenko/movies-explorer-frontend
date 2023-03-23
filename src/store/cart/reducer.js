//  вспомогательная функция (абстракция), она сразу предоставляет экшены, редюсеры и тд
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
// стейт по имени cart, в котором лежит itemsInCart =
// или cart это просто свойство глобального стейта (объекта)
  name: 'cart',
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    // добавляем экшены. action = всегда равен объекту у кот всегда обязательно есть поле type
    // и у нас у action есть доп поле, мы его назовем payload
    // в payload у нас будет игра, которую мы сюда передадим
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      // идем по текущему стейту и удаляет ту игру (с пом айди игры)
      // на которую мы нажали (передали в пейлоад)
      state.itemsInCart = state.itemsInCart.filter((game) => game.id !== action.payload);
    },
  },
});

// импортируем экшены из картслайс экшенс и по деф редьюсер
export const { setItemInCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
