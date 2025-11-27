import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
const Pricing = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".pricing-header", { opacity: 0, y: 40, duration: 1 }).from(
        ".pricing-card",
        { opacity: 0, y: 40, duration: 0.8, stagger: 0.2 },
        "-=0.6"
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-dark text-white py-5" ref={pageRef}>
      <Helmet>
        <title>TestMasterHub Pricing – Simple, Transparent Plans</title>
        <meta
          name="description"
          content="Choose a simple and transparent plan for TestMasterHub. Free forever plan available. No credit card needed."
        />
      </Helmet>

      <div className="container mt-5">
        <header className="text-center mb-5 pricing-header">
          <h1 className="display-3 fw-bold hero-title-gradient">
            Simple, Transparent Pricing
          </h1>
          <p className="lead text-white-50">
            Choose the right plan to fit your needs.
          </p>
        </header>

        <div className="row justify-content-center g-4">
          <div className="col-lg-4 pricing-card">
            <div className="card animated-card h-100 p-4 text-center">
              <h3 className="fw-bold">Free</h3>
              <p className="text-white-50">
                Perfect for individuals & hobby projects.
              </p>
              <h2 className="display-4 fw-bold my-3">$0</h2>
              <ul className="list-unstyled text-start mt-3 mb-4">
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  Unlimited Local Collections
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  AI Assertion Suggestions
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  Community Support
                </li>
              </ul>
              <a
                className="btn btn-outline-light mt-auto"
                href="/invite/beta-download"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="col-lg-4 pricing-card">
            <div className="card animated-card featured-card h-100 p-4 text-center">
              <h3 className="fw-bold text-gradient-pink-purple">Pro</h3>
              <p className="text-white-50">
                For professionals & growing teams.
              </p>
              <h2 className="display-4 fw-bold my-3">
                $29<span className="fs-5 text-white-50">/mo</span>
              </h2>
              <ul className="list-unstyled text-start mt-3 mb-4">
                <li className="d-flex mb-2">
                  <CheckCircle className="icon-gradient me-2 mt-1 flex-shrink-0" />{" "}
                  Everything in Free, plus:
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="icon-gradient me-2 mt-1 flex-shrink-0" />{" "}
                  AI Test Case Generation
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="icon-gradient me-2 mt-1 flex-shrink-0" />{" "}
                  Git Sync & Collaboration
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="icon-gradient me-2 mt-1 flex-shrink-0" />{" "}
                  Priority Email Support
                </li>
              </ul>
              <button className="btn btn-primary-gradient mt-auto">
                Upgrade Now
              </button>
            </div>
          </div>

          <div className="col-lg-4 pricing-card">
            <div className="card animated-card h-100 p-4 text-center">
              <h3 className="fw-bold">Enterprise</h3>
              <p className="text-white-50">For large-scale organizations.</p>
              <h2 className="display-4 fw-bold my-3">Custom</h2>
              <ul className="list-unstyled text-start mt-3 mb-4">
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  Everything in Pro, plus:
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  On-Premise Deployment
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  Dedicated Support & SLAs
                </li>
                <li className="d-flex mb-2">
                  <CheckCircle className="text-success me-2 mt-1 flex-shrink-0" />{" "}
                  Custom Integrations
                </li>
              </ul>
              <button
                className="btn btn-outline-light mt-auto"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
