import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false); // State for dropdown menu
  const searchInputRef = useRef(null);
  const profileMenuRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearchPage(true);
  };

  const closeSearchPage = () => {
    setShowSearchPage(false);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  // Close the dropdown menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showSearchPage && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearchPage]);

  return (
    <>
      {/* Header Section */}
      <header className="headerComponent">
        <div className="headerContent">
          {/* Search Component - Left */}
          <div className="searchComponent">
            <button
              className="searchIcon"
              onClick={handleSearchClick}
              aria-label="Open Search Page"
            >
              {/* Search SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#333"
                  strokeWidth="2"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="logoComponent">
            <img
              src="./assets/images/CurrentGlimpse.png"
              alt="Current Glimpse"
              className="logoContent"
            />
          </Link>

          {/* Profile Component - Right */}
          <div
            className="profileComponent"
            ref={profileMenuRef}
            onClick={toggleProfileMenu}
          >
            <button className="profileIcon" aria-label="Open Profile Menu">
              {/* Profile SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" stroke="#333" strokeWidth="2" />
                <path
                  d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
                  stroke="#333"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <span className="notificationBadge">0</span>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <ul className="profileDropdown">
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* Sliding Search Page */}
      <div className={`searchPage ${showSearchPage ? "slideIn" : "slideOut"}`}>
        <button className="closeSearch" onClick={closeSearchPage}>
          &times;
        </button>
        <div className="searchPageContent">
          <h2>Search</h2>
          <input
            ref={searchInputRef}
            type="text"
            className="searchPageInput"
            placeholder="Type to search..."
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="mainContent">{children}</main>

      {/* Footer Section */}
      <footer className="footerComponent">
        <p>© 2024 Current Glimpse. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;