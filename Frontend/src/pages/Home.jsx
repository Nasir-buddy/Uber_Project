import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel';

const Home = () => {
  const [pickUp, setpickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false);
  const panerRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanerRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);

  const submitHandler = () => {
    e.preventDefault();

  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panerRef.current, {
        height: '80%',
        padding: 20
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1'
      })
    } else {
      gsap.to(panerRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0'
      })
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanerRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanerRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 mb-7 absolute left-5 top-5' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temporary uses */}
        <img className='h-full w-full object-cover'
          src="https://lh3.googleusercontent.com/proxy/GH6cV2LdByuyV50BDypx-KHuQokGS5hH7IRAGva1unyEXE3X2UXvmcSrlCkDTSRKOEoCzi3dJe3qjJV0OKBVJfaiNM7-EhddY8MIqZmQWkn--tksiio7SZ4SjooC5pAu9GMIUW0gl5yf=w1200-h630-p-k-no-nu" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute w-full top-0  rounded-t-lg'>
        <div className=' bg-white h-[20%] p-5 relative'>
          <h5
            ref={panelCloseRef}
            onClick={(e) => {
              setpanelOpen(false);
            }}
            className='absolute right-4 top-4 text-[1.5rem] opacity-0'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-[10%] rounded-lg bg-gray-900"></div>
            <input
              value={pickUp}
              onClick={(e) => {
                setpanelOpen(true);
              }}
              onChange={(e) => {
                setpickUp(e.target.value);
              }}
              className='border px-12 py-2 text-base rounded-lg w-full mt-3 mb-3 bg-[#eee]' type="text" placeholder='Add a pickup location' />

            <input
              value={destination}
              onClick={(e) => {
                setpanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.targer.value);
              }}
              className='border px-12 py-2 text-base rounded-lg w-full bg-[#eee]' type="text" placeholder='Enter your destination' />
          </form>
        </div>

        <div ref={panerRef} className='h-[0] bg-[#eee]'>
          {<LocationSearchPanel setpanelOpen={setpanelOpen} setvehiclePanel={setvehiclePanel} />}
        </div>
      </div>
      <div ref={vehiclePanerRef} className='fixed x-10 bottom-0 translate-y-full bg-white w-full py-3 px-3'>
        <div className='py-1 w-full flex justify-center'>
          <i onClick={() => { setvehiclePanel(false) }} class="ri-arrow-down-wide-fill"></i>
        </div>
        <h3 className='text-xl font-semibold'>Choose a Vehicle</h3>
        <div className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
          <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1631132572/assets/ff/62c74e-2819-46c9-83b6-0d9a8e4fe238/original/uber_green.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium'>Uber GO <i className="ri-user-2-fill text-sm">4</i></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>Rs.195</h2>
        </div>

        <div className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
          <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium'>Uber Bike <i className="ri-user-2-fill text-sm">4</i></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>Rs.23</h2>
        </div>

        <div className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
          <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium'>Uber Bike <i className="ri-user-2-fill text-sm">4</i></h4>
            <h5 className='font-medium text-sm'>1 mins away</h5>
            <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>Rs.23</h2>
        </div>
      </div>
    </div>
  )
}

export default Home