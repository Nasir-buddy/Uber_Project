import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

const UserLogout = () => {
    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        }).catch((error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                console.error("An error occurred during logout", error);
            }
        })
    }, [navigate, token]);

    return (
        <div>UserLogout</div>   
    )
}

export default UserLogout