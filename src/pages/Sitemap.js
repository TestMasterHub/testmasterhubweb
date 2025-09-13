import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { path: '/', label: 'Home' }, { path: '/product', label: 'Product' },
        { path: '/pricing', label: 'Pricing' }, { path: '/enterprise', label: 'Enterprise' },
      ]
    },
    {
      title: 'User Access',
      links: [
        { path: '/download', label: 'Download' },
        { path: '/invite/BetaList/users', label: 'Beta Invite' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { path: '/privacy', label: 'Privacy Policy' },
        { path: '/terms', label: 'Terms of Service' },
      ]
    }
  ];

  return (
    <div className="bg-dark text-white py-5 min-vh-100">
      <div className="container py-5">
        <div>
            <h1 className="display-4 fw-bold mb-4 hero-title-gradient">Site Map</h1>
            <p className="lead text-white-50">Navigate through all pages of TestMasterHub.</p>
        </div>
        <hr className="border-top-custom my-5" />
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h5 className="footer-heading mb-3">{section.title}</h5>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;