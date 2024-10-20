import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Signup = () => {
       const dispatch = useDispatch()
       const navigate = useNavigate
       const {register,handleSubmit} = useForm()
       const handleSignup = async(data) => {
              const dataResponse = await fetch("",{
                     method : "POST",
                     headers:{
                     'content-type' : 'application/json',
              },
              body:JSON.stringify(data)
              } )
              const dataApi = await dataResponse.json()
              if(dataApi.success){
                     const userData = await fetch("",{
                            method : "GET",
                            headers:{
                            'content-type' : 'application/json',
                     }})
                     dispatch(login(useData))
                     navigate("/")
              }

       }
  return (
    <div className='m-6'>
       <h2  className='header-text text-xl m-auto max-w-md my-6 rounded-xl border-2 p-4'>Signing Up To Your Account...</h2>
       <p  className='header-text text-xl m-auto max-w-md my-4'>
              
              <Link to={"/login"}>
              Already Have An Account ? Sign In
              </Link>
       </p>

       {}

       <form action="" onSubmit={handleSubmit(handleSignup)}>
              <div className="flex flex-col  m-auto max-w-md ">
                     <label htmlFor="" className='header-text text-xl m-2'>Full Name</label>
                     <input  className='header-text text-xl m-2 border-4 p-1 rounded-xl'
                            type="text" 
                            placeholder='Enter Your Name...'
                            {...register("name",{
                                   required : true,

                            })}
                     />
                     <label htmlFor="" className='header-text text-xl m-2'>Phone No.</label>
                     <input  className='header-text text-xl m-2 border-4 p-1  rounded-xl'
                            type="text" 
                            placeholder='Enter Your Number...'
                            {...register("number",{
                                   required : true,

                            })}
                     />
                     <label htmlFor=""  className='header-text text-xl m-2'>Email</label>
                     <input  className='header-text text-xl m-2 border-4 p-1 rounded-xl'
                            type="email" 
                            placeholder='Enter Your Email...'
                            {...register("email",{
                                   required : true,
                                   validate : {
                                          matchPattern : (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)  ||
                                          "email address must be a valid address"
                                   }

                            })}
                     />
                     <label htmlFor="" className='header-text text-xl m-2'>Password</label>
                     <input  className='header-text text-xl m-2 border-4 p-1 rounded-xl'
                            type="password" 
                            placeholder='Enter Your Password...'
                            {...register("password",{
                                   required : true
                            })}
                     />
                     <label htmlFor="" className='header-text text-xl m-2'>Confirm Password</label>
                     <input  className='header-text text-xl m-2 border-4 p-1 rounded-xl'
                            type="password" 
                            placeholder='Enter Your Password...'
                            {...register("password",{
                                   required : true
                            })}
                     />
                     <button 
                            type='submit' 
                            className='header-text text-xl mt-6 mx-16  border-4 p-1 rounded-xl'
                     >
                            Sign Up
                     </button>
              </div>
       </form>
    </div>
  )
}


export default Signup
