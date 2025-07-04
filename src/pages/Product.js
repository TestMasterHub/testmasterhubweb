import React from 'react';
import { CheckCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    title: 'Comprehensive API Testing',
    description: 'TestMasterHub provides end-to-end API testing solutions with automation support.',
  },
  {
    title: 'Powerful Request Builder',
    description: 'Easily create and customize API requests using an intuitive interface.',
  },
  {
    title: 'Environment Management',
    description: 'Manage different environments and variables for seamless testing.',
  },
  {
    title: 'Automated Monitors',
    description: 'Set up scheduled monitors to ensure API performance and uptime.',
  },
  {
    title: 'Detailed Reporting',
    description: 'Generate insightful reports to analyze and share test results.',
  },
  {
    title: 'User-Friendly UI',
    description: 'A modern and easy-to-use interface to enhance productivity.',
  },
  {
    title: 'Secure Encryption',
    description: 'Ensure data protection with robust encryption for sensitive information.',
  },
];

const Product = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Discover TestMasterHub</h1>
        <p className="lead text-muted">Your go-to solution for comprehensive API testing.</p>
      </section>
      
      {/* Features Section */}
      <section className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm border-0 p-4 text-center h-100">
              <CheckCircle className="text-success mb-3" size={40} />
              <h5 className="fw-bold">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>
      
      {/* CTA Section */}
      <section className="text-center mt-5">
        <h2 className="fw-bold">Get Started with TestMasterHub</h2>
        <p className="lead">Start optimizing your API testing workflow today.</p>
        <button className="btn btn-primary btn-lg">Download Now</button>
      </section>
    </div>
  );
};

export default Product;