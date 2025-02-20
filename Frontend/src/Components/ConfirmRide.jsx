import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <div className='py-1 w-full flex justify-center'
            onClick={() => {
                props.setconfirmRidePanel(false);
            }}
            >
                <i className="ri-arrow-down-wide-fill"></i>
            </div>
            <h3 className='text-xl font-semibold'>Confirm Vehicle</h3>
            <div className='flex justify-between ga-3 flex-col items-center'>
                <img className='h-36 bg-red-300' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1631132572/assets/ff/62c74e-2819-46c9-83b6-0d9a8e4fe238/original/uber_green.png" alt="" />
                <hr className='w-full border-t-2 border-gray-300 my-4' />
                <div className='w-full'>
                    <div className='flex items-center gap-4 p-3 border-b-2 my-2'>
                        <div className=''>
                            <i className="ri-map-pin-fill"></i>
                        </div>
                        <div className=''>
                            <h3 className='text-xl font-semibold'>562/11-A</h3>
                            <h5 className='text-gray-500'>Kaikondrahalli, Bengaluru, Karnataka</h5>
                        </div>
                    </div>


                    <div className='flex items-center gap-4 p-3 border-b-2 my-2'>
                        <div className=''>
                            <i class="ri-square-fill"></i>
                        </div>
                        <div className=''>
                            <h2 className='font-semibold text-xl'>Third Wave Coffee</h2>
                            <h5 className='text-gray-500'>17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengalrur, Karnataka</h5>
                        </div>
                    </div>


                    <div className='flex items-center gap-4 p-3 border-b-2 my-2'>
                        <div className=''>
                            <i className="ri-map-pin-fill"></i>
                        </div>
                        <div className=''>
                            <h3 className='text-xl font-semibold'>Rs. 193.20</h3>
                            <h5 className='text-gray-500'>Cash Card/h5</h5>
                        </div>
                    </div>

                </div>
                {/* all login for button */}
                <button onClick={() => {
                    props.setVehicleFound(true) 
                    props.setconfirmRidePanel(false);
                }} className='w-full bg-green-400 rounded-lg text-white font-semibold p-2'>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide