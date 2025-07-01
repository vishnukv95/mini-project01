import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../features/foodSlice";
import  useReducer  from "../features/userSlice";
import  cartReducer from "../features/cartSlice"


export const store= configureStore({
    reducer:{
        food:foodReducer,
        user:useReducer,
        cart:cartReducer,
    }
})

