import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <svg className="svg-logo" width="55" height="30">
            <path d="M 0 30 L 15 0 L 30 30 Z" fill="#0084ff"></path>
            <path d="M 15 30 L 30 0 L 45 30 Z" fill="#000000"></path>
          </svg>
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
