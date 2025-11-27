import React, { useEffect, useRef } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import EnterpriseImage from "../assets/images/enterprise.png";
import { Helmet } from "react-helmet";
const Enterprise = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animated-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-dark text-white" ref={pageRef}>
      <Helmet>
        <title>
          TestMasterHub Enterprise – Secure, Local-First API Testing
        </title>
        <meta
          name="description"
          content="Enterprise-grade API testing platform with local-first architecture, encryption, team-ready workflows, offline automation, and Git sync."
        />
      </Helmet>

      <section className="text-center py-5 animated-section">
        <div className="container py-5">
          <h1 className="display-3 fw-bold hero-title-gradient">
            Enterprise Grade, Developer First.
          </h1>
          <p
            className="lead text-white-50 mx-auto mt-4"
            style={{ maxWidth: "800px" }}
          >
            Scalable, secure, and fully-supported API testing solutions designed
            to integrate seamlessly into your business workflows.
          </p>
        </div>
      </section>

      <section className="container py-5 animated-section">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">
              The Platform for Teams That Scale
            </h2>
            <p className="text-white-50 mb-4">
              Our Enterprise plan provides the security, scalability, and
              dedicated support your organization needs to perform API testing
              with confidence and control.
            </p>
            <ul className="list-unstyled fs-5">
              <li className="d-flex align-items-center mb-3">
                <CheckCircle className="icon-gradient me-3 flex-shrink-0" />{" "}
                Dedicated Support & SLAs
              </li>
              <li className="d-flex align-items-center mb-3">
                <CheckCircle className="icon-gradient me-3 flex-shrink-0" />{" "}
                Custom Integrations & Onboarding
              </li>
              <li className="d-flex align-items-center mb-3">
                <CheckCircle className="icon-gradient me-3 flex-shrink-0" />{" "}
                Enhanced Security & Compliance
              </li>
              <li className="d-flex align-items-center">
                <CheckCircle className="icon-gradient me-3 flex-shrink-0" />{" "}
                On-Premise Deployment Options
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div
              className="p-3 rounded-3"
              style={{
                background: "linear-gradient(135deg, #333, #111)",
                border: "1px solid var(--gsap-border)",
              }}
            >
              <img
                src={EnterpriseImage}
                alt="Enterprise"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark-subtle animated-section">
        <div className="container text-center my-5">
          <h2 className="display-4 fw-bold mb-3">Let's Build Together</h2>
          <p
            className="lead text-white-50 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Contact our sales team today to learn more about our enterprise
            offerings and get a personalized demo.
          </p>
          <a className="btn btn-primary-gradient btn-lg mt-4" href="/contact">
            {" "}
            Contact Sales <ArrowRight className="ms-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
