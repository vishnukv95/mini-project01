import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    food:[],
    loading:false,
    error:null,
    filtered:JSON.parse(localStorage.getItem("filteredfood"))||[]
}

export const fetchFood = createAsyncThunk('food/fetch',async()=>{
 const response = await axios.get('/fooddata.json')
 localStorage.setItem("filteredfood",JSON.stringify(response.data))
 return response.data
})

const foodSlice =createSlice({
    name:"food",
    initialState,
    
    reducers:{
        filterItem:(state,action)=>{
            const filterInput = action.payload.toLowerCase()
          if(!filterInput|| filterInput === "All"){
            state.filtered = state.food
            localStorage.setItem("filteredfood",JSON.stringify(state.filtered))
          }else{
            state.filtered = state.food.filter((item)=>
                item.category.toLowerCase() === filterInput ||
                item.category.toLowerCase().includes(filterInput)||
                item.name.toLowerCase().includes(filterInput)
               
            )
                localStorage.setItem("filteredfood",JSON.stringify(state.filtered))
          }
         
        },
          deleteItem:(state,action)=>{
            state.food =state.food.filter((item)=>item.id !== action.payload)
            state.filtered = state.food
            localStorage.setItem("filteredfood",JSON.stringify(state.filtered))
          },
          loadSavedFoods: (state, action) => {
           state.food = action.payload;
           state.filtered = action.payload;
        },
        updateItem:(state,action)=>{
           const {id,data} = action.payload
           const index = state.filtered.findIndex((item)=> item.id === id)
           if(index != -1){
            state.filtered[index] = {...state.filtered[index],...data}
            localStorage.setItem("filteredfood",JSON.stringify(state.filtered))
           }
        }
      
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchFood.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(fetchFood.fulfilled,(state,action)=>{
            state.food = action.payload
            state.filtered = state.food
            
            state.loading =false
        })

        builder.addCase(fetchFood.rejected,(state,action)=>{
            state.error = action.error.message
        })
    }
    
})

export const {filterItem,deleteItem,loadSavedFoods,updateItem} = foodSlice.actions

export default foodSlice.reducer

