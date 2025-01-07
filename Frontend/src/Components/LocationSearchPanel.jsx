import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LocationSearchPanel = () => {
    // sample array of locations 
    const location = ["Accurate institute of management and technology. Greater Noida, Uttar Pradesh.",
        "GNIOT. Greater Noida, Uttar Pradesh.",
        "GL Bajaj Institute of Technology. Greater Noida, Uttar Pradesh.",
        "NIET Institute of Technolog. Greater Noida, Uttart Pradesh.",
        "ITS institute of Management and Technology. Greater Noida, Uttar Pradesh."
    ]
    return (
        <div className='scroll-auto'>
            {/* this is sample data */}
            {
                location.map((item, index) => {
                    return (
                        <div className='flex items-center  border-2 border-white active:border-black transition-all duration-100 p-3 rounded-lg justify-start gap-4 my-4'>
                            <div className='w-12'> 
                            <h2 className='bg-gray-300 flex items-center justify-center h-10 rounded-full '>
                                <i className="ri-map-pin-fill"></i>
                            </h2>
                            </div>
                           <div className='w-full'>
                           <h4 className='text-md'>{item}</h4>
                           </div>
                        </div>
                    )
                })
            }
        </div>


    )
}

export default LocationSearchPanel