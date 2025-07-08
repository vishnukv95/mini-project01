import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import toast, { Toaster } from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';


const Summary = () => {
  const cart = useSelector(state => state.cart.cart)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  
  const handleToast=()=>{
     toast("Order placed")
     
     setTimeout(() => {
        navigate('/')
        dispatch(clearCart())
     },1500);
  }

  return (
    <div className='flex justify-center items-center dark:bg-[url("/darkbg.png")] bg-[url("/background.png")]'>
      
        <div className='flex justify-center items-center min-h-screen '>
          <div className=' bg-white dark:bg-zinc-800 dark:text-white p-5 flex flex-col justify-center items-center shadow rounded-lg'>
            <h2 className='p-5 text-4xl font-bold text-green-600'>Order Summary</h2>
            <hr className='w-[90%] border-t-2 border-green-600 my-4' />
            {cart.map(item => (
            <div className='m-1 flex gap-3' key={item.id}>
                <div className='flex justify-center items-center'>
                    <p className='font-bold'>{item.name} - </p>
                </div>
                <div className='m-1 flex justify-center items-center'>
                     <p className='font-bold'> {item.quantity} x ₹{item.price}</p>
                </div>
                
                </div>
             ))}
             <hr className='w-[90%] border-green-600 border-t-2' />
            <p className='p-2 text-2xl font-bold'>Total: ₹{total}</p>
            <button onClick={handleToast} className='w-full text-white cursor-pointer bg-green-600
               hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
               focus:ring-green-300 
               font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                      hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out'>Confirm Order</button>
          </div>
           <Toaster toastOptions={{
    style: {
      background: '#16a34a', 
      color: '#ffffff',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '12px 16px',
    },}} position="top-center" />
        </div>
      
    </div>
  )
}

export default Summary
