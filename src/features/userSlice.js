import { createSlice,  } from "@reduxjs/toolkit";


const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    isLoggedin:JSON.parse(localStorage.getItem("isLoggedin")) || false,
    currentUser:JSON.parse(localStorage.getItem("currentUser")) || null,
    admin:JSON.parse(localStorage.getItem("admin")) || false,
}

 const userSlice = createSlice({
    name: "users",
    initialState,

    reducers:{

        setUsers:(state,action)=>{
            const existingUser = state.users.find((user)=>user.email === action.payload.email)
           if(!existingUser){
             const newUser=state.users.push({...action.payload,role:"user"})
             state.currentUser = newUser
            localStorage.setItem("users",JSON.stringify(state.users))
            localStorage.setItem("currentUser",JSON.stringify(state.currentUser))
            localStorage.setItem("isLoggedin",JSON.stringify(true))
            
           }
        },
        removeUser:(state,action)=>{
            state.users = state.users.filter((user)=> user.email !== action.payload);
            localStorage.setItem("users",JSON.stringify(state.users))

        },
        validateLogin:(state,action)=>{
           
            const userExists = state.users.find((user)=>user.email === action.payload.email && user.password === action.payload.password)
            
            if(userExists){
              const isAdmin= userExists.role === "admin"  
              state.isLoggedin = true
              state.currentUser = userExists
              state.admin=isAdmin
              localStorage.setItem("currentUser",JSON.stringify(state.currentUser))
              localStorage.setItem("isLoggedin", true)
              localStorage.setItem("admin",JSON.stringify(isAdmin))
              
              
            }else{
             state.isLoggedin = false
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

export const {setUsers,removeUser,validateLogin,logOut}= userSlice.actions
export default userSlice.reducer
