import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from "../features/cartSlice"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({item}) => {
  const dispatch = useDispatch()

  const handleCart =()=>{
      dispatch(addToCart(item))
  }

  
  return (
    <div className='flex flex-col m-2 p-3 bg-white rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out'>
     
     <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden'>
    <img
      className='h-full w-full object-cover'
      src={item.image}
      alt="Product Image"
    />
  </div>
        <div className='flex flex-col  gap-1 '>
         <div className='flex items-center'>
           <h2 className='text-gray-950 mt-3 text-xl line-clamp-1 m-2'>{item.name}</h2>
           <FontAwesomeIcon className={item.veg ?'text-green-600 text-[10px]' :'text-red-600 text-[10px]'} icon={faCircle}  />
          
         </div>
       
         <p className='text-gray-950 font-bold text-base m-2'>&#8377; {item.price}</p>
        </div>
        <div className='mt-2'>
           <button onClick={handleCart} className='w-full text-white bg-gradient-to-l
            from-green-500 via-green-600 to-green-600 
            hover:bg-gradient-to-br focus:ring-2 focus:outline-none 
            focus:ring-green-300 
            font-medium rounded-lg text-sm px-3 py-2.5 text-center  shadow-md 
            hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out active:scale-90'>Add to cart</button>
        </div>
    </div>
  )
}

export default Card