import React from 'react'

const LoginForm = () => {
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        
    }
  return (
    <form className='flex flex-col gap-7 max-w-sm mx-auto bg-inherit p-2'>
     <div>
        <h2 className='text-white font-extrabold text-2xl'>Log in</h2>
     </div>
     <div>
        <input className='bg-gray-100 border  border-green-600 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500 focus-ring-green-600 shadow' type="email" placeholder='Enter email' />
     </div>
    <div>
 <input className='bg-gray-100 border  border-green-600 text-gray-900 text-sm rounded-lg  
        w-full p-2.5  focus-outline-none focus-border-green-500 focus-ring-green-600 shadow' type="password" placeholder="Enter your password"/>
    </div>
       <div>
        <button type='submit' className='text-white w-full border-2 bg-gradient-to-l from-green-500
         via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
          focus:ring-green-300 dark:focus:ring-green-800 
           rounded-lg font-extrabold px-5 py-2.5 text-center me-2 mb-2 shadow'>Log in</button>
       </div>
       <div>
        <p>Dont have an account ? <a  className='text-blue-700' href="/Registration">Click here to register</a></p>
       </div>
       
    </form>
  )
}

export default LoginForm