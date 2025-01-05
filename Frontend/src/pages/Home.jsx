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

  const submitHandler = () => {
    e.preventDefault();

  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panerRef.current, {
        height: '80%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1'
      })
    } else {
      gsap.to(panerRef.current, {
        height: '0%'
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0'
      })
    }
  }, [panelOpen])
  return (
    <div className='h-screen relative'>
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
          {<LocationSearchPanel />}
        </div>
      </div>


    </div>
  )
}

export default Home