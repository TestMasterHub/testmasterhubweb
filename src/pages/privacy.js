import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold">Privacy Policy</h1>
      <p><strong>Last updated:</strong> July 4, 2025</p>

      <p>TestMasterHub (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, including any desktop or web applications.</p>

      <h4>1. Information We Collect</h4>
      <p>We collect the following types of data:</p>
      <ul>
        <li><strong>Account Information:</strong> Email address, name (optional), authentication ID (e.g., Firebase UID).</li>
        <li><strong>Test Data:</strong> API requests/responses, collections, environments, test cases, and custom scripts.</li>
        <li><strong>Device & Usage Data:</strong> OS version, browser, device type, and interaction logs.</li>
      </ul>

      <h4>2. Use of Free Gemini AI API</h4>
      <p>TestMasterHub uses the free version of Google's Gemini AI API only for generating Auto Assertions. When you use this feature:</p>
      <ul>
        <li>A sanitized portion of the API response body may be sent to Gemini's API.</li>
        <li>No personally identifiable information (PII) or sensitive data is included in the AI payloads.</li>
        <li>We do not store any data sent to or received from Gemini.</li>
      </ul>
      <p>You can opt out of AI-based features by disabling Auto Assertion in your settings.</p>

      <h4>3. How We Use Your Information</h4>
      <ul>
        <li>To provide API testing functionality</li>
        <li>To save your collections and test data</li>
        <li>To generate reports and logs</li>
        <li>To deliver AI-generated assertions (optional)</li>
        <li>To improve platform performance and user experience</li>
        <li>To email reports and build results (if enabled)</li>
      </ul>

      <h4>4. Data Storage & Security</h4>
      <ul>
        <li>Data is stored locally or in the cloud (if synced).</li>
        <li>Sensitive data (tokens, passwords) are encrypted at rest.</li>
        <li>Standard security practices are followed to protect data.</li>
      </ul>

      <h4>5. Third-Party Services</h4>
      <p>We integrate with the following services:</p>
      <ul>
        <li><strong>Firebase</strong> – Authentication and analytics</li>
        <li><strong>Gemini AI (Google)</strong> – AI assertion generation</li>
        <li><strong>Email Services</strong> – For sending reports</li>
        <li><strong>Git Providers</strong> – If configured for syncing collections</li>
      </ul>

      <h4>6. Data Sharing</h4>
      <p>We do not sell or share your data except:</p>
      <ul>
        <li>When required by law</li>
        <li>To protect rights or safety of TestMasterHub or users</li>
      </ul>

      <h4>7. Cookies & Analytics</h4>
      <p>We use minimal cookies/localStorage for:</p>
      <ul>
        <li>Session tracking</li>
        <li>Preference storage</li>
        <li>Non-personal usage statistics</li>
      </ul>

      <h4>8. Your Rights</h4>
      <ul>
        <li>Request data export or deletion</li>
        <li>Opt out of AI features</li>
        <li>Modify or delete your account</li>
      </ul>
      <p>Email us at <strong>social.testmasterhub@gmail.com</strong> to exercise your rights.</p>

      <h4>9. Children’s Privacy</h4>
      <p>We do not knowingly collect data from users under 13 years of age.</p>

      <h4>10. Changes to This Policy</h4>
      <p>We may update this Privacy Policy. The latest version will always be available on our website.</p>

      <h4>11. Contact Us</h4>
      <p>Have questions? Contact us at <strong>social.testmasterhub@gmail.com</strong></p>
    </div>
  );
};

export default PrivacyPolicy;
