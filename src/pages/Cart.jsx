import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassEmpty } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { handleQuantity, removeCartItem,clearCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  const loggedIn = useSelector((state)=>state.users.isLoggedin)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handlePlaceOrder=()=>{
    if(loggedIn){
       navigate('/Summary')
       
    }else{
      navigate('/Login')
      console.log(loggedIn)
    }
    
  }

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  const updateQuantity = (id, value) => {
    dispatch(handleQuantity({ id, value }));
  };

  const totalPrice = cartItem.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.quantity;
  }, 0);

  return (
    <div className="dark:bg-zinc-700 bg-white">
     
   
      <div className="mt-20 md:flex justify-center items-center  p-5 min-h-screen">
        {cartItem.length === 0 ? (
          <div className="flex flex-col  justify-center items-center gap-6">
            <div className="flex ">
              <FontAwesomeIcon
                className="text-green-600 text-[300px]"
                icon={faMartiniGlassEmpty}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-4xl  font-bold">
                Your <br />
                <span className="text-green-600 text-[100px]">cart</span> is
                <span className="text-red-600 text-[50px]"> empty</span>
              </p>
              <a
                className="text-2xl text-center font-bold text-white bg-green-600 p-2 mt-5
               rounded-lg shadow animate-bounce"
                href="/"
              >
                {" "}
                Add items to cart
              </a>
            </div>
          </div>
        ) : (
          <div className=" dark:bg-zinc-700">
              <div>
                {cartItem.map((Item) => (
              <div
                className="flex gap-3 p-4 m-2  bg-white dark:bg-zinc-800 dark:text-white rounded-lg shadow hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out  "
                key={Item.id}
              >
                {/* IMG */}
                <div className="sm:w-52 sm:h-40  rounded-lg">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={Item.image}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <div className="flex gap-2">
                    <p>{Item.name}</p>
                    <FontAwesomeIcon
                      className={
                        Item.veg
                          ? "text-green-600 text-[10px]"
                          : "text-red-600 text-[10px]"
                      }
                      icon={faCircle}
                    />
                  </div>

                  <div className="mb-6">
                    <p>&#8377; {Item.price}</p>
                  </div>
                  {/* BUTTON */}
                  <div className="flex flex- items-center gap-6">
                    <div className="flex items-center gap-1">
                      <button
                        className="w-10 text-white bg-gray-400
               hover:bg-gradient-to-br focus:ring-2 
               focus:ring-green-300 
               font-medium rounded-l-lg text-sm p-1 text-center  shadow-md 
               active:scale-90 transition-transform duration-100"
                        type="button"
                        onClick={() => updateQuantity(Item.id, "increase")}
                      >
                        +
                      </button>
                      <p className="text-center p-1">{Item.quantity}</p>
                      <button
                        className="w-10 text-white bg-gray-400
               hover:bg-gradient-to-br focus:ring-2 focus:outline-none 
               focus:ring-green-300 
               font-medium rounded-r-lg text-sm p-1  text-center  shadow-md 
               active:scale-90 transition-transform duration-100"
                        type="button"
                        onClick={() => updateQuantity(Item.id, "decrease")}
                      >
                        -
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(Item.id)}
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
              
            ))}
              </div>
               
                 <div className="  m-1 rounded-lg shadow bg-white hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
          {cartItem.length> 0 &&
          (<div className="dark:bg-zinc-800 rounded-lg shadow-md dark:text-white">
            <div className="flex justify-between">
             <p className="p-2 m-2 text-lg font-bold">Total:</p>
             <p className="p-2 m-2 text-lg font-bold">&#8377; {totalPrice}</p>
          </div> 
          <div className="flex flex-col ">
            <div className="flex justify-between">
               <button onClick={handlePlaceOrder}  className="m-2 text-white bg-green-600
               hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
               focus:ring-green-300 
               font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                      hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">Place order</button>
            <button onClick={()=>dispatch(clearCart())} className="m-2 text-white bg-red-600
               hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
               focus:ring-green-300 
               font-medium rounded-lg text-sm p-2 text-center  shadow-md 
                      hover:scale-105 hover:shadow-lg transition-all duration-150 ease-in-out">
              Clear cart
            </button>  
            </div>
          </div>  
          </div>      )
          }
           
        </div>
          </div>
        )}
      
      </div>
     
    </div>
  );
};

export default Cart;
