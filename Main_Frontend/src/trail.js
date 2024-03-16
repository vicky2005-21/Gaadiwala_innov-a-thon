import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLoginSuccess }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [resetIdentifier, setResetIdentifier] = useState('');
    const [resetOTP, setResetOTP] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phoneHint, setPhoneHint] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginStatus('');
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ identifier: identifier.toUpperCase(), password }),
            });

            const data = await response.json();
            if (data.success) {
                onLoginSuccess();
                navigate('/profile');
            } else {
                setLoginStatus(data.message || 'Login failed.');
            }
        } catch (error) {
            setLoginStatus(`Login failed. Error: ${error.message}`);
        }
    };

    const requestPasswordReset = async () => {
        // Implement the request to send OTP
        try {
            const response = await fetch('/request-password-reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: resetIdentifier }),
            });
            const data = await response.json();
            if (data.success) {
                setPhoneHint(data.phone_hint);
                setIsResettingPassword(true);
            } else {
                setLoginStatus(data.message || 'Failed to send OTP.');
            }
        } catch (error) {
            setLoginStatus(`Failed to send OTP. Error: ${error.message}`);
        }
    };

    const verifyOTPAndResetPassword = async () => {
        // Implement the verification and password reset
        try {
            let response = await fetch('/verify-reset-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: resetIdentifier, otp: resetOTP }),
            });
            let data = await response.json();
            if (data.verified) {
                response = await fetch('/reset-password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ mobileNumber: resetIdentifier, newPassword }),
                });
                data = await response.json();
                if (data.success) {
                    setLoginStatus('Password reset successfully. Please login with your new password.');
                    setIsResettingPassword(false);
                } else {
                    setLoginStatus(data.message || 'Failed to reset password.');
                }
            } else {
                setLoginStatus('OTP verification failed.');
            }
        } catch (error) {
            setLoginStatus(`Failed to reset password. Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {!isResettingPassword ? (
                <>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>
                                Identifier (Phone Number / Email / Driver ID):
                                <input 
                                    type="text" 
                                    value={identifier} 
                                    onChange={(e) => setIdentifier(e.target.value)} 
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password:
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <button onClick={() => setIsResettingPassword(true)}>Forgot Password?</button>
                </>
            ) : (
                <div>
                    <p>Enter your phone number to reset password:</p>
                    <input
                        type="text"
                        placeholder="Phone number"
                        value={resetIdentifier}
                        onChange={(e) => setResetIdentifier(e.target.value)}
                    />
                    <button onClick={requestPasswordReset}>Request Password Reset</button>
                    {phoneHint && <p>OTP sent to {phoneHint}</p>}
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={resetOTP}
                        onChange={(e) => setResetOTP(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={verifyOTPAndResetPassword}>Reset Password</button>
                    <button onClick={() => setIsResettingPassword(false)}>Back to Login</button>
                </div>
            )}
            {loginStatus && <div>{loginStatus}</div>}
        </div>
    );
}

export default Login;
