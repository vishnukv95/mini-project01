import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteItem, fetchFood, loadSavedFoods,updateItem } from "../features/foodSlice";
import { removeUser } from "../features/userSlice";


const AdminPanel = () => {
   const [edit,setEdit]=useState(false)
   const [editId,setEditId] = useState(null)
   const [editData,setEditData] = useState({image:"",name:"",price:""})
   const dispatch= useDispatch()
   const items = useSelector((state)=>state.food.filtered)
   const users = useSelector((state)=>state.users.users)
   const [isOpen,setOpen]= useState(false)

   const handleUser=(email)=>{
        dispatch(removeUser(email))
   }

   const handleEdit =(id)=>{
      setEdit(true)
      setEditId(id)
   }

   const handleCancel=()=>{
      setEdit(false)
      setEditId(null)
   }

   const handleUpdate=(id,data)=>{
        dispatch(updateItem({id,data}))
        setEdit(false);
        setEditId(null);
        setEditData({ image: "", name: "", price: "" });
   }

   useEffect(()=>{
    const savedfoods = JSON.parse(localStorage.getItem('filteredfood'));
    if (savedfoods && savedfoods.length > 0) {
        dispatch(loadSavedFoods(savedfoods));
    } else {
        dispatch(fetchFood());
    }
          
   },[dispatch])
  
  return (
    <div className="flex flex-col min-h-screen  dark:text-white">
     

      

     

      <div className="p-4  mt-24 ">
         <div className=" bg-white dark:bg-zinc-800 dark:text-white shadow rounded-lg  text-green-600">
            <ul className="flex justify-between items-center gap-2 mx-2">
               <li onClick={()=>setOpen(false)} className="  active:scale-90 transition-transform duration-100 p-1 m-1 font-bold border-green-600 border-2 cursor-pointer rounded-lg">
                Users</li>
               <li>
                      <h2 className="text-center font-bold  ">Total Users: {users.length}</h2>
                </li>
                <li>
                  <h2 className="text-center font-bold text- ">Total products:{items.length}</h2>
                </li>
               <li onClick={()=>setOpen(true)} className="active:scale-90 transition-transform duration-100 p-1 m-1 font-bold border-green-600 border-2  cursor-pointer rounded-lg">
                Products</li>
               
            </ul>
         </div>

         <div className="mt-3">
             {isOpen ?(
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                 {items.map((item)=>(
                    editId === item.id ? 
                    <div key={item.id} className="flex gap-5 shadow dark:bg-zinc-800 dark:text-white rounded-lg p-3  justify-center items-center">
                       <div className="flex flex-col gap-1">
                         <input className="dark:border-2 outline-none shadow-sm rounded-lg p-1 border-green-50" value={editData.image} onChange={(e)=>setEditData({...editData,image:e.target.value})} type="text" placeholder="Image url" />
                         <input className="dark:border-2 outline-none shadow-sm rounded-lg p-1 border-green-50" value={editData.name}  onChange={(e)=>setEditData({...editData,name:e.target.value})} type="text" placeholder="Name"/>
                         <input className="dark:border-2 outline-none shadow-sm rounded-lg p-1 border-green-50" value={editData.price}  onChange={(e)=>setEditData({...editData,price:e.target.value})} type="text" placeholder="Price" />
                       </div>
                       <div className="flex flex-col gap-4">
                            <button onClick={()=>handleUpdate(editId,editData)} className="text-white bg-green-600
                                   hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                                   focus:ring-green-300 
                                   font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                                   hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                                   update
                            </button>
                              <button onClick={handleCancel} className="text-white bg-red-600
                                     hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                                     focus:ring-green-300 
                                     font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                                     hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                                     Cancel
                             </button>
                    </div>
                    </div>
                    
                    :
                    <div key={item.id} >
                    
                     <div className="flex gap-3 p-4 m-2  bg-white dark:bg-zinc-800 rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out  "
                                   
                                 >
                                   {/* IMG */}
                                   <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                                     <img
                                       className="w-full h-full object-cover rounded-lg"
                                       src={item.image}
                                       alt=""
                                     />
                                   </div>
                                   <div className="p-2">
                                     <div className="flex gap-2">
                                       <p>{item.name}</p>
                                       <FontAwesomeIcon
                                         className={
                                           item.veg
                                             ? "text-green-600 text-[10px]"
                                             : "text-red-600 text-[10px]"
                                         }
                                         icon={faCircle}
                                       />
                                     </div>
                   
                                     <div className="mb-6">
                                       <p>&#8377; {item.price}</p>
                                     </div>
                                     {/* BUTTON */}
                                     <div className="flex flex- items-center gap-6">
                                       <div className="flex items-center gap-1">
                                    
                                         <button onClick={()=>handleEdit(item.id)} className="text-white bg-red-600
                                             hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                                            focus:ring-green-300 
                                             font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                                             hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
                                             Edit
                                          </button>
                                         
                                       
   
                                    
                                       </div>
                                       <button
                                         onClick={()=>dispatch(deleteItem(item.id))}
                                         className=" text-white bg-red-600
                                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                                  focus:ring-green-300 
                                  font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                                         hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out "
                                       >
                                         Delete
                                       </button>
                                     </div>
                                   </div>
                                   
                     </div>
                    
                    </div>
                 ))}
               </div>
             ):(
               <div className="grid sm:grid-cols-2 gap-4 ">
                   
                  {users.map((user)=>(
                     <div className="flex justify-between p-2 dark:bg-zinc-800  shadow-lg rounded-lg" key={user.email}>
                        <div className="flex flex-col justify-center" >
                        <p>Name: {user.firstname}</p>
                        <p>Last Name: {user.lastname}</p>
                        <p>Email: {user.email}</p>
                        </div>

                        <div className="flex flex-col gap-3 mr-5 p-2">
                         
                           <button onClick={()=>handleUser(user.email)} className=" text-white bg-red-600
                                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                                  focus:ring-green-300 
                                  font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                                  hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">Delete</button>
                        </div>
                     </div>
                  ))}
               </div>
             )}
         </div>

      </div>

    

    </div>
    
  );
};

export default AdminPanel;
