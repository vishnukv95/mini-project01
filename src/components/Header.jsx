import React from "react";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
const navigate = useNavigate()
const {isLoggedin,currentUser}= useSelector((state)=>state.user)
 const handleSignUpClick=()=>{
  navigate('/Registration')
  }
    const handleLoginClick=()=>{
    navigate('/Login')
 }
  return (
    <header className="flex justify-around items-center bg-white shadow-md fixed top-0 left-0 w-full">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-green-500 via-green-500 to-green-600 font-bold text-4xl p-2 m-3">Byte.com</h1>
     <div className="flex items-center ">
       <input className="hidden md:block  outline-green-300 bg-green-100 p-2 rounded-l-lg" type="text" placeholder="Search" />
       <button type="button" className="hidden md:block text-white bg-gradient-to-l from-green-500 via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center ">search</button>
     </div>
      <div className="flex justify-center items-center">
        <nav className="flex justify-center items-center text-white place-content-center font-bold text-1xl p-2 m-3">
          <ul className=" hidden sm:flex  gap-4 ">
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
      <div className="flex justify-center items-center ">
       
       { isLoggedin ?
        (<div className="flex justify-center items-center gap-1">
          <img className="h-8 " src="/usericon.svg" alt="" />
          <h2 className="text-green-600 font-bold">{currentUser.firstname}</h2>
          
          </div> ) 

        :

        (<div className="flex justify-center items-center"> 
          <button onClick={handleLoginClick}  type="button" className="text-green-600  outline-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Log in</button>
          <button onClick={handleSignUpClick}  type="button" className="text-white bg-gradient-to-l from-green-500 via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up</button></div>)}
         </div>
    </header>
  );
};

export default Header;
