import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <img
        src="/assets/images/lost-in-space.png"
        alt="Page Not Found"
        className="notFoundImage"
      />
      <Link to="/" className="homeLink">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;