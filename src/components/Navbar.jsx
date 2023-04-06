import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="nav-container">
      {showLinks && (
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/bbc">BBC</Link>
            </li>
            <li>
              {" "}
              <Link to="/UsNews">U.S.</Link>
            </li>
          </ul>
        </div>
      )}

      <button className="navbar-btn" onClick={toggleLinks}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
