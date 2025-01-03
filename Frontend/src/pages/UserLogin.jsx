import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [userData, setUserData] = useState({ });

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password
    });

    
    setemail("");
    setpassword("");
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between' >
      <div>
        <img className='w-16 mb-7' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
        <form action="" onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-xl mb-2 font-medium'>What's your email</h3>
          <input
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
            required
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            type="email" placeholder="email@example.com" />
          <h3 className='text-xl mb-2 font-medium'>What's your password</h3>
          <input
            className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base'
            required
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            type="password" placeholder="********" />
          <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Continue</button>
        </form>
        <p className='text-center mt-3'>New Here ? <Link to={'/signup'} className='text-blue-600 '>Create New Account</Link></p>
      </div>
      <div>
        <Link to={'/captain-login'} className=' bg-[#626464e7] text-white py-5 mt-2 rounded flex items-center justify-center'>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin