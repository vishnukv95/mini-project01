import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'




const AdminRoute = ({children}) => {
  const admin=useSelector((state)=>state.users.admin)
  return admin ? children : <Navigate to="/NotAuthorised"/>
}

export default AdminRoute