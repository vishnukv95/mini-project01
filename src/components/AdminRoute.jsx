import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'




const AdminRoute = ({children}) => {
  const admin=useSelector((state)=>state.user.admin)
  return admin ? children : <Navigate to="/Login"/>
}

export default AdminRoute