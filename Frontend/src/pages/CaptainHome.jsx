import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true); // Changed to true
  const [vehicleFound, setVehicleFound] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const ridePopupPanelRef = useRef(null);

  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      transform: ridePopupPanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.5,
      ease: 'power2.out'
    });
  }, [ridePopupPanel]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRidePopupPanel(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // starting captain home 
    <div className='h-screen p-2'>

      <div className='h-1/2'>
        <div className='fixed p-3 top-0 flex items-center justify-between w-full'>
          <img className='w-16' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
          <Link className='h-10 w-10 bg-white flex items-center justify-center rounded-full '
            to={'/home'}>
            <i className="text-lg font-medium ri-logout-box-line"></i>
          </Link>
        </div>
        <img
          className='w-full h-full object-cover rounded-lg'
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3323d154382771.6340f969dc5f9.gif"
          alt="Driving"
        />
      </div>
      <div className='mt-4 p-2'>
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full py-3 px-3'>
        <RidePopUp 
          setRidePopupPanel={setRidePopupPanel}
          setVehicleFound={setVehicleFound}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
    </div>
  )
}

export default CaptainHome