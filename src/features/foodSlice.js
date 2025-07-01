import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    food:[],
    loading:false,
    error:null
}

export const fetchFood = createAsyncThunk('food/fetch',async()=>{
 const response = await axios.get('/fooddata.json')
 
 return response.data
})

const foodSlice =createSlice({
    name:"food",
    initialState,
    
    

    extraReducers:(builder)=>{
        builder.addCase(fetchFood.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(fetchFood.fulfilled,(state,action)=>{
            state.food = action.payload
            
            state.loading =false
        })

        builder.addCase(fetchFood.rejected,(state,action)=>{
            state.error = action.error.message
        })
    }
    
})

export default foodSlice.reducer

