import React from 'react';
import { CheckCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  return (
    <div className="container mt-5">
      {/* Pricing Header */}
      <header className="text-center mb-5">
        <h1 className="fw-bold">Choose the Right Plan for You</h1>
        <p className="text-muted">Simple and transparent pricing to fit your needs.</p>
      </header>

      {/* Pricing Cards */}
      <div className="row">
        {/* Free Plan */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center">
            <h3 className="fw-bold">Free</h3>
            <p className="text-muted">Perfect for individuals</p>
            <h2 className="fw-bold">$0<span className="fs-5 text-muted">/mo</span></h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li><CheckCircle className="text-success me-2" /> Basic API testing</li>
              <li><CheckCircle className="text-success me-2" /> Limited requests</li>
              <li><CheckCircle className="text-success me-2" /> Community support</li>
            </ul>
            <button className="btn btn-outline-primary">Get Started</button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col-md-4">
          <div className="card shadow-lg p-4 text-center border-primary">
            <h3 className="fw-bold text-primary">Pro</h3>
            <p className="text-muted">For growing teams</p>
            <h2 className="fw-bold">$29<span className="fs-5 text-muted">/mo</span></h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li><CheckCircle className="text-success me-2" /> Advanced API testing</li>
              <li><CheckCircle className="text-success me-2" /> Unlimited requests</li>
              <li><CheckCircle className="text-success me-2" /> Priority support</li>
            </ul>
            <button className="btn btn-primary">Upgrade Now</button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4 text-center">
            <h3 className="fw-bold">Enterprise</h3>
            <p className="text-muted">Custom solutions</p>
            <h2 className="fw-bold">Contact Us</h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li><CheckCircle className="text-success me-2" /> Tailored API solutions</li>
              <li><CheckCircle className="text-success me-2" /> Dedicated support</li>
              <li><CheckCircle className="text-success me-2" /> SLA guarantee</li>
            </ul>
            <button className="btn btn-dark">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
