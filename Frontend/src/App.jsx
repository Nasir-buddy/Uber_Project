import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<UserSignup />} />
      <Route path='/signup' element={<UserSignup />} />
      <Route path='/captain-login' element={< CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
    </Routes>
  )
}

export default App