import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function Provider() {
    const Navigate =useNavigate();
  return (
    <div>
        <Button onClick={()=>Navigate('/ProviderContainer')} variant="outlined">Provider</Button>
        <br></br>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ro-pcPbHlNbaXKwUtGzPRVqTKaah3cIZFw&s' 
      height={150} width={180} alt='Receiver' />
      <br></br>
      <h5 className='mt-5'>As a Provider, you can offer your coupons to a wide audience and receive cash in return</h5>
    </div>
  )
}
