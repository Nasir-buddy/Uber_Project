import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Declare state variable for first name
const [firstname, setFirstname] = useState("");
// Declare state variable for last name
const [lastname, setLastname] = useState("");
// Declare state variable for email
const [email, setemail] = useState("")
// Declare state variable for password
const [password, setpassword] = useState("")
// Declare state variable for terms and conditions checkbox
const [isCheck, setisCheck] = useState(false);
// Declare state variable for user data
const [userData, setUserData] = useState({});

// Define submit handler function
const submitHandler = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Check if terms and conditions are agreed
    if(!isCheck){
        // Alert if terms and conditions are not agreed
        alert('Please agree to the terms and conditions');
        return;
    }
    // Set user data with full name, email, and password
    setUserData({
        fullName: {
            firstname: firstname,
            lastname: lastname
        },
        email: email,
        password: password
    });

    // Clear first name input field
    setFirstname("");
    // Clear last name input field
    setLastname("");
    // Clear email input field
    setemail("");
    // Clear password input field
    setpassword("");
}

const CaptainSignup = () => {
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between' >
        <div>
          <img className='w-16 mb-2' src="https://pngimg.com/uploads/uber/uber_PNG24.png" alt="" />
          <h3 className='text-base mb-2 font-medium'>What's your Captain name</h3>
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
            <h3 className='text-base mb-2 font-medium'>What's your Captain email</h3>
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
            <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Continue</button>
          </form>
          <p className='text-center mt-3'>Already have an account? <Link to={'/captain-login'} className='text-blue-600 '>Login</Link></p>
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

export default CaptainSignup