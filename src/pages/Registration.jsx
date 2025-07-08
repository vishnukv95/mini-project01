import React from 'react'

import RegistrationForm from '../components/RegistrationForm'




const Registration = () => {
  return (
    <div className="bg-[url('/background.png')] dark:bg-[url('/darkbg.png')] bg-center bg-cover min-h-screen  ">
   
    <div className='flex justify-center items-center mt-20 min-h-screen p-3 shadow-lg'>
    
    <div className="w-full max-w-md dark:bg-zinc-800 bg-green-500 p-8 shadow-md rounded-lg ">
          <RegistrationForm />
        </div>

    </div>
      
      
    </div>
  )
}

export default Registration