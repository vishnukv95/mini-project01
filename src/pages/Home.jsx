import React, { useEffect } from 'react'
import {fetchFood} from '../features/foodSlice'
import { useDispatch,useSelector } from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'

const Home = () => {
const dispatch = useDispatch()
const {food,loading,error}= useSelector((state)=>{
    return state.food
    
})


useEffect(()=>{
    dispatch(fetchFood())
},[dispatch])

if(loading){
    return <div><h2>loading</h2></div>
}
if(error){
    return <div>error</div>
}

  return (
    <div className='flex'>
<Header/>
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
  lg:grid-cols-4 xl:grid-cols-5 md:gap-2 m-10 auto-rows-fr mt-22">
    
{
    food.map((item)=>{
        return <Card key={item.id} item={item}/>
    })
}

    </div>
    </div>
   



  )
}


export default Home

