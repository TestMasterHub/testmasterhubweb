import React from 'react';
import { ArrowRight, Users, Zap, BarChart, Settings, Code, Database, Sparkles, Brain,Mail, Lock } from 'lucide-react'; // Import Lock icon

import DashboardImage from '../assets/images/Dashboard.png';
import workflow from "../assets/images/workflow.png"

const Home = () => {
  return (
    <div>
      {/* Product Hunt Alert Banner */}
      {/* <section className="py-3 bg-warning bg-opacity-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 mb-2 mb-md-0">
              <p className="mb-0 fw-bold">
                <span className="me-2">🎉</span>
                We're now live on Product Hunt! Check out our launch and support us with an upvote.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="https://www.producthunt.com/posts/testmasterhub?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-testmasterhub" target="_blank" rel="noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939910&theme=light&t=1742550203552" alt="TestMasterHub - Next&#0032;Gen&#0032;Testing&#0032;Solutions | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* AI-Powered Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-pill px-3 py-1 me-3">
                  <div className="d-flex align-items-center">
                    <Sparkles size={16} className="me-2" />
                    <span className="small fw-bold">AI-POWERED ASSERTIONS</span>
                  </div>
                </div>
                <span className="badge bg-success">NEW</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                Complete API Testing Platform with AI-Powered Assertions
              </h1>
              <p className="lead mb-4">
                TestMasterHub provides comprehensive API testing capabilities with intelligent auto-assertion generation. 
                Our AI analyzes your API responses and automatically creates smart validations, saving you time while ensuring thorough testing coverage.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <a className="btn btn-primary btn-lg d-flex align-items-center" href='/download'>
                  Try TestMasterHub Free <ArrowRight size={18} className="ms-2" />
                </a>
                <button className="btn btn-outline-light btn-lg">
                  Watch Demo
                </button>
              </div>
              <div className="d-flex align-items-center text-muted">
                <Brain size={16} className="me-2" />
                <small>Featuring intelligent auto-assertion generation</small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src={DashboardImage}
                  alt="TestMasterHub Dashboard" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute top-0 start-0 translate-middle">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-pill px-3 py-2 d-flex align-items-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Highlight */}
      <section className="py-5 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-inline-flex align-items-center bg-white rounded-pill px-4 py-2 shadow-sm mb-3">
              <Sparkles size={20} className="text-primary me-2" />
              <span className="fw-bold text-primary">AI-POWERED ASSERTIONS</span>
            </div>
            <h2 className="display-6 fw-bold mb-3">Intelligent Auto-Assertion Generation</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              Our AI engine automatically analyzes your API responses and generates comprehensive assertions. 
              No more manual validation setup - let AI create smart test validations while you focus on building great APIs.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-lg bg-white">
                <div className="card-body p-4 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <Brain size={28} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Smart Response Analysis</h3>
                  <p className="text-muted mb-3">
                    AI analyzes your API responses in real-time, understanding data structure, patterns, and expected values. 
                    It automatically generates comprehensive assertions for status codes, response times, and data validation.
                  </p>
                  <div className="bg-light rounded p-2 text-start">
                    <small className="text-muted font-monospace">
                      Auto-generated: status === 200<br/>
                      Auto-generated: response.data.length {'>'} 0<br/>
                      Auto-generated: response.user.email.includes('@')
                    </small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-lg bg-white">
                <div className="card-body p-4 text-center">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <Sparkles  size={28} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Comprehensive Validation</h3>
                  <p className="text-muted mb-3">
                    From basic status code validation to complex JSON schema verification, 
                    AI creates thorough test assertions that cover edge cases and ensure robust API validation.
                  </p>
                  <div className="bg-light rounded p-2 text-start">
                    <small className="text-muted">
                      Validates: Response structure<br/>
                      Validates: Data types & formats<br/>
                      Validates: Required fields presence
                    </small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-lg bg-white">
                <div className="card-body p-4 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-circle p-3 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <Sparkles size={28} className="text-white" />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Time-Saving Automation</h3>
                  <p className="text-muted mb-3">
                    Eliminate manual assertion writing with AI-powered automation. 
                    Get instant, accurate validations that adapt to your API responses, reducing testing time by up to 70%.
                  </p>
                  <div className="bg-light rounded p-2 text-start">
                    <small className="text-muted">
                      Instant assertion generation<br/>
                      Adaptive to response patterns<br/>
                      Reduces manual testing effort
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-5">
            <div className="bg-white rounded-pill d-inline-flex align-items-center px-4 py-2 shadow-sm">
              <span className="me-3 fw-bold text-dark">Ready to experience AI-powered assertions?</span>
              <a href="/download" className="btn btn-primary btn-sm rounded-pill">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Email Reports Feature Highlight */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-pill px-3 py-1 me-3">
                  <div className="d-flex align-items-center">
                    <Mail size={16} className="me-2" />
                    <span className="small fw-bold text-white">EMAIL REPORTS</span>
                  </div>
                </div>
                <span className="badge bg-info">AUTOMATED</span>
              </div>
              <h2 className="display-6 fw-bold mb-4">Comprehensive Email Reports</h2>
              <p className="lead mb-4">
                Receive detailed HTML email reports automatically after each build execution. 
                Get complete test summaries, metrics, and insights delivered directly to your inbox.
              </p>
              
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle p-2 me-3" style={{ width: '40px', height: '40px' }}>
                      <BarChart size={20} className="text-white" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Test Metrics</h6>
                      <small className="text-muted">Pass/fail rates, response times</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle p-2 me-3" style={{ width: '40px', height: '40px' }}>
                      <Code size={20} className="text-white" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Error Details</h6>
                      <small className="text-muted">Detailed failure analysis</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning rounded-circle p-2 me-3" style={{ width: '40px', height: '40px' }}>
                      <Settings size={20} className="text-white" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Service Status</h6>
                      <small className="text-muted">Individual API health</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-info rounded-circle p-2 me-3" style={{ width: '40px', height: '40px' }}>
                      <Database size={20} className="text-white" />
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">Summary Stats</h6>
                      <small className="text-muted">Complete test overview</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg">
                <div className="card-header bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center py-3">
                  <h5 className="mb-0 fw-bold">TestMasterHub</h5>
                  <small>Microservices Test Report</small>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <h6 className="text-primary fw-bold mb-2">Test Summary</h6>
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="h3 fw-bold text-primary">3</div>
                        <small className="text-muted">Total Tests</small>
                      </div>
                      <div className="col-4">
                        <div className="h3 fw-bold text-success">2</div>
                        <small className="text-muted">Passed</small>
                      </div>
                      <div className="col-4">
                        <div className="h3 fw-bold text-danger">1</div>
                        <small className="text-muted">Failed</small>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="h4 fw-bold text-primary">67%</div>
                      <small className="text-muted">Success Rate</small>
                    </div>
                  </div>
                  
                  <div className="table-responsive">
                    <table className="table table-sm">
                      <thead>
                        <tr className="table-light">
                          <th className="fw-bold">Service</th>
                          <th className="fw-bold">Status</th>
                          <th className="fw-bold">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Get Users</td>
                          <td><span className="badge bg-danger">Failed</span></td>
                          <td>756.70 ms</td>
                        </tr>
                        <tr>
                          <td>Post Users</td>
                          <td><span className="badge bg-success">Passed</span></td>
                          <td>432.10 ms</td>
                        </tr>
                        <tr>
                          <td>Put Users</td>
                          <td><span className="badge bg-success">Passed</span></td>
                          <td>3318.50 ms</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Hunt Launch Section */}
      {/* <section className="py-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-3">We're on Product Hunt!</h2>
              <p className="lead mb-4">
                We're excited to announce that TestMasterHub is now live on Product Hunt. Support our launch by checking us out and giving us an upvote!
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="me-4">
                  <span className="fw-bold h4 mb-0 d-block">18</span>
                  <span className="text-muted">Points</span>
                </div>
                <div className="me-4">
                  <span className="fw-bold h4 mb-0 d-block">5</span>
                  <span className="text-muted">Comments</span>
                </div>
                <div className="me-4">
                  <span className="fw-bold h4 mb-0 d-block">#26</span>
                  <span className="text-muted">Day Rank</span>
                </div>
                <div>
                  <span className="fw-bold h4 mb-0 d-block">#205</span>
                  <span className="text-muted">Week Rank</span>
                </div>
              </div>
              <div className="d-flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffc107" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                ))}
                <span className="ms-2 text-muted">5 out of 5.0</span>
              </div>
              <a href="https://www.producthunt.com/posts/testmasterhub" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                View on Product Hunt
              </a>
            </div>
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm overflow-hidden">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <img src={masterlogo} alt="TestMasterHub Logo" width="60" height="60" className="rounded" />
                    </div>
                    <div>
                      <h3 className="h5 mb-1 fw-bold">TestMasterHub</h3>
                      <p className="mb-0 text-muted">Complete API Testing Platform</p>
                    </div>
                  </div>
                  <div className="text-center mt-3 mb-3">
                    <a href="https://www.producthunt.com/posts/testmasterhub?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-testmasterhub" target="_blank" rel="noreferrer">
                      <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939910&theme=light&t=1742550203552" alt="TestMasterHub - Next&#0032;Gen&#0032;Testing&#0032;Solutions | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Features Cards */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Complete API Testing Platform</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Comprehensive API testing features enhanced with AI-powered auto-assertion generation
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3 position-relative">
                    <Database size={24} className="text-primary" />
                    <div className="position-absolute top-0 end-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle" style={{ width: '16px', height: '16px' }}>
                      <Sparkles size={10} className="text-white position-absolute top-50 start-50 translate-middle" />
                    </div>
                  </div>
                  <h3 className="h5 card-title fw-bold">Smart Collections Management</h3>
                  <p className="card-text text-muted">Organize your API requests into logical collections with drag-and-drop reordering, import/export capabilities, and AI-generated assertions.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Settings size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Environment Management</h3>
                  <p className="card-text text-muted">Create and switch between multiple environments (dev, staging, prod) with dynamic variable substitution and secure credential storage.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Build & Automation</h3>
                  <p className="card-text text-muted">Automate test execution with scheduled builds, retry logic, data-driven testing, and comprehensive reporting capabilities.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <BarChart size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Advanced Monitoring</h3>
                  <p className="card-text text-muted">Set up cron-based monitors with failure handling, email notifications, and performance graphs to track API health over time.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Powerful Request Builder</h3>
                  <p className="card-text text-muted">Build complex API requests with support for all HTTP methods, authentication, headers, parameters, and various body formats.</p>
                </div>
              </div>
            </div>
            
            {/* New card for Secure Encryption */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Lock size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Secure Encryption</h3>
                  <p className="card-text text-muted">Ensure the highest level of data protection with robust encryption for all sensitive information, including API keys and credentials, both at rest and in transit.</p>
                </div>
              </div>
            </div>
            {/* End New card for Secure Encryption */}

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Git Integration</h3>
                  <p className="card-text text-muted">Version control your API tests with Git integration, branch management, and collaborative workflows for team development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">How TestMasterHub Works</h2>
              <p className="lead mb-4">Experience comprehensive API testing with intelligent auto-assertion generation that streamlines your testing workflow.</p>
              
              <div className="mb-4">
                <div className="d-flex mb-3">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">1</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Create & Import APIs</h4>
                    <p className="text-muted">Add your API endpoints manually or import from Postman/OpenAPI formats. Organize them into logical collections.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">2</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">AI Generates Assertions</h4>
                    <p className="text-muted">Execute your API requests and let AI automatically analyze responses to generate comprehensive test assertions.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">3</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Automate & Monitor</h4>
                    <p className="text-muted">Set up automated builds and monitors to continuously validate your APIs with intelligent failure detection.</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">4</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Analyze & Report</h4>
                    <p className="text-muted">Get detailed reports with performance metrics, assertion results, and actionable insights for API optimization.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <img 
                src={workflow}
                alt="TestMasterHub Workflow" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <Sparkles size={24} className="me-2" />
                <span className="fw-bold">COMPLETE API TESTING PLATFORM</span>
              </div>
              <h2 className="display-6 fw-bold mb-3">Ready to streamline your API testing?</h2>
              <p className="lead mb-0">
                Join thousands of developers using TestMasterHub for comprehensive API testing with AI-powered auto-assertions.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="btn btn-light btn-lg px-4 me-2 d-inline-flex align-items-center" href='/download'>
                <Brain size={18} className="me-2" />
                Try TestMasterHub Free
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Learn more about TestMasterHub's comprehensive API testing capabilities
            </p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    id: 'faq1',
                    question: 'What makes TestMasterHub different from other API testing tools?',
                    answer: 'TestMasterHub combines comprehensive API testing features with AI-powered auto-assertion generation. Our platform offers complete functionality for API testing, monitoring, and automation, enhanced with intelligent assertion creation that saves time and ensures thorough test coverage.'
                  },
                  {
                    id: 'faq2',
                    question: 'How does the AI auto-assertion generation work?',
                    answer: 'Our AI analyzes your API responses in real-time, understanding the data structure, patterns, and expected values. It then automatically generates comprehensive assertions for status codes, response times, data validation, and content verification - all without manual configuration.'
                  },
                  {
                    id: 'faq3',
                    question: 'What core features does TestMasterHub provide?',
                    answer: 'TestMasterHub offers complete API testing functionality including collections management, environment variables, build automation, monitoring with cron scheduling, Git integration, detailed reporting, and advanced request building with support for all HTTP methods and authentication types.'
                  },
                  {
                    id: 'faq4',
                    question: 'Do I need AI knowledge to use the auto-assertion feature?',
                    answer: 'Not at all! The AI auto-assertion feature works seamlessly in the background. You simply execute your API requests as normal, and our AI automatically analyzes the responses and generates appropriate assertions. The AI enhancement is completely transparent to users.'
                  },
                  {
                    id: 'faq5',
                    question: 'Can I customize or override AI-generated assertions?',
                    answer: 'Yes! While our AI generates intelligent assertions automatically, you have full control to review, modify, or add custom assertions. The AI-generated assertions serve as a smart foundation that you can build upon with your own specific validation requirements.'
                  },
                  {
                    id: 'faq6',
                    question: 'Does TestMasterHub support team collaboration?',
                    answer: 'Absolutely! TestMasterHub includes Git integration for version control, collection import/export capabilities, environment sharing, and collaborative workflows. Teams can work together on API tests with full history tracking and branch management.'
                  }
                ].map((faq, index) => (
                  <div className="accordion-item border-0 mb-3 shadow-sm rounded" key={faq.id}>
                    <h3 className="accordion-header" id={`heading${faq.id}`}>
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''} bg-white`}
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${faq.id}`} 
                        aria-expanded={index === 0 ? 'true' : 'false'} 
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div 
                      id={`collapse${faq.id}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      aria-labelledby={`heading${faq.id}`} 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;