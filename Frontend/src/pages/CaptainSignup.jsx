import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [isCheck, setisCheck] = useState(false);
  const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isCheck) {
      alert('Please agree to the terms and conditions');
      return;
    }
    const captainData = ({
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicleType: vehicleType,
        capacity: vehicleCapacity
      }
    });

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    if(response.status === 201){
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      console.log("captain", data.token);
      console.log("response", response);
      navigate('/captain-home');
    }

    setFirstname("");
    setLastname("");
    setemail("");
    setpassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleCapacity("");
  }
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
            {/* vehicle inputs  */}
            <h3 className='text-base mb-2 font-medium'>Vehicle Information</h3>
            <div className='flex  gap-2'>
              <div>
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
                  required
                  value={vehicleColor}
                  onChange={(e) => { setVehicleColor(e.target.value) }}
                  type="text" placeholder="Vehicle Color" />
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
                  required
                  value={vehiclePlate}
                  onChange={(e) => { setVehiclePlate(e.target.value) }}
                  type="text" placeholder="Vehicle Plate" />

              </div>
              <div>
                <select
                  className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
                  required
                  value={vehicleType}
                  onChange={(e) => { setVehicleType(e.target.value) }}>
                  <option value="">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                </select>
                <input
                  className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-base placeholder:text-base'
                  required
                  value={vehicleCapacity}
                  onChange={(e) => { setVehicleCapacity(e.target.value) }}
                  type="number" placeholder="Vehicle Capacity" />
              </div>
            </div>

            <button className='w-full bg-black text-white py-5 mt-2 rounded flex items-center justify-center'>Continue</button>
          </form>
          <p className='text-center mt-3'>Already have an account? <Link to={'/captain-login'} className='text-blue-600 '>Create Captain Account</Link></p>
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