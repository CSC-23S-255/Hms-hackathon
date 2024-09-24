import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Dashboard from './screens/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userfrom from './screens/Userfrom'
import Costumerfrom from './screens/Costumerfrom'
import Room from './screens/Room'
import Roombook from './screens/Roombook'
import Payments from './screens/Payments'
import Stafffrom from './screens/Stafffrom'
import Hotelservice from './screens/Hotelservice'
import Servicereq from './screens/Servicereq'


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='userfrom' element={<Userfrom/>}/>
      <Route path='costumerfrom' element={<Costumerfrom/>}/>
      <Route path='room' element={<Room/>}/>
      <Route path='booking' element={<Roombook/>}/>
      <Route path='payment' element={<Payments/>}/>
      <Route path='forstaff' element={<Stafffrom/>}/>
      <Route path='services' element={<Hotelservice/>}/>
      <Route path='request' element={<Servicereq/>}/>
      
      
           </Routes>
    </div>
  )
}

export default App
