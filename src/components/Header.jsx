import React, { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser} from "@fortawesome/free-regular-svg-icons";
import { faCartShopping,faBars,faSun,faMoon } from "@fortawesome/free-solid-svg-icons";
import { filterItem } from "../features/foodSlice";
import { logOut } from "../features/userSlice";
import { toggleTheme } from "../features/themeSlice";



const Header = () => {
const dispatch=useDispatch()
const navigate = useNavigate()
const {isLoggedin,currentUser}= useSelector((state)=>state.users)
const [isMenuOpen,setIsMenuOpen]= useState(false)
const [searchText,setSearchText] = useState("")

 

const handleSignUpClick=()=>{
  navigate('/Registration')
  }

  const handleLoginClick=()=>{
    navigate('/Login')
 }

 return (
    <header className="flex z-50 justify-between items-center shadow-md fixed top-0 left-0 w-full 
     bg-white dark:bg-zinc-800"
  >
    <a href="/"> 
     <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-500
      to-green-600 font-bold text-4xl p-2 m-3">Byte.com</h1>
     </a>
     
     <div className=" items-center hidden  ">
       <input onChange={(e)=>{
        setSearchText(e.target.value)
        dispatch(filterItem(e.target.value))
       }}  
       className="  outline-green-300 bg-green-100 p-2 rounded-l-lg" type="text" placeholder="Search" />
       <button onClick={()=>dispatch(filterItem(searchText))} type="button" className="hidden md:block text-white bg-gradient-to-l from-green-500 via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center ">search</button>
     </div>
    
      <div className="hidden sm:flex justify-center items-center">
        <nav className="flex justify-center items-center text-white place-content-center font-bold text-1xl p-2 m-3">
          <ul className="flex    gap-4 ">
            <li>
              <a className="text-green-600" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-green-600" href="/">
                About
              </a>
            </li>
            <li>
              <a className="text-green-600" href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    
  
       
       <div className="flex justify-center items-center gap-2 border-2 border-green-600 rounded-lg p-1 ">
        <button onClick={()=>dispatch(toggleTheme(true))} className="text-center  active:scale-90 transition-transform duration-100" ><FontAwesomeIcon className="p-1 text-white bg-green-600 rounded-sm" icon={faMoon} /></button>
        <button onClick={()=>dispatch(toggleTheme(false))} className=" active:scale-90 transition-transform duration-100" ><FontAwesomeIcon className="p-1 text-white bg-green-600 rounded-sm" icon={faSun} /></button> 
       </div>
       
       
    
    
      <div className="flex justify-center items-center gap-1  ">
       { isLoggedin ?
        (<div className="group relative hidden  sm:flex justify-center items-center gap-1">
          <FontAwesomeIcon className="text-green-600 text-2xl " icon={faCircleUser} />
          <h2 className=" text-green-600 font-bold">{currentUser.firstname}</h2>
  
         <div  className=" absolute top-full right-0 origin-top hidden group-hover:flex flex-col  bg-white dark:text-white dark:bg-zinc-800 border rounded shadow p-2">
          
             <a className="hover:bg-green-500 rounded-sm p-1" href="/AdminPanel">Dashboard</a>
             <a className="hover:bg-green-500 rounded-sm p-1" onClick={()=>dispatch(logOut())} href="">log out</a>
             
         </div>

          </div> ) 

        :

        (<div className="flex justify-center items-center"> 
          <button onClick={handleLoginClick}  type="button" className="text-green-600 cursor-pointer outline-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log in</button>
          <button onClick={handleSignUpClick}  type="button" className="text-white cursor-pointer bg-gradient-to-l from-green-500 via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up</button></div>)}
      </div>

        <div className="hidden mx-2 sm:flex p-2">
          <a href="/Cart"><FontAwesomeIcon className=" text-green-600 text-2xl" icon={faCartShopping} /></a>
        </div>

       <div className="sm:hidden flex items-center p-2">
        <FontAwesomeIcon
          className="text-green-600 text-2xl cursor-pointer"
          icon={faBars}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

       {isMenuOpen && (
        <div className="absolute  top-16 right-4 bg-white dark:bg-zinc-800 dark:text-white rounded-lg shadow-lg flex flex-col gap-3 p-4 sm:hidden z-50">
          <a href="/" className="text-green-600 dark:text-white">Home</a>
          <a href="/" className="text-green-600 dark:text-white">About</a>
          <a href="/" className="text-green-600 dark:text-white">Contact</a>
          
          <a href="/Cart" className="text-green-600 dark:text-white">Cart</a>
           <hr className=" border-t-2 border-green-600" />

          {isLoggedin && (
            <>
              <h2 className="text-green-600 font-bold dark:text-white">{currentUser.firstname}</h2>
              <a href="/AdminPanel" className="text-green-600 dark:text-white">Dashboard</a>
              <button onClick={() => dispatch(logOut())} className="text-green-600 text-left dark:text-white">Log out</button>
            </>
          
          )}
        </div>
      )}
   
    </header>
  );
};

export default Header;
