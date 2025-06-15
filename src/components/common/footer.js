import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-primary mb-4">TestMasterHub</h5>
            <p className="small">
              The complete API testing solution for developers and QA teams. Simplify and streamline your API testing workflow.
            </p>
            <div className="d-flex mt-4">
              <a href="https://github.com" className="text-white me-3" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white me-3" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="text-white" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Product</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/product" className="text-white text-decoration-none">Features</Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="text-white text-decoration-none">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link to="/enterprise" className="text-white text-decoration-none">Enterprise</Link>
              </li>
              <li className="mb-2">
                <Link to="/download" className="text-white text-decoration-none">Download</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/resources/docs" className="text-white text-decoration-none">Documentation</Link>
              </li>
              <li className="mb-2">
                <Link to="/resources/tutorials" className="text-white text-decoration-none">Tutorials</Link>
              </li>
              <li className="mb-2">
                <Link to="/resources/api" className="text-white text-decoration-none">API Reference</Link>
              </li>
              <li className="mb-2">
                <Link to="/resources/blog" className="text-white text-decoration-none">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Community</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/forum" className="text-white text-decoration-none">Forum</Link>
              </li>
              <li className="mb-2">
                <Link to="/community/events" className="text-white text-decoration-none">Events</Link>
              </li>
              <li className="mb-2">
                <Link to="/community/contribute" className="text-white text-decoration-none">Contribute</Link>
              </li>
              <li className="mb-2">
                <Link to="/community/showcase" className="text-white text-decoration-none">Showcase</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4">Stay Updated</h6>
            <p className="small mb-3">Subscribe to our newsletter for the latest updates</p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="small mt-3">
              <Mail size={16} className="me-1" />
              <a href="mailto:social.testmasterhub@gmail.com-0984
            " className="text-white text-decoration-none">
                contact@testmasterhub
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="mt-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small mb-md-0">
              © {new Date().getFullYear()} TestMasterHub. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <ul className="list-inline d-flex justify-content-md-end mb-0">
              <li className="list-inline-item me-3">
                <Link to="/privacy" className="text-white small text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="list-inline-item me-3">
                <Link to="/terms" className="text-white small text-decoration-none">
                  Terms of Service
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/sitemap" className="text-white small text-decoration-none">
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