import React from "react";
// import Header from "../Layout/Header/Header"; 
import Layout from "../Layout/Layout";
// Adjust import path based on your project structure
import "./Loader.css"; // Optional: Include loader-specific styles

const Loader = () => (
    <div>
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 60px)', // Adjust height to exclude the header
                marginTop: '60px', // Match the height of your header
            }}
        >
            <div className="loader"></div>
        </div>
    </div>
);

export default Loader;