import React from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
      <div className="dark:bg-[url('/darkbg.png')] bg-[url('/background.png')]  bg-center bg-cover min-h-screen  ">
    
    <div className='flex justify-center items-center mt-20 min-h-screen p-3 '>
    
    <div className="w-full max-w-md dark:bg-zinc-800 bg-green-500 p-8 shadow-md rounded-lg ">
         <LoginForm />
        </div>

    </div>
      
     
    </div>
  )
}

export default Login