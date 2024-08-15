import React from 'react'
import Dashboard from '../container/Dashboard'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import ProviderContainer from '../container/ProviderContainer'
export default function Router() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="*" element={<Dashboard />} />
    <Route path='/ProviderContainer' element={<ProviderContainer />} />
   </Routes>
   </BrowserRouter>
  )
}
