import React, { useEffect } from "react";
import {
  ArrowRight,
  Users,
  Zap,
  BarChart,
  Settings,
  Code,
  Database,
  Sparkles,
  Brain,
  Mail,
  Lock,
  Check,
} from "lucide-react";
import { Helmet } from "react-helmet";

// Mock images - replace with your actual imports
import DashboardImage from "../assets/images/Dashboard.png";
import workflow from "../assets/images/workflow.png";

const Home = () => {
  useEffect(() => {
    // Simplified scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-up");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="modern-homepage">
      <Helmet>
        <title>
          TestMasterHub – AI-Powered Local-First API Testing Platform
        </title>
        <meta
          name="description"
          content="TestMasterHub is a local-first AI-powered API testing platform with collections, offline automation, environments, Git sync, monitoring, and auto-generated assertions."
        />
        <meta
          name="keywords"
          content="api testing tool, postman alternative, offline api testing, testmasterhub, api automation, ai assertions, api collections"
        />
        <meta
          property="og:title"
          content="TestMasterHub – AI-Powered API Testing"
        />
        <meta
          property="og:description"
          content="Local-first AI-powered API testing platform with offline mode, Git sync, AI assertions, monitoring, and more."
        />
        <meta property="og:url" content="https://testmasterhub.com " />
      </Helmet>

      {/* Hero Section - Simplified & Centered */}
      <section className="hero-modern">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-9">
              <div className="badge-pill mb-4">
                <Sparkles size={16} />
                <span>AI-POWERED API TESTING</span>
              </div>

              <h1 className="hero-headline mb-4">
                API Testing Made{" "}
                <span className="gradient-text">Intelligent</span>
              </h1>

              <p className="hero-subtext mb-5">
                Local-first API testing platform with AI-powered assertions.
                Store data locally, test offline, sync when online.
              </p>

              <div className="hero-cta-group">
                <a href="/invite/beta-download" className="btn-gradient-large">
                  Try Free <ArrowRight size={20} />
                </a>
                <button className="btn-outline-large">Watch Demo</button>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5 pt-4">
            <div className="col-lg-10">
              <div className="hero-image-wrapper fade-in-up">
                <img
                  src={DashboardImage}
                  alt="TestMasterHub Dashboard"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features - Two Column Layout */}
      <section className="section-ai-features">
        <div className="container">
          {/* AI Documentation */}
          <div className="feature-row fade-in-up">
            <div className="feature-content">
              <div className="feature-tag">
                <Sparkles size={18} />
                <span>AI DOCUMENTATION</span>
              </div>
              <h2 className="feature-title">
                Generate Documentation Instantly
              </h2>
              <p className="feature-description">
                Transform test collections into professional, developer-friendly
                API documentation automatically. Always synchronized and
                up-to-date with one-click generation.
              </p>
              <div className="feature-benefits">
                <div className="benefit-item">
                  <Check size={20} className="check-icon" />
                  <span>One-click professional docs</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} className="check-icon" />
                  <span>Auto-sync with collections</span>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="feature-card-grid">
                <div className="mini-card">
                  <Code size={24} className="mini-card-icon" />
                  <h4>Instant Docs</h4>
                  <p>Professional documentation in seconds</p>
                </div>
                <div className="mini-card">
                  <Database size={24} className="mini-card-icon" />
                  <h4>Always Current</h4>
                  <p>Stays in sync with your tests</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI TestGen */}
          <div className="feature-row feature-row-reverse fade-in-up">
            <div className="feature-content">
              <div className="feature-tag">
                <Brain size={18} />
                <span>AI TESTGEN</span>
              </div>
              <h2 className="feature-title">Auto-Generate Test Cases</h2>
              <p className="feature-description">
                Boost coverage instantly with AI-generated tests for positive
                flows, error handling, and edge cases. AI features require
                internet connection for processing.
              </p>
              <div className="feature-benefits">
                <div className="benefit-item">
                  <Check size={20} className="check-icon" />
                  <span>Positive scenario validation</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} className="check-icon" />
                  <span>Negative case coverage</span>
                </div>
                <div className="benefit-item">
                  <Check size={20} className="check-icon" />
                  <span>Edge case detection</span>
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="feature-card-grid">
                <div className="mini-card">
                  <Check size={24} className="mini-card-icon" />
                  <h4>Happy Path</h4>
                  <p>Validates expected responses</p>
                </div>
                <div className="mini-card">
                  <Zap size={24} className="mini-card-icon" />
                  <h4>Error Cases</h4>
                  <p>Covers invalid inputs automatically</p>
                </div>
                <div className="mini-card">
                  <BarChart size={24} className="mini-card-icon" />
                  <h4>Edge Cases</h4>
                  <p>Detects boundary conditions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Reports */}
          <div className="feature-row fade-in-up">
            <div className="feature-content">
              <div className="feature-tag">
                <Mail size={18} />
                <span>EMAIL REPORTS</span>
              </div>
              <h2 className="feature-title">Comprehensive Test Reports</h2>
              <p className="feature-description">
                Receive detailed HTML reports after each build. Complete test
                summaries, metrics, and insights delivered to your inbox
                automatically.
              </p>
              <div className="report-features">
                <div className="report-badge">
                  <BarChart size={16} /> Test Metrics
                </div>
                <div className="report-badge">
                  <Code size={16} /> Error Details
                </div>
                <div className="report-badge">
                  <Settings size={16} /> Service Status
                </div>
                <div className="report-badge">
                  <Database size={16} /> Summary Stats
                </div>
              </div>
            </div>
            <div className="feature-visual">
              <div className="email-report-preview">
                <div className="report-header">
                  <h5>TestMasterHub</h5>
                  <small>Microservices Test Report</small>
                </div>
                <div className="report-body">
                  <div className="report-stats">
                    <div className="stat-box">
                      <div className="stat-number">3</div>
                      <div className="stat-label">Total</div>
                    </div>
                    <div className="stat-box stat-success">
                      <div className="stat-number">2</div>
                      <div className="stat-label">Passed</div>
                    </div>
                    <div className="stat-box stat-error">
                      <div className="stat-number">1</div>
                      <div className="stat-label">Failed</div>
                    </div>
                  </div>
                  <div className="report-tests">
                    <div className="test-item">
                      <span>Get Users</span>
                      <span className="badge-error">Failed</span>
                    </div>
                    <div className="test-item">
                      <span>Post Users</span>
                      <span className="badge-success">Passed</span>
                    </div>
                    <div className="test-item">
                      <span>Put Users</span>
                      <span className="badge-success">Passed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features - Grid */}
      <section className="section-platform-features">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Complete Testing Platform</h2>
            <p>
              Everything you need for comprehensive API testing, enhanced with
              AI
            </p>
          </div>

          <div className="platform-grid fade-in-up">
            {[
              {
                icon: Database,
                title: "Smart Collections",
                desc: "Organize APIs locally",
              },
              {
                icon: Settings,
                title: "Environments",
                desc: "Stored on your device",
              },
              { icon: Zap, title: "Automation", desc: "Run tests offline" },
              {
                icon: BarChart,
                title: "Monitoring",
                desc: "Track API health locally",
              },
              {
                icon: Code,
                title: "Request Builder",
                desc: "Build requests offline",
              },
              {
                icon: Lock,
                title: "Local Encryption",
                desc: "Data encrypted locally",
              },
              {
                icon: Users,
                title: "Git Integration",
                desc: "Sync when online",
              },
              {
                icon: Brain,
                title: "AI Assertions",
                desc: "Requires internet",
              },
            ].map((feature, i) => (
              <div key={i} className="platform-card">
                <div className="platform-icon">
                  <feature.icon size={28} />
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Flow */}
      <section className="section-how-it-works">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>How It Works</h2>
            <p>Streamlined workflow with intelligent automation</p>
          </div>

          <div className="workflow-steps fade-in-up">
            {[
              { num: 1, title: "Create & Import", desc: "Set up your APIs" },
              { num: 2, title: "AI Generates", desc: "Auto assertions" },
              { num: 3, title: "Automate", desc: "Run & monitor" },
              { num: 4, title: "Analyze", desc: "Get insights" },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="workflow-step">
                  <div className="step-number">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                {i < 3 && <div className="workflow-arrow">→</div>}
              </React.Fragment>
            ))}
          </div>

          <div className="workflow-image fade-in-up">
            <img src={workflow} alt="Workflow Visualization" />
          </div>
        </div>
      </section>

      {/* FAQ - Minimal */}
      <section className="section-faq">
        <div className="container">
          <div className="section-header fade-in-up">
            <h2>Common Questions</h2>
          </div>

          <div className="faq-list fade-in-up">
            {[
              {
                q: "What makes TestMasterHub different?",
                a: "We combine comprehensive API testing with AI-powered auto-assertion generation, saving time while ensuring thorough coverage.",
              },
              {
                q: "How does the AI work?",
                a: "Our AI analyzes API responses in real-time to automatically generate assertions for status codes, response times, data validation, and content verification.",
              },
              {
                q: "Can I customize AI assertions?",
                a: "Absolutely! You have full control to review, modify, or add custom assertions. AI provides a smart foundation you can build upon.",
              },
              {
                q: "Does it support team collaboration?",
                a: "Yes! Includes Git integration for version control, collection import/export, and collaborative workflows.",
              },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-content fade-in-up">
            <h2>Ready to test smarter?</h2>
            <p>Join thousands of developers using AI-powered API testing</p>
            <a href="/invite/beta-download" className="btn-gradient-large">
              <Brain size={20} />
              Try TestMasterHub Free
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .modern-homepage {
          background: #111111;
          color: #f0f0f0;
        }

        /* Hero Section */
        .hero-modern {
          padding: 8rem 0 6rem;
          background: linear-gradient(180deg, #111111 0%, #1a1a1a 100%);
        }

        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(129, 80, 255, 0.1);
          border: 1px solid rgba(129, 80, 255, 0.2);
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #c8b3ff;
          letter-spacing: 0.5px;
        }

        .hero-headline {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ff66c4, #8150ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtext {
          font-size: 1.25rem;
          color: rgba(240, 240, 240, 0.7);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-gradient-large,
        .btn-outline-large {
          padding: 1rem 2rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1.05rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .btn-gradient-large {
          background: linear-gradient(135deg, #ff66c4, #8150ff);
          color: white;
        }

        .btn-gradient-large:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(129, 80, 255, 0.3);
        }

        .btn-outline-large {
          background: transparent;
          border: 2px solid #333;
          color: #f0f0f0;
        }

        .btn-outline-large:hover {
          border-color: #8150ff;
          background: rgba(129, 80, 255, 0.1);
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .hero-image {
          width: 100%;
          display: block;
          border-radius: 1rem;
        }

        /* AI Features Section */
        .section-ai-features {
          padding: 8rem 0;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 8rem;
        }

        .feature-row-reverse {
          direction: rtl;
        }

        .feature-row-reverse > * {
          direction: ltr;
        }

        @media (max-width: 991px) {
          .feature-row {
            grid-template-columns: 1fr;
            gap: 3rem;
            margin-bottom: 5rem;
          }
        }

        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2a2a2a;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #ff66c4;
          margin-bottom: 1.5rem;
        }

        .feature-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .feature-description {
          font-size: 1.15rem;
          color: rgba(240, 240, 240, 0.7);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .feature-benefits {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.05rem;
          color: rgba(240, 240, 240, 0.9);
        }

        .check-icon {
          color: #4ade80;
          flex-shrink: 0;
        }

        .feature-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .mini-card {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .mini-card:hover {
          transform: translateY(-5px);
          border-color: #8150ff;
        }

        .mini-card-icon {
          color: #ff66c4;
          margin-bottom: 1rem;
        }

        .mini-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .mini-card p {
          font-size: 0.9rem;
          color: rgba(240, 240, 240, 0.6);
          margin: 0;
        }

        .report-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .report-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #2a2a2a;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.9rem;
          color: rgba(240, 240, 240, 0.9);
        }

        .email-report-preview {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .report-header {
          background: #f8f9fa;
          padding: 1.5rem;
          text-align: center;
          border-bottom: 1px solid #e0e0e0;
        }

        .report-header h5 {
          margin: 0;
          color: #111;
          font-weight: 700;
        }

        .report-header small {
          color: #666;
        }

        .report-body {
          padding: 2rem;
        }

        .report-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-box {
          text-align: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 0.5rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
        }

        .stat-success .stat-number {
          color: #22c55e;
        }

        .stat-error .stat-number {
          color: #ef4444;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #666;
        }

        .report-tests {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .test-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 0.5rem;
          color: #333;
        }

        .badge-success,
        .badge-error {
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge-success {
          background: #22c55e;
          color: white;
        }

        .badge-error {
          background: #ef4444;
          color: white;
        }

        /* Platform Features */
        .section-platform-features {
          padding: 6rem 0;
          background: #1a1a1a;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .section-header p {
          font-size: 1.15rem;
          color: rgba(240, 240, 240, 0.6);
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .platform-card {
          background: #111111;
          border: 1px solid #333;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .platform-card:hover {
          transform: translateY(-5px);
          border-color: #8150ff;
        }

        .platform-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #ff66c4, #8150ff);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .platform-card h4 {
          font-size: 1.15rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .platform-card p {
          font-size: 0.9rem;
          color: rgba(240, 240, 240, 0.6);
          margin: 0;
        }

        /* How It Works */
        .section-how-it-works {
          padding: 6rem 0;
        }

        .workflow-steps {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .workflow-step {
          text-align: center;
          max-width: 200px;
        }

        .step-number {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #ff66c4, #8150ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 auto 1rem;
        }

        .workflow-step h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .workflow-step p {
          font-size: 0.9rem;
          color: rgba(240, 240, 240, 0.6);
          margin: 0;
        }

        .workflow-arrow {
          font-size: 2rem;
          color: #8150ff;
        }

        .workflow-image {
          max-width: 900px;
          margin: 0 auto;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .workflow-image img {
          width: 100%;
          display: block;
        }

        /* FAQ */
        .section-faq {
          padding: 6rem 0;
          background: #1a1a1a;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid #333;
          padding: 1.5rem 0;
        }

        .faq-item summary {
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary::after {
          content: "+";
          font-size: 1.5rem;
          color: #8150ff;
        }

        .faq-item[open] summary::after {
          content: "−";
        }

        .faq-item p {
          margin-top: 1rem;
          color: rgba(240, 240, 240, 0.7);
          line-height: 1.7;
        }

        /* CTA */
        .section-cta {
          padding: 6rem 0;
          background: linear-gradient(135deg, #ff66c4, #8150ff);
        }

        .cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .cta-content p {
          font-size: 1.15rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .cta-content .btn-gradient-large {
          background: white;
          color: #8150ff;
        }

        .cta-content .btn-gradient-large:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .hero-modern {
            padding: 5rem 0 3rem;
          }

          .hero-headline {
            font-size: 2rem;
          }

          .feature-title {
            font-size: 1.75rem;
          }

          .section-header h2 {
            font-size: 1.75rem;
          }

          .workflow-arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
