import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "../features/foodSlice";
import  useReducer  from "../features/userSlice";


export const store= configureStore({
    reducer:{
        food:foodReducer,
        user:useReducer,
    }
})

