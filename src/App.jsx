import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import AdminPanel from './pages/AdminPanel'
import AdminRoute from './components/AdminRoute'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className=''>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Login' element={<Login/>} />
<Route path='/Registration' element={<Registration/>}/>
<Route path='/AdminPanel' element={<AdminRoute><AdminPanel/></AdminRoute>}/>
<Route path='/Cart' element={<Cart/>}/>

</Routes>


    </div>
  )
}

export default App
