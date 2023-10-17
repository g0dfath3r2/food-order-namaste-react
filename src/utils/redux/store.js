import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const CartStore = configureStore({
    reducer: {
        cart: CartReducer,
    }
})

export default CartStore;