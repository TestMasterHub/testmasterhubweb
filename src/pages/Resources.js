import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FaRocket, FaCode, FaFileAlt, FaBars, FaArrowLeft, FaArrowRight, FaLayerGroup, FaGlobe, FaPlay,FaCheck } from 'react-icons/fa';
import Prism from 'prismjs';
import { gsap } from 'gsap';
import { Helmet } from 'react-helmet';

// Note: Ensure you have imported a dark Prism theme, e.g., 'prism-okaidia.css'
// in your main App.js or index.js file.

const sections = {
  'Getting Started': {
    title: 'Getting Started with TestMasterHub',
    icon: <FaRocket />,
    content: `
      <div class="resource-section">
        <p>TestMasterHub is a powerful, intuitive, and comprehensive API testing tool designed for developers and quality assurance professionals to validate API responses efficiently and automate their testing workflows. This in-depth guide covers every feature available in TestMasterHub, explaining its purpose, practical benefits, and step-by-step usage instructions to help you master the platform.</p>
        
        <h5>Quick Start Guide:</h5>
        <p>Follow these essential steps to quickly set up and run your first API test with TestMasterHub:</p>
        <ol>
          <li><strong>Download and Install:</strong> Obtain the latest version of TestMasterHub from our official website, tailored for your operating system (Windows, macOS, or Linux).</li>
          <li><strong>Create Your First Collection:</strong> Organize your API tests logically by creating a new collection. Collections act as containers for related API requests, making management and bulk execution straightforward.</li>
          <li><strong>Add Your First API Request:</strong> Within your new collection, add an API request. Specify the target URL (e.g., <code>https://api.example.com/data</code>) and select the appropriate HTTP method (e.g., GET, POST, PUT, DELETE).</li>
          <li><strong>Execute the Request:</strong> Send your configured API request. TestMasterHub will display the raw response, status code, headers, and response time, allowing immediate inspection.</li>
          <li><strong>Add Assertions:</strong> Validate the API response by adding assertions. These programmatic checks ensure that the response meets predefined criteria, such as a specific status code (e.g., 200 OK) or the presence of certain data.</li>
          <li><strong>Save Your Tests:</strong> Save your configured requests and collections for future use and easy repetition of tests.</li>
        </ol>
        
        <h5>Detailed Installation Guide:</h5>
        <p>For a smooth installation experience, follow these detailed instructions:</p>
        <ol>
          <li><strong>Download the Installer:</strong>
            <ul>
              <li>Visit the <a href="/download">official TestMasterHub download page</a> to get the most current installer.</li>
              <li>Carefully select the version that matches your operating system (Windows, macOS, or Linux) to ensure compatibility and optimal performance.</li>
            </ul>
          </li>
          <li><strong>Run the Installer:</strong>
            <ul>
              <li>Once the download is complete, locate the installer file in your downloads folder.</li>
              <li>Double-click the executable file to begin the installation process. For macOS users, you might drag the application icon to your Applications folder.</li>
              <li>Follow the intuitive on-screen prompts and instructions provided by the installer wizard. These steps typically involve agreeing to the license terms, choosing an installation directory, and confirming installation.</li>
            </ul>
          </li>
          <li><strong>Bypassing Windows SmartScreen (If Blocked):</strong>
            <ul>
              <li>To proceed, click on "More Info" in the SmartScreen dialog.</li>
              <li>Then, select "Run Anyway" to bypass the warning and continue with the installation. TestMasterHub is a safe application, and this step is only necessary due to its recent release status.</li>
            </ul>
          </li>
          <li><strong>Launch TestMasterHub:</strong>
            <ul>
              <li>After successful installation, you can launch the application from your operating system's application launcher.</li>
            </ul>
          </li>
        </ol>
        
        <p>TestMasterHub's intuitive interface and robust features make API testing accessible for both experienced testers and beginners, allowing you to validate APIs efficiently, reduce manual effort, and ensure the reliability of your services with minimal effort.</p>
      </div>
    `
  },
  'API Requests': {
    title: 'API Request & Response Handling',
    icon: <FaCode />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>API request and response handling forms the fundamental core functionality of TestMasterHub. This feature empowers users to construct and send various types of HTTP requests to any API endpoint. Upon execution, TestMasterHub captures and displays the full API response, including the HTTP status code, headers, the complete response body, and critical performance metrics like response time.</p>
        
        <h5>Why use it?</h5>
        <p>Leveraging TestMasterHub's request handling feature offers numerous benefits:</p>
        <ul>
          <li><strong>Rapid Endpoint Validation:</strong> Quickly test individual API endpoints without writing boilerplate code.</li>
          <li><strong>Efficient Debugging:</strong> Gain immediate insights into API interactions by inspecting request payloads and analyzing full responses.</li>
          <li><strong>Performance Optimization:</strong> Identify performance bottlenecks with clear metrics on response times and payload sizes.</li>
          <li><strong>Customization for Complex Scenarios:</strong> Supports custom headers, complex request bodies, and query parameters to simulate a wide range of real-world scenarios.</li>
        </ul>
        
        <h5>How to use it:</h5>
        <ol>
          <li><strong>Navigate to the Request Editor:</strong> This is your primary workspace for crafting API calls.</li>
          <li><strong>Enter the API URL:</strong> In the dedicated input field, type or paste the complete URL of the API endpoint.</li>
          <li><strong>Select the Request Method:</strong> Choose the appropriate HTTP method from the dropdown menu (e.g., GET, POST, PUT, DELETE).</li>
          <li><strong>Add Request Headers (Optional):</strong> If your API requires authentication or metadata, navigate to the "Headers" tab and add them as key-value pairs.</li>
          <li><strong>Include a Request Body (for POST/PUT):</strong> Switch to the "Body" tab, select the content type, and enter your data.</li>
          <li><strong>Click "Send":</strong> TestMasterHub will dispatch the request to the API.</li>
          <li><strong>Review the Response:</strong> The response panel will populate with the status code, body, headers, and execution time.</li>
        </ol>
        
        <h5>Example API Request:</h5>
        <p>Here's an example of a GET request to retrieve user data:</p>
        <pre><code class="language-http">GET https://api.testmasterhub.com/users/12345
Headers:
    Authorization: Bearer <your_auth_token>
    Content-Type: application/json</code></pre>
        
        <h5>Example API Response:</h5>
        <p>A typical successful JSON response might look like this:</p>
        <pre><code class="language-json">{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "status": "active",
    "created_at": "2023-01-15T10:30:00Z"
}</code></pre>
      </div>
    `
  },
  'Collections': {
    title: 'Collections - Organizing Requests',
    icon: <FaLayerGroup />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Collections in TestMasterHub are powerful organizational units that allow you to group multiple API requests into a structured and manageable format. Think of a collection as a folder or a suite that contains a series of related API calls. This feature is fundamental for organizing APIs related to a specific service, simulating complex business workflows, and running multiple requests in sequence.</p>
        
        <h5>Why use it?</h5>
        <ul>
          <li><strong>Systematic Organization:</strong> Categorize and organize API requests systematically, preventing clutter in your workspace.</li>
          <li><strong>Batch Execution:</strong> Run multiple requests at once, crucial for integration testing where a series of calls might need to be executed in order.</li>
          <li><strong>Workflow Simulation:</strong> Ideal for simulating realistic API workflows, such as user login, data retrieval, and profile updates.</li>
          <li><strong>Reusability and Efficiency:</strong> Easily reuse and rerun requests without reconfiguring them repeatedly.</li>
          <li><strong>Team Collaboration:</strong> Collections can be easily imported and exported, facilitating seamless sharing among team members.</li>
        </ul>
        
        <h5>How to use collections:</h5>
        <ol>
          <li><strong>Navigate to the Collections Page:</strong> Access the collection management interface from the main navigation.</li>
          <li><strong>Click "New Collection":</strong> Provide a descriptive name that reflects the purpose of the requests it will contain.</li>
          <li><strong>Add API Requests:</strong> Select your new collection and use the "Add Request" button to add and configure individual API calls.</li>
          <li><strong>Organize Requests within Folders (Optional):</strong> For large collections, you can further organize requests into sub-folders for better structure.</li>
          <li><strong>Execute the Collection:</strong> Run the entire collection at once or select and run specific requests within it.</li>
        </ol>
      </div>
    `
  },
  'Assertions': {
    title: 'Assertions and Validations',
    icon: <FaCheck />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Assertions and validations are mechanisms used to programmatically verify the correctness and integrity of API responses. Instead of manually inspecting every response, assertions allow you to define expected outcomes that TestMasterHub automatically checks after each API call. If an assertion fails, it indicates a deviation from the expected behavior.</p>
        
        <h5>Why use it?</h5>
        <ul>
          <li><strong>Automated Verification:</strong> Eliminates tedious manual checking, especially for large or frequent test runs.</li>
          <li><strong>Instant Failure Detection:</strong> Immediately highlights failures, helping developers pinpoint issues quickly.</li>
          <li><strong>Data Integrity Assurance:</strong> Ensures that your APIs consistently conform to expected data models.</li>
          <li><strong>Improved API Reliability:</strong> Helps catch regressions and unexpected changes early in the development cycle.</li>
        </ul>
        
        <h5>Supported Assertions:</h5>
        <p>TestMasterHub provides a comprehensive set of assertion functions accessible via the <code>TMH.expect()</code> syntax.</p>
        
        <h6>Status Code Validation: <code>toBe(expectedStatusCode)</code></h6>
        <p>Verifies that the HTTP status code of the response matches the expected value.</p>
        <pre><code class="language-javascript">TMH.test("Status code should be 200 OK", () => {
    TMH.expect(TMH.response.status()).toBe(200);
});</code></pre>
        
        <h6>Response Time Validation: <code>toBeBelow(maxTimeInMs)</code></h6>
        <p>Checks if the API response cycle is below a specified threshold in milliseconds.</p>
        <pre><code class="language-javascript">TMH.test("Response time must be below 500ms", () => {
    TMH.expect(TMH.response.time()).toBeBelow(500);
});</code></pre>
        
        <h6>JSON Value Matching: <code>toBe(expectedValue)</code></h6>
        <p>Compares a specific value from the JSON response to an exact expected value.</p>
        <pre><code class="language-javascript">TMH.test("User name should be 'John Doe'", () => {
    TMH.expect(TMH.response.json().name).toBe("John Doe");
});</code></pre>
        
        <h6>Array/String Contains: <code>toContain(expectedItem)</code></h6>
        <p>Asserts that an array includes a specific item, or a string contains a specific substring.</p>
        <pre><code class="language-javascript">TMH.test("User roles array should contain 'admin'", () => {
    TMH.expect(TMH.response.json().user.roles).toContain("admin");
});</code></pre>

        <h6>Check Type of Value: <code>toBeType(expectedType)</code></h6>
        <p>Asserts that a value from the response is of a specific JavaScript type (e.g., "string", "number", "array").</p>
        <pre><code class="language-javascript">TMH.test("User ID should be a number", () => {
    TMH.expect(TMH.response.json().id).toBeType("number");
});</code></pre>
        
        <p><strong>AI Assistance:</strong> TestMasterHub also offers an innovative Auto Assertion module that leverages AI to intelligently analyze responses and automatically suggest relevant assertions, significantly speeding up test creation.</p>
      </div>
    `
  },
  'Environment': {
    title: 'Environment Management',
    icon: <FaGlobe />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Environment management provides a way to handle different configurations for your API tests. It allows you to create and switch between various environments, such as Development, Staging, and Production. This feature is crucial for managing dynamic variables like base URLs and authentication tokens without hardcoding them into your requests.</p>
        
        <h5>Why use it?</h5>
        <ul>
          <li><strong>Dynamic Variables:</strong> Define variables specific to each environment (e.g., <code>{{BASE_URL}}</code>).</li>
          <li><strong>Reduced Errors:</strong> Eliminates the need to manually change URLs and keys when switching environments.</li>
          <li><strong>Enhanced Security:</strong> Provides a secure way to store sensitive information like API keys and tokens.</li>
          <li><strong>Seamless Switching:</strong> Switch the active environment with a single click, instantly applying all associated variables.</li>
        </ul>
        
        <h5>How to use environments:</h5>
        <ol>
          <li><strong>Navigate to the Environment Page:</strong> Find the "Environments" tab in the main navigation.</li>
          <li><strong>Click "New Environment":</strong> Begin creating a new environment configuration.</li>
          <li><strong>Add Key-Value Pairs:</strong> Define variables for the environment (e.g., key: <code>AUTH_TOKEN</code>, value: <code>your_dev_token</code>).</li>
          <li><strong>Set as Active:</strong> Select an environment to make its variables available for all requests.</li>
          <li><strong>Use Variables in Requests:</strong> Reference variables using double curly braces: <code>{{variable_name}}</code>.</li>
        </ol>
        
        <h5>Dynamic Variables via Test Scripts:</h5>
        <p>You can set environment variables dynamically within test scripts, which is powerful for chaining requests.</p>
        <pre><code class="language-javascript">var jsonData = TMH.response.json();
// Set an environment variable named 'token' with the extracted value
TMH.env.set("token", jsonData.access_token);</code></pre>
      </div>
    `
  },
'Test Scripts': {
  title: 'Test Scripts & Custom Functions',
  icon: <FaPlay />,
  content: `
    <div class="resource-section">
      <h5>What is it?</h5>
      <p>Test scripts in TestMasterHub provide a flexible way to extend your API testing capabilities beyond simple checks. Written in JavaScript, these scripts allow you to automate complex validation logic, dynamically manage environment variables, and perform intricate assertions.</p>
      
      <h5>Core Features:</h5>
      <ol>
        <li><strong>Dynamic Response Parsing:</strong> Programmatically access and extract specific data from JSON or other structured API responses.</li>
        <li><strong>Advanced Assertions:</strong> Combine built-in assertions with custom JavaScript logic to create complex validation rules.</li>
        <li><strong>Real-time Environment Management:</strong> Dynamically set and clear environment variables within your scripts.</li>
        <li><strong>Custom Function Registration:</strong> Define and register your own reusable JavaScript functions to promote modularity.</li>
      </ol>
      
      <h5>Response Parsing Examples:</h5>
      <p>Accessing API response data is fundamental in test scripts:</p>
      <pre><code class="language-javascript">// Accessing JSON Response Body
var jsonData = TMH.response.json();
console.log("User ID:", jsonData.user.id);

// Getting Response Status Code
var statusCode = TMH.response.status();
console.log("HTTP Status Code:", statusCode);

// Getting Response Time
var responseTime = TMH.response.time();
console.log("Response Time (ms):", responseTime);</code></pre>
      
      <h5>Dynamic Environment Variable Usage:</h5>
      <p>A common use case is to extract dynamic values like auth tokens and store them as environment variables.</p>
      <pre><code class="language-javascript">var loginResponse = TMH.response.json();
if (loginResponse && loginResponse.access_token) {
  TMH.env.set("AUTH_TOKEN", loginResponse.access_token);
}
// In a subsequent request, you can use: Authorization: Bearer {{AUTH_TOKEN}}</code></pre>

      <h5>Complete Test Script Example:</h5>
      <p>This example combines response parsing, environment variable setting, and standard assertions.</p>
      <pre><code class="language-javascript">// 1. Parse the JSON response
var jsonData = TMH.response.json();

// 2. Dynamically set an environment variable
if (jsonData && jsonData.session_id) {
  TMH.env.set("current_session_id", jsonData.session_id);
}

// 3. Perform standard assertions
TMH.test("API call should return a 201 Created status", () => {
  TMH.expect(TMH.response.status()).toBe(201);
});

TMH.test("Response time should be under 1500ms", () => {
  TMH.expect(TMH.response.time()).toBeBelow(1500);
});

TMH.test("Resource name should match 'New Item'", () => {
  TMH.expect(jsonData.name).toBe("New Item");
});</code></pre>
    </div>
  `
},
  'Reports': {
    title: 'Understanding Reports',
    icon: <FaFileAlt />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Reports in TestMasterHub are comprehensive summaries generated after each API test execution. These reports provide invaluable insights into test outcomes, helping you assess API health, performance, and correctness. They include summary statistics, detailed information for each request, the pass/fail status of all assertions, and critical performance metrics.</p>
        
        <h5>Why use it?</h5>
        <ul>
          <li><strong>Track Execution History:</strong> Maintain a historical record of all test runs to identify trends in failures or performance.</li>
          <li><strong>Identify Issues & Debug:</strong> Pinpoint exactly where and why a test failed with detailed information about assertions and payloads.</li>
          <li><strong>Facilitate Team Collaboration:</strong> Reports can be easily shared with teams and stakeholders to ensure everyone has a clear understanding of API quality.</li>
          <li><strong>Performance Monitoring:</strong> Monitor API performance trends with metrics like response times.</li>
        </ul>
        
        <h5>Report Components:</h5>
        <ol>
          <li><strong>Summary Dashboard:</strong> A high-level overview showing total tests run, passed, failed, and total execution time.</li>
          <li><strong>Request Details:</strong> For each API request, detailed information is provided, including the URL, method, headers, and body.</li>
          <li><strong>Assertion Results:</strong> A clear pass/fail status for every assertion defined within your test scripts.</li>
          <li><strong>Error Log:</strong> For any failed test, comprehensive error messages are provided to guide you to the root cause.</li>
        </ol>
        
        <h5>How to access reports:</h5>
        <ol>
          <li><strong>Navigate to the Reports Page:</strong> In the application, click on the "Reports" tab.</li>
          <li><strong>Select a Build from History:</strong> The Reports page will display a list of all historical build executions.</li>
          <li><strong>View the Dashboard:</strong> See the high-level overview of the test results.</li>
          <li><strong>Drill Down into Details:</strong> Navigate through the report sections to drill down into specific results.</li>
        </ol>
      </div>
    `
  }
};

const ResourcesPage = () => {
    const [selectedSection, setSelectedSection] = useState(Object.keys(sections)[0]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const contentRef = useRef(null);

    const handleSectionSelect = (section) => {
        gsap.to(contentRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                setSelectedSection(section);
                window.scrollTo(0, 0);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
            }
        });
    };
    
    useEffect(() => {
        Prism.highlightAll();
        gsap.fromTo(contentRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    }, [selectedSection]);

    const sectionKeys = Object.keys(sections);
    const currentIndex = sectionKeys.indexOf(selectedSection);
    const prevSection = currentIndex > 0 ? sectionKeys[currentIndex - 1] : null;
    const nextSection = currentIndex < sectionKeys.length - 1 ? sectionKeys[currentIndex + 1] : null;
    
    return (
    <div className="modern-resources-page">
      <Helmet>
        <title>TestMasterHub Resources – Comprehensive API Testing Guide</title>
        <meta
          name="description"
          content="Explore the comprehensive resources and documentation for TestMasterHub, your go-to API testing tool. Learn how to effectively use all features."
        />
      </Helmet>
      <style>{`
        .modern-resources-page {
          background: #1a1d24;
          min-height: 100vh;
          color: #e4e6eb;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        .modern-sidebar {
          position: fixed;
          left: 0;
          top: 0;
          width: 280px;
          height: 100vh;
          background: #23272f;
          border-right: 1px solid #2d3139;
          padding: 2rem 1.5rem;
          overflow-y: auto;
          z-index: 100;
        }
        
        .modern-sidebar::-webkit-scrollbar {
          width: 6px;
        }
        
        .modern-sidebar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .modern-sidebar::-webkit-scrollbar-thumb {
          background: #3a3f4b;
          border-radius: 3px;
        }
        
        .sidebar-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }
        
        .sidebar-nav-link {
          display: flex;
          align-items: center;
          padding: 0.65rem 1rem;
          color: #b4b9c5;
          text-decoration: none;
          border-radius: 8px;
          margin-bottom: 0.35rem;
          transition: all 0.2s ease;
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .sidebar-nav-link:hover {
          background: #2d3139;
          color: #fff;
        }
        
        .sidebar-nav-link.active {
          background: #3b82f6;
          color: #fff;
        }
        
        .sidebar-icon {
          margin-right: 0.75rem;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .mobile-menu-btn {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 200;
          background: #3b82f6;
          color: white;
          border: none;
          padding: 0.65rem 1.2rem;
          border-radius: 8px;
          font-weight: 500;
          display: none;
          align-items: center;
          gap: 0.5rem;
        }
        
        .modern-content {
          margin-left: 280px;
          padding: 3rem 4rem;
          max-width: 1200px;
        }
        
        .content-header {
          margin-bottom: 2.5rem;
        }
        
        .content-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .title-icon {
          color: #3b82f6;
          font-size: 2.25rem;
        }
        
        .resource-section h5 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .resource-section h6 {
          font-size: 1.05rem;
          font-weight: 600;
          color: #e4e6eb;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .resource-section p {
          font-size: 1rem;
          line-height: 1.7;
          color: #b4b9c5;
          margin-bottom: 1.25rem;
        }
        
        .resource-section ul, .resource-section ol {
          color: #b4b9c5;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .resource-section li {
          margin-bottom: 0.75rem;
        }
        
        .resource-section strong {
          color: #fff;
          font-weight: 600;
        }
        
        .resource-section code:not(pre code) {
          background: #2d3139;
          color: #3b82f6;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.9em;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
        }
        
        .resource-section pre {
          background: #1e2129;
          border: 1px solid #2d3139;
          border-radius: 8px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .resource-section pre code {
          color: #e4e6eb;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .resource-section a {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        
        .resource-section a:hover {
          border-bottom-color: #3b82f6;
        }
        
        .nav-buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid #2d3139;
          gap: 1rem;
        }
        
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: #23272f;
          border: 1px solid #2d3139;
          border-radius: 8px;
          color: #b4b9c5;
          text-decoration: none;
          transition: all 0.2s;
          flex: 1;
          max-width: 300px;
        }
        
        .nav-btn:hover {
          background: #2d3139;
          border-color: #3b82f6;
          color: #fff;
          transform: translateY(-2px);
        }
        
        .nav-btn-content small {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
          margin-bottom: 0.25rem;
        }
        
        .nav-btn-content span {
          font-weight: 600;
          font-size: 0.95rem;
        }
        
        .nav-btn.next {
          margin-left: auto;
          text-align: right;
        }
        
        @media (max-width: 991px) {
          .modern-sidebar {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          
          .modern-sidebar.open {
            transform: translateX(0);
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .modern-content {
            margin-left: 0;
            padding: 5rem 1.5rem 2rem;
          }
          
          .content-title {
            font-size: 2rem;
          }
          
          .nav-buttons {
            flex-direction: column;
          }
          
          .nav-btn {
            max-width: 100%;
            width: 100%;
          }
          
          .nav-btn.next {
            margin-left: 0;
          }
        }
      `}</style>
      
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
        Menu
      </button>
      
      {/* Sidebar */}
      <aside className={`modern-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <h4 className="sidebar-title">Documentation</h4>
        <nav>
          {sectionKeys.map(section => (
            <a
              key={section}
              href="#!"
              className={`sidebar-nav-link ${selectedSection === section ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionSelect(section);
              }}
            >
              <span className="sidebar-icon">{sections[section].icon}</span>
              {section}
            </a>
          ))}
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="modern-content">
        <div ref={contentRef}>
          <div className="content-header">
            <h1 className="content-title">
              <span className="title-icon">{sections[selectedSection].icon}</span>
              {sections[selectedSection].title}
            </h1>
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: sections[selectedSection].content }} />
          
          {/* Navigation Buttons */}
          <div className="nav-buttons">
            {prevSection ? (
              <a
                href="#!"
                className="nav-btn prev"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionSelect(prevSection);
                }}
              >
                <FaArrowLeft />
                <div className="nav-btn-content">
                  <small>Previous</small>
                  <span>{prevSection}</span>
                </div>
              </a>
            ) : <div />}
            
            {nextSection && (
              <a
                href="#!"
                className="nav-btn next"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionSelect(nextSection);
                }}
              >
                <div className="nav-btn-content">
                  <small>Next</small>
                  <span>{nextSection}</span>
                </div>
                <FaArrowRight />
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResourcesPage;