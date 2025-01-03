import React, { createContext, useState } from 'react'

// Create a context for user data
export const UserDataContext = createContext();

// Define the UserContext component that takes children as a prop
const UserContext = ({ children }) => {
    // Initialize user state with email and fullname properties
    const [user, setUser] = useState({
        email: '',
        fullname: {
            firstName: '',
            lastName: '',
        }
    });

    // Return a div containing the UserDataContext provider
    return (
        <div>
            {/* Provide the user state and setUser function to the context */}
            <UserDataContext.Provider value={[user, setUser]}>
                {children}
            </UserDataContext.Provider>
        </div>
    );
};

export default UserContext