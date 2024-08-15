import React from 'react'
import { TextField } from '@mui/material'
export default function InputBox(props) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <TextField style={{width:'500px'}} id="outlined-basic" label={props.selectedBrand} variant="outlined" />
    </div>
  )
}
