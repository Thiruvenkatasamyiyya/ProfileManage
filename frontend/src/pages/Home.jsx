import React, { useState } from 'react'
import { useHomeUserQuery } from '../../redux/api/userApi'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom';
import NavigateBar from '../components/NavigateBar';
import toast from "react-hot-toast"
const Home = () => {
  const [image,setImage] = useState()
  console.log(image);
  
    const {data , error, isLoading} = useHomeUserQuery();
    const navigate = useNavigate()
    console.log(data);
    // console.log(data);
    
    function handleImage(e){
      e.preventDefault();
      const file = e.target.files[0]
      if(!file){ toast.error("Not upload")}
      const reader = new FileReader()
      console.log(reader);
      
      reader.onload = ()=>{
         setImage(reader.result)
      }
        reader.readAsDataURL(file);
    }
  return (
    <div>
    <NavigateBar/>

    <div className='flex flex-col gap-5 min-h-svh justify-center items-center back'>
      <input type="file" onChange={handleImage} />
        <div className=''>
        <img src={image} alt="" className='w-32 h-32 rounded-full object-cover'/>

        </div>
        <div className='flex'>
            <h1 className='text-2xl font-bold'>{data?.data?.email ? "Welcome back !!!" : "Welcome" }</h1>
            <h1 className='text-2xl font-bold' >{data?.data?.userName}</h1>
        </div>
        
        <Button variant={'outline'} onClick = {()=>navigate('/login')}>Add account</Button>
        <Button variant={''} onClick = {()=>navigate('/devConsole')}>Dev Console</Button>

        
    </div>
    </div>
  )
}

export default Home