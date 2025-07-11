import React, { useEffect,useState} from 'react'
import {fetchFood,filterItem,loadSavedFoods} from '../features/foodSlice'
import { useDispatch,useSelector } from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'


const Home = ({darkmode}) => {
const catogery=[
    {name:"North Indian",id:1,image:"https://media.istockphoto.com/id/1951940755/photo/close-up-image-of-indian-breakfast-dish-buffet-triangular-slices-of-aloo-parathas-on-white.jpg?b=1&s=612x612&w=0&k=20&c=G2IJK3oO9g3dWOZT-VIoyCjLIPbNr5E7SMYZOFrZ5EI="},
    {name:"South Indian",id:2,image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Indo-Chinese",id:3,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeyNBUBooHqQRxDBAOTzk1BYYG-y-PR7oKA&s"},

]
const dispatch = useDispatch()
const {loading,error,filtered}= useSelector((state)=>state.food)
const [searchText,setSearchText] = useState("")



useEffect(()=>{
     
    const savedfoods = JSON.parse(localStorage.getItem('filteredfood'));
    if (savedfoods && savedfoods.length > 0) {
        dispatch(loadSavedFoods(savedfoods));
    } else {
        dispatch(fetchFood());
    }
   
},[dispatch])

if(loading){
    return <div><h2>loading</h2></div>
}
if(error){
    return <div>error</div>
}

  return (

<div className={darkmode ? "flex flex-col items-center bg-black":"flex flex-col items-center"}>
 <Header/>
   <div className='flex flex-col justify-center items-center w-full dark:bg-[url("/darkbg.png")] bg-[url("/background.png")] h-[500px] bg-center bg-cover object-contain mt-24'>
     <h1 className="bg-green-600 dark:bg-zinc-700  rounded-lg p-4 text-white text-center  text-5xl font-bold mb-2">Take a Byte</h1>
     <p className="bg-green-600 dark:bg-zinc-700  rounded-lg p-3 text-white text-center  text-sm sm:text-x">Delicious food delivered to your door</p>
   </div>


   <div className='container flex flex-col'>

<div className=' flex flex-col justify-evenly mt-2 p-1  gap-3 rounded-lg'>
  <div className='flex sticky top-24 justify-between rounded-lg shadow-lg dark:bg-zinc-800 p-2'>
      <select className=' font-bold border-none text-green-600' onChange={(e)=>dispatch(filterItem(e.target.value))} name="" id="">
  <option value="All">All Categories</option>
  <hr />
  <option value="North Indian">North Indian</option>
  <option value="South Indian">South Indian</option>
  <option value="Indo-Chinese">Indo-Chinese</option>
  <option value="Hyderabadi">Hyderabadi</option>
  
  <option value="Maharashtrian">Maharashtrian</option>
  <option value="Kerala">Kerala</option>
  <option value="Punjabi">Punjabi</option>
  <option value="Gujarati">Gujarati</option>
  <option value="Dessert">Dessert</option>
  <option value="Beverage">Beverage</option>
  <option value="Snack">Snack</option>
  <option value="Mughlai">Mughlai</option>
  <option value="Bread">Bread</option>
  <option value="Condiment">Condiment</option>
  <option value="Rice Dish">Rice Dish</option>
  <option value="Coastal">Coastal</option>
  <option value="Chaat">Chaat</option>
  <option value="Street Food">Street Food</option>
  
  <option value="Tandoori">Tandoori</option>
  <option value="Combo">Combo</option>
  <option value="Side Dish">Side Dish</option>
      </select>
     <div>
     <input onChange={(e)=>{
             setSearchText(e.target.value)
             dispatch(filterItem(e.target.value))
            }}  
             className='dark:bg-green-100 p-2 rounded-l-sm' type="text" placeholder='Search' />
      <button className='p-2 bg-green-600 rounded-r-lg dark:text-white'>search</button>
      </div>
  </div>
  <div className='flex items-center justify-evenly dark:text-white dark:bg-zinc-800 font-bold mx-2 rounded-lg shadow-lg'>
         
         <div className='flex gap-3  overflow-x-auto'>
         {catogery.map((item)=>(
          <div key={item.id} onClick={()=>dispatch(filterItem(item.name))} className='flex flex-col items-center animate-pulse cursor-pointer  p-1 my-1 '>
             <img className='rounded-full w-[50px] h-[50px]' src={item.image} alt="" />
             <h2 className='text-sm text-green-600 dark:text-white whitespace-nowrap '>{item.name}</h2>
          </div>
          ))}
         </div>
 
 </div>
</div>

     <div className="container m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
  lg:grid-cols-4 xl:grid-cols-5 md:gap-2  auto-rows-fr mt-10">
    
{
    filtered.map((item)=>{
        return <Card key={item.id} item={item}/>
    })
}

    </div>
   </div>
  
</div>
   



  )
}


export default Home

