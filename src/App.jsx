import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import { ProtectedRoute } from './protectRoute/ProtectedRoute';
import RetailHome from './pages/HomeRetail';
import PickupDetails from './pages/PickupDetails';
import PickupDetailsLogistics from './pages/PickupDetailsLogis';
import LogisticsHome from './pages/HomeLogistics';



const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <RetailHome />
        </ProtectedRoute>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/pickup' element={<PickupDetails/>} />
        <Route path='/pickupLogistics' element={<PickupDetailsLogistics/>} />
        <Route path='/logistics' element={<LogisticsHome/>} />

      </Routes>
    </Router>



  )
  
}

export default App



