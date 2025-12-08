import React from "react";
import {
  ArrowRight,
  Brain,
  Shield,
  Zap,
  Layout,
  GitBranch,
  Download,
  WifiOff,
  Check,
  X,
  Database,
  Lock,
} from "lucide-react";
import { Helmet } from "react-helmet";

const ComparisonPage = () => {
  return (
    <div className="tmh-page-wrapper position-relative">
      <Helmet>
        <title>TestMasterHub vs Bruno vs Postman | API Automation Comparison</title>
        <meta
          name="description"
          content="See why TestMasterHub is the best alternative to Postman and Bruno. Offline-first, AI-powered automation, and built-in reporting."
        />
      </Helmet>

      {/* BACKGROUND GLOW */}
      <div className="hero-glow-bg"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="container py-5 position-relative" style={{ zIndex: 1 }}>
        <div className="text-center max-w-800 mx-auto pb-5">
          <div className="d-inline-flex align-items-center justify-content-center mb-4 border border-secondary border-opacity-25 rounded-pill px-3 py-1 bg-dark-subtle">
            <span className="text-white-50 small fw-semibold">
              The Evolution of API Testing
            </span>
          </div>

          <h1 className="display-4 fw-bold mb-4 text-balance">
            Stop <span className="text-gradient-pink-purple">renting</span> your
            test environment.
          </h1>

          <p className="lead text-white-50 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            Postman forces you to the cloud. Bruno is just a client. <br className="d-none d-md-block" />
            <strong>TestMasterHub</strong> is a complete automation platform that lives on your machine.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-5 flex-wrap">
            <div className="d-flex align-items-center">
              <span className="fw-bold text-white">Postman</span>
              <span className="vs-pill">VS</span>
              <span className="fw-bold text-white">Bruno</span>
              <span className="vs-pill">VS</span>
              <span className="fw-bold text-gradient-pink-purple text-glow">
                TestMasterHub
              </span>
            </div>
          </div>

          <a
            href="/invite/beta-download"
            className="btn btn-primary-gradient btn-lg px-5 py-3 rounded-pill fw-bold d-inline-flex align-items-center"
          >
            <Brain size={20} className="me-2" />
            Switch to TestMasterHub
            <ArrowRight size={20} className="ms-2" />
          </a>
          <p className="small text-white-50 mt-3">
            Import your Postman Collections in 1 click.
          </p>
        </div>
      </section>

      {/* ================= THE COMPARISON MATRIX (EXACT IMAGE REPLICA) ================= */}
      <section className="container pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex align-items-end justify-content-between mb-3 px-2">
              <h3 className="fw-bold m-0">Feature depth comparison</h3>
              <span className="text-white-50 small">Updated Dec 2025</span>
            </div>

            <div className="matrix-container">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th>CAPABILITY</th>
                    <th className="col-tmh text-gradient-pink-purple">TESTMASTERHUB</th>
                    <th>BRUNO</th>
                    <th>POSTMAN</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 */}
                  <tr>
                    <td className="capability-name">Suites & dashboards</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Advanced</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">Missing</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">Basic (paid)</span>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr>
                    <td className="capability-name">Monitors & schedules</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Built-in</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">Missing</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">Paid</span>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr>
                    <td className="capability-name">Email + HTML reports</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Native</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">Missing</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">Limited</span>
                    </td>
                  </tr>
                  {/* Row 4 */}
                  <tr>
                    <td className="capability-name">AI assertions & TestGen</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">First-class</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">None</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">None</span>
                    </td>
                  </tr>
                  {/* Row 5 */}
                  <tr>
                    <td className="capability-name">AI documentation hub</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Integrated</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">None</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">None</span>
                    </td>
                  </tr>
                  {/* Row 6 */}
                  <tr>
                    <td className="capability-name">Offline & local storage</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Encrypted local-first</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">Local plain files</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">Cloud-only</span>
                    </td>
                  </tr>
                  {/* Row 7 */}
                  <tr>
                    <td className="capability-name">Local & remote runners</td>
                    <td className="col-tmh text-center">
                      <span className="matrix-badge badge-tmh">Both</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-bruno">Local only</span>
                    </td>
                    <td className="text-center">
                      <span className="matrix-badge badge-postman">Cloud-biased</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-3">
              <p className="small text-white-50 fst-italic">
                *Comparison based on free/standard tiers of respective platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE DEEP DIVES (BENTO GRID) ================= */}
      <section className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fw-bold mb-3">Why Developers Switch</h2>
            <p className="text-white-50">
              We took the best parts of Postman (UI) and Bruno (Local Git) and
              added the missing piece: <strong className="text-white">Enterprise-grade Automation</strong>.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Card 1: AI */}
          <div className="col-md-4">
            <div className="bento-card">
              <div className="bento-icon-box">
                <Brain className="text-warning" size={24} />
              </div>
              <h3 className="bento-title">AI that actually tests</h3>
              <p className="bento-text">
                Don't write assertions manually. Our AI analyzes your response
                structure and generates robust pass/fail checks and negative test
                cases instantly.
              </p>
            </div>
          </div>

          {/* Card 2: Security */}
          <div className="col-md-4">
            <div className="bento-card">
              <div className="bento-icon-box">
                <Lock className="text-success" size={24} />
              </div>
              <h3 className="bento-title">Encrypted & Local</h3>
              <p className="bento-text">
                Your API keys, tokens, and customer data never leave your
                device. We use local encrypted storage. No cloud sync means no
                third-party data leaks.
              </p>
            </div>
          </div>

          {/* Card 3: Reporting */}
          <div className="col-md-4">
            <div className="bento-card">
              <div className="bento-icon-box">
                <Layout className="text-info" size={24} />
              </div>
              <h3 className="bento-title">Beautiful Reports</h3>
              <p className="bento-text">
                Generate full HTML reports or email summaries automatically
                after suite execution. Perfect for sending to management or
                attaching to Jira tickets.
              </p>
            </div>
          </div>

          {/* Card 4: Offline */}
          <div className="col-md-6">
            <div className="bento-card d-flex flex-row align-items-start">
              <div className="bento-icon-box me-4 flex-shrink-0">
                <WifiOff className="text-white" size={24} />
              </div>
              <div>
                <h3 className="bento-title">True Offline Mode</h3>
                <p className="bento-text">
                  Coding on a flight? Secure environment with no internet?
                  TestMasterHub works 100% offline. No "offline mode" toggle
                  needed—it's the default state.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Git */}
          <div className="col-md-6">
            <div className="bento-card d-flex flex-row align-items-start">
              <div className="bento-icon-box me-4 flex-shrink-0">
                <GitBranch className="text-white" size={24} />
              </div>
              <div>
                <h3 className="bento-title">Git Native</h3>
                <p className="bento-text">
                  Collections are files. Commit them to your repo. Review
                  changes in PRs. We play nice with your existing version
                  control workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-5 mt-5 border-top border-secondary border-opacity-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="h3 fw-bold mb-4">
                Ready to upgrade your workflow?
              </h2>
              <div className="p-4 bg-dark-subtle rounded-4 border border-secondary border-opacity-10 d-inline-block text-start mb-4">
                <div className="d-flex align-items-center mb-2">
                  <Check size={18} className="text-success me-2" />
                  <span className="text-white small">Import Postman Collections</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <Check size={18} className="text-success me-2" />
                  <span className="text-white small">Generate Tests with AI</span>
                </div>
                <div className="d-flex align-items-center">
                  <Check size={18} className="text-success me-2" />
                  <span className="text-white small">Export HTML Reports</span>
                </div>
              </div>
              <br />
              <a
                href="/invite/beta-download"
                className="btn btn-light btn-lg px-5 rounded-pill fw-bold"
              >
                <Download size={18} className="me-2 text-dark" />
                Download for Windows/Mac
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;