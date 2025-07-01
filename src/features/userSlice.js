import { createSlice,  } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || [],
    isLoggedin:JSON.parse(localStorage.getItem("isLoggedin")) || false,
    currentUser:JSON.parse(localStorage.getItem("currentUser")) || null,
    admin:JSON.parse(localStorage.getItem("admin")) || false,
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
              state.admin = userExists.role=== "admin"
              localStorage.setItem("currentUser",JSON.stringify(state.currentUser))
              localStorage.setItem("isLoggedin", true)
              localStorage.setItem("admin",JSON.stringify(true))
              
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
           state.admin= false
           
        }
    }
})

export const {setUser,removeUser,validateLogin,currentUser,logOut}= userSlice.actions
export default userSlice.reducer
