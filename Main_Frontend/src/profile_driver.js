import React, { useState, useEffect } from 'react';
import './profile_driver.css';

function ProfileDriver({ onLogout }){
    const [driverDetails, setDriverDetails] = useState({
        // Initialize with your driver details structure
        vehicle_type: '',
        distance_preference: '',
        languages: '',
        mechanic_work: '',
        expected_pay_per_km: '',
        expected_pay_daily: '',
        aadhaar_image_url: '',
        license_image_url: '',
        // Add other fields as needed
    });
    const [error, setError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isUpdatingPhoneNumber, setIsUpdatingPhoneNumber] = useState(false);
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [isUpdatingLicense, setIsUpdatingLicense] = useState(false);
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseData, setLicenseData] = useState(null);
    const [licenseDataFetched, setLicenseDataFetched] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [gpsCoordinates, setGpsCoordinates] = useState('');
    const [aadhaarImage, setAadhaarImage] = useState(null);  // State for Aadhaar image file
    const [licenseImage, setLicenseImage] = useState(null);  // State for License image file

    // Function to get GPS coordinates
    const getGpsCoordinates = (callback) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
                    setGpsCoordinates(coords);
                    callback(coords);  // Call the callback function with the GPS coordinates
                },
                (error) => {
                    console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
        }
    };

    const handleAadhaarImageChange = (event) => {
        setAadhaarImage(event.target.files[0]);
    };
    
    const handleLicenseImageChange = (event) => {
        setLicenseImage(event.target.files[0]);
    };

    // Function to toggle active status
    const toggleActiveStatus = () => {
        getGpsCoordinates(async (coords) => {
            try {
                const response = await fetch('/profile/status', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ isActive: !isActive, gps: coords })
                });
                const data = await response.json();
                setIsActive(data.active_status);
            } catch (error) {
                console.error('Error:', error);
            }
        });
    };

    useEffect(() => {
        fetchDriverDetails();
    }, []);

    const fetchDriverDetails = async () => {
        try {
            const response = await fetch('/profile', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();
            if (data.success) {
                setDriverDetails(data.driverDetails);
            } else {
                setError(data.message || 'Failed to load profile.');
            }
        } catch (e) {
            setError('An error occurred while fetching the driver details.');
        }
    };
    const handleLogout = () => {
        onLogout(); // Call the logout handler from App.js
        // You might want to do additional cleanup here
    };

    const handlePhoneNumberChange = (e) => {
        setNewPhoneNumber(e.target.value);
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const sendOtp = async () => {
        try {
            const response = await fetch('/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: newPhoneNumber })
            });
            const data = await response.json();
            if (data.success) {
                setOtpSent(true);
                setError('');
            } else {
                setError(data.message || 'Failed to send OTP');
            }
        } catch (error) {
            setError('Error sending OTP');
        }
    };

    const verifyOtpAndUpdatePhoneNumber = async () => {
        try {
            const response = await fetch('/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: newPhoneNumber, otp: otp })
            });
            const data = await response.json();
            if (data.verified) {
                updatePhoneNumberInProfile();
            } else {
                setError('OTP verification failed');
            }
        } catch (error) {
            setError('Error verifying OTP');
        }
    };

    const updatePhoneNumberInProfile = async () => {
        try {
            const response = await fetch('/update-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newPhoneNumber: newPhoneNumber })
            });
            const data = await response.json();
            if (data.success) {
                setDriverDetails({ ...driverDetails, phone_number: newPhoneNumber });
                setIsUpdatingPhoneNumber(false);
                setOtpSent(false);
                setError('');
            } else {
                setError('Failed to update phone number');
            }
        } catch (error) {
            setError('Error updating phone number');
        }
    };

    const handleLicenseNumberChange = (event) => {
        setLicenseNumber(event.target.value);
    };

    const handleLicenseSubmit = (event) => {
        event.preventDefault();
        fetch('https://1c674262-b495-47d5-a536-81a449706d35.mock.pstmn.io/api/v1/driving-license/driving-license', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "id_number": licenseNumber })
        })
        .then(response => response.json())
        .then(data => {
            if (data && data.data) {
                setLicenseData(data.data);
                setLicenseDataFetched(true);
                setResponseMessage('License data fetched successfully.');
            } else {
                setResponseMessage('License data not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setResponseMessage('Failed to fetch license data');
        });
    };

    const updateLicenseDetails = async () => {
    if (!licenseDataFetched) {
        setError('No license data to update');
        return;
    }

    try {
        // Add or format the vehicle_class key in licenseData
        const updatedLicenseData = {
            ...licenseData,
            vehicle_class: licenseData.vehicle_classes ? licenseData.vehicle_classes.join(', ') : ''
        };

        const response = await fetch('/update-license-details', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                driverId: driverDetails.driver_id, 
                licenseData: updatedLicenseData 
            })
        });
        const data = await response.json();
        if (data.success) {
            setDriverDetails(prevDetails => ({ ...prevDetails, ...updatedLicenseData }));
            setIsUpdatingLicense(false);
            setLicenseDataFetched(false);
            setResponseMessage('License details updated successfully.');
            // Reload the page after a short delay to see the updated details
            
        } else {
            setError('Failed to update license details');
        }
    } catch (error) {
        setError('Error updating license details');
    }
};

    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDriverDetails({ ...driverDetails, [name]: value });
    };
    
    const updateDriverDetail = async (detailName, newValue) => {
        try {
            const response = await fetch(`/update-driver-detail/${detailName}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newValue: newValue })
            });
            const data = await response.json();
            if (data.success) {
                setDriverDetails({ ...driverDetails, [detailName]: newValue });
                setResponseMessage('Detail updated successfully.');
            } else {
                setError(data.message || 'Failed to update detail.');
            }
        } catch (error) {
            setError('Error updating detail.');
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-container">
                <img src="src/Gaadi_Wala_logo-removebg-preview.png" className="logo" alt="Company Logo" />
            </div>
            <div className="sidebar">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#personal-info">Personal Info</a></li>
                    <li><a href="#vehicle-details">Vehicle Details</a></li>
                    <li><a href="#work-preferences">Work Preferences</a></li>
                    <li><a href="#documentation">Documentation</a></li>
                </ul>
            </div>
            <div className="detail-section">
                <h2>Driver Profile</h2>
                {error && <div className="error-message">{error}</div>}
                {responseMessage && <div className="response-message">{responseMessage}</div>}
    
                <div id="personal-info">
                    <h3>Personal Information</h3>
                    <p>Driver ID: {driverDetails.driver_id}</p>
                    <p>Name: {driverDetails.name}</p>
                    {isUpdatingPhoneNumber ? (
                        <div>
                            <label>New Phone Number:</label>
                            <input
                                type="text"
                                placeholder="New Phone Number"
                                value={newPhoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                            {otpSent ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={handleOtpChange}
                                    />
                                    <button onClick={verifyOtpAndUpdatePhoneNumber}>Verify OTP and Update</button>
                                </>
                            ) : (
                                <button onClick={sendOtp}>Send OTP</button>
                            )}
                            <button onClick={() => setIsUpdatingPhoneNumber(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p>Phone Number: {driverDetails.phone_number}</p>
                            <button onClick={() => setIsUpdatingPhoneNumber(true)}>Update Phone Number</button>
                        </div>
                    )}
                    <p>Email: {driverDetails.email}</p>
                    <p>Date of Birth: {driverDetails.dob}</p>
                    <p>Address: {driverDetails.address}</p>
                </div>
    
                <div id="vehicle-details">
                    <h3>Vehicle Details</h3>
                    <div>
                        <label>Vehicle Type:</label>
                        <input
                            type="text"
                            name="vehicle_type"
                            value={driverDetails.vehicle_type}
                            onChange={e => updateDriverDetail('vehicle_type', e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Distance Preference:</label>
                        <input
                            type="text"
                            name="distance_preference"
                            value={driverDetails.distance_preference}
                            onChange={e => updateDriverDetail('distance_preference', e.target.value)}
                        />
                    </div>
                </div>
    
                <div id="work-preferences">
                    <h3>Work Preferences</h3>
                    <div>
                        <label>Languages:</label>
                        <input
                            type="text"
                            name="languages"
                            value={driverDetails.languages}
                            onChange={e => updateDriverDetail('languages', e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Mechanic Work:</label>
                        <input
                            type="text"
                            name="mechanic_work"
                            value={driverDetails.mechanic_work}
                            onChange={e => updateDriverDetail('mechanic_work', e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Expected Pay per Km:</label>
                        <input
                            type="number"
                            name="expected_pay_per_km"
                            value={driverDetails.expected_pay_per_km}
                            onChange={e => updateDriverDetail('expected_pay_per_km', e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Expected Daily Pay:</label>
                        <input
                            type="number"
                            name="expected_pay_daily"
                            value={driverDetails.expected_pay_daily}
                            onChange={e => updateDriverDetail('expected_pay_daily', e.target.value)}
                        />
                    </div>
                </div>
    
                <div id="documentation">
                    <h3>Documentation</h3>
                    {/* Aadhaar Number Display */}
                    <div className="aadhaar-section">
                        <p>Aadhaar Number: {driverDetails.aadhaar_number}</p>
                        <div className="dummy-box"></div> {/* This is your dummy box */}
                        <button type="button">Update Aadhaar Details</button>
                    </div>
                    {isUpdatingLicense ? (
                        <div>
                            <label>New License Number:</label>
                            <input
                                type="text"
                                placeholder="Enter New License Number"
                                value={licenseNumber}
                                onChange={handleLicenseNumberChange}
                            />
                            <button onClick={handleLicenseSubmit}>Fetch License Data</button>
                            {licenseDataFetched && (
                                <div>
                                    {/* Optionally display fetched license data for confirmation */}
                                    <button onClick={updateLicenseDetails}>Confirm and Update License Details</button>
                                </div>
                            )}
                            <button onClick={() => setIsUpdatingLicense(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p>License Number: {driverDetails.license_number}</p>
                            <button onClick={() => setIsUpdatingLicense(true)}>Update License Details</button>
                        </div>
                    )}
                    <div>
                        <label htmlFor="aadhaarFile">Aadhaar Image:</label>
                        <input
                            type="file"
                            id="aadhaarFile"
                            onChange={handleAadhaarImageChange}
                            accept="image/*,application/pdf"
                        />
                    </div>
                    <div>
                        <label htmlFor="licenseFile">License Image:</label>
                        <input
                            type="file"
                            id="licenseFile"
                            onChange={handleLicenseImageChange}
                            accept="image/*,application/pdf"
                        />
                    </div>
                </div>
    
                <div className="buttons-container">
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={toggleActiveStatus}>{isActive ? 'Mark as Inactive' : 'Mark as Active'}</button>
                </div>
            </div>
        </div>
    );
    
}  
export default ProfileDriver;
