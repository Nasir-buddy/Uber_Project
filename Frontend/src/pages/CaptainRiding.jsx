import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='min-h-screen relative bg-gray-50'>
            <div className='flex flex-col h-screen p-2 relative'>
                <div className='fixed p-3 top-0 left-0 right-0 flex items-center justify-between bg-white z-10'>
                    <img className='w-16' src="https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png" alt="" />
                    <Link className='h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md'
                        to={'/home'}>
                        <i className="text-lg font-medium ri-logout-box-line"></i>
                    </Link>
                </div>
                
                <div className='h-4/5 mt-16'>
                    <img
                        className='w-full h-full object-cover rounded-lg'
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d3323d154382771.6340f969dc5f9.gif"
                        alt="Driving"
                    />
                </div>

                <div className='p-4 bg-yellow-400 rounded-lg mt-4 relative'>
                    <div className='absolute -top-6 left-0 right-0 flex justify-center'>
                        <div className='bg-white p-2 rounded-full shadow-md cursor-pointer'
                            onClick={() => {
                                // setRidePopupPanel(false);
                            }}
                        >
                            <i className="ri-arrow-up-fill text-gray-500 text-xl hover:text-gray-700 transition-colors"></i>
                        </div>
                    </div>
                    <h4 className='text-lg font-semibold mb-3'>
                        4 KM away
                    </h4>
                    <button className='mx-auto block bg-green-600 text-white font-semibold py-2 px-8 rounded-lg hover:bg-green-700 transition-colors'>
                        Complete Ride
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CaptainRiding