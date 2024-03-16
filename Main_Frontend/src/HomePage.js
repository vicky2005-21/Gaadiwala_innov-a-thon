import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure your CSS file is correctly linked

function HomePage() {
    const bottomRef = useRef(null); // Reference for scrolling to the bottom

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="logo">GaadiWala</div>
                <nav className="home-nav">
                    <Link to="/products">Products</Link>
                    <Link to="/solutions">Business Solutions</Link>
                    <Link to="/support">Help Center</Link>
                    <Link to="/pricing">Pricing</Link>
                </nav>
            </header>

            <section className="main-section">
                <h1>Find the Best!</h1>
                <p>Driving down the open road, the world unfurls anew. Each mile a story, every turn a mystery to pursue...</p>
                <button onClick={scrollToBottom} className="explore-btn">Explore</button>
            </section>

            <div className="service-container">
                <div className="service-box">
                    <h2>Private</h2>
                    <p>Clients can hire a private driver for their stable vehicle.</p>
                </div>
                <div className="service-box">
                    <h2>Commercial</h2>
                    <p>Clients can hire a commercial driver for their stable vehicle.</p>
                </div>
                <div className="service-box">
                    <h2>Connecting Drivers</h2>
                    <p>Clients can hire connecting drivers for long-distance travel.</p>
                </div>
            </div>

            <div className="choice-container">
                <Link to="/signup" className={`choice-box user`}>
                    <h2>User</h2>
                    <p>Sign up to hire a driver or find driving services.</p>
                </Link>
                <Link to="/login" className={`choice-box driver`}>
                    <h2>Driver</h2>
                    <p>Join us as a driver and connect with potential clients.</p>
                </Link>
            </div>

            <footer className="home-footer">
                <p>© 2024 GaadiWala. All rights reserved.</p>
                <div className="footer-links">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                </div>
                <div className="social-media">
                    {/* Add your social media links here */}
                </div>
            </footer>

            <div ref={bottomRef}></div> {/* Invisible element at the bottom for smooth scrolling */}
        </div>
    );
}

export default HomePage;
