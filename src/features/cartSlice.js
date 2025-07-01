import { createSlice, } from "@reduxjs/toolkit";


const initialState ={
    cart:JSON.parse(localStorage.getItem("cart")) || []

}


const cartSlice = createSlice({

   name:"cart",
   initialState,

reducers:{
    addToCart:(state,action)=>{
     const newCartItem =[...state.cart,action.payload]
     if(newCartItem){
        state.cart = newCartItem
        localStorage.setItem("cart",JSON.stringify(state.cart))
     }
    }
}

})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer