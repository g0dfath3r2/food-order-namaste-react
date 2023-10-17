import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.unshift(action.payload);
    },
    removeItem: (state, action) => {    
        const index = current(state).items.indexOf(action.payload);
        if(index > -1){
            state.items.splice(index, 1)
        }
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
