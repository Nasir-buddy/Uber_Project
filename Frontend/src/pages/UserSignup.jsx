import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isCheck, setisCheck] = useState(false);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isCheck) {
      alert('Please agree to the terms and conditions');
      return;
    }
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    // setUserData({
    //   fullName: {`
    //     firstname: firstname,
    //     lastname: lastname
    //   },
    //   email: email,
    //   password: password
    // });

    setFirstname("");
    setLastname("");
    setemail("");
    setpassword("");
  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between' >
        <div>
          <img className='w-16 mb-7' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
          <h3 className='text-base mb-2 font-medium'>What's your name</h3>
          <div className='flex gap-2 mb-5'>
            <input
              className='bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-base placeholder:text-base'
              required
              value={firstname}
              onChange={(e) => { setFirstname(e.target.value) }}
              type="text" placeholder="Firstname" />
            <input
              className='bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-base placeholder:text-base'
              value={lastname}
              onChange={(e) => { setLastname(e.target.value) }}
              type="text" placeholder="Lastname" />
          </div>
          <form action="" onSubmit={(e) => { submitHandler(e) }}>
            <h3 className='text-base mb-2 font-medium'>What's your email</h3>
            <input
              className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
              required
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              type="email" placeholder="email@example.com" />
            <h3 className='text-base mb-2 font-medium'>What's your password</h3>
            <input
              className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
              required
              value={password}
              onChange={(e) => { setpassword(e.target.value) }}
              type="password" placeholder="********" />
            <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Create Account</button>
          </form>
          <p className='text-center mt-3'>Already have an account? <Link to={'/login'} className='text-blue-600 '>Login</Link></p>
        </div>
        <div>
          <p>
            <input value={isCheck}
              onChange={(e) => { setisCheck(e.target.checked) }}
              type="checkbox" required className='mr-2' />
            By continuing, I confirm that I have read and agree to the Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
