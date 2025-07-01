import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'

const Cart = () => {
    const item = useSelector((state)=>state.cart.cart)
  return (
    <>
    <Header/>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
  lg:grid-cols-4 xl:grid-cols-5 gap-6 m-10 auto-rows-fr mt-22">
      {item.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
    </>
   
  )
}


export default Cart