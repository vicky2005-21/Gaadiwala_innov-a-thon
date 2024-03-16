// useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check the storage or cookie to see if the user is logged in
        const token = sessionStorage.getItem('authToken'); // or localStorage
        setIsAuthenticated(!!token);
    }, []);

    const logout = () => {
        sessionStorage.removeItem('authToken'); // or localStorage
        setIsAuthenticated(false);
    };

    return { isAuthenticated, logout };
};

export default useAuth;
