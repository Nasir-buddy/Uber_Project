import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div>
            <div className='py-1 w-full flex justify-center'>
                <i onClick={() => { props.setvehiclePanel(false) }} className="ri-arrow-down-wide-fill"></i>
            </div>
            <h3 className='text-xl font-semibold'>Confirm Vehicle</h3>
        </div>
    )
}

export default ConfirmRide