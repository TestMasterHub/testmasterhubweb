import React from 'react';
import {CheckCircle, Sparkles, Brain, Zap, Users, Lock, BarChart, Settings, Code } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Mock images for demonstration
import ProductImage from '../assets/images/UI.png';
import TestimonialsImage1 from '../assets/images/Dashboard.png';
import TestimonialsImage2 from '../assets/images/Dashboard.png';

const Product = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Accelerate Your Workflow with AI-Powered API Testing</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            TestMasterHub is the all-in-one platform for developers who want to test faster, smarter, and with complete confidence. Get intelligent auto-assertions, automated test generation, and seamless collaboration in a single, secure app.
          </p>
          <a href="/download" className="btn btn-primary btn-lg mt-3">
            Get Started Free
          </a>
        </div>
      </section>

      {/* The AI Advantage Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-6 fw-bold mb-3">Effortless Assertions, Instant Coverage.</h2>
            <p className="lead text-muted">
              Stop wasting time writing boilerplate test validations. TestMasterHub's AI analyzes your API response and automatically generates comprehensive assertions for you. It understands data structure, validates status codes, and ensures data integrity, all with zero manual setup. Your tests are built before you even hit send.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-center mb-2">
                <CheckCircle className="text-success me-2" />
                <span className="fw-bold">Saves time: </span> Drastically reduces manual assertion writing.
              </li>
              <li className="d-flex align-items-center mb-2">
                <CheckCircle className="text-success me-2" />
                <span className="fw-bold">Increases coverage:</span> Generates thorough validations you might miss.
              </li>
              <li className="d-flex align-items-center">
                <CheckCircle className="text-success me-2" />
                <span className="fw-bold">Adapts to changes:</span> Smart enough to handle dynamic responses.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              {/* Replace with a GIF or MP4 showing the AI feature */}
              <img src={ProductImage} className="img-fluid rounded shadow-lg" alt="TestMasterHub AI in action" />
            </div>
          </div>
        </div>
      </section>

      {/* The Developer's Toolkit Section */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Beyond AI: A Complete Toolkit for Every Developer</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              TestMasterHub provides a robust suite of tools to handle all your API testing needs with professional-grade features.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-5">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-secondary-subtle p-3 rounded-circle me-3">
                    <Zap size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Automated Workflows</h5>
                    <p className="text-muted mb-0">Set up scheduled builds and monitors to continuously test your APIs in multiple environments. Get instant notifications on failures and performance regressions.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-secondary-subtle p-3 rounded-circle me-3">
                    <Users size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Seamless Collaboration</h5>
                    <p className="text-muted mb-0">With Git integration, your team can version control API tests, manage branches, and collaborate on collections with ease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-secondary-subtle p-3 rounded-circle me-3">
                    <Lock size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">Enterprise-Grade Security</h5>
                    <p className="text-muted mb-0">Your data is secure. We use robust encryption for all sensitive information, including API keys and credentials, both at rest and in transit.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-secondary-subtle p-3 rounded-circle me-3">
                    <BarChart size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">In-Depth Reporting</h5>
                    <p className="text-muted mb-0">Generate beautiful, shareable reports with pass/fail rates, response times, and detailed logs. Share insights with your team via automated email reports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Trusted by Engineers and Teams</h2>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 p-4 border-0 shadow-sm bg-primary bg-opacity-10">
              <p className="fst-italic lead">
                "TestMasterHub's AI-powered assertions cut our testing time by 50%. The product is intuitive and the reports are exactly what we need for our CI/CD pipeline."
              </p>
              <div className="d-flex align-items-center mt-3">
                <img src={TestimonialsImage1} className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} alt="User Testimonial" />
                <div>
                  <h6 className="fw-bold mb-0">Jane Doe</h6>
                  <small className="text-muted">Lead Software Engineer, TechCorp</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 p-4 border-0 shadow-sm bg-primary bg-opacity-10">
              <p className="fst-italic lead">
                "The Git integration makes our team's workflow so much smoother. We can version control our tests alongside our code, which is a game-changer for collaborative development."
              </p>
              <div className="d-flex align-items-center mt-3">
                <img src={TestimonialsImage2} className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} alt="User Testimonial" />
                <div>
                  <h6 className="fw-bold mb-0">John Smith</h6>
                  <small className="text-muted">QA Manager, Innovate LLC</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="display-6 fw-bold mb-3">Ready to build better APIs, faster?</h2>
          <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
            Start your free trial today and discover a smarter way to test with TestMasterHub.
          </p>
          <a href="/download" className="btn btn-primary btn-lg mt-3">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Product;