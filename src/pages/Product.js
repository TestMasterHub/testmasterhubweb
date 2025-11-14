import React, { useEffect } from 'react';
// Changed: Removed TerminalSquare and ensured Code is imported.
import { CheckCircle, Sparkles, Brain, Zap, Users, Lock, BarChart, Settings, Code, GitBranch, ShieldCheck, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProductImage from '../assets/images/UI.png';
import TestimonialsImage1 from '../assets/images/Dashboard.png';
import TestimonialsImage2 from '../assets/images/Dashboard.png';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // --- Hero Animation ---
            gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } })
                .from(".hero-title-product", { opacity: 0, y: 40 })
                .from(".hero-lead-product", { opacity: 0, y: 20 }, "-=0.8")
                .from(".hero-button-product", { opacity: 0, y: 20 }, "-=0.8");

            // --- Animate Sections on Scroll ---
            const sections = gsap.utils.toArray('.animated-section');
            sections.forEach(section => {
                const header = section.querySelector('.section-header');
                const content = section.querySelector('.section-content');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                });

                if (header) tl.from(header, { opacity: 0, y: 30, duration: 0.8 });
                if (content) tl.from(content, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5");
            });

             // --- Staggered Card/Row Animation ---
            gsap.utils.toArray('.stagger-container').forEach(container => {
                const items = container.querySelectorAll('.stagger-item');
                gsap.from(items, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 80%',
                    }
                });
            });

        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-dark text-white">
            {/* Hero Section */}
            <section className="text-center py-5">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold hero-title-product hero-title-gradient">Test at the Speed of Thought</h1>
                    <p className="lead text-white-50 mx-auto my-4 hero-lead-product" style={{ maxWidth: '800px' }}>
                        TestMasterHub is the AI-native platform for developers who demand speed, intelligence, and confidence. Automate assertions, generate tests, and collaborate seamlessly in one unified workspace.
                    </p>
                    <a href="/invite/beta-download" className="btn btn-primary-gradient btn-lg mt-3 hero-button-product">
                        Download for Free
                    </a>
                </div>
            </section>

            {/* The AI Advantage Section */}
            <section className="container py-5 animated-section">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 section-content">
                        <div className="p-3 rounded-3" style={{ background: 'linear-gradient(135deg, #333, #111)', border: '1px solid var(--gsap-border)' }}>
                            <img src={ProductImage} className="img-fluid rounded" alt="TestMasterHub AI in action" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-header">
                            <span className="text-gradient-pink-purple fw-bold">THE AI CORE</span>
                            <h2 className="display-5 fw-bold my-3">From Response to Assertion in Milliseconds.</h2>
                        </div>
                        <div className="section-content">
                            <p className="lead text-white-50">
                                Stop wasting time writing boilerplate. TestMasterHub's AI core analyzes API responses and instantly generates precise, comprehensive assertions. It validates structure, status, and data integrity with zero manual setup.
                            </p>
                            <ul className="list-unstyled mt-4 fs-5">
                                <li className="d-flex align-items-center mb-3"><Sparkles className="icon-gradient me-3 flex-shrink-0" /> AI-Generated Assertions</li>
                                <li className="d-flex align-items-center mb-3"><Brain className="icon-gradient me-3 flex-shrink-0" /> Automatic Edge Case Detection</li>
                                <li className="d-flex align-items-center"><Zap className="icon-gradient me-3 flex-shrink-0" /> Instant Test Case Generation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Developer's Toolkit Section */}
            <section className="py-5 bg-dark-subtle animated-section">
                <div className="container">
                    <div className="text-center mb-5 section-header">
                        <h2 className="display-5 fw-bold">Built for the Modern Development Lifecycle</h2>
                        <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
                            A complete, professional-grade toolkit that integrates perfectly with your workflow.
                        </p>
                    </div>
          <div className="row g-4 stagger-container section-content">
                        {[
                            { icon: Code, title: 'Develop & Test', text: 'A powerful request builder, smart collections, and multi-environment management.' },
                            { icon: Zap, title: 'Automate & Deploy', text: 'Integrate with any CI/CD pipeline, schedule builds, and set up automated monitors.' },
                            { icon: Users, title: 'Collaborate & Secure', text: 'Use Git Sync for version control and rely on enterprise-grade encryption for all your data.' }
                        ].map(item => (
                            <div className="col-lg-4 stagger-item" key={item.title}>
                                <div className="card h-100 p-3">
                                    <div className="card-body">
                                        <div className="icon-gradient-fill d-inline-flex p-3 rounded-3 mb-3">
                                            <item.icon size={24} />
                                        </div>
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p className="card-text">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Feature Breakdown Section */}
            <section className="py-5 animated-section">
                <div className="container">
                    <div className="text-center mb-5 section-header">
                        <h2 className="display-5 fw-bold">Find the Perfect Plan</h2>
                        <p className="lead text-white-50">Start for free, upgrade for power.</p>
                    </div>
                    <div className="table-responsive section-content">
                        <table className="table table-dark table-bordered feature-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-50">Feature</th>
                                    <th scope="col" className="text-center">Free</th>
                                    <th scope="col" className="text-center text-gradient-pink-purple">Pro</th>
                                </tr>
                            </thead>
                            <tbody className="stagger-container">
                                {[
                                    { feature: 'AI Assertion Generation', free: true, pro: true },
                                    { feature: 'AI Test Case Generation', free: false, pro: true },
                                    { feature: 'Unlimited Local Collections', free: true, pro: true },
                                    { feature: 'CI/CD Integration & Builds', free: false, pro: true },
                                    { feature: 'Scheduled Monitoring', free: false, pro: true },
                                    { feature: 'Git Sync & Collaboration', free: false, pro: true },
                                    { feature: 'Enterprise-Grade Encryption', free: true, pro: true },
                                ].map(item => (
                                    <tr key={item.feature} className="stagger-item">
                                        <td className="fw-bold">{item.feature}</td>
                                        <td className="text-center">{item.free && <CheckCircle className="text-success" />}</td>
                                        <td className="text-center">{item.pro && <ShieldCheck className="icon-gradient" />}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="py-5 bg-dark-subtle animated-section">
                <div className="container">
                    <div className="text-center mb-5 section-header">
                        <h2 className="display-5 fw-bold">Loved by High-Performance Teams</h2>
                    </div>
                    <div className="row g-4 stagger-container section-content">
                        <div className="col-md-6 stagger-item">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <p className="fs-5 fst-italic">
                                        "The AI-assertions are a legit game-changer. It feels like pair-programming with a QA expert. We're catching more edge cases with less effort."
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img src={TestimonialsImage1} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} alt="User" />
                                        <div>
                                            <h6 className="fw-bold mb-0">Sarah Chen</h6>
                                            <small className="text-white-50">Lead Engineer, Vertex AI</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 stagger-item">
                            <div className="card h-100">
                                <div className="card-body p-4">
                                    <p className="fs-5 fst-italic">
                                        "Finally, a tool that understands a developer's workflow. The Git Sync feature alone makes this indispensable for our team."
                                    </p>
                                    <div className="d-flex align-items-center mt-4">
                                        <img src={TestimonialsImage2} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} alt="User" />
                                        <div>
                                            <h6 className="fw-bold mb-0">Marco Diaz</h6>
                                            <small className="text-white-50">DevOps Manager, QuantumLeap</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Final CTA Section */}
            <section className="py-5 text-center">
                <div className="container my-5">
                    <h2 className="display-4 fw-bold mb-3 hero-title-gradient">Ship with Unbreakable Confidence.</h2>
                    <p className="lead text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
                        Stop guessing. Start testing with the power of AI. Download TestMasterHub and transform your workflow today.
                    </p>
                    <a href="/invite/beta-download" className="btn btn-primary-gradient btn-lg mt-4">
                        Start Your Free Trial
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Product;