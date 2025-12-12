import React, { useState } from 'react'

const UpdateProfile = () => {
    const {data,setData} = useState()
    console.log(data);
    
  return (
    <div>
        <input type="file" onChange={e=>setData(e.target.value)}/>
    </div>
  )
}

export default UpdateProfile