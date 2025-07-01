import React from 'react'
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'

const Login = () => {
  return (
      <div className="bg-[url('/background.png')] bg-center bg-cover min-h-screen  ">
    <Header/>
    <div className='flex justify-center items-center mt-20 min-h-screen p-3 '>
    
    <div className="w-full max-w-md bg-gradient-to-l from-green-500 via-green-600 to-green-600 p-8 shadow-md rounded-lg ">
         <LoginForm />
        </div>

    </div>
      
      
    </div>
  )
}

export default Login