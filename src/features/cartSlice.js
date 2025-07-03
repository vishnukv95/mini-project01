import { createSlice, } from "@reduxjs/toolkit";



const initialState ={
    cart:JSON.parse(localStorage.getItem("cart")) || []
    

}


const cartSlice = createSlice({

   name:"cart",
   initialState,

reducers:{
    addToCart:(state,action)=>{
     const existingCartItem =state.cart.find((item)=>item.id === action.payload.id)
     if(!existingCartItem){
        state.cart.push({...action.payload,quantity:1})
        localStorage.setItem("cart",JSON.stringify(state.cart))
        }else{
        existingCartItem.quantity += 1
        localStorage.setItem("cart",JSON.stringify(state.cart))
       
         }
         

    },
    
    removeCartItem:(state,action)=>{
    const itemRemoved =state.cart.filter((cart)=>cart.id !==action.payload)
    state.cart = itemRemoved
    localStorage.setItem("cart",JSON.stringify(state.cart))
    },
    
    handleQuantity:(state,action)=>{
       let updateQuantity= state.cart.find((item)=>item.id === action.payload.id) 
       const increment = action.payload.value === "increase"
       const decrement = action.payload.value === "decrease"
      if(increment){
        updateQuantity.quantity +=1
      }else if(decrement){
        updateQuantity.quantity -= 1
      }
      
      if(updateQuantity.quantity <=0){
        state.cart=state.cart.filter((item)=> item.id !== action.payload.id)
      }
      localStorage.setItem("cart",JSON.stringify(state.cart))

}

}})

export const {addToCart,removeCartItem,handleQuantity} = cartSlice.actions

export default cartSlice.reducer