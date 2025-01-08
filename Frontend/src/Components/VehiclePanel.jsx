import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <div className='py-1 w-full flex justify-center'>
                <i onClick={() => { props.setvehiclePanel(false) }} className="ri-arrow-down-wide-fill"></i>
            </div>
            <h3 className='text-xl font-semibold'>Choose a Vehicle</h3>
            <div onClick={() => { props.setconfirmRidePanel(true) }} className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
                <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1631132572/assets/ff/62c74e-2819-46c9-83b6-0d9a8e4fe238/original/uber_green.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium'>Uber GO <i className="ri-user-2-fill text-sm">4</i></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
                </div>
                <h2 className='text-2xl font-semibold'>Rs.195</h2>
            </div>

            <div onClick={() => { props.setconfirmRidePanel(true) }} className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
                <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium'>Uber Bike <i className="ri-user-2-fill text-sm">4</i></h4>
                    <h5 className='font-medium text-sm'>1 mins away</h5>
                    <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
                </div>
                <h2 className='text-2xl font-semibold'>Rs.23</h2>
            </div>

            <div onClick={() => { props.setconfirmRidePanel(true) }} className='flex items-center justify-between p-3 my-4 w-full border-2 active:border-black transition-all duration-75 rounded-xl'>
                <img className='h-16 bg-transparent ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='w-1/2'>
                    <h4 className='font-medium'>Uber Bike <i className="ri-user-2-fill text-sm">4</i></h4>
                    <h5 className='font-medium text-sm'>1 mins away</h5>
                    <p className='font-medium text-xs text-gray-400'>Affordable, compact rides</p>
                </div>
                <h2 className='text-2xl font-semibold'>Rs.23</h2>
            </div>
        </div>
    )
}

export default VehiclePanel