import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
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
    )
}

export default CaptainDetails