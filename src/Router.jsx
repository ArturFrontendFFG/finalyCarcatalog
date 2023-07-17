import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/screens/UndefinedPage/UndefinedPage'
import CarDetail from './components/screens/car-detail/Cardetail';
import Home from './components/screens/Home/Home';
import Registration from './components/screens/registration/Registration';
import Auth from './components/screens/Auth/Auth'
import Createcar from './components/screens/create-car/Createcar'

const Router = () => {
 
  return (
   <div>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/car/:id/' element={<CarDetail/>}/>
            <Route path='/reg' element={<Registration/>}/>
            <Route path='/auth' element={<Auth></Auth>}/>
            <Route path='/create-car' element={<Createcar></Createcar>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default Router
