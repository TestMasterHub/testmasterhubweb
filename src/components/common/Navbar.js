import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          TestMaster<span className="text-gradient-pink-purple">Hub</span>
          <sup className="ai-badge"> AI Inside</sup>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/comparison") ? 'active' : ''}`} to="/comparison">
                TestMasterHub Vs Bruno Vs Postman
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/product") ? 'active' : ''}`} to="/product">
                Product
              </Link>
            </li>
             <li className="nav-item">
              <Link className={`nav-link ${isActive("/pricing") ? 'active' : ''}`} to="/pricing">
                Pricing
              </Link>
            </li>
             <li className="nav-item">
              <Link className={`nav-link ${isActive("/enterprise") ? 'active' : ''}`} to="/enterprise">
                Enterprise
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/resources") ? 'active' : ''}`} to="/resources">
                Resources
              </Link>
            </li><li className="nav-item">
              <Link className={`nav-link ${isActive("/contact") ? 'active' : ''}`} to="/contact">
                Contact Sales
              </Link>
            </li>
            {/* Other links can be added here */}
          </ul>
          
          {/* CTA Button */}
          <div className="d-flex">
             <Link to="/invite/beta-download" className="btn btn-primary-gradient btn-sm">
                Download
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;