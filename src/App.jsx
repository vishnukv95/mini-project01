import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

const App = () => {
  return (
    <div className=''>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Login' element={<Login/>} />
<Route path='/Registration' element={<Registration/>}/>

</Routes>


    </div>
  )
}

export default App
