import React from 'react'
import { Button } from '@mui/material'
export default function Receiver() {
  return (
    <div>
      <Button variant="outlined">Receiver</Button>
      <br></br>
      <img src='https://cdn-icons-png.flaticon.com/512/1350/1350777.png' 
      height={150} width={180} alt='Receiver' />
       <h5 className='mt-5'>As a Receiver, you can browse and purchase coupons to save on various products and services</h5>
    </div>
  )
}
