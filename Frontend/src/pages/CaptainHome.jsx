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
      <div className='mt-4'>
        <div className='flex items-center justify-between p-4 bg-gray-50 rounded-lg'>
          <img
            className='h-16 w-16 object-cover rounded-full'
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="Driver"
          />
          <div className='text-right'>
            <h2 className='text-lg font-medium capitalize'>Nasir Ali</h2>
            <h4 className='text-xl font-semibold my-1'>GN 01 5555</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className='mt-4'>
          <div className='space-y-2 bg-white rounded-lg shadow-sm'>
            <div className='flex items-center gap-4 p-4 border-b'>
              <i className="ri-map-pin-2-fill text-xl text-gray-600"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-600'>bihar patna</p>
              </div>
            </div>
            <div className='flex items-center gap-4 p-4'>
              <i className="ri-currency-line text-xl text-gray-600"></i>
              <div>
                <h3 className='text-lg font-medium'>₹50000</h3>
                <p className='text-sm text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaptainHome