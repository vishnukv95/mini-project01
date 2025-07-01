import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || []
}

 const userSlice = createSlice({
    name: "user",
    initialState,

    reducers:{

        setUser:(state,action)=>{
            const existingUser = state.user.find((user)=>user.email === action.payload.email)
           if(!existingUser){
             const newUser=[...state.user,action.payload]
            state.user = newUser
            localStorage.setItem("user",JSON.stringify(state.user))
            console.log(state.user)
           }
        },
        removeUser:(state,action)=>{
            state.user = state.user.filter((user)=> user.email !== action.payload);
            localStorage.removeItem("user")

        },
        validateLogin:(state,action)=>{
            const userExists = state.user.find((user)=>user.email === action.payload.email && user.password === action.payload.password)
        }
    }
})

export const {setUser,removeUser}= userSlice.actions
export default userSlice.reducer
