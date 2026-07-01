import React from 'react';
import { Helmet } from 'react-helmet';
const TermsOfService = () => {
  return (
    <div className="bg-dark text-white py-5">
        <Helmet>
            <title>TestMasterHub Terms of Service</title>
            <meta
              name="description"
              content="Review the terms of use for TestMasterHub and its AI-powered software testing products and services."
            />
        </Helmet>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="resource-section">
                        <h1 className="display-4 fw-bold mb-4 hero-title-gradient">Terms of Service</h1>
                        <p className="text-white-50"><strong>Effective Date:</strong>  July 02, 2026</p>

                        <p>Welcome to TestMasterHub. By accessing or using our products and services, you agree to be bound by these Terms of Service. Please read them carefully.</p>

                        <h5>1. Acceptance of Terms</h5>
                        <p>By using TestMasterHub, you confirm that you agree to these terms and our Privacy Policy. If you do not agree, please do not use the platform.</p>

                        <h5>2. Description of Service</h5>
                        <p>TestMasterHub provides AI-powered software testing solutions and related products, including TestMasterHub API, AIR, TapSecureX, and TesterTools. Our services help users design, automate, secure, and validate software testing workflows.</p>

                        <h5>3. User Accounts</h5>
                        <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</p>

                        <h5>4. Prohibited Conduct</h5>
                        <ul>
                            <li>Do not misuse the platform (e.g., reverse engineering, automated scraping).</li>
                            <li>Do not use the platform for illegal or unauthorized purposes.</li>
                        </ul>

                        <h5>5. Termination</h5>
                        <p>We may suspend or terminate your access to TestMasterHub products or services at any time for violation of these terms, with or without notice.</p>

                        <h5>6. Limitation of Liability</h5>
                        <p>TestMasterHub is provided "as-is" without warranties of any kind. We are not liable for damages or losses resulting from your use of the service.</p>

                        <h5>7. Modifications</h5>
                        <p>We reserve the right to modify these Terms at any time. Continued use of the service after updates constitutes acceptance.</p>

                        <h5>8. Contact Information</h5>
                        <p>If you have any questions about these Terms, contact us at <a href="mailto:contact.testmasterhub@gmail.com">contact.testmasterhub@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TermsOfService;