import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div className='w-full mt-3  z-50 shadow-t-lg'>

 <footer className="w-full flex flex-row text-white justify-between items-center dark:bg-zinc-800  bg-gradient-to-l bg-green-500">
      <div className="md:flex md:justify-center md:items-center m-auto border-r-2 p-2 gap-3 h-48">
        <h2>Help</h2>
       
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Legal Docs</p>
      </div>
      <div className="m-auto">
        <p>
          &copy; Byte.com 2024-2025
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-l-2  m-auto p-4 h-48">
        <h2>Social Media</h2>
       
        <div className="flex gap-4 p-2">  
           <FontAwesomeIcon icon={faFacebook} />
           <FontAwesomeIcon icon={faTwitter} />
           <FontAwesomeIcon icon={faInstagram} />
        </div>
     
      </div>
    </footer>

    </div>
  )
}

export default Footer