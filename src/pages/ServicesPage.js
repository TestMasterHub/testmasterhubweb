import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  FileText,
  GitBranch,
  Layers,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import "../styles/services-page.css";

const serviceCards = [
  {
    title: "AI Test Engineering",
    description:
      "Design intelligent testing workflows using AI to generate test cases, edge cases, regression suites, and test documentation from requirements, APIs, and source code.",
    icon: Brain,
  },
  {
    title: "Custom AI Agents",
    description:
      "Build purpose-built AI agents for QA, release management, defect investigation, documentation, API support, and engineering knowledge discovery.",
    icon: Bot,
  },
  {
    title: "GitHub Copilot Agent Development",
    description:
      "Develop advanced GitHub Copilot Agent Mode solutions that understand your architecture, coding standards, QA practices, and engineering documentation.",
    icon: Code2,
  },
  {
    title: "n8n AI Workflow Automation",
    description:
      "Connect GitHub, Jira, Slack, Azure DevOps, databases, and APIs into intelligent workflows that reduce repetitive engineering work.",
    icon: Workflow,
  },
  {
    title: "QA Automation Modernization",
    description:
      "Help teams transition from traditional automation to AI-assisted automation with smarter execution, maintenance reduction, and stronger reporting.",
    icon: Zap,
  },
  {
    title: "AI Integration Consulting",
    description:
      "Guide engineering organizations through strategy, secure implementation, prompt design, internal assistants, productivity improvements, and governance.",
    icon: Sparkles,
  },
];

const processSteps = [
  "Discovery",
  "Workflow Assessment",
  "AI Opportunity Identification",
  "Solution Design",
  "Development",
  "Deployment",
  "Team Enablement",
  "Continuous Improvement",
];

const whyItems = [
  {
    title: "Deep QA Expertise",
    body: "Built by engineers with strong experience in software testing, automation, and delivery workflows.",
    icon: CheckCircle2,
  },
  {
    title: "Practical AI",
    body: "Real engineering solutions rather than experimental demos or generic AI marketing.",
    icon: Rocket,
  },
  {
    title: "Product + Services",
    body: "Our experience building production software directly influences the solutions we deliver.",
    icon: Layers,
  },
  {
    title: "Modern Engineering",
    body: "Strong expertise across AI, automation, APIs, workflow orchestration, and developer tooling.",
    icon: Cpu,
  },
];

const industries = [
  "SaaS",
  "Enterprise Software",
  "Financial Services",
  "Healthcare",
  "E-Commerce",
  "Startups",
  "Technology Companies",
];

const technologies = [
  {
    title: "AI Platforms",
    items: ["OpenAI", "Claude", "Gemini", "GitHub Copilot"],
  },
  {
    title: "Automation",
    items: ["Playwright", "Selenium", "Appium", "TestMasterHub API"],
  },
  {
    title: "Workflow",
    items: ["n8n", "MCP Servers", "REST APIs", "Webhooks"],
  },
  {
    title: "DevOps",
    items: ["GitHub", "Azure DevOps", "Jira", "Docker"],
  },
];

const ServicesPage = () => {
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
    <div className="services-page-shell">
      <Helmet>
        <title>AI Engineering Services | TestMasterHub</title>
        <meta
          name="description"
          content="TestMasterHub helps engineering teams adopt AI across software testing, QA automation, GitHub Copilot agents, n8n workflow automation, custom AI agents, and engineering productivity solutions."
        />
      </Helmet>

      <section className="services-hero">
        <div className="services-hero-glow services-hero-glow-left" />
        <div className="services-hero-glow services-hero-glow-right" />
        <div className="container py-5 py-lg-6 position-relative z-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div className="company-pill reveal-on-scroll">
                <Sparkles size={16} className="me-2" />
                AI engineering services
              </div>
              <h1 className="services-hero-title reveal-on-scroll">
                AI Engineering Services for Modern Software Teams
              </h1>
              <p className="services-hero-subtitle reveal-on-scroll">
                We help engineering organizations adopt AI across software testing, QA automation, developer productivity, and intelligent engineering workflows through practical, production-ready solutions.
              </p>
              <div className="services-hero-actions reveal-on-scroll">
                <a href="#services" className="btn btn-primary-gradient btn-lg">
                  Explore Services
                  <ArrowRight size={18} className="ms-2" />
                </a>
                <a href="/contact" className="btn btn-outline-dark-custom btn-lg">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="services-hero-card reveal-on-scroll">
                <div className="services-hero-card-top">
                  <div className="company-dot" />
                  <div className="company-dot" />
                  <div className="company-dot" />
                </div>
                <div className="services-hero-surface">
                  <div className="services-hero-metric">
                    <FileText size={18} />
                    <span>AI-assisted test design</span>
                  </div>
                  <div className="services-hero-metric">
                    <GitBranch size={18} />
                    <span>Workflow automation</span>
                  </div>
                  <div className="services-hero-metric">
                    <Cpu size={18} />
                    <span>Custom engineering agents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="company-section">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Our Services</p>
            <h2>Practical AI solutions for testing, automation, and engineering productivity.</h2>
            <p>From AI-assisted test engineering to custom agents and workflow orchestration, we help teams turn AI into repeatable delivery value.</p>
          </div>

          <div className="services-grid">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="services-card reveal-on-scroll">
                  <div className="services-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="company-section company-section-soft">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Our Process</p>
            <h2>A structured path from assessment to production-ready adoption.</h2>
          </div>

          <div className="process-grid reveal-on-scroll">
            {processSteps.map((step, index) => (
              <div key={step} className="process-step">
                <div className="process-number">0{index + 1}</div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Why Work With TestMasterHub</p>
            <h2>Engineered for real-world software teams, not generic AI demos.</h2>
          </div>

          <div className="why-grid">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="services-card reveal-on-scroll">
                  <div className="services-card-icon">
                    <Icon size={20} />
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
            <p className="eyebrow">Technologies We Work With</p>
            <h2>We combine modern AI platforms, automation tooling, and engineering systems into practical solutions.</h2>
          </div>

          <div className="tech-grid">
            {technologies.map((group) => (
              <div key={group.title} className="tech-card reveal-on-scroll">
                <h3>{group.title}</h3>
                <div className="tech-badges">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="section-heading reveal-on-scroll">
            <p className="eyebrow">Industries</p>
            <h2>Supporting product, engineering, and QA teams across modern industries.</h2>
          </div>

          <div className="industry-grid reveal-on-scroll">
            {industries.map((industry) => (
              <div key={industry} className="industry-pill">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="container">
          <div className="services-cta-card reveal-on-scroll">
            <div>
              <p className="eyebrow">Let's Build Smarter Engineering Workflows Together</p>
              <h2>Bring practical AI into your testing and engineering operations.</h2>
            </div>
            <div className="company-cta-actions">
              <a href="/contact" className="btn btn-primary-gradient btn-lg">
                Schedule a Consultation
              </a>
              <a href="/product" className="btn btn-outline-dark-custom btn-lg">
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
