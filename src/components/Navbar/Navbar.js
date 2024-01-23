import React from "react";
import './Navbar.css';

function Navbar(){
    return (
        <>
            <div className="nav-wrapper">
                <ul className="route-section">
                    <li><h3>Sentiment Analyzer</h3></li>
                    <li>Explore</li>
                    <li>Devloper</li>
                </ul>
                <div className="btn">
                    Sign Up
                </div>
            </div>
        </>
    );
}

export default Navbar;