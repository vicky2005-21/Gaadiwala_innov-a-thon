import React, { useState } from 'react';
import './SignupUser.css';
import { useNavigate } from 'react-router-dom';

function SignupUser() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [message, setMessage] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const navigate = useNavigate();

    const sendOTP = async () => {
        try {
            const response = await fetch('/signup-user/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mobileNumber: phone })
            });
    
            const data = await response.json();
            if (data.success) {
                setOtpSent(true);
                setMessage('OTP sent to your phone.');
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                () => {
                    setMessage('Location access denied.');
                }
            );
        } else {
            setMessage('Geolocation is not supported by this browser.');
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await fetch('/signup-user/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: phone, otp: otp })
            });
            const data = await response.json();
            if (data.success) {
                setIsVerified(true);
                setMessage('OTP verified. Please set your password.');
            } else {
                setMessage(data.message || 'OTP verification failed.');
            }
        } catch (error) {
            setMessage(`Error verifying OTP: ${error.message}`);
        }
    };
    

    const signupUser = async () => {
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
    
        // Here, ensure latitude and longitude are not null, if required before signup.
        try {
            const response = await fetch('/signup-user/save-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, 
                    phoneNumber: phone, 
                    email, 
                    password, 
                    gpsLatitude: latitude,  // Send latitude
                    gpsLongitude: longitude  // Send longitude
                })
            });
            const data = await response.json();
            setMessage(data.message);
            if (data.success) {
                // If signup is successful, redirect to the external URL
                window.location.href = 'http://127.0.0.1:5000/';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!latitude || !longitude) {  // Only get location if we don't already have it.
            getLocation();
        }
        if (!otpSent) {
            sendOTP();
        } else if (!isVerified) {
            verifyOTP();
        } else {
            signupUser();
        }
};


return (
    <div className="signup-container">
        <h2>Signup User</h2>
        <form onSubmit={handleSubmit} className="signup-form">
            {/* Input fields for Name, Email, and Phone Number */}
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={otpSent} />
            </div>

            {/* OTP input */}
            {otpSent && !isVerified && (
                <div>
                    <label>OTP:</label>
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                </div>
            )}

            {/* Password and Confirm Password inputs */}
            {isVerified && (
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
            )}

            {/* Submit button */}
            <button type="submit">{isVerified ? 'Signup' : 'Verify OTP'}</button>
        </form>
        {message && <p className="message">{message}</p>}
    </div>
);
}

export default SignupUser;
