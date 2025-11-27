import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-dark text-white py-5">
        <Helmet>
          <title>TestMasterHub Privacy Policy</title>
          <meta
            name="description"
            content="Read the privacy policy of TestMasterHub to understand how we collect, use, and protect your data."
          />
        </Helmet>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="resource-section">
                        <h1 className="display-4 fw-bold mb-4 hero-title-gradient">Privacy Policy</h1>
                        <p className="text-white-50"><strong>Last updated:</strong> September 14, 2025</p>

                        <p>TestMasterHub (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.</p>

                        <h5>1. Information We Collect</h5>
                        <ul>
                            <li><strong>Account Information:</strong> Email address and name (optional).</li>
                            <li><strong>Test Data:</strong> API requests, collections, environments, and test cases.</li>
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
                        <p>We may use third-party services like Firebase for authentication and analytics, and Google's Gemini AI for optional AI features.</p>
                        
                        <h5>5. Your Rights</h5>
                        <p>You have the right to access, update, or delete your personal information at any time. You can also opt out of AI-based features in your settings.</p>

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