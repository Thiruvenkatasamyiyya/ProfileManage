import React, { useEffect } from 'react'
import {Input} from "../components/ui/input"
import { LoginForm } from '../components/login-form'
import { useLoginMutation } from '../../redux/api/userApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const [logged ,{data :userDetail,error,isLoading}] = useLoginMutation()
  useEffect(()=>{
    if(userDetail) navigate('/');
  },[userDetail])
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
    <div className='max-h-svh'>
        <LoginForm className=' max-w-md  mx-auto  ' handleSubmit={handleSubmit}  />
    </div>
  )
}

export default Login