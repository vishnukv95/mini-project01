import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from "../features/cartSlice"

const Card = ({item}) => {
  const dispatch = useDispatch()

  const handleCart =()=>{
      dispatch(addToCart(item))
  }

  
  return (
    <div className='flex flex-col m-3 p-3 bg-white  rounded-lg shadow'>
     
     <div className='aspect-[4/3] w-full rounded-3xl overflow-hidden'>
    <img
      className='h-full w-full object-cover'
      src={item.image}
      alt="Product Image"
    />
  </div>
        <div className='flex flex-col  gap-1 '>
          <h2 className='text-gray-950 mt-3 text-xl line-clamp-1 m-2'>{item.name}</h2>
       
         <p className='text-gray-950 font-bold text-base m-2'>&#8377; {item.price}</p>
        </div>
        <div className='mt-2'>
           <button onClick={handleCart} className='w-full text-white bg-gradient-to-l
            from-green-500 via-green-600 to-green-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 
            font-medium rounded-lg text-sm px-3 py-2.5 text-center  shadow-md '>Add to cart</button>
        </div>
    </div>
  )
}

export default Card