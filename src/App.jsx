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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <Home/>
          {/* <RetailHome /> */}
        </ProtectedRoute>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
    </Router>
  )
}

export default App