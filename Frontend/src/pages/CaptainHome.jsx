import React from 'react'
import { Link } from 'react-router-dom'

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
      <h2 className='text-2xl font-semibold mb-4'>Captain Details</h2>
      <div className='bg-white rounded-lg shadow-md p-4'>
        <div className='flex items-center mb-4'>
          <div className='w-16 h-16 bg-gray-200 rounded-full mr-4'></div>
          <div>
            <h3 className='text-xl font-medium'>John Doe</h3>
            <p className='text-gray-600'>ID: CAP123456</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-gray-600'>Total Trips</p>
            <p className='text-2xl font-bold'>152</p>
          </div>
          <div className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-gray-600'>Rating</p>
            <p className='text-2xl font-bold'>4.8</p>
          </div>
          <div className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-gray-600'>Experience</p>
            <p className='text-2xl font-bold'>2 years</p>
          </div>
          <div className='p-3 bg-gray-50 rounded-lg'>
            <p className='text-gray-600'>Vehicle</p>
            <p className='text-2xl font-bold'>Toyota Camry</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CaptainHome