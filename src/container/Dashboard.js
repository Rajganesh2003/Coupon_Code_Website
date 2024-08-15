import React from 'react'
import Provider from '../components/Provider'
import Receiver from '../components/Receiver'
import Marquee from '../components/Marquee'

export default function Dashboard() {
  return (
    <div className="container">
      <h1 className='text-center mt-4'>Welcome to the coupon website</h1>
      <br></br>
      <h5 className='text-center mt-3'>This website serves as a platform for exchanging coupons for cash, connecting providers who want to sell coupons with receivers looking to purchase them</h5>
      <br></br>
    <div className="row text-center mt-4">
      <div className="col-6">
      <Provider />
      </div>
      <div className="col-6">
       <Receiver />
      </div>
    </div>
    <Marquee text={'hi'} />
  
   
  </div>
  )
}
