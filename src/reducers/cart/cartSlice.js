import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productList: [],
};

//createSlice es una funcion que me permite crear el estado inicial y los reducers
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.totalCount = state.totalCount + 1;
    },
    removeProductFromCart: (state, action) => {
      //del payload recibo un id y lo guardo en productId
      //y despues filtro productList para que me devuelva todos los productos menos productId
      const productId = action.payload;
      state.totalCount -= 1;
      state.productList = state.productList.filter(
        (product) => product.id !== productId
      );
    },
    /* totalPrice: (state, action) => {
      [...state.productList, action.payload].reduce(
        (acc, product) => acc + product.price.current.value,
        0
      );
    }, */
  },
});

/* export const totalPrice = (productList) => {
  productList.reduce((acc, product) => acc + product.price.current.value, 0);
};
console.log(totalPrice); */

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
