import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import AdminPanel from './pages/AdminPanel'
import Header from './components/Header'
import AdminRoute from './components/AdminRoute'
import Cart from './pages/Cart'
import NotAuthorised from './pages/NotAuthorised'
import Summary from './pages/Summary'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const App = () => {
  const darkmode=useSelector((state)=>state.theme.darkmode)

  useEffect(() => {
  if (darkmode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkmode]);
  return (
<div className={darkmode ? "bg-zinc-700":""}>
   <Header darkmode={darkmode}/>
 <div>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Login' element={<Login/>} />
    <Route path='/Registration' element={<Registration/>}/>
    <Route path='/AdminPanel' element={<AdminRoute><AdminPanel/></AdminRoute>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='*' element={<NotAuthorised/>}/>
    <Route path="/Summary" element={<Summary />} />


   </Routes>
 </div>
  <Footer/>
</div>
  )
}

export default App
