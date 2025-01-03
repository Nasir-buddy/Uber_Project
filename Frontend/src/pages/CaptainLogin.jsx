import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [captainData, setcaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setcaptainData({
      email: email,
      password: password
    });


    setemail("");
    setpassword("");
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between' >
      <div>
        <img className='w-16 mb-7' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
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
          <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Login</button>
        </form>
        <p className='text-center mt-3'>Join as a fleet? <Link to={'/captain-signup'} className='text-blue-600 '>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to={'/login'} className=' bg-[#259e9ee7] text-white py-5 mt-2 rounded flex items-center justify-center'>
          Sign in as user
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin