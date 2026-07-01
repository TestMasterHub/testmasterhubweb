import React from 'react';
import { Helmet } from 'react-helmet';
const PrivacyPolicy = () => {
  return (
    <div className="bg-dark text-white py-5">
        <Helmet>
          <title>TestMasterHub Privacy Policy</title>
          <meta
            name="description"
            content="Read the privacy policy of TestMasterHub to understand how we collect, use, and protect your data across our testing products and services."
          />
        </Helmet>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="resource-section">
                        <h1 className="display-4 fw-bold mb-4 hero-title-gradient">Privacy Policy</h1>
                        <p className="text-white-50"><strong>Last updated:</strong> July 02, 2026</p>

                        <p>TestMasterHub (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our products and services, including TestMasterHub API, AIR, TapSecureX, and TesterTools.</p>

                        <h5>1. Information We Collect</h5>
                        <ul>
                            <li><strong>Account Information:</strong> Email address and name (optional).</li>
                            <li><strong>Testing Data:</strong> API requests, automation flows, collections, environments, test cases, and related execution data.</li>
                            <li><strong>Usage Data:</strong> OS version, device type, and interaction logs.</li>
                        </ul>

                        <h5>2. How We Use Your Information</h5>
                        <ul>
                            <li>To provide, maintain, and improve our services.</li>
                            <li>To personalize your experience.</li>
                            <li>To send you updates and reports (if enabled).</li>
                        </ul>
                        
                        <h5>3. Data Storage & Security</h5>
                        <p>We implement a variety of security measures to maintain the safety of your data. Sensitive data like tokens and passwords are encrypted at rest.</p>

                        <h5>4. Third-Party Services</h5>
                        <p>We may use third-party services for authentication, analytics, hosting, and optional AI features that improve testing workflows. Where required, we will disclose the relevant service providers in our service-specific notices.</p>
                        
                        <h5>5. Your Rights</h5>
                        <p>You have the right to access, update, or delete your personal information at any time. Depending on the product or feature in use, you may also be able to manage communication preferences or opt out of optional AI-based features in your settings.</p>

                        <h5>6. Changes to This Policy</h5>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

                        <h5>7. Contact Us</h5>
                        <p>Have questions? Contact us at <a href="mailto:contact.testmasterhub@gmail.com">contact.testmasterhub@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PrivacyPolicy;