import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers,validateLogin } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';



const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedin = useSelector((state)=>state.users.isLoggedin)
  
 const { 
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password')

  const handleFormSubmit =(data)=>{
    dispatch(setUsers(data))
    dispatch(validateLogin(data))
    toast("Registration successful")
    
   }

   setTimeout(() => {
     if(isLoggedin){
               navigate('/')
           }
   },1500);

    // useEffect(()=>{
    //        if(isLoggedin){
    //            navigate('/')
    //        }
    //      })

  return (
    <form className='flex flex-col gap-7 max-w-sm mx-auto bg-inherit p-2 ' onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <h2 className='text-white font-extrabold text-2xl '>Create an account</h2>
      </div>

      {/* For name */}

      <div className='flex gap-3'>
      <div>
          <input className='bg-gray-100 border  border-green-600 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500 focus-ring-green-600 shadow'
           type="text" 
           {...register("firstname",
           {required:true,
           maxLength:{value:20,message:"Maximum length is 20"},
           minLength:{value:3,message:"Minimum length is 3"}})} placeholder='Enter Name' />
           {errors.firstname && <p className='text-red-600 bg-white text-center text-sm rounded-lg mt-1'>{errors.firstname.message}</p>}
      </div>
      <div>
         <input className='bg-gray-100 border border-green-700 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500
           focus-ring-green-600 shadow' type="text" placeholder='Enter last name' {...register("lastname",{required:true})} />
      </div>
           
      </div>
      
      {/* For email */}

      <div>
        <input className='bg-gray-100 border border-green-700 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500
           focus-ring-green-600 shadow'placeholder='Enter email' type="" 
           {...register("email",{
            required:true,
            pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Invalid email format"}
           })} />
           {errors.email && <p className='text-red-600 bg-white text-center text-sm rounded-lg mt-2'>{errors.email.message}</p>}
      </div>

      {/* For password */}

      <div className='flex flex-col gap-7'>
       <div>
         <input className='bg-gray-100 border border-green-700  text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500 
          focus-ring-green-600 shadow' placeholder='Password' type="password"
           {...register("password",
           {
            required:true,
            pattern:{
              value:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
            message:"Password should be 8 characters include 1 letter and 1 number"}})
            } />
         
        {errors.password && <p className='text-red-600 bg-white text-center text-sm rounded-lg mt-2 p-1'>{errors.password.message}</p>}
    
       </div>
           <div>
              
           <input className='bg-gray-100 border border-green-700 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500 
          focus-ring-green-600 shadow'placeholder='Confirm password' type="password"
           {...register("confirmPassword",{required:true,validate: value => value == password || "Password do not match"})} />
           {errors.confirmPassword && <p className='text-red-600 bg-white text-center text-sm rounded-lg mt-3 p-2'>{errors.confirmPassword.message}</p>}
           </div>
         
      </div>
       <div>
        <input className='text-white cursor-pointer w-full border-2 bg-gradient-to-l from-green-500
         via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
          focus:ring-green-300 dark:focus:ring-green-800 
           rounded-lg font-bold px-5 py-2.5 text-center me-2 mb-2 shadow' type="submit" />
           <Toaster  toastOptions={{
    style: {
      background: '#16a34a', 
      color: '#ffffff',
      fontWeight: 'bold',
      borderRadius: '8px',
      padding: '12px 16px',
    },}}  />
       </div>
<div className="flex items-center ">
  <div className="flex-grow border-t border-gray-300"></div>
  <span className="mx-4 text-white font-medium">OR</span>
  <div className="flex-grow border-t border-gray-300"></div>
</div>
<div>
  <p className='text-sm text-white'>Already have an account ? <a className='text-blue-700' href="/Login">Click here to Log in</a></p>
</div>
      

    </form>
  )
}

export default Form