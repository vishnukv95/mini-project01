import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../features/foodSlice";
import  useReducer  from "../features/userSlice";
import  cartReducer from "../features/cartSlice"
import themeReducer from "../features/themeSlice"


export const store= configureStore({
    reducer:{
        food:foodReducer,
        users:useReducer,
        cart:cartReducer,
        theme:themeReducer,
    
    }
})

