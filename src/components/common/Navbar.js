import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, User } from "lucide-react";
import "../../styles/components/common/navbar.css";
const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand text-primary fw-bold" to="/">
          TestMasterHub
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Main Navigation */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/product")}`} to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className={`nav-link ${isActive("/pricing")}`} to="/pricing">
                Pricing
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link className={`nav-link ${isActive("/enterprise")}`} to="/enterprise">
                Enterprise
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/download")}`} to="/download">
                Download
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/resources")}`} to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link className={`nav-link ${isActive("/community")}`} to="/community">
                Community
              </Link> */}
            </li>
          </ul>
          
          {/* User Account Area */}
          {/* <div className="d-flex align-items-center">
            <div className="me-3 text-white cursor-pointer">
              <Bell className="icon" size={20} />
            </div>
            <div className="d-flex align-items-center text-white cursor-pointer">
              <User className="icon me-2" size={20} />
              <span>Account</span>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;