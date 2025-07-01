import { createSlice,  } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || [],
    isLoggedin:JSON.parse(localStorage.getItem("isLoggedin")) || false,
    currentUser:JSON.parse(localStorage.getItem("currentUser")) || null
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
            state.currentUser = newUser
            localStorage.setItem("user",JSON.stringify(state.user))
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser))
            localStorage.setItem("isLoggedin", true)
            
           }
        },
        removeUser:(state,action)=>{
            state.user = state.user.filter((user)=> user.email !== action.payload);
            localStorage.setItem("user",JSON.stringify(state.user))

        },
        validateLogin:(state,action)=>{
            const userExists = state.user.find((user)=>user.email === action.payload.email && user.password === action.payload.password)
            if(userExists){
              state.isLoggedin = true
              state.currentUser = userExists
              localStorage.setItem("currentUser",JSON.stringify(state.currentUser))
              localStorage.setItem("isLoggedin", true)
              
            }else{
               state.isLoggedin =false
               state.currentUser = null
            }
        },
        logOut:(state)=>{
           state.isLoggedin = false
           localStorage.removeItem("isLoggedin")
           state.currentUser = null   
           localStorage.removeItem("currentUser")
        }
    }
})

export const {setUser,removeUser,validateLogin,currentUser,logOut}= userSlice.actions
export default userSlice.reducer
