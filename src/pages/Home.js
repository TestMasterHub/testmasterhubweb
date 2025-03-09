import React from 'react';
import { ArrowRight, Users, Zap, BarChart, Settings, Code, Database } from 'lucide-react';
import DashboardImage from '../assets/images/Dashboard.png';
import workflow from "../assets/images/workflow.png"
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Powerful API Testing Made Simple
              </h1>
              <p className="lead mb-4">
                TestMasterHub helps development teams build, test, and monitor APIs faster. 
                Trusted by thousands of developers worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg d-flex align-items-center" href='/download'>
                  Try for Free <ArrowRight size={18} className="ms-2" />
                </a>
                <button className="btn btn-outline-light btn-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src={DashboardImage}
                  alt="TestMasterHub Dashboard" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="position-absolute top-0 start-0 translate-middle bg-primary text-white rounded-pill px-3 py-2">
                  NEW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      {/* <section className="py-4 bg-light">
        <div className="container">
          <p className="text-center text-muted mb-4">Trusted by leading companies worldwide</p>
          <div className="row justify-content-center align-items-center">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, index) => (
              <div key={index} className="col-6 col-md-2 text-center mb-3 mb-md-0">
                <div className="bg-white rounded p-3 mx-2">
                  <span className="fw-bold text-secondary">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Cards */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Powerful Features</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Everything you need to test, monitor, and document your APIs
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Database size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">API Collections</h3>
                  <p className="card-text text-muted">Organize and manage your API requests in collections for better workflow and reusability.</p>
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
                  <p className="card-text text-muted">Create and switch between different environments with custom variables for seamless testing.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Automated Testing</h3>
                  <p className="card-text text-muted">Schedule and run automated tests to ensure your APIs are always functioning correctly.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <BarChart size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Detailed Reports</h3>
                  <p className="card-text text-muted">Generate comprehensive reports with visualizations to analyze API performance and behavior.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Code size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Request Builder</h3>
                  <p className="card-text text-muted">Build and customize API requests with our intuitive interface supporting all HTTP methods.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 p-3 rounded-circle mb-3">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="h5 card-title fw-bold">Team Collaboration</h3>
                  <p className="card-text text-muted">Share collections, environments, and test results with your team for better collaboration.</p>
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
              <p className="lead mb-4">Our platform simplifies the entire API testing workflow in just a few steps.</p>
              
              <div className="mb-4">
                <div className="d-flex mb-3">
                  <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">1</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Create Collections</h4>
                    <p className="text-muted">Organize your API requests into logical groups for better management.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">2</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Configure Environments</h4>
                    <p className="text-muted">Set up variables for different environments like dev, staging, and production.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">3</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Run Tests</h4>
                    <p className="text-muted">Execute your API tests manually or schedule them to run automatically.</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="bg-primary rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <span className="text-white fw-bold">4</span>
                  </div>
                  <div>
                    <h4 className="h5 mb-2 fw-bold">Analyze Results</h4>
                    <p className="text-muted">View comprehensive reports and monitor API performance over time.</p>
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

      {/* Testimonials */}
      {/* <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">What Our Users Say</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Join thousands of developers who trust TestMasterHub for their API testing needs
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="card-text mb-4">"TestMasterHub has completely transformed our API testing process. What used to take days now takes hours. Highly recommended!"</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                      <span className="fw-bold">JD</span>
                    </div>
                    <div>
                      <h5 className="mb-0 h6 fw-bold">John Doe</h5>
                      <p className="text-muted small mb-0">Senior Developer, Tech Co.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="card-text mb-4">"The environment management feature alone is worth the price. We use TestMasterHub across all our development teams now."</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                      <span className="fw-bold">JS</span>
                    </div>
                    <div>
                      <h5 className="mb-0 h6 fw-bold">Jane Smith</h5>
                      <p className="text-muted small mb-0">CTO, StartupX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="card-text mb-4">"The automated testing capabilities have helped us catch bugs before they reach production. TestMasterHub is now an essential part of our CI/CD pipeline."</p>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                      <span className="fw-bold">RJ</span>
                    </div>
                    <div>
                      <h5 className="mb-0 h6 fw-bold">Robert Johnson</h5>
                      <p className="text-muted small mb-0">Lead Engineer, Enterprise Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Pricing Preview */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">Simple, Transparent Pricing</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Choose the plan that fits your needs
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="text-center fw-bold mb-4">Free</h5>
                  <div className="text-center mb-4">
                    <span className="display-5 fw-bold">$0</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Up to 3 collections</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Basic request builder</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-outline-primary">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-primary border-2 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-primary position-absolute top-0 end-0 mt-3 me-3">POPULAR</span>
                  <h5 className="text-center fw-bold mb-4">Pro</h5>
                  <div className="text-center mb-4">
                    <span className="display-5 fw-bold">$29</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Unlimited collections</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Advanced request builder</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Team collaboration (up to 5)</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Automated testing</span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <Check size={18} className="text-primary me-2" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <div className="d-grid">
                    <button className="btn btn-primary">Start Free Trial</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <a href="/pricing" className="text-decoration-none d-inline-flex align-items-center">
              <span className="me-2">View all pricing plans</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-3">Ready to simplify your API testing?</h2>
              <p className="lead mb-0">
                Join thousands of developers who trust TestMasterHub for reliable and efficient API testing.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="btn btn-light btn-lg px-4 me-2" href='/download'>Get Started Free</a>
              {/* <button className="btn btn-outline-light btn-lg px-4">Contact Sales</button> */}
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
        Find answers to common questions about TestMasterHub
      </p>
    </div>
    
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="accordion" id="faqAccordion">
          {[
            {
              id: 'faq1',
              question: 'What is TestMasterHub?',
              answer: 'TestMasterHub is a powerful and intuitive API testing tool designed for developers and testers to validate API responses efficiently. It provides tools for creating and managing API collections, configuring environments, running automated tests, and analyzing results.'
            },
            {
              id: 'faq2',
              question: 'Do I need to be a developer to use TestMasterHub?',
              answer: 'While TestMasterHub is designed with developers in mind, it\'s user-friendly enough for QA testers and other team members involved in API testing. Our intuitive interface makes it accessible to users with varying technical backgrounds.'
            },
            {
              id: 'faq3',
              question: 'How do I organize my API tests in TestMasterHub?',
              answer: 'TestMasterHub allows you to organize your API requests into Collections, making it easier to execute and manage related API tests. Collections help you group multiple API requests into a structured format, which is essential for organizing APIs related to a specific service.'
            },
            {
              id: 'faq4',
              question: 'Can I automate tests in TestMasterHub?',
              answer: 'Yes! The Build feature in TestMasterHub allows you to automate the execution of API test collections with customized settings. You can configure retry attempts and generate detailed reports after execution, reducing the need for manual testing.'
            },
            {
              id: 'faq5',
              question: 'How can I validate my API responses?',
              answer: 'TestMasterHub provides built-in assertion functions to verify API responses dynamically. You can validate status codes, response times, JSON properties, content validation, and perform value comparisons. These assertions automate the process of checking API responses against expected values.'
            },
            {
              id: 'faq6',
              question: 'What is Environment Management in TestMasterHub?',
              answer: 'Environment management allows you to create and switch between different API environments, such as Development, Staging, and Production. This feature helps manage API variables dynamically and prevents hardcoding values in requests, allowing tests to run across different environments without modification.'
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
        
        {/* <div className="text-center mt-4">
          <a href="/resources/faq" className="text-decoration-none d-inline-flex align-items-center">
            <span className="me-2">View all FAQs</span>
            <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;