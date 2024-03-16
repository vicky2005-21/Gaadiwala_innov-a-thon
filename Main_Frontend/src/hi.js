import React, { useState, useEffect } from 'react';

function ProfileDriver() {
    const [driverDetails, setDriverDetails] = useState({
        // Initialize with your driver details structure
        vehicle_type: '',
        distance_preference: '',
        languages: '',
        mechanic_work: '',
        expected_pay_per_km: '',
        expected_daily_pay: '',
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
            const response = await fetch('/update-license-details', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    driverId: driverDetails.driver_id, 
                    licenseData: licenseData 
                })
            });
            const data = await response.json();
            if (data.success) {
                setDriverDetails(prevDetails => ({ ...prevDetails, ...licenseData }));
                setIsUpdatingLicense(false);
                setLicenseDataFetched(false);
                setError('');
                setResponseMessage('License details updated successfully.');
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
        <div>
            <h2>Driver Profile</h2>
            {error && <div className="error-message">{error}</div>}
            {responseMessage && <div className="response-message">{responseMessage}</div>}
            <div>
                    <p>Driver ID: {driverDetails.driver_id}</p>
                    <p>Name: {driverDetails.name}</p>
                    <p>Phone Number: {driverDetails.phone_number}</p>
                    <p>Email: {driverDetails.email}</p>
                    <p>Aadhaar Number: {driverDetails.aadhaar_number}</p>
                    <p>Address: {driverDetails.address}</p>
                    <p>Date of Birth: {driverDetails.dob}</p>
                    <p>License Number: {driverDetails.license_number}</p>
                    <p>Country: {driverDetails.country}</p>
                    <p>State: {driverDetails.stateName}</p>
                    <p>Vehicle Class: {driverDetails.vehicle_class}</p>
                    <p>Date of Issue: {driverDetails.initial_doi}</p>
                    <p>Date of Expiry: {driverDetails.doe}</p>
                    <p>Vehicle Type: {driverDetails.vehicle_type}</p>
                    <p>Distance Preference: {driverDetails.distance_preference}</p>
                    <p>Languages: {driverDetails.languages}</p>
                    <p>Mechanic Work: {driverDetails.mechanic_work}</p>
                    <p>Expected Pay per Km: {driverDetails.expected_pay_per_km}</p>
                    <p>Expected Daily Pay: {driverDetails.expected_pay_daily}</p>
                    <p>Aadhaar Image: <img src={driverDetails.aadhaar_image_url} alt="Aadhaar" /></p>
                    <p>License Image: <img src={driverDetails.license_image_url} alt="License" /></p>
                </div>
    
            {/* Display and update driver details */}
            {/* Vehicle Type */}
            <div>
                <label>Vehicle Type:</label>
                <input
                    type="text"
                    name="vehicle_type"
                    value={driverDetails.vehicle_type}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('vehicle_type', driverDetails.vehicle_type)}>
                    Update Vehicle Type
                </button>
            </div>
    
            {/* Distance Preference */}
            <div>
                <label>Distance Preference:</label>
                <input
                    type="text"
                    name="distance_preference"
                    value={driverDetails.distance_preference}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('distance_preference', driverDetails.distance_preference)}>
                    Update Distance Preference
                </button>
            </div>
    
            {/* Languages */}
            <div>
                <label>Languages:</label>
                <input
                    type="text"
                    name="languages"
                    value={driverDetails.languages}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('languages', driverDetails.languages)}>
                    Update Languages
                </button>
            </div>
    
            {/* Mechanic Work */}
            <div>
                <label>Mechanic Work:</label>
                <input
                    type="text"
                    name="mechanic_work"
                    value={driverDetails.mechanic_work}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('mechanic_work', driverDetails.mechanic_work)}>
                    Update Mechanic Work
                </button>
            </div>
    
            {/* Expected Pay per Km */}
            <div>
                <label>Expected Pay per Km:</label>
                <input
                    type="number"
                    name="expected_pay_per_km"
                    value={driverDetails.expected_pay_per_km}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('expected_pay_per_km', driverDetails.expected_pay_per_km)}>
                    Update Pay per Km
                </button>
            </div>
    
            {/* Expected Daily Pay */}
            <div>
                <label>Expected Daily Pay:</label>
                <input
                    type="number"
                    name="expected_daily_pay"
                    value={driverDetails.expected_daily_pay}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('expected_daily_pay', driverDetails.expected_daily_pay)}>
                    Update Daily Pay
                </button>
            </div>
    
            {/* Aadhaar and License Images URLs */}
            <div>
                <label>Aadhaar Image URL:</label>
                <input
                    type="text"
                    name="aadhaar_image_url"
                    value={driverDetails.aadhaar_image_url}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('aadhaar_image_url', driverDetails.aadhaar_image_url)}>
                    Update Aadhaar Image
                </button>
            </div>
    
            <div>
                <label>License Image URL:</label>
                <input
                    type="text"
                    name="license_image_url"
                    value={driverDetails.license_image_url}
                    onChange={handleInputChange}
                />
                <button onClick={() => updateDriverDetail('license_image_url', driverDetails.license_image_url)}>
                    Update License Image
                </button>
            </div>
    
            {/* Updating PhoneNumber with OTP Verification */}
        {isUpdatingPhoneNumber ? (
            <div>
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
            <button onClick={() => setIsUpdatingPhoneNumber(true)}>Update Phone Number</button>
        )}

        {/* Updating License Details */}
        {isUpdatingLicense ? (
            <div>
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
            <button onClick={() => setIsUpdatingLicense(true)}>Update License Details</button>
        )}
    </div>
    );
}  
export default ProfileDriver;
    
