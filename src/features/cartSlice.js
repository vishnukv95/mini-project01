import { createSlice, } from "@reduxjs/toolkit";


const initialState ={
    cart:[]

}


const cartSlice = createSlice({

   name:"cart",
   initialState,

reducer:{
    addToCart:(state,action)=>{
     const newCartItem =[...state.cart,action.payload]
     if(newCartItem){
        state.cart = newCartItem
        localStorage.setitem("")
     }
    }
}

})