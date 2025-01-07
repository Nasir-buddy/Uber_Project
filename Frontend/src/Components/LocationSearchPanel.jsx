import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LocationSearchPanel = () => {
    return (
        <div className='scroll-auto'>
            {/* this is sample data */}
            <div className='flex items-center border-2 border-white active:border-black transition-all duration-100 p-3 rounded-lg justify-start gap-4 my-4'>
                <h2 className='bg-gray-300 flex items-center justify-center h-10 w-16 rounded-full '>
                    <i className="ri-map-pin-fill"></i>
                </h2>
                <h4 className='text-md'>Accurate institute of management and technology. Greater Noida, Uttar Pradesh.</h4>
            </div>
        </div>

        
    )
}

export default LocationSearchPanel