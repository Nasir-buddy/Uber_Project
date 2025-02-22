import React from 'react'

const ConfirmRidePopup = (props) => {
    const { setRidePopupPanel } = props;

    return (
        <div className='h-[90%]'>
            <div className="p-2 bg-white rounded-lg shadow-lg h-screen">
                <div 
                    className='py-2 w-full flex justify-center cursor-pointer'
                    onClick={() => setRidePopupPanel(false)}
                >
                    <i className="ri-arrow-down-wide-fill text-gray-500 text-2xl hover:text-gray-700 transition-colors" />
                </div>

                <h3 className='text-3xl font-bold text-center mb-6 text-gray-800'>
                    New Ride Available!
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
                            <h2 className='text-xl font-semibold text-gray-800'>Harsh Patel</h2>
                            <p className='text-sm text-gray-500'>Premium Rider</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h5 className='text-lg font-medium text-blue-600'>2.2 KM</h5>
                        <p className='text-sm text-gray-500'>Distance</p>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <hr className='w-full border-t-2 border-gray-100 my-4' />
                    
                    <div className='space-y-4'>
                        {/* Pickup Location */}
                        <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                            <div className='pt-1'>
                                <i className="ri-map-pin-fill text-xl text-blue-500" />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold'>562/11-A</h3>
                                <h5 className='text-gray-500 text-sm'>Kaikondrahalli, Bengaluru, Karnataka</h5>
                            </div>
                        </div>

                        {/* Destination */}
                        <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                            <div className='pt-1'>
                                <i className="ri-square-fill text-xl text-green-500" />
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Third Wave Coffee</h2>
                                <h5 className='text-gray-500 text-sm'>
                                    17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka
                                </h5>
                            </div>
                        </div>

                        {/* Price */}
                        <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                            <div className='pt-1'>
                                <i className="ri-money-rupee-circle-fill text-xl text-yellow-500" />
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold'>Rs. 193.20</h3>
                                <h5 className='text-gray-500 text-sm'>Cash/Card</h5>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className='space-y-3 mt-6'>
                        <button
                            onClick={() => {}}
                            className='w-full bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-white font-semibold p-3'
                        >
                            Accept
                        </button>

                        <button
                            onClick={() => setRidePopupPanel(false)}
                            className='w-full bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg text-gray-700 font-semibold p-3'
                        >
                            Ignore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopup