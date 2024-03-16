import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import ProfileDriver from './profile_driver';
import SignupUser from './signup_user';
import SectionOne from './SectionOne'; // Make sure the path is correct
import HomePage from './HomePage'; // Import the HomePage component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />  {/* Updated to show HomePage at the root */}
                    <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} isLoggedIn={isLoggedIn} />} />
                    <Route path="/profile" element={isLoggedIn ? <ProfileDriver onLogout={handleLogout} /> : <Navigate replace to="/login" />} />
                    <Route path="/signup" element={<SignupUser />} />
                    <Route path="/driver-signup" element={<SectionOne />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
