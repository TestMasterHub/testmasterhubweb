import React from 'react';
import { CheckCircle } from 'lucide-react';

const Enterprise = () => {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="text-center py-5 bg-primary text-white rounded">
        <h1 className="display-4">Enterprise Solutions</h1>
        <p className="lead">Scalable API testing solutions for your business.</p>
      </div>

      {/* Features Section */}
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Why Choose Our Enterprise Plan?</h2>
          <p>We offer enterprise-grade security, scalability, and support to help your teams perform API testing seamlessly.</p>
          <ul className="list-unstyled">
            <li><CheckCircle className="text-success me-2" /> Dedicated support and SLAs</li>
            <li><CheckCircle className="text-success me-2" /> Custom integrations</li>
            <li><CheckCircle className="text-success me-2" /> Enhanced security and compliance</li>
            <li><CheckCircle className="text-success me-2" /> Unlimited API calls</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="/assets/images/enterprise.png" alt="Enterprise" className="img-fluid rounded shadow" />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-5">
        <h3>Get in Touch with Us</h3>
        <p>Contact us today to learn more about our enterprise offerings.</p>
        <button className="btn btn-primary btn-lg">Contact Sales</button>
      </div>
    </div>
  );
};

export default Enterprise;
