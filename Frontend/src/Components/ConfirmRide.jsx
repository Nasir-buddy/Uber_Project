import React from 'react'

const ConfirmRide = () => {
    return (
        <div>
            <div className='py-1 w-full flex justify-center'>
                <i onClick={() => { props.setvehiclePanel(false) }} className="ri-arrow-down-wide-fill"></i>
            </div>

        </div>
    )
}

export default ConfirmRide