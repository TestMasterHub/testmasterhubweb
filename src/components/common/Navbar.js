import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/common/navbar.css'; // Import the CSS file for Navbar styling

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isProductsActive = () => ['/product', '/testertools'].includes(location.pathname);

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
            {/* Products Dropdown */}
            <li className="nav-item dropdown mx-2 navbar-products-dropdown">
              <a
                className={`nav-link dropdown-toggle ${isProductsActive() ? 'active' : ''}`}
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <Link className={`dropdown-item ${isActive("/product") ? 'active' : ''}`} to="/product">
                    TestMasterHub API
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://air.testmasterhub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AIR
                  </a>
                </li>
                <li>
                  <Link className={`dropdown-item ${isActive("/testertools") ? 'active' : ''}`} to="/testertools">
                    TesterTools
                  </Link>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://tapsecurex.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TapSecureX
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link className={`nav-link ${isActive("/services") ? 'active' : ''}`} to="/services">
                Services
              </Link>
            </li>
             <li className="nav-item mx-2">
              <Link className={`nav-link ${isActive("/pricing") ? 'active' : ''}`} to="/pricing">
                Pricing
              </Link>
            </li>
             <li className="nav-item mx-2">
              <Link className={`nav-link ${isActive("/enterprise") ? 'active' : ''}`} to="/enterprise">
                Enterprise
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link ${isActive("/resources") ? 'active' : ''}`} to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item mx-2">
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