import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Cpu,
  FileText,
  Lock,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import "../styles/company-home.css";

const products = [
  {
    name: "TestMasterHub API",
    description: "AI-powered API Testing Platform",
    highlights: ["REST", "GraphQL", "gRPC", "WebSocket", "AI Test Generation"],
    cta: "Explore",
    href: "/product",
    tone: "product-card-api",
  },
  {
    name: "AIR",
    description: "AI Interaction Recorder",
    highlights: ["Browser Recording", "AI Automation Generation", "Playwright", "Selenium"],
    cta: "Coming Soon",
    href: "#",
    tone: "product-card-air",
    disabled: true,
  },
  {
    name: "TapSecureX",
    description: "Mobile Security & Link Verification",
    highlights: ["Link Verification", "Threat Detection", "Android", "Privacy First"],
    cta: "Learn More",
    href: "https://tapsecurex.netlify.app/",
    tone: "product-card-tap",
  },
  {
    name: "TesterTools",
    description: "Free QA Utilities",
    highlights: ["JSON Diff", "Regex Tester", "Test Data Generator", "SQL Formatter"],
    cta: "Open Tools",
    href: "/testertools",
    tone: "product-card-tools",
  },
];

const aiUses = [
  {
    title: "AI Test Generation",
    body: "Turn flows into durable regression suites in minutes, with realistic assertions that reflect real API behavior.",
    icon: Brain,
  },
  {
    title: "AI Assertions",
    body: "Surface the checks that matter most, from schema drift to response anomalies, without writing every assertion by hand.",
    icon: CheckCircle2,
  },
  {
    title: "AI Automation",
    body: "Record interactions, generate repeatable automations, and keep cross-team QA aligned with the same runbook.",
    icon: Bot,
  },
  {
    title: "AI Threat Intelligence",
    body: "Reduce risk with intelligent verification of links, mobile surfaces, and suspicious behaviors before release.",
    icon: ScanSearch,
  },
  {
    title: "AI Documentation",
    body: "Generate living documentation for test flows, environments, and edge cases so teams stay aligned.",
    icon: FileText,
  },
];

const whyItems = [
  {
    title: "AI Native",
    body: "Built with AI from the beginning rather than layered on later.",
    icon: Sparkles,
  },
  {
    title: "Privacy First",
    body: "Offline-first architecture and secure workflows wherever possible.",
    icon: Lock,
  },
  {
    title: "Developer Friendly",
    body: "Modern automation, scripting, and Git-friendly workflows for engineering teams.",
    icon: Workflow,
  },
  {
    title: "Built for Modern QA Teams",
    body: "Designed for developers, QA engineers, SDETs, and security professionals alike.",
    icon: ShieldCheck,
  },
];

const roadmapItems = [
  "TestMasterHub API",
  "AIR",
  "TapSecureX",
  "TesterTools",
  "Future AI Products",
];

const servicesHomeCards = [
  {
    title: "AI Test Engineering",
    body: "Design intelligent testing workflows using AI to generate test cases, edge cases, regression suites, and testing documentation.",
    icon: Brain,
  },
  {
    title: "Custom AI Agents",
    body: "Build purpose-built AI agents for QA, release management, defect investigation, documentation, and engineering knowledge discovery.",
    icon: Bot,
  },
  {
    title: "GitHub Copilot Agent Development",
    body: "Develop specialized Copilot Agent Mode solutions that understand your architecture, coding standards, and engineering practices.",
    icon: Cpu,
  },
  {
    title: "n8n Workflow Automation",
    body: "Connect GitHub, Jira, Slack, Azure DevOps, databases, and APIs into intelligent workflows that reduce repetitive work.",
    icon: Zap,
  },
];

const CompanyHome = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="company-home-shell">
      <Helmet>
        <title>TestMasterHub | AI-Powered Software Testing Solutions</title>
        <meta
          name="description"
          content="TestMasterHub builds AI-powered software testing solutions for developers, QA engineers, SDETs and security teams. Explore TestMasterHub API, AIR, TapSecureX and TesterTools."
        />
      </Helmet>

      <section className="company-hero">
        <div className="company-hero-glow company-hero-glow-left" />
        <div className="company-hero-glow company-hero-glow-right" />
        <div className="container position-relative z-2 py-5 py-lg-6">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="company-pill reveal-on-scroll">
                <Sparkles size={16} className="me-2" />
                AI-driven testing for modern product teams
              </div>
              <h1 className="company-hero-title reveal-on-scroll">
                AI-powered software testing starts here.
              </h1>
              <p className="company-hero-subtitle reveal-on-scroll">
                Build, automate, secure and accelerate software testing with intelligent tools designed for developers, QA engineers, automation engineers and modern software teams.
              </p>
              <div className="company-hero-actions reveal-on-scroll">
                <a href="#products" className="btn btn-primary-gradient btn-lg">
                  Explore Products
                  <ArrowRight size={18} className="ms-2" />
                </a>
                <a href="/product" className="btn btn-outline-dark-custom btn-lg">
                  Download TestMasterHub API
                </a>
              </div>
              <div className="company-hero-metrics reveal-on-scroll">
                <div>
                  <strong>4</strong>
                  <span>Product experiences</span>
                </div>
                <div>
                  <strong>AI</strong>
                  <span>Across every workflow</span>
                </div>
                <div>
                  <strong>Secure</strong>
                  <span>Offline-first foundation</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="company-hero-card reveal-on-scroll">
                <div className="company-hero-card-top">
                  <div className="company-dot" />
                  <div className="company-dot" />
                  <div className="company-dot" />
                </div>
                <div className="company-hero-surface">
                  <div className="company-surface-panel">
                    <div className="company-panel-icon">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <p className="company-panel-label">AI Test Layer</p>
                      <h3>Multi-product automation</h3>
                    </div>
                  </div>
                  <div className="company-surface-grid">
                    <div className="company-surface-chip">
                      <Brain size={16} />
                      <span>Smart assertions</span>
                    </div>
                    <div className="company-surface-chip">
                      <ShieldCheck size={16} />
                      <span>Secure checks</span>
                    </div>
                    <div className="company-surface-chip">
                      <Rocket size={16} />
                      <span>Fast release cycles</span>
                    </div>
                    <div className="company-surface-chip">
                      <Lock size={16} />
                      <span>Privacy by design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="company-section">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Our Products</p>
            <h2>Powerful tools designed for every stage of the software testing lifecycle.</h2>
            <p>From API validation to secure mobile workflows and free QA utilities, the ecosystem grows with your team.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article key={product.name} className={`company-product-card ${product.tone} reveal-on-scroll`}>
                <div className="company-product-card-top">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <ul className="company-product-highlights">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {product.disabled ? (
                  <span className="company-product-cta company-product-cta-disabled">Coming Soon</span>
                ) : (
                  <a href={product.href} className="company-product-cta">
                    {product.cta}
                    <ArrowRight size={16} className="ms-2" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section company-section-soft">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">AI Engineering Services</p>
            <h2>Helping engineering teams adopt AI across software testing, automation, and developer workflows.</h2>
            <p>Beyond building our own products, we partner with organizations to design, build, and integrate practical AI solutions that improve software quality, automation efficiency, and engineering productivity.</p>
          </div>

          <div className="services-home-grid">
            {servicesHomeCards.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="company-card reveal-on-scroll">
                  <div className="company-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <a href="/services" className="company-product-cta mt-3">
                    Learn More
                    <ArrowRight size={16} className="ms-2" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="company-section company-section-soft">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">AI Across Every Product</p>
            <h2>Practical AI that improves how modern teams test and release software.</h2>
            <p>Each experience brings intelligence to the workflow that matters most, from test generation to secure verification.</p>
          </div>

          <div className="ai-grid">
            {aiUses.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="company-card reveal-on-scroll">
                  <div className="company-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Why TestMasterHub</p>
            <h2>Built to support the way modern testing teams actually work.</h2>
          </div>

          <div className="why-grid">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="company-card reveal-on-scroll">
                  <div className="company-card-icon">
                    <Icon size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="company-section company-section-soft">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Product Roadmap</p>
            <h2>A growing ecosystem for intelligent testing.</h2>
          </div>

          <div className="roadmap reveal-on-scroll">
            {roadmapItems.map((item, index) => (
              <div key={item} className="roadmap-item">
                <div className="roadmap-node" />
                {index < roadmapItems.length - 1 && <div className="roadmap-line" />}
                <div className="roadmap-card">
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="company-cta-card reveal-on-scroll">
            <div>
              <p className="eyebrow">Start building with TestMasterHub</p>
              <h2>Bring AI-powered testing into your delivery workflow.</h2>
            </div>
            <div className="company-cta-actions">
              <a href="#products" className="btn btn-primary-gradient btn-lg">
                Explore Products
              </a>
              <a href="/product" className="btn btn-outline-dark-custom btn-lg">
                Download API
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyHome;
