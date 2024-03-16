import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './SectionOne.css';

function SectionOne({ onNext }) {
    // State Declarations
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        otp: '',
        password: '',
        confirmPassword: '',
        aadhaarNumber: '',
        aadhaarOtp: ''
    });
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [aadhaarOtpSent, setAadhaarOtpSent] = useState(false);
    const [aadhaarOtpVerified, setAadhaarOtpVerified] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [clientId, setClientId] = useState('');
    const [aadhaarDetails, setAadhaarDetails] = useState(null);
    const [dataSaved, setDataSaved] = useState(false);
    const isPasswordMatch = formData.password === formData.confirmPassword;
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licenseData, setLicenseData] = useState('');
    const [licenseDataFetched, setLicenseDataFetched] = useState(false);
    const [location, setLocation] = useState('');
    const [locationError, setLocationError] = useState('');
    const VEHICLE_TYPES = ["car", "truck", "lorry", "van", "mini-truck"];
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState(new Set());
    const [userLocation, setUserLocation] = useState(null);
    const [map] = useState(null);
    const [travelDistance, setTravelDistance] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState(new Set());
    const LANGUAGES = ["Telugu", "Tamil", "Odia", "Hindi", "English"];
    const [mechanicWork, setMechanicWork] = useState('');
    const [expectedPayPerKm, setExpectedPayPerKm] = useState('');
    const [expectedPayDaily, setExpectedPayDaily] = useState('');
    const [aadhaarImage, setAadhaarImage] = useState(null);  // State for Aadhaar image file
    const [licenseImage, setLicenseImage] = useState(null);  // State for License image file



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDistanceChange = (e) => {
        setTravelDistance(e.target.value);
    };

    const handleVehicleTypeChange = (e) => {
        const vehicleType = e.target.value;
        setSelectedVehicleTypes(prevSelectedVehicleTypes => {
            const updatedSet = new Set(prevSelectedVehicleTypes);
            if (updatedSet.has(vehicleType)) {
                updatedSet.delete(vehicleType);
            } else {
                updatedSet.add(vehicleType);
            }
            return updatedSet;
        });
    };

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        setSelectedLanguages(prevSelectedLanguages => {
            const updatedSet = new Set(prevSelectedLanguages);
            if (updatedSet.has(language)) {
                updatedSet.delete(language);
            } else {
                updatedSet.add(language);
            }
            return updatedSet;
        });
    };

    const handleMechanicWorkChange = (e) => {
        setMechanicWork(e.target.value);
    };

    const handleExpectedPayPerKmChange = (e) => {
        setExpectedPayPerKm(e.target.value);
    };

    const handleExpectedPayDailyChange = (e) => {
        setExpectedPayDaily(e.target.value);
    };

    const handleAadhaarImageChange = (event) => {
        setAadhaarImage(event.target.files[0]);
    };
    
    const handleLicenseImageChange = (event) => {
        setLicenseImage(event.target.files[0]);
    };
    
    const handleAadhaarFileChange = (event) => {
        setAadhaarImage(event.target.files[0]);
    };
    
    const handleLicenseFileChange = (event) => {
        setLicenseImage(event.target.files[0]);
    };
    



    
    
    

    const sendOtp = async () => {
        try {
            const response = await fetch('/driver-signup/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: formData.mobileNumber })
            });
            const data = await response.json();
            setResponseMessage(data.message || data.error);
            if (data.success) {
                setOtpSent(true);
            }
        } catch (error) {
            setResponseMessage('Failed to send OTP');
        }
    };

    const verifyOtp = async () => {
        try {
            const response = await fetch('/driver-signup/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mobileNumber: formData.mobileNumber, otp: formData.otp })
            });
            const data = await response.json();
            if (data.verified) {
                setOtpVerified(true);
            }
            setResponseMessage(data.verified ? 'OTP verified successfully' : (data.error || 'Verification failed'));
        } catch (error) {
            setResponseMessage('Failed to verify OTP');
        }
    };

    const generateAadhaarOTP = () => {
        fetch('https://1c674262-b495-47d5-a536-81a449706d35.mock.pstmn.io/api/v1/aadhaar-validation/aadhaar-validation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "aadhaar_number": formData.aadhaarNumber }) // Corrected variable
        })
        .then(response => response.json())
        .then(data => {
            setClientId(data.client_id);
            setAadhaarOtpSent(true);
            console.log('Aadhaar OTP Sent:', aadhaarOtpSent); // This may still log 'false' due to the async nature of setState
            setResponseMessage("OTP generated and sent to your registered mobile number. Please enter it below.");
        })
        
        .catch(error => {
            setResponseMessage("Error: " + error.toString()); // Corrected function
        });
    };
    
    const validateAadhaarOTP = () => {
        fetch('https://1c674262-b495-47d5-a536-81a449706d35.mock.pstmn.io/api/v1/aadhaar-v2/submit-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "client_id": clientId, "otp": formData.aadhaarOtp })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.client_id) { // Assuming 'data' is the key that contains the Aadhaar details
                setAadhaarOtpVerified(true);
                // If the API response structure is as assumed, 'data.data' contains the Aadhaar details
                setAadhaarDetails(data.data); // Storing the entire 'data' object
                setResponseMessage("Aadhaar OTP validated successfully.");
            } else {
                setResponseMessage("Failed to validate Aadhaar OTP.");
            }
        })
        .catch(error => {
            setResponseMessage("Error: " + error.toString());
        });
    };





    const handleLicenseSubmit = (event) => {
        event.preventDefault();
        // API call to fetch license data
        fetch('https://1c674262-b495-47d5-a536-81a449706d35.mock.pstmn.io/api/v1/driving-license/driving-license', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "id_number": licenseNumber })
        })
        .then(response => response.json())
        .then(data => {
            // Check if 'data' key is present in the response
            if (data && data.data) {
                // Extract and store only the 'data' part
                setLicenseData(data.data);
                setLicenseDataFetched(true); // Indicate that data has been fetched
            } else {
                // Handle the case where 'data' is not present in the response
                setResponseMessage('License data not found');
            }
        })
        
        .catch(error => {
            console.error('Error:', error);
            setResponseMessage('Failed to fetch license data');
        });
    };
    


    const getLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, {
            // Options such as timeout, maximumAge, etc. can be set here
            timeout: 10000,
            maximumAge: 60000,
            enableHighAccuracy: true
        });
    } else {
        setLocationError("Geolocation is not supported by this browser.");
    }
};

const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setUserLocation({ lat: latitude, lng: longitude });
    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Update map view here if necessary
    if (map) {
        map.setView([latitude, longitude], 13);
    }
};

const showError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            setLocationError("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            setLocationError("The request to get user location timed out.");
            break;
        default:
            setLocationError("An unknown error occurred.");
            break;
    }
};

    
const saveUserData = async () => {
    // Construct the full address string from parts
    const fullAddress = [
        aadhaarDetails?.address?.house,
        aadhaarDetails?.address?.street,
        aadhaarDetails?.address?.loc,
        aadhaarDetails?.address?.dist,
        aadhaarDetails?.address?.state,
    ].filter(Boolean).join(', ');
    const stateFromJson = licenseData?.state || "Default State";
    

    // Create a FormData object
    const formDataPayload = new FormData();

    // Append text fields to the FormData object
    formDataPayload.append('name', formData.name);
    formDataPayload.append('phone_number', formData.mobileNumber);
    formDataPayload.append('email', formData.email);
    formDataPayload.append('password', formData.password);
    formDataPayload.append('aadhaar_number', aadhaarDetails?.aadhaarNumber);
    formDataPayload.append('address', fullAddress);
    formDataPayload.append('dob', aadhaarDetails?.dob);
    formDataPayload.append('gender', aadhaarDetails?.gender);
    formDataPayload.append('license_number', licenseData?.license_number);
    formDataPayload.append('country', aadhaarDetails?.address?.country);
    formDataPayload.append('stateName', stateFromJson);
    formDataPayload.append('vehicle_class', licenseData?.vehicle_classes.join(', ')); // Assuming it's an array
    formDataPayload.append('initial_doi', licenseData?.initial_doi);
    formDataPayload.append('doe', licenseData?.doe);
    formDataPayload.append('vehicle_type', Array.from(selectedVehicleTypes).join(', '));
    formDataPayload.append('distance_preference', travelDistance);
    formDataPayload.append('languages', Array.from(selectedLanguages).join(', '));
    formDataPayload.append('mechanic_work', mechanicWork);
    formDataPayload.append('expected_pay_per_km', expectedPayPerKm);
    formDataPayload.append('expected_pay_daily', expectedPayDaily);

    // Append image files to the FormData object
    if (aadhaarImage) {
        formDataPayload.append('aadhaar_image', aadhaarImage);
        console.log("Aadhaar Image being sent to the backend: Format -", aadhaarImage.type);
    }
    if (licenseImage) {
        formDataPayload.append('license_image', licenseImage);
        console.log("License Image being sent to the backend: Format -", licenseImage.type);
    }

    // Log data being sent to the backend
    console.log("Text Data being sent to the backend:", {
        name: formData.name,
        phone_number: formData.mobileNumber,
        email: formData.email,
        // ... other text fields ...
    });

    try {
        const response = await fetch('/save-user', {
            method: 'POST',
            body: formDataPayload
            // Note: Don't set Content-Type header for FormData, the browser sets it automatically
        });

        const data = await response.json();
        if (data.success) {
            // Handle success
            setDataSaved(true);
            setResponseMessage("User data saved successfully. Proceeding to Section 2.");
            onNext();
        } else {
            // Handle failure
            setResponseMessage(data.error || "Failed to save user data.");
        }
    } catch (error) {
        // Handle errors
        setResponseMessage('Failed to save user data');
        console.error('Error during user data submission:', error);
    }
};





    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if OTP is verified
        if (!otpVerified) {
            setResponseMessage("Please verify OTP before proceeding.");
            return;
        }
        // Check if Aadhaar OTP is verified
        if (!aadhaarOtpVerified) {
            setResponseMessage("Please verify Aadhaar OTP before proceeding.");
            return;
        }
        // Check if passwords match
        if (!isPasswordMatch) {
            setResponseMessage("Passwords do not match.");
            return;
        }
        // Check if license data is fetched; if not, initiate fetching
        if (!licenseDataFetched && licenseNumber) {
            await fetchLicenseData();
        } else if (!licenseNumber) {
            setResponseMessage("Please enter license number.");
            return;
        }
        // If all verifications are done and data is fetched, save user data
        if (licenseDataFetched) {
            await saveUserData();
        }
        
    };
    
    // Fetch License Data
    const fetchLicenseData = async () => {
        try {
            const response = await fetch('https://1c674262-b495-47d5-a536-81a449706d35.mock.pstmn.io/api/v1/driving-license/driving-license', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "id_number": licenseNumber })
            });
            const data = await response.json();
            setLicenseData(JSON.stringify(data, null, 2));
            setLicenseDataFetched(true); // Indicate that license data has been fetched
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Failed to fetch license data');
            setLicenseDataFetched(false); // Indicate that fetching license data failed
        }
    };
    

    return (
        <div className="section-container">
            <h2>Driver Signup</h2>
            <form onSubmit={handleSubmit}>
                {/* Location feature */}
                <div>
                    <h3>Location Information</h3>
                    <button type="button" onClick={getLocation}>Get My Location</button>
                    <p>{location || locationError}</p>
                </div>

                {/* User Details Inputs */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                />
    
                {/* Send OTP button */}
                {!otpSent && <button type="button" onClick={sendOtp}>Send OTP</button>}
                
                {/* OTP input and verify OTP button */}
                {otpSent && !otpVerified && (
                    <>
                        <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            placeholder="OTP"
                        />
                        <button type="button" onClick={verifyOtp}>Verify OTP</button>
                    </>
                )}
    
                {/* Password Verification Inputs */}
                {otpVerified && (
                    <>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                        />
                        {!isPasswordMatch && <p>Passwords do not match. Please try again.</p>}
                    </>
                )}

                {/* Aadhaar Number Input and Generate Aadhaar OTP Button */}
                {otpVerified && isPasswordMatch && !aadhaarOtpVerified && (
                    <>
                        <input
                            type="text"
                            name="aadhaarNumber"
                            value={formData.aadhaarNumber}
                            onChange={handleChange}
                            placeholder="Aadhaar Number"
                        />
                        <button type="button" onClick={generateAadhaarOTP}>Generate Aadhaar OTP</button>
                    </>
                )}

                {/* Aadhaar OTP Input and Validate Aadhaar OTP Button */}
                {aadhaarOtpSent && !aadhaarOtpVerified && (
                    <>
                        <input
                            type="text"
                            name="aadhaarOtp"
                            value={formData.aadhaarOtp}
                            onChange={handleChange}
                            placeholder="Enter Aadhaar OTP"
                        />
                        <button type="button" onClick={validateAadhaarOTP}>Validate Aadhaar OTP</button>
                    </>
                )}

                {/* Display Aadhaar Details */}
                {aadhaarOtpVerified && aadhaarDetails && (
                    <div>
                        <h3>Aadhaar Information:</h3>
                        <pre>{JSON.stringify(aadhaarDetails, null, 2)}</pre>
                    </div>
                )}

                {/* License Number Input and License Data Fetch Button */}
                {aadhaarOtpVerified && (
                    <>
                        <h1>License Data Lookup</h1>
                        <label htmlFor="licenseNumber">License Number:</label>
                        <input
                            type="text"
                            id="licenseNumber"
                            value={licenseNumber}
                            onChange={e => setLicenseNumber(e.target.value)}
                            required
                        />
                        <button type="button" onClick={handleLicenseSubmit}>Fetch License Data</button>
                    </>
                )}

                {/* Display License Data */}
                {licenseDataFetched && (
                    <div>
                        <h3>License Information:</h3>
                        <style>Align items:Center</style>
                        <pre>{JSON.stringify(licenseData, null, 2)}</pre>
                    </div>
                )}

                {/* Vehicle Type Checkboxes - Positioned after License Information */}
                {licenseDataFetched && (
                    <div>
                        <h3>Select Vehicle Types:</h3>
                        {VEHICLE_TYPES.map((type, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    id={type}
                                    value={type}
                                    checked={selectedVehicleTypes.has(type)}
                                    onChange={handleVehicleTypeChange}
                                />
                                <label htmlFor={type}>{type}</label>
                            </div>
                        ))}
                    </div>
                )}
                {/* Input for distance willing to travel */}
                <div>
                    <label>Distance You Can Travel (in km):</label>
                    <input
                        type="number"
                        name="travelDistance"
                        value={travelDistance}
                        onChange={handleDistanceChange}
                        placeholder="Enter distance in km"
                    />
                </div>
                {/* Language Selection Checkboxes */}
                <div>
                    <h3>Select Languages:</h3>
                    {LANGUAGES.map((language, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={`language-${language}`}
                                value={language}
                                checked={selectedLanguages.has(language)}
                                onChange={handleLanguageChange}
                            />
                            <label htmlFor={`language-${language}`}>{language}</label>
                        </div>
                    ))}
                </div>
                {/* Conditional Rendering for mechanic_work */}
                {parseInt(travelDistance) > 400 && (
                    <div>
                        <label htmlFor="mechanicWork">Mechanic Work Description:</label>
                        <input
                            type="text"
                            id="mechanicWork"
                            name="mechanicWork"
                            value={mechanicWork}
                            onChange={handleMechanicWorkChange}
                            placeholder="Describe mechanic work"
                        />
                    </div>
                )}

                {/* Inputs for expected_pay_per_km and expected_pay_daily */}
                <div>
                    <label htmlFor="expectedPayPerKm">Expected Pay per Km:</label>
                    <input
                        type="text"
                        id="expectedPayPerKm"
                        name="expectedPayPerKm"
                        value={expectedPayPerKm}
                        onChange={handleExpectedPayPerKmChange}
                        placeholder="Enter expected pay per km"
                    />
                </div>
                <div>
                    <label htmlFor="expectedPayDaily">Expected Daily Pay:</label>
                    <input
                        type="text"
                        id="expectedPayDaily"
                        name="expectedPayDaily"
                        value={expectedPayDaily}
                        onChange={handleExpectedPayDailyChange}
                        placeholder="Enter expected daily pay"
                    />
                </div>
                {/* Aadhaar Image/File Upload */}
                <div>
                    <label htmlFor="aadhaarFile">Upload Aadhaar Document:</label>
                    <input
                        type="file"
                        id="aadhaarFile"
                        onChange={handleAadhaarImageChange}
                        accept="image/*,application/pdf"
                    />
                </div>

                {/* License Image/File Upload */}
                <div>
                    <label htmlFor="licenseFile">Upload License Document:</label>
                    <input
                        type="file"
                        id="licenseFile"
                        onChange={handleLicenseImageChange}
                        accept="image/*,application/pdf"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit">Complete Registration</button>
                <p>{responseMessage}</p>
            </form>
        </div>
    );
}

export default SectionOne;

