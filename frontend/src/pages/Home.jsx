import React from 'react'
import { useHomeUserQuery } from '../../redux/api/userApi'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const {data , error, isLoading} = useHomeUserQuery();
    const navigate = useNavigate()
    console.log(data);
    // console.log(data);
    
  return (
    <div className='flex flex-col gap-5 min-h-svh justify-center items-center'>
        <div className='flex'>
            <h1 className='text-2xl font-bold'>{data?.data?.email ? "Welcome back !!!" : "Welcome" }</h1>
            <h1 className='text-2xl font-bold' >{data?.data?.userName}</h1>
        </div>
        
        <Button variant={'outline'} onClick = {()=>navigate('/login')}>Add account</Button>
        <Button variant={''} onClick = {()=>navigate('/devConsole')}>Dev Console</Button>

        
    </div>
  )
}

export default Home