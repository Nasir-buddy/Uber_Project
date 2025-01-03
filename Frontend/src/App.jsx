import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path='/login' element={<UserLogin />} />
      <Route path='/signup' element={<UserSignup />} />
      <Route path='/captain-login' element={<CaptainLogin />} />
      <Route path='/captain-signup' element={<CaptainSignup />} />
      {/* creating the protected route */}
      <Route path='/home' element={
        <UserProtectedWrapper>
          <Home />
        </UserProtectedWrapper>
      } />
      <Route path='/user/logout' element={
        <UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>
      } />
    </Routes>
  )
}

export default App