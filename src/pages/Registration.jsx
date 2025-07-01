import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import Header from '../components/Header'

const Registration = () => {
  return (
    <div className="bg-[url('/background.png')] bg-center bg-cover min-h-screen  ">
    <Header/>
    <div className='flex justify-center items-center mt-20 min-h-screen p-3 shadow-lg'>
    
    <div className="w-full max-w-md bg-gradient-to-l from-green-500 via-green-600 to-green-600 p-8 shadow-md rounded-lg ">
          <RegistrationForm />
        </div>

    </div>
      
      
    </div>
  )
}

export default Registration