import React, { useEffect } from 'react'
import {SignupForm} from "../components/signup-form"
import { useRegisterMutation } from '../../redux/api/userApi'
import toast from 'react-hot-toast';
const Register = () => {

  const [submitRegister, {data,error, isLoading}] = useRegisterMutation();

  useEffect(()=>{
    error && toast.error(error?.data?.message);    
    data && toast.success(data?.data?.message)
  },[data,error])

  async function handleRegister (reg){
    
     await submitRegister({
      userName : reg.userName,
      email : reg.email,
      password : reg.password
    })
  }


console.log(data, error, isLoading);

  return (
    <div className='w-full grid ' >
        <SignupForm  className = "max-w-md" handleRegister={handleRegister}/>
    </div>
  )
}

export default Register