import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer bg-dark-subtle text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">
              TestMaster<span className="text-gradient-pink-purple">Hub</span>
              <sup className="ai-badge">AI Inside</sup>
            </h5>
            <p className="text-white-50 small">
              The AI-native API testing platform for developers who demand speed, intelligence, and confidence.
            </p>
            <div className="d-flex mt-4">
              <a href="https://github.com/TestMasterHub/testmasterhub-app-support" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://x.com/TestmasterHub" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/testmasterhub/" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="footer-heading mb-4">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/product" className="footer-link">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/download" className="footer-link">Download</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="footer-heading mb-4">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/resources" className="footer-link">Documentation</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h6 className="footer-heading mb-4">Stay Updated</h6>
            <p className="small text-white-50 mb-3">Get the latest product updates and news.</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-dark"
                  placeholder="your@email.com"
                  aria-label="Email Address"
                />
                <button className="btn btn-primary-gradient" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-4 border-top-custom" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small text-white-50 mb-md-0">
              © {new Date().getFullYear()} TestMasterHub. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <ul className="list-inline d-flex justify-content-md-end mb-0">
              <li className="list-inline-item me-3">
                <Link to="/privacy" className="footer-link small">
                  Privacy
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/terms" className="footer-link small">
                  Terms
                </Link>
              </li>
              <li className="list-inline-item">
              <Link className="footer-link small" to="/sitemap">
                Sitemap
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;