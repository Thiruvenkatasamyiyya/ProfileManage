import React, { useEffect } from 'react'
import {Input} from "../components/ui/input"
import { LoginForm } from '../components/login-form'
import { useLoginMutation } from '../../redux/api/userApi'
import toast from 'react-hot-toast'

const Login = () => {

  const [logged ,{data :userDetail,error,isLoading}] = useLoginMutation()

  function handleSubmit(data){
    
    logged({
      email : data?.email,
      password : data?.password
    })    
  }
console.log(error,userDetail);

  if(error) toast.error(error?.data?.err)
  if(userDetail) toast.success("logged in👍")
  return (
    <div className=''>
        <LoginForm className=' max-w-md' handleSubmit={handleSubmit}  />
    </div>
  )
}

export default Login