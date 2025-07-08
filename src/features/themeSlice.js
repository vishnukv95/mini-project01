import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    darkmode:JSON.parse(localStorage.getItem("darkmode"))||false
}

const themeSlice=createSlice({

   name:"darkmode",
   initialState,

   reducers:{
     toggleTheme:(state,action)=>{
        state.darkmode = action.payload
        localStorage.setItem("darkmode",JSON.stringify(state.darkmode))
     }
   }


})

export const{toggleTheme} = themeSlice.actions
export default themeSlice.reducer