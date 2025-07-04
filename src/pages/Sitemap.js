import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { path: '/', label: 'Home' },
        { path: '/product', label: 'Product' },
        // { path: '/pricing', label: 'Pricing' },
        // { path: '/enterprise', label: 'Enterprise' },
        { path: '/resources', label: 'Resources' },
        // { path: '/community', label: 'Community' },
      ]
    },
    {
      title: 'User Access',
      links: [
        { path: '/download', label: 'Download' },
        // { path: '/invite/BetaList/users', label: 'Beta Invite' },
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
    <div className="container py-5">
      <h1 className="fw-bold mb-4 text-primary">Site Map</h1>
      <div className="row">
        {sections.map((section, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <h5 className="fw-bold text-dark mb-3">{section.title}</h5>
            <ul className="list-unstyled">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link to={link.path} className="text-decoration-none text-secondary">
                    ➤ {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
