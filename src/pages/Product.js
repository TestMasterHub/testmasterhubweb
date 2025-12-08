import React, { useEffect } from "react";
import {
  Sparkles,
  Brain,
  Zap,
  ShieldCheck,
  Layers,
  BarChart,
  Inbox,
  MonitorSmartphone,
  GitBranch,
  Lock,
  Settings,
  Mail,
  Cloud,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";
import ProductImage from "../assets/images/UI.png";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 1 } })
        .from(".product-hero-title", { opacity: 0, y: 40 })
        .from(".product-hero-lead", { opacity: 0, y: 20 }, "-=0.7")
        .from(".product-hero-cta", { opacity: 0, y: 20 }, "-=0.6")
        .from(".product-hero-badges > *", { opacity: 0, y: 20, stagger: 0.1 }, "-=0.6");

      // Sections
      const sections = gsap.utils.toArray(".animated-section");
      sections.forEach((section) => {
        const header = section.querySelector(".section-header");
        const content = section.querySelector(".section-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        if (header) tl.from(header, { opacity: 0, y: 30, duration: 0.8 });
        if (content)
          tl.from(content, { opacity: 0, y: 30, duration: 0.8 }, "-=0.4");
      });

      // Staggered items
      gsap.utils.toArray(".stagger-container").forEach((container) => {
        const items = container.querySelectorAll(".stagger-item");
        gsap.from(items, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-dark text-white">
      <Helmet>
        <title>TestMasterHub – AI-first API Testing Product</title>
        <meta
          name="description"
          content="See how TestMasterHub combines AI assertions, TestGen, HTML/email reports, suites, monitors, environments, GitHub in-app, offline encrypted storage, dashboards, and local/remote runners in one desktop product."
        />
      </Helmet>

      {/* HERO */}
      <section className="product-hero py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Left */}
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center product-hero-pill mb-3">
                <Sparkles size={16} className="me-2" />
                <span className="small fw-semibold text-uppercase">
                  AI-powered, offline-first test hub
                </span>
              </div>

              <h1 className="display-4 fw-bold product-hero-title hero-title-gradient mb-3">
                Your entire API test stack in one desktop app.
              </h1>

              <p className="lead text-white-50 product-hero-lead mb-4">
                TestMasterHub is where you design flows, run suites locally or in CI,
                get rich HTML & email reports, and let AI handle assertions, test cases,
                and documentation – all with encrypted local storage by default.
              </p>

              <div className="d-flex flex-wrap gap-2 mb-4 product-hero-badges">
                <span className="product-badge">
                  <Brain size={14} className="me-2" /> Smart Assertions & TestGen
                </span>
                <span className="product-badge">
                  <Mail size={14} className="me-2" /> Email + HTML Reports
                </span>
                <span className="product-badge">
                  <Lock size={14} className="me-2" /> Offline & Encrypted
                </span>
              </div>

              <div className="d-flex flex-wrap gap-3 align-items-center">
                <a
                  href="/invite/beta-download"
                  className="btn btn-primary-gradient btn-lg product-hero-cta"
                >
                  Download TestMasterHub
                </a>
                <span className="text-white-50 small">
                  Local-first desktop app • No cloud lock-in
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="col-lg-6">
              <div className="product-hero-right">
                <div className="product-hero-image-wrapper">
                  <div className="product-hero-glow" />
                  <img
                    src={ProductImage}
                    alt="TestMasterHub UI"
                    className="img-fluid rounded-4 product-hero-image"
                  />
                </div>
                <div className="product-hero-metadata">
                  <div>
                    <span className="product-meta-label">Execution</span>
                    <p className="mb-0 small">Suites · Monitors · Local & Remote</p>
                  </div>
                  <div>
                    <span className="product-meta-label">Reporting</span>
                    <p className="mb-0 small">Dashboard · HTML · Email</p>
                  </div>
                  <div>
                    <span className="product-meta-label">AI Layer</span>
                    <p className="mb-0 small">Smart Assertions · TestGen · Doc Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI ENGINE */}
      <section className="container py-5 animated-section">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 section-header">
            <span className="text-gradient-pink-purple fw-bold small text-uppercase">
              AI testing engine
            </span>
            <h2 className="h1 fw-bold mt-2 mb-3">
              Let AI build the assertions and tests. You focus on the API.
            </h2>
            <p className="text-white-50">
              TestMasterHub’s AI layer watches real responses and flows, then suggests
              assertions, generates test cases, and maintains living documentation –
              without you wrestling with prompts every time.
            </p>
          </div>
          <div className="col-lg-7 section-content">
            <div className="row g-4 stagger-container">
              <div className="col-md-6 stagger-item">
                <div className="product-feature-card h-100">
                  <div className="product-feature-icon">
                    <Brain size={22} />
                  </div>
                  <h5 className="fw-semibold mb-2">Smart Assertion Suggestions</h5>
                  <p className="small text-white-50 mb-3">
                    Automatically proposes field checks, status validations, and edge
                    conditions based on previous responses or schema knowledge.
                  </p>
                  <ul className="small list-unstyled mb-0">
                    <li>• No more hand-written boilerplate checks</li>
                    <li>• Captures positive, negative & edge cases</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 stagger-item">
                <div className="product-feature-card h-100">
                  <div className="product-feature-icon">
                    <Zap size={22} />
                  </div>
                  <h5 className="fw-semibold mb-2">TestGen for full coverage</h5>
                  <p className="small text-white-50 mb-3">
                    Generate suites of test cases for a flow: happy path, broken input,
                    auth failures, limit checks and more – ready to run.
                  </p>
                  <ul className="small list-unstyled mb-0">
                    <li>• Turn a single request into a full suite</li>
                    <li>• Reduce “we forgot this scenario” bugs</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 stagger-item">
                <div className="product-feature-card h-100">
                  <div className="product-feature-icon">
                    <Layers size={22} />
                  </div>
                  <h5 className="fw-semibold mb-2">AI Documentation Hub</h5>
                  <p className="small text-white-50 mb-3">
                    Convert flows and responses into human-readable docs – great for
                    onboarding, knowledge sharing and handoffs.
                  </p>
                  <ul className="small list-unstyled mb-0">
                    <li>• Docs stay in sync with the actual tests</li>
                    <li>• No separate wiki to maintain</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 stagger-item">
                <div className="product-feature-card h-100">
                  <div className="product-feature-icon">
                    <Sparkles size={22} />
                  </div>
                  <h5 className="fw-semibold mb-2">AI that fits your workflow</h5>
                  <p className="small text-white-50 mb-0">
                    AI is woven into assertions, TestGen and docs – you stay in control
                    of the flow design and final checks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING IN ONE APP – BENTO GRID */}
      <section className="py-5 bg-dark-subtle animated-section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2 className="display-5 fw-bold mb-2">
              Everything around your APIs. In a single product.
            </h2>
            <p className="lead text-white-50 text-balance">
              Not just a request client. TestMasterHub combines suites, monitors,
              environments, GitHub, dashboards, and reports into one offline-friendly
              desktop app.
            </p>
          </div>

          <div className="row g-4 section-content stagger-container">
            {/* Reports */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <Inbox size={22} />
                </div>
                <h5 className="product-bento-title">Email & HTML reports</h5>
                <p className="product-bento-text">
                  After each run, receive detailed HTML reports plus clean email
                  summaries: suite health, timings, failures and logs – ready for the
                  team.
                </p>
              </div>
            </div>

            {/* Suites & monitors */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <Layers size={22} />
                </div>
                <h5 className="product-bento-title">Suites, monitors & dashboard</h5>
                <p className="product-bento-text">
                  Group flows into suites, set monitors for critical paths, and see
                  everything on a local dashboard with pass/fail and trends.
                </p>
              </div>
            </div>

            {/* Environments */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <Settings size={22} />
                </div>
                <h5 className="product-bento-title">Environments & secrets</h5>
                <p className="product-bento-text">
                  Configure Dev, QA, Staging and more with isolated variables and
                  secrets. Switch context instantly without editing URLs by hand.
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <GitBranch size={22} />
                </div>
                <h5 className="product-bento-title">GitHub inside the app</h5>
                <p className="product-bento-text">
                  Browse repos and branches from TestMasterHub, keep tests versioned
                  next to your code, and review changes like any other PR.
                </p>
              </div>
            </div>

            {/* Offline & encrypted */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <Lock size={22} />
                </div>
                <h5 className="product-bento-title">Offline & encrypted storage</h5>
                <p className="product-bento-text">
                  Collections, environments and history live on your machine with
                  encryption. No hosted workspace, no external analytics, no surprise
                  leaks.
                </p>
              </div>
            </div>

            {/* Local + remote runners */}
            <div className="col-md-6 col-lg-4 stagger-item">
              <div className="product-bento-card h-100">
                <div className="product-bento-icon">
                  <MonitorSmartphone size={22} />
                </div>
                <h5 className="product-bento-title">Local & remote execution</h5>
                <p className="product-bento-text">
                  Debug flows locally, then run the same suites through remote runners
                  in CI. Same config, same reports, different environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW STRIP */}
      <section className="py-5 animated-section">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2 className="h2 fw-bold mb-2">How teams actually use TestMasterHub</h2>
            <p className="text-white-50 text-balance">
              A realistic flow from first request to automated suites and reports.
            </p>
          </div>

          <div className="section-content">
            <div className="row g-3 product-workflow-row">
              {[
                {
                  icon: Settings,
                  title: "1. Model APIs & environments",
                  text: "Import Postman collections or start fresh. Create environments for dev/QA/stage and wire variables once.",
                },
                {
                  icon: Layers,
                  title: "2. Build suites & monitors",
                  text: "Chain calls into flows, group them into suites, and set monitors for the business-critical ones.",
                },
                {
                  icon: MonitorSmartphone,
                  title: "3. Run locally & in CI",
                  text: "Use the desktop runner while building, then plug remote runners into your pipelines.",
                },
                {
                  icon: BarChart,
                  title: "4. Read reports, ship faster",
                  text: "Use dashboards, HTML reports, and email summaries to triage issues and prove stability.",
                },
              ].map((step) => (
                <div className="col-md-3 product-workflow-step" key={step.title}>
                  <div className="product-workflow-card h-100">
                    <div className="product-workflow-icon">
                      <step.icon size={20} />
                    </div>
                    <h6 className="fw-semibold mb-2">{step.title}</h6>
                    <p className="small text-white-50 mb-0">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE VALUE SECTION */}
      <section className="py-5 bg-dark-subtle animated-section">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 section-header">
              <h2 className="h2 fw-bold mb-3">Why teams switch to TestMasterHub</h2>
              <p className="text-white-50 mb-3">
                If your current tool only sends requests, you&apos;re doing the rest
                manually: assertions, reports, docs, and CI wiring. TestMasterHub
                treats all of that as first-class features.
              </p>
              <ul className="list-unstyled small mb-0">
                <li className="mb-2">
                  ✓ All critical testing pieces live in one desktop product.
                </li>
                <li className="mb-2">
                  ✓ AI removes the “blank page” problem for assertions & testcases.
                </li>
                <li className="mb-2">
                  ✓ Offline-first & encrypted by design – safe for real data.
                </li>
                <li>✓ Local comfort, remote scale for CI and scheduled monitors.</li>
              </ul>
            </div>
            <div className="col-lg-6 section-content">
              <div className="product-value-panel">
                <div className="d-flex align-items-center mb-3">
                  <ShieldCheck size={22} className="me-2 text-gradient-pink-purple" />
                  <h5 className="fw-semibold mb-0">Built for serious backends</h5>
                </div>
                <p className="small text-white-50 mb-3">
                  Microservices, message brokers, internal APIs – TestMasterHub is
                  built for teams that treat API tests as an asset, not a side
                  project.
                </p>
                <div className="row g-3 small">
                  <div className="col-sm-6">
                    <div className="product-metric">
                      <span className="product-metric-label">Execution modes</span>
                      <span className="product-metric-value">Local + Remote</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-metric">
                      <span className="product-metric-label">Storage</span>
                      <span className="product-metric-value">Encrypted local</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-metric">
                      <span className="product-metric-label">Reporting</span>
                      <span className="product-metric-value">Dashboard · HTML · Email</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="product-metric">
                      <span className="product-metric-label">AI modules</span>
                      <span className="product-metric-value">Assertions · TestGen · Docs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-5 text-center">
        <div className="container my-5">
          <h2 className="display-5 fw-bold mb-3 hero-title-gradient">
            Turn your API tests into a real product.
          </h2>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "640px" }}
          >
            Download TestMasterHub and get AI-powered assertions, TestGen, HTML/email
            reports, suites, monitors, environments, GitHub in-app, dashboards and
            local + remote execution – all in one place.
          </p>
          <a
            href="/invite/beta-download"
            className="btn btn-primary-gradient btn-lg mt-3"
          >
            Start with the desktop app
          </a>
        </div>
      </section>
    </div>
  );
};

export default Product;
