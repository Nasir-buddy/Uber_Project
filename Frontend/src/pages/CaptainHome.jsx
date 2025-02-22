import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'

const CaptainHome = () => {
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
    </div>
  )
}

export default CaptainHome