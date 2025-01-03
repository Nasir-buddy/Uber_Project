import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between' >
      <div>
        <img className='w-16 mb-7' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
        <form action="" >
          <h3 className='text-xl mb-2 font-medium'>What's your email</h3>
          <input
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
            required type="email" placeholder="email@example.com" />
          <h3 className='text-xl mb-2 font-medium'>What's your password</h3>
          <input
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
            required type="password" placeholder="********" />
          <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Continue</button>
        </form>
        <p className='text-center mt-3'>New Here ? <Link to={'/signup'} className='text-blue-600 '>Create New Account</Link></p>
      </div>
      <div>
        <button className='w-full bg-[#626464e7] text-white py-5 mt-2 rounded flex items-center justify-center'> 
          Sign in as Captain
        </button>
      </div>
    </div>
  )
}

export default UserLogin