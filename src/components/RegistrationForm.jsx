import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';

const Form = () => {
  const dispatch = useDispatch()
 const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit =(data)=>{
    dispatch(setUser(data))
    console.log(data)
  }

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
           {errors.firstname && <p className='text-red-600 bg-white text-center rounded-2xl mt-1'>{errors.firstname.message}</p>}
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
           {errors.email && <p className='text-red-600 bg-white text-center rounded-2xl mt-2'>{errors.email.message}</p>}
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
            pattern:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/,
            message:"Password should be 8 charectors and include 1 letter and 1 number"})
            } />
         
        {errors.password && <p className='text-white bg-red-400 text-sm rounded-2xl mt-5'>{errors.password.message}</p>}
    
       </div>
           
           
           <input className='bg-gray-100 border border-green-700 text-gray-900 text-sm rounded-lg 
          w-full p-2.5  focus-outline-none focus-border-green-500 
          focus-ring-green-600 shadow'placeholder='Confirm password' type="password"
           {...register("confirmPassword",{required:true})} />
      </div>
       <div>
        <input className='text-white w-full border-2 bg-gradient-to-l from-green-500
         via-green-600 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
          focus:ring-green-300 dark:focus:ring-green-800 
           rounded-lg font-bold px-5 py-2.5 text-center me-2 mb-2 shadow' type="submit" />
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