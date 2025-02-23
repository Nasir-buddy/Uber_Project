import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
    return (
        <div className='  overflow-y-auto'>
            <div className="p-4 bg-white rounded-lg shadow-lg">
                <div
                    className='py-2 w-full flex justify-center cursor-pointer'
                    onClick={() => finishRidePanelRef(false)}
                >
                    <i className="ri-arrow-down-wide-fill text-gray-500 text-2xl hover:text-gray-700 transition-colors" />
                </div>

                <h3 className='text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800'>
                    Finish this Ride to Start
                </h3>

                {/* Rider Info Card */}
                <div className='flex items-center justify-between gap-4 my-4 bg-gray-50 p-4 rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <img
                                className='h-12 w-12 rounded-full object-cover border-2 border-blue-500 shadow-md'
                                src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7"
                                alt="Rider profile"
                            />
                            <div className='absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white' />
                        </div>
                        <div>
                            <h2 className='text-lg md:text-xl font-semibold text-gray-800'>Harsh Patel</h2>
                            <p className='text-sm text-gray-500'>Premium Rider</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h5 className='text-lg font-medium text-blue-600'>2.2 KM</h5>
                        <p className='text-sm text-gray-500'>Distance</p>
                    </div>
                </div>

                <div className='flex flex-col w-full space-y-4'>
                    <hr className='w-full border-t-2 border-gray-100' />

                    {/* Location Details */}
                    <div className='space-y-4 px-2'>
                        {/* Pickup Location */}
                        <div className='flex items-start gap-4 p-3 bg-gray-50 rounded-lg'>
                            <div className='pt-1'>
                                <i className="ri-map-pin-fill text-xl text-blue-500" />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>562/11-A</h3>
                                <h5 className='text-gray-500 text-sm'>Kaikondrahalli, Bengaluru, Karnataka</h5>
                            </div>
                        </div>

                        {/* Destination */}
                        <div className='flex items-start gap-4 p-3 bg-gray-50 rounded-lg'>
                            <div className='pt-1'>
                                <i className="ri-square-fill text-xl text-green-500" />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold'>Third Wave Coffee</h2>
                                <h5 className='text-gray-500 text-sm'>
                                    17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru
                                </h5>
                            </div>
                        </div>

                        {/* Price */}
                        <div className='flex items-start gap-4 p-3 bg-gray-50 rounded-lg'>
                            <div className='pt-1'>
                                <i className="ri-money-rupee-circle-fill text-xl text-yellow-500" />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold'>Rs. 193.20</h3>
                                <h5 className='text-gray-500 text-sm'>Cash/Card</h5>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='space-y-4 mt-6 px-2'>
                            <div className='mt-4 space-y-3'>
                                <Link
                                    to='/captain-riding'
                                    className='block w-full text-center bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-white font-semibold p-3'
                                >
                                    Cpomplete Ride
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinishRide