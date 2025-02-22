import React from 'react'

const RidePopUp = (props) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <div className='py-2 w-full flex justify-center cursor-pointer'
                onClick={() => {
                    props.setconfirmRidePanel(false);
                }}
            >
                <i className="ri-arrow-down-wide-fill text-gray-500"></i>
            </div>
            <h3 className='text-2xl font-semibold text-center mb-4'>New Ride Available!</h3>
            <div className='flex items-center justify-between gap-4 my-3'>
                <div className='flex items-center gap-2'>
                    <img className='h-10 w-10 rounded-full object-cover ' src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=279&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                    <h2 className='text-xl font-medium'>Harsh patel</h2>
                </div>
                <h5>2.2 KM</h5>
            </div>
            <div className='flex flex-col w-full'>
                <hr className='w-full border-t-2 border-gray-200 mb-4' />
                <div className='space-y-4'>
                    {/* Pickup Location */}
                    <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                        <div className='pt-1'>
                            <i className="ri-map-pin-fill text-xl text-blue-500"></i>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>562/11-A</h3>
                            <h5 className='text-gray-500 text-sm'>Kaikondrahalli, Bengaluru, Karnataka</h5>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                        <div className='pt-1'>
                            <i className="ri-square-fill text-xl text-green-500"></i>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>Third Wave Coffee</h2>
                            <h5 className='text-gray-500 text-sm'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka</h5>
                        </div>
                    </div>

                    {/* Price */}
                    <div className='flex items-start gap-4 p-4 border-b border-gray-200'>
                        <div className='pt-1'>
                            <i className="ri-money-rupee-circle-fill text-xl text-yellow-500"></i>
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
                        onClick={() => {
                            props.setVehicleFound(true)
                            props.setconfirmRidePanel(false);
                        }} 
                        className='w-full bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-white font-semibold p-3'
                    >
                        Confirm
                    </button>

                    <button 
                        onClick={() => {
                            props.setconfirmRidePanel(false);
                        }} 
                        className='w-full bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg text-gray-700 font-semibold p-3'
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp