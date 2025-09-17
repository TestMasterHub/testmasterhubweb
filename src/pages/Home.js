import React, { useEffect } from 'react';
import { ArrowRight, Users, Zap, BarChart, Settings, Code, Database, Sparkles, Brain, Mail, Lock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import DashboardImage from '../assets/images/Dashboard.png';
import workflow from "../assets/images/workflow.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Hero Animation ---
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTimeline
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.8 })
        .from(".hero-lead", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".hero-buttons > *", { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".hero-image", { opacity: 0, scale: 0.95, duration: 1 }, "-=0.6");

      // --- Hero Gradient Scroll Effect ---
      gsap.to(".hero-title-gradient", {
        '--gradient-angle': '270deg',
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // --- General Section Fade-in ---
      const sections = gsap.utils.toArray('section:not(.hero-section)');
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // --- Staggered Card Animation ---
      const cardSections = gsap.utils.toArray('.card-section');
      cardSections.forEach(section => {
        const cards = section.querySelectorAll('.animated-card');
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          }
        });
      });
      
      // --- How It Works Steps Animation ---
      const steps = gsap.utils.toArray('.how-it-works-step');
      gsap.from(steps, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.how-it-works-container',
          start: 'top 70%',
        }
      });
      
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-dark text-white">
      {/* AI-Powered Hero Section */}
      <section className="hero-section py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="mb-3 hero-buttons">
                <div className="d-inline-flex align-items-center bg-gradient-pink-purple rounded-pill px-3 py-1 me-3">
                  <Sparkles size={16} className="me-2" />
                  <span className="small fw-bold">AI-POWERED ASSERTIONS</span>
                </div>
              </div>
              <h1 className="display-3 fw-bold mb-4 hero-title hero-title-gradient">
                Complete API Testing Platform
              </h1>
              <p className="lead text-white-50 mb-4 hero-lead">
                Offline-first API testing with AI-powered smart assertions — secure, fast, and fully on-device.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 hero-buttons justify-content-center justify-content-lg-start">
                <a className="btn btn-primary-gradient btn-lg d-flex align-items-center" href='/download'>
                  Try TestMasterHub Free <ArrowRight size={18} className="ms-2" />
                </a>
                <button className="btn btn-outline-light btn-lg">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-image position-relative">
                <img 
                  src={DashboardImage}
                  alt="TestMasterHub Dashboard" 
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Features Highlight Sections */}
      {[
        { 
          icon: <Sparkles size={20} className="icon-gradient" />, 
          tag: "AI DOCUMENTATION", 
          title: "Generate Clear API Documentation with AI",
          description: "Automatically create clean, developer-friendly API documentation from your test collections.",
          cards: [
            { title: "Instant Documentation", text: "Transform your test cases into professional docs with one click." },
            { title: "Always Up to Date", text: "Documentation stays synchronized with your test collections." }
          ],
        },
        { 
          icon: <Brain size={20} className="icon-gradient" />, 
          tag: "AI TESTGEN", 
          title: "Automatic Test Case Generation",
          description: "Boost coverage instantly with AI-generated test cases for positive, negative, and edge cases.",
          cards: [
            { title: "Positive Scenarios", text: "Validates expected responses and happy-path flows automatically." },
            { title: "Negative Scenarios", text: "Covers invalid payloads and error handling with no manual setup." },
            { title: "Edge Case Coverage", text: "Detects boundary conditions to ensure resilience under all inputs." }
          ],
        }
      ].map((section, index) => (
        <section key={index} className={`py-5 card-section ${index % 2 === 1 ? 'bg-dark-subtle' : ''}`}>
          <div className="container">
            <div className="text-center mb-5">
              <div className="d-inline-flex align-items-center bg-dark-light rounded-pill px-4 py-2 shadow-sm mb-3">
                {section.icon}
                <span className="fw-bold ms-2 text-gradient-pink-purple">{section.tag}</span>
              </div>
              <h2 className="display-6 fw-bold mb-3">{section.title}</h2>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: '800px' }}>{section.description}</p>
            </div>
            <div className={`row g-4 ${section.cards.length === 2 ? 'justify-content-center' : ''}`}>
              {section.cards.map((card, cardIndex) => (
                <div key={cardIndex} className={section.cards.length === 2 ? 'col-md-6' : 'col-lg-4'}>
                  <div className="card h-100 animated-card">
                    <div className="card-body p-4 text-center">
                      <h3 className="h5 fw-bold mb-3">{card.title}</h3>
                      <p className="card-text mb-0">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Email Reports Feature Highlight */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">Comprehensive Email Reports</h2>
              <p className="lead text-white-50 mb-4">
                Receive detailed HTML email reports automatically after each build. Get complete test summaries and insights delivered directly to your inbox.
              </p>
              
              <div className="row g-4">
                {[
                  { icon: <BarChart size={20} />, title: 'Test Metrics' },
                  { icon: <Code size={20} />, title: 'Error Details' },
                  { icon: <Settings size={20} />, title: 'Service Status' },
                  { icon: <Database size={20} />, title: 'Summary Stats' }
                ].map((item, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="d-flex align-items-center">
                      <div className="icon-circle bg-gradient-pink-purple rounded-circle me-3 d-flex align-items-center justify-content-center">
                        {item.icon}
                      </div>
                      <h6 className="mb-0 fw-bold">{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-lg-6">
                <div className="card-report-preview rounded-3 overflow-hidden">
                    <div className="card-header bg-white text-dark text-center py-3">
                      <h5 className="mb-0 fw-bold text-dark">TestMasterHub</h5>
                      <small>Microservices Test Report</small>
                    </div>
                    <div className="card-body bg-light text-dark p-4">
                      <div className="row text-center mb-4">
                        <div className="col-4 border-end"><div className="h2 fw-bold text-primary">3</div><small>Total</small></div>
                        <div className="col-4 border-end"><div className="h2 fw-bold text-success">2</div><small>Passed</small></div>
                        <div className="col-4"><div className="h2 fw-bold text-danger">1</div><small>Failed</small></div>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">Get Users <span className="badge bg-danger">Failed</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Post Users <span className="badge bg-success">Passed</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Put Users <span className="badge bg-success">Passed</span></li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Cards */}
      <section className="py-5 bg-dark-subtle card-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3">A Complete API Testing Platform</h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Comprehensive features enhanced with AI-powered auto-assertion generation.
            </p>
          </div>
          
          <div className="row g-4">
            {[
                { icon: <Database size={24} />, title: 'Smart Collections' }, { icon: <Settings size={24} />, title: 'Environments' },
                { icon: <Zap size={24} />, title: 'Automation' }, { icon: <BarChart size={24} />, title: 'Monitoring' },
                { icon: <Code size={24} />, title: 'Request Builder' }, { icon: <Lock size={24} />, title: 'Encryption' },
                { icon: <Users size={24} />, title: 'Git Integration' }
            ].map((feature, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 text-center animated-card">
                  <div className="card-body p-4">
                    <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle mb-3 icon-gradient-fill">
                      {feature.icon}
                    </div>
                    <h3 className="h5 card-title fw-bold">{feature.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container how-it-works-container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">How It Works</h2>
              <p className="lead text-white-50 mb-4">A streamlined workflow with intelligent automation.</p>
              
              {[
                { title: '1. Create & Import APIs' }, { title: '2. AI Generates Assertions' },
                { title: '3. Automate & Monitor' }, { title: '4. Analyze & Report' }
              ].map((step, i) => (
                <div className="d-flex mb-4 how-it-works-step" key={i}>
                  <div className="bg-gradient-pink-purple rounded-circle me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold">{i+1}</span>
                  </div>
                  <h4 className="h5 mb-0 fw-bold d-flex align-items-center">{step.title}</h4>
                </div>
              ))}
            </div>
            
            <div className="col-lg-7">
              <img src={workflow} alt="Workflow" className="img-fluid rounded-3 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 my-5 bg-gradient-pink-purple text-white">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-6 fw-bold mb-3">Ready to streamline your API testing?</h2>
              <p className="lead mb-4 opacity-75">
                Join thousands of developers using TestMasterHub with AI-powered auto-assertions.
              </p>
              <a className="btn btn-light btn-lg px-4 d-inline-flex align-items-center" href='/download'>
                <Brain size={18} className="me-2 text-dark" />
                <span className="text-dark">Try TestMasterHub Free</span>
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
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqAccordion">
                {[
                  { q: 'What makes TestMasterHub different?', a: 'TestMasterHub combines comprehensive API testing features with AI-powered auto-assertion generation, saving time and ensuring thorough coverage.' },
                  { q: 'How does the AI work?', a: 'Our AI analyzes API responses in real-time to automatically generate comprehensive assertions for status codes, response times, data validation, and content verification.' },
                  { q: 'Can I customize AI-generated assertions?', a: 'Yes! You have full control to review, modify, or add custom assertions. The AI provides a smart foundation that you can build upon.' },
                  { q: 'Does TestMasterHub support team collaboration?', a: 'Absolutely! TestMasterHub includes Git integration for version control, collection import/export, and collaborative workflows.' }
                ].map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={`h${index}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#c${index}`}>
                        {faq.q}
                      </button>
                    </h3>
                    <div id={`c${index}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">{faq.a}</div>
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