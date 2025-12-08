import React, { useEffect } from "react";
import {
  Layout,
  GitBranch,
  Shield,
  Cpu,
  Globe,
  Zap,
  CheckCircle2,
  Sparkles,
  Download,
  Lock,
  FileText,
  RefreshCw,
  PlayCircle,
  Clock,
  Server,
  FileSpreadsheet,
  BarChart2,
  Mail,
  Repeat
} from "lucide-react";
import { Helmet } from "react-helmet";

// --- Hook for Scroll Animations ---
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Home = () => {
  useScrollReveal();

  return (
    <div className="tmh-home-wrapper">
      <Helmet>
        <title>TestMasterHub | AI-Powered Local API Automation</title>
        <meta
          name="description"
          content="Automate HTTP, gRPC, GraphQL & WebSocket flows locally. Suite Runner, Scheduler, AI TestGen, and offline-first automation."
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section text-center position-relative">
        <div className="hero-glow"></div>
        <div className="container position-relative z-2">
          <div className="d-inline-flex align-items-center hero-badge reveal-on-scroll">
            <Sparkles size={14} className="me-2 text-warning" />
            <span className="text-uppercase tracking-wider">v2.0 Beta is Live</span>
          </div>

          <h1 className="hero-title reveal-on-scroll mt-4 mb-4">
            Build. Test. Automate. <br />
            <span className="text-gradient-pink-purple">On Your Machine.</span>
          </h1>

          <p className="hero-subtitle reveal-on-scroll mx-auto text-white-50">
            Stop uploading your secrets to the cloud. TestMasterHub is the
            offline-first automation platform with built-in Suite Runner, Scheduler, and AI TestGen.
          </p>

          <div className="hero-actions reveal-on-scroll d-flex justify-content-center gap-3 mt-5">
            <a href="/invite/beta-download" className="btn btn-primary-gradient btn-lg shadow-lg">
              <Download size={20} className="me-2" />
              Download for Win
            </a>
            <a href="#features" className="btn btn-outline-dark-custom btn-lg">
              View Capabilities
            </a>
          </div>

          {/* ================= HERO UI PREVIEW (REQUEST EDITOR) ================= */}
          <div className="hero-ui-preview reveal-on-scroll mt-5">
            {/* Window Header with tabs */}
            <div className="ui-window-header">
              <div className="d-flex align-items-center gap-3">
                <div className="ui-window-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <div className="ui-tab active-tab">
                  <span className="tab-method">POST</span>
                  <span className="tab-name">1) REST Login</span>
                  <span className="tab-close">×</span>
                </div>
                <div className="ui-tab-add">+</div>
              </div>
            </div>

            {/* Breadcrumb Bar */}
            <div className="ui-breadcrumb-bar">
              <span className="breadcrumb-text">Multi-Protocol Demo</span>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-text">1) REST Login</span>
            </div>

            <div className="ui-window-content d-flex">
              {/* Main Request Area */}
              <div className="ui-request-area flex-grow-1">
                {/* Request URL Bar */}
                <div className="request-url-bar">
                  <select className="method-dropdown">
                    <option>POST</option>
                    <option>GET</option>
                    <option>PUT</option>
                    <option>PATCH</option>
                    <option>DELETE</option>
                    <option>TRACE</option>
                    <option>OPTIONS</option>
                  </select>
                  <input
                    type="text"
                    className="url-input"
                    value="{{AuthBaseUrl}}/auth/login"
                    readOnly
                  />
                  <button className="btn-clear">Clear All</button>
                  <button
                    className="btn-send"
                    onClick={() => {
                      window.location.href = "/invite/beta-download";
                    }}
                  >
                    Send
                  </button>
                </div>

                {/* Request Tabs */}
                <div className="request-tabs">
                  <div className="req-tab active-req-tab">Params</div>
                  <div className="req-tab">Auth</div>
                  <div className="req-tab">Header</div>
                  <div className="req-tab">Body</div>
                  <div className="req-tab">Scripts</div>
                </div>

                {/* Query Parameters Table (Params section) */}
                <div className="params-section">
                  <h6 className="section-title">Query Parameters</h6>
                  <div className="params-table">
                    <div className="params-header">
                      <div className="param-col">Key</div>
                      <div className="param-col">Value</div>
                      <div className="param-col">Description</div>
                      <div className="param-col-small">Actions</div>
                    </div>
                    <div className="params-row">
                      <div className="param-cell">redirect</div>
                      <div className="param-cell">true</div>
                      <div className="param-cell">
                        Whether to redirect user after successful login
                      </div>
                      <div className="param-cell param-cell-actions">⋮</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Panel */}
              <div className="ui-response-panel">
                <div className="response-header">
                  <select className="response-dropdown">
                    <option>Response</option>
                  </select>
                  <div className="response-stats">
                    <span className="stat-success">200 OK</span>
                    <span className="stat-time">120 ms</span>
                    <span className="stat-size">320 B</span>
                    <button className="icon-btn">📋</button>
                    <button className="icon-btn">📄</button>
                  </div>
                </div>

                {/* Response Tabs */}
                <div className="response-tabs">
                  <div className="res-tab active-res-tab">Pretty</div>
                  <div className="res-tab">Raw</div>
                  <div className="res-tab">Preview</div>
                  <div className="res-tab">Headers</div>
                </div>

                {/* Response Body */}
                <div className="response-body">
                  <div className="response-json">
                    <span className="json-bracket">{"{"}</span>
                    <div className="json-line">
                      <span className="json-key">"status"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"success"</span>
                      <span>,</span>
                    </div>
                    <div className="json-line">
                      <span className="json-key">"message"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">"Login successful"</span>
                      <span>,</span>
                    </div>
                    <div className="json-line">
                      <span className="json-key">"token"</span>
                      <span className="json-colon">:</span>
                      <span className="json-string">
                        "eyJhbGciOiJIUz.fake"
                      </span>
                    </div>
                    <span className="json-bracket">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROTOCOL STRIP ================= */}
      <div className="protocol-strip border-top border-bottom border-secondary border-opacity-10">
        <div className="container">
          <div className="d-flex justify-content-center gap-4 gap-md-5 py-4 overflow-hidden flex-wrap text-white-50 fw-bold small text-uppercase tracking-widest">
            <span className="d-flex align-items-center gap-2">
              <Globe size={16} /> HTTP/REST
            </span>
            <span className="d-flex align-items-center gap-2">
              <Cpu size={16} /> gRPC
            </span>
            <span className="d-flex align-items-center gap-2">
              <Zap size={16} /> GraphQL
            </span>
            <span className="d-flex align-items-center gap-2">
              <GitBranch size={16} /> WebSocket
            </span>
          </div>
        </div>
      </div>
      {/* ================= BENTO GRID FEATURES ================= */}
      <section id="features" className="py-6">
        <div className="container">
          <div className="section-header text-center mb-5 reveal-on-scroll">
            <h2 className="fw-bold mb-3">The Complete Automation Suite</h2>
            <p className="text-white-50">
              Everything you need to migrate, generate, and automate.
            </p>
          </div>

          <div className="bento-grid">
            {/* Card 1: AI Suite (Large) */}
            <div className="bento-card bento-large reveal-on-scroll bg-gradient-dark-1">
              <div className="bento-content">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="icon-box bg-purple-soft text-purple">
                    <Sparkles size={24} />
                  </div>
                  <span className="badge bg-purple-soft text-purple border border-purple-subtle">
                    New AI Features
                  </span>
                </div>
                <h3>Intelligent AI Suite</h3>
                <p className="text-white-50 mb-4">
                  Manual testing is over. Let our AI handle the heavy lifting:
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <div className="feature-pill">
                    <PlayCircle size={14} className="me-1 text-success" />
                    <span className="fw-bold text-white">TestGen:</span> Auto-generate
                    test cases
                  </div>
                  <div className="feature-pill">
                    <FileText size={14} className="me-1 text-info" />
                    <span className="fw-bold text-white">Doc Hub:</span> AI-generated
                    docs
                  </div>
                  <div className="feature-pill">
                    <RefreshCw size={14} className="me-1 text-warning" />
                    <span className="fw-bold text-white">Migrate:</span> Postman to TMH
                    Assertions
                  </div>
                </div>
              </div>
              <div className="bento-visual visual-ai">
                <div className="floating-badge badge-1">🤖 Generative Tests</div>
                <div className="floating-badge badge-2">📄 Live Docs</div>
              </div>
            </div>

            {/* Card 2: Offline */}
            <div className="bento-card reveal-on-scroll">
              <div className="bento-content">
                <div className="icon-box mb-3 bg-green-soft text-success">
                  <Shield size={24} />
                </div>
                <h3>Offline & Secure</h3>
                <p className="text-white-50 small">
                  Your API keys never leave your device. Zero cloud sync. Works 100%
                  offline.
                </p>
              </div>
            </div>

            {/* Card 3: Chaining */}
            <div className="bento-card reveal-on-scroll">
              <div className="bento-content">
                <div className="icon-box mb-3 bg-blue-soft text-info">
                  <Layout size={24} />
                </div>
                <h3>Protocol Chaining</h3>
                <p className="text-white-50 small">
                  Chain requests using variables like{" "}
                  <code className="text-warning bg-dark-subtle px-1 rounded">
                    ${"{userId}"}
                  </code>
                  . Pass data from gRPC to GraphQL instantly.
                </p>
              </div>
            </div>

            {/* Card 4: Visual Git (Wide) */}
            <div className="bento-card bento-wide reveal-on-scroll">
              <div className="row h-100 align-items-center">
                <div className="col-md-5 p-4">
                  <div className="icon-box mb-3 bg-orange-soft text-warning">
                    <GitBranch size={24} />
                  </div>
                  <h3>Visual Version Control</h3>
                  <p className="text-white-50">
                    No CLI needed. Manage your collections with our built-in Git GUI
                    page. Stage changes, commit, and sync with your team effortlessly.
                  </p>
                </div>
                <div className="col-md-7 h-100 position-relative overflow-hidden">
                  <div className="git-ui-preview">
                    <div className="git-header d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex gap-2">
                        <div className="git-btn bg-primary">Sync</div>
                        <div className="git-btn">Push</div>
                      </div>
                      <div className="git-branch-badge">master • Published</div>
                    </div>
                    <div className="row g-2 h-75">
                      <div className="col-6">
                        <div className="git-panel">
                          <div className="git-panel-header text-info">
                            Unstaged Changes
                          </div>
                          <div className="git-empty-state">
                            <div className="folder-icon"></div>
                            <span>No unstaged changes</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="git-panel">
                          <div className="git-panel-header text-success">
                            Staged Changes
                          </div>
                          <div className="git-empty-state">
                            <div className="folder-icon"></div>
                            <span>No staged changes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SUITE RUNNER SECTION ================= */}
      <section className="py-6 reveal-on-scroll">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill bg-primary-subtle border border-primary border-opacity-25">
                <span className="text-primary small fw-bold text-uppercase">
                  Execution Engine
                </span>
              </div>
              <h2 className="fw-bold mb-4">
                Powerful Suite Runner. <br />
                Batch Execution Made Simple.
              </h2>
              <p className="text-white-50 lead mb-4">
                Run multiple collections against any environment in parallel. Supports
                data-driven testing with CSV/Excel upload.
              </p>

              <div className="features-list">
                <div className="d-flex gap-3 mb-3">
                  <div className="icon-circle">
                    <FileSpreadsheet size={18} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Data Driven Testing</h6>
                    <p className="small text-white-50 m-0">
                      Upload CSV/Excel files to iterate tests with real data.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3 mb-3">
                  <div className="icon-circle">
                    <Server size={18} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Local & Remote Runners</h6>
                    <p className="small text-white-50 m-0">
                      Debug locally or connect to a remote CI runner via URL/Port.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="icon-circle">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">Parallel Execution</h6>
                    <p className="small text-white-50 m-0">
                      Run hundreds of tests concurrently to save time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="runner-ui-mockup">
                <div className="runner-header-bar">
                  <span className="dots"></span>
                  <span className="title">Suite Configuration</span>
                </div>
                <div className="runner-body p-4">
                  <div className="row">
                    <div className="col-md-6 border-end border-secondary border-opacity-25">
                      <h6 className="text-white-50 text-uppercase small fw-bold mb-3">
                        Target Collections
                      </h6>
                      <div className="collection-checkbox active">
                        <CheckCircle2 size={16} className="text-success" />{" "}
                        <span>Payment Flow</span>
                      </div>
                      <div className="collection-checkbox active">
                        <CheckCircle2 size={16} className="text-success" />{" "}
                        <span>User Auth</span>
                      </div>
                      <div className="collection-checkbox">
                        <div className="circle-unchecked"></div> <span>Legacy API</span>
                      </div>
                    </div>
                    <div className="col-md-6 ps-md-4 mt-4 mt-md-0">
                      <h6 className="text-white-50 text-uppercase small fw-bold mb-3">
                        Runner Type
                      </h6>
                      <div className="runner-toggle">
                        <span className="active">Local</span>
                        <span>Remote</span>
                      </div>
                      <div className="options-list mt-4">
                        <div className="option-item">
                          <CheckCircle2 size={14} className="text-primary me-2" /> Run in
                          Parallel
                        </div>
                        <div className="option-item">
                          <CheckCircle2 size={14} className="text-primary me-2" /> Retry on
                          Failure
                        </div>
                        <div className="option-item">
                          <CheckCircle2 size={14} className="text-primary me-2" /> Generate
                          HTML Report
                        </div>
                      </div>
                      <button className="btn btn-primary w-100 mt-4 fw-bold">
                        <PlayCircle size={16} className="me-2" /> Run Suite
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCHEDULER SECTION ================= */}
      <section className="py-6 bg-darker reveal-on-scroll border-top border-bottom border-secondary border-opacity-10">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="scheduler-visual-card">
                <div className="scheduler-graph-area">
                  <div className="graph-bars">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "60%" }}></div>
                    <div className="bar" style={{ height: "45%" }}></div>
                    <div className="bar" style={{ height: "80%" }}></div>
                    <div className="bar" style={{ height: "75%" }}></div>
                    <div className="bar active" style={{ height: "90%" }}>
                      <div className="tooltip-custom">98% Success</div>
                    </div>
                    <div className="bar" style={{ height: "85%" }}></div>
                  </div>
                  <div className="graph-line"></div>
                </div>
                <div className="scheduler-info-row">
                  <div className="info-item">
                    <Clock size={16} className="text-warning" />
                    <span>
                      Frequency: <strong>Every 1 Hour</strong>
                    </span>
                  </div>
                  <div className="info-item">
                    <Mail size={16} className="text-info" />
                    <span>
                      Alerts: <strong>Enabled</strong>
                    </span>
                  </div>
                  <div className="info-item ms-auto">
                    <span className="badge bg-success-subtle text-success border border-success border-opacity-25">
                      Active Monitor
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 ps-lg-5">
              <div className="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill bg-warning-subtle border border-warning border-opacity-25">
                <span className="text-warning small fw-bold text-uppercase">
                  Automation
                </span>
              </div>
              <h2 className="fw-bold mb-4">
                Set it and forget it. <br />
                Automated Scheduler.
              </h2>
              <p className="text-white-50 lead mb-4">
                Monitor critical API flows on a schedule. Get performance graphs,
                detailed request breakdowns, and instant alerts on failure.
              </p>
              <ul className="list-unstyled text-white-50">
                <li className="mb-3 d-flex align-items-start">
                  <Repeat size={20} className="text-warning me-3 mt-1" />
                  <div>
                    <strong>Automated Runs:</strong> Schedule any collection to run
                    periodically (Hourly, Daily, Weekly).
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <BarChart2 size={20} className="text-warning me-3 mt-1" />
                  <div>
                    <strong>Performance Insights:</strong> View success rates and response
                    time trends over time.
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <Mail size={20} className="text-warning me-3 mt-1" />
                  <div>
                    <strong>Email Alerts:</strong> Get notified instantly when a monitor
                    fails or degrades.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRIVACY SECTION ================= */}
      <section className="py-6 bg-darker reveal-on-scroll">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="privacy-visual">
                <div className="lock-icon-container">
                  <Lock size={48} className="text-success" />
                </div>
                <div className="data-flow-animation">
                  <div className="data-particle"></div>
                  <div className="data-particle delay-1"></div>
                  <div className="data-particle delay-2"></div>
                </div>
                <div className="local-storage-box">
                  <span>Encrypted Local Storage</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="ps-lg-4">
                <div className="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill bg-success-subtle border border-success border-opacity-25">
                  <span className="text-success small fw-bold text-uppercase">
                    Security First
                  </span>
                </div>
                <h2 className="display-6 fw-bold mb-4">
                  Your secrets stay yours. <br />
                  No cloud sync.
                </h2>
                <p className="text-white-50 lead mb-4">
                  Unlike other tools that force you to sync environments to their
                  cloud, TestMasterHub stores everything on your device, encrypted
                  with AES-256.
                </p>
                <ul className="list-unstyled text-white-50">
                  <li className="mb-3 d-flex align-items-center">
                    <CheckCircle2 size={20} className="text-success me-3" />
                    No third-party data tracking
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <CheckCircle2 size={20} className="text-success me-3" />
                    Compliant with strict NDA projects
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle2 size={20} className="text-success me-3" />
                    Share via Git, not proprietary links
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MIGRATION BANNER ================= */}
      <section className="py-5">
        <div className="container reveal-on-scroll">
          <div className="migration-card">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <RefreshCw size={28} className="text-warning" />
                  <h4 className="mb-0 fw-bold">One-Click Migration</h4>
                </div>
                <p className="mb-0 text-white-50">
                  Import Postman Collections and instantly convert your assertions to
                  TestMasterHub's AI-powered format with a single click.
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-4 mt-md-0">
                <button className="btn btn-outline-light rounded-pill px-4">
                  Import &amp; Migrate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="cta-section text-center">
        <div className="container reveal-on-scroll">
          <div className="cta-box">
            <h2 className="display-6 fw-bold mb-3">
              Stop renting your test environment.
            </h2>
            <p className="text-white-50 mb-4 fs-5">
              Own your data. Own your workflow. Run it all locally.
            </p>
            <a
              href="/invite/beta-download"
              className="btn btn-primary-gradient btn-lg px-5 py-3 rounded-pill fw-bold"
            >
              Start Testing for Free
            </a>
            <p className="small text-white-50 mt-3 opacity-50">
              Compatible with Windows, macOS &amp; Linux
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* --- SCOPED STYLES FOR HOME --- */

        .tmh-home-wrapper {
          background-color: var(--gsap-dark);
          color: #fff;
          overflow-x: hidden;
        }

        /* Hero */
        .hero-section {
          padding: 8rem 0 4rem;
          min-height: 90vh;
        }
        .hero-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          height: 60vh;
          background: radial-gradient(
            circle,
            rgba(129, 80, 255, 0.15) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        .hero-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .btn-outline-dark-custom {
          color: #e4e4e7;
          border: 1px solid #3f3f46;
          border-radius: 50px;
          font-weight: 600;
        }
        .btn-outline-dark-custom:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-color: #fff;
        }

        /* --- REQUEST EDITOR UI PREVIEW --- */
        .hero-ui-preview {
          max-width: 1100px;
          margin: 0 auto;
          background: #1a1d29;
          border: 1px solid #2d3548;
          border-radius: 12px;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          position: relative;
          text-align: left;
        }

        .ui-window-header {
          padding: 10px 16px;
          background: #1e2230;
          border-bottom: 1px solid #2d3548;
          display: flex;
          align-items: center;
        }
        .ui-window-dots {
          display: flex;
          gap: 8px;
          margin-right: 16px;
        }
        .dot-red {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ff5f56;
        }
        .dot-yellow {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffbd2e;
        }
        .dot-green {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #27c93f;
        }

        .ui-tab {
          background: #252938;
          padding: 6px 12px;
          border-radius: 6px 6px 0 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #a0aec0;
        }
        .ui-tab.active-tab {
          background: #2d3548;
          color: #fff;
        }
        .tab-method {
          background: #0d6efd;
          color: #fff;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .tab-name {
          font-size: 0.8rem;
        }
        .tab-close {
          color: #71717a;
          cursor: pointer;
          font-size: 1.2rem;
          line-height: 1;
        }
        .ui-tab-add {
          background: transparent;
          color: #71717a;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 1rem;
        }

        .ui-breadcrumb-bar {
          background: #252938;
          padding: 8px 16px;
          border-bottom: 1px solid #2d3548;
          font-size: 0.85rem;
          color: #a0aec0;
        }
        .breadcrumb-separator {
          margin: 0 8px;
          color: #52525b;
        }
        .breadcrumb-text:last-child {
          color: #fff;
          font-weight: 600;
        }

        .ui-window-content {
          height: 500px;
          display: flex;
        }

        /* Request Area */
        .ui-request-area {
          background: #252938;
          padding: 20px;
          border-right: 1px solid #2d3548;
          overflow-y: auto;
        }

        .request-url-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          align-items: center;
        }
        .method-dropdown {
          background: #1e2230;
          border: 1px solid #3f3f46;
          color: #0d6efd;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          width: 120px;
        }
        .url-input {
          flex: 1;
          background: #1e2230;
          border: 1px solid #3f3f46;
          color: #e4e4e7;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-family: "Courier New", monospace;
        }
        .btn-clear {
          background: transparent;
          border: 1px solid #3f3f46;
          color: #0d6efd;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .btn-send {
          background: #0d6efd;
          border: none;
          color: #fff;
          padding: 8px 24px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .request-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          border-bottom: 1px solid #2d3548;
          padding-bottom: 8px;
        }
        .req-tab {
          padding: 6px 16px;
          color: #71717a;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 4px;
        }
        .req-tab.active-req-tab {
          background: #1e2230;
          color: #fff;
          font-weight: 600;
        }

        .params-section {
          margin-top: 20px;
        }
        .section-title {
          color: #a0aec0;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .params-table {
          background: #1e2230;
          border: 1px solid #2d3548;
          border-radius: 8px;
          overflow: hidden;
        }
        .params-header {
          display: grid;
          grid-template-columns: 2fr 2fr 3fr 1fr;
          padding: 10px 16px;
          background: #2d3548;
          font-size: 0.8rem;
          font-weight: 600;
          color: #a0aec0;
          border-bottom: 1px solid #3f3f46;
        }
        .param-col-small {
          text-align: right;
        }
        .params-row {
          display: grid;
          grid-template-columns: 2fr 2fr 3fr 1fr;
          padding: 10px 16px;
          font-size: 0.8rem;
          border-top: 1px solid #2d3548;
          color: #e4e4e7;
        }
        .param-cell-actions {
          text-align: right;
          opacity: 0.5;
        }

        /* Response Panel */
        .ui-response-panel {
          width: 45%;
          background: #2d3548;
          display: flex;
          flex-direction: column;
        }
        .response-header {
          padding: 12px 16px;
          border-bottom: 1px solid #3f3f46;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .response-dropdown {
          background: transparent;
          border: 1px solid #3f3f46;
          color: #fff;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
        }
        .response-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.8rem;
        }
        .stat-error {
          color: #ef4444;
          font-weight: 600;
        }
        .stat-success {
          color: #22c55e;
          font-weight: 600;
        }
        .stat-time,
        .stat-size {
          color: #a0aec0;
        }
        .icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          opacity: 0.6;
        }

        .response-tabs {
          display: flex;
          gap: 4px;
          padding: 8px 16px;
          border-bottom: 1px solid #3f3f46;
        }
        .res-tab {
          padding: 6px 12px;
          color: #71717a;
          font-size: 0.85rem;
          cursor: pointer;
          border-radius: 4px;
        }
        .res-tab.active-res-tab {
          background: #3f3f46;
          color: #fff;
          font-weight: 600;
        }

        .response-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
        }
        .response-json {
          color: #e4e4e7;
        }
        .json-bracket {
          color: #fbbf24;
        }
        .json-line {
          margin-left: 20px;
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .json-key {
          color: #60a5fa;
        }
        .json-colon {
          color: #fff;
          margin: 0 8px;
        }
        .json-string {
          color: #34d399;
        }

        /* SUITE RUNNER UI MOCKUP */
        .runner-ui-mockup {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5);
        }
        .runner-header-bar {
          background: #18181b;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #27272a;
        }
        .runner-header-bar .dots {
          width: 10px;
          height: 10px;
          background: #3f3f46;
          border-radius: 50%;
          box-shadow: 14px 0 0 #3f3f46, 28px 0 0 #3f3f46;
          margin-right: 24px;
        }
        .runner-header-bar .title {
          font-size: 0.8rem;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .collection-checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 8px;
          background: transparent;
          transition: background 0.2s;
          cursor: default;
        }
        .collection-checkbox.active {
          background: #18181b;
          color: #fff;
          border: 1px solid #27272a;
        }
        .circle-unchecked {
          width: 16px;
          height: 16px;
          border: 2px solid #52525b;
          border-radius: 50%;
        }

        .runner-toggle {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 8px;
          display: flex;
          padding: 4px;
        }
        .runner-toggle span {
          flex: 1;
          text-align: center;
          padding: 6px;
          font-size: 0.85rem;
          border-radius: 6px;
          color: #71717a;
        }
        .runner-toggle span.active {
          background: #27272a;
          color: #fff;
          font-weight: 600;
        }
        .options-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .option-item {
          font-size: 0.85rem;
          color: #a1a1aa;
          display: flex;
          align-items: center;
        }
        .icon-circle {
          width: 32px;
          height: 32px;
          background: #18181b;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a78bfa;
          flex-shrink: 0;
        }

        /* SCHEDULER VISUAL CARD */
        .scheduler-visual-card {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 30px;
          position: relative;
        }
        .scheduler-graph-area {
          height: 180px;
          display: flex;
          align-items: flex-end;
          position: relative;
          padding-bottom: 20px;
          border-bottom: 1px solid #3f3f46;
        }
        .graph-bars {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          align-items: flex-end;
          gap: 8px;
        }
        .bar {
          flex: 1;
          background: #27272a;
          border-radius: 4px 4px 0 0;
          position: relative;
          transition: height 0.3s;
        }
        .bar:hover,
        .bar.active {
          background: #4ade80;
        }
        .tooltip-custom {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          color: #000;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
          white-space: nowrap;
        }
        .scheduler-info-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 15px;
          flex-wrap: wrap;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #a1a1aa;
        }

        /* Bento Grid */
        .py-6 {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .bg-darker {
          background-color: #0b0b0e;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          auto-rows: minmax(280px, auto);
        }
        .bento-card {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .bento-card:hover {
          transform: translateY(-5px);
          border-color: #52525b;
        }
        .bento-content {
          padding: 32px;
          z-index: 2;
        }
        .bento-large {
          grid-column: span 2;
        }
        .bento-wide {
          grid-column: span 3;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-purple-soft {
          background: rgba(139, 92, 246, 0.1);
        }
        .bg-green-soft {
          background: rgba(34, 197, 94, 0.1);
        }
        .bg-blue-soft {
          background: rgba(59, 130, 246, 0.1);
        }
        .bg-orange-soft {
          background: rgba(249, 115, 22, 0.1);
        }

        .border-purple-subtle {
          border-color: rgba(139, 92, 246, 0.3);
        }

        /* AI Feature Pills */
        .feature-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #3f3f46;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: #a1a1aa;
          display: inline-flex;
          align-items: center;
        }

        /* Bento Visuals */
        .bento-visual {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 50%;
          height: 100%;
          pointer-events: none;
        }
        .visual-ai {
          background: radial-gradient(
            circle at bottom right,
            rgba(139, 92, 246, 0.2),
            transparent 60%
          );
        }
        .floating-badge {
          position: absolute;
          background: #27272a;
          border: 1px solid #3f3f46;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .badge-1 {
          top: 30%;
          right: 20%;
          transform: rotate(-5deg);
          color: #a78bfa;
          border-color: #a78bfa;
        }
        .badge-2 {
          top: 55%;
          right: 10%;
          transform: rotate(5deg);
          color: #60a5fa;
        }

        /* Git Visual UI */
        .git-ui-preview {
          background: #09090b;
          padding: 20px;
          border-radius: 12px 0 0 12px;
          height: 100%;
          border-left: 1px solid #27272a;
          border-top: 1px solid #27272a;
          display: flex;
          flex-direction: column;
        }
        .git-btn {
          background: #27272a;
          color: #ccc;
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 4px;
        }
        .git-btn.bg-primary {
          background: #0d6efd;
          color: white;
        }
        .git-branch-badge {
          background: #111;
          border: 1px solid #333;
          color: #4ade80;
          font-size: 0.7rem;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .git-panel {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 8px;
          height: 100%;
          padding: 10px;
        }
        .git-panel-header {
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 10px;
          padding-left: 4px;
          border-left: 2px solid;
        }
        .git-empty-state {
          height: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.3;
          font-size: 0.7rem;
        }
        .folder-icon {
          width: 24px;
          height: 20px;
          background: #555;
          border-radius: 2px;
          margin-bottom: 4px;
        }

        /* Privacy Visuals */
        .privacy-visual {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: radial-gradient(
            circle,
            rgba(22, 163, 74, 0.1),
            transparent 70%
          );
        }
        .lock-icon-container {
          background: #18181b;
          padding: 24px;
          border-radius: 50%;
          border: 1px solid #22c55e;
          box-shadow: 0 0 30px rgba(22, 163, 74, 0.2);
          z-index: 2;
        }
        .data-flow-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .local-storage-box {
          margin-top: 24px;
          background: #18181b;
          border: 1px solid #3f3f46;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.8rem;
          color: #9ca3af;
        }

        /* Migration Card */
        .migration-card {
          background: linear-gradient(90deg, #18181b, #09090b);
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 40px;
        }

        /* CTA */
        .cta-section {
          padding: 6rem 0;
        }
        .cta-box {
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.1),
            rgba(255, 102, 196, 0.05)
          );
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 32px;
          padding: 4rem 2rem;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-large,
          .bento-wide {
            grid-column: span 1;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .bento-visual {
            display: none;
          }
          .ui-response-panel {
            width: 100%;
            border-right: none;
            border-top: 1px solid #2d3548;
          }
          .ui-window-content {
            flex-direction: column;
            height: auto;
          }
        }

        /* Animations */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;
