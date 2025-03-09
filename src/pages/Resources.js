import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRocket, FaCode, FaTools, FaFileAlt, FaBars, FaArrowLeft, FaArrowRight, FaLayerGroup, FaCheck, FaGlobe, FaPlay } from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
const sections = {
  'Getting Started': {
    title: 'Getting Started with TestMasterHub',
    icon: <FaRocket />,
    content: `
      <div class="resource-section">
        <p>TestMasterHub is a powerful and intuitive API testing tool designed for developers and testers to validate API responses efficiently. This guide covers every feature in TestMasterHub, explaining what it does, why it exists, and how to use it.</p>
        
        <h5>Quick Start Guide:</h5>
        <ol>
          <li>Download and install the latest version of TestMasterHub</li>
          <li>Create your first collection to organize your API tests</li>
          <li>Add your first API request by specifying the URL and method</li>
          <li>Execute the request to see the response</li>
          <li>Add assertions to validate the response</li>
          <li>Save your tests in collections for future use</li>
        </ol>
        
        <p>TestMasterHub's intuitive interface makes API testing accessible for both experienced testers and beginners, allowing you to validate APIs efficiently with minimal effort.</p>
      </div>
    `
  },
  'API Requests': {
    title: 'API Request & Response Handling',
    icon: <FaCode />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>API request and response handling is the core functionality of TestMasterHub, enabling you to send HTTP requests such as GET, POST, PUT, DELETE, and PATCH. You can inspect responses including status codes, headers, response time, and size, providing a robust way to interact with APIs and validate outputs.</p>
        
        <h5>Why use it?</h5>
        <p>The request handling feature allows quick testing of API endpoints to ensure they return expected responses. It helps developers debug API interactions by checking request payloads and responses, provides insights into API response times and size for performance optimization, and supports headers and body customization for complex API calls, all without writing code.</p>
        
        <h5>How to use it:</h5>
        <ol>
          <li>Navigate to the <strong>Request Editor</strong> in TestMasterHub</li>
          <li>Enter the API URL in the provided input field</li>
          <li>Select the request method (GET, POST, PUT, DELETE, PATCH, etc.)</li>
          <li>Add request headers if authentication or additional metadata is required</li>
          <li>Include a request body for POST, PUT, or PATCH requests</li>
          <li>Click <strong>Send</strong> to execute the API request</li>
          <li>Review the response, including status code, body, headers, and execution time</li>
        </ol>
        
        <h5>Example:</h5>
        <pre><code class="language-javascript">GET https://api.testmasterhub.com/users/12345
Headers:
    Authorization: Bearer &lt;token&gt;</code></pre>
        
        <h5>Response:</h5>
        <pre><code class="language-javascript">{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
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
        <p>Collections in TestMasterHub help you group multiple API requests into a structured format, making it easier to execute and manage them. Collections are essential for organizing APIs related to a specific service, testing workflows, and running multiple requests in sequence to simulate real-world scenarios.</p>
        
        <h5>Why use it?</h5>
        <p>Collections organize API requests systematically, preventing clutter and improving productivity. They allow you to execute multiple requests at once instead of testing APIs individually, help simulate API workflows such as user authentication followed by data retrieval, enable reusability by storing frequently used API requests, and support importing and exporting for team collaboration.</p>
        
        <h5>How to create and use collections:</h5>
        <ol>
          <li>Navigate to the <strong>Collections Page</strong></li>
          <li>Click the <strong>New Collection</strong> button</li>
          <li>Provide a meaningful name for your collection</li>
          <li>Click <strong>Save</strong> to create an empty collection</li>
          <li>Add API requests to the collection by clicking <strong>Add Request</strong></li>
          <li>Configure each request with URL, method, headers, and body</li>
          <li>Organize requests within folders if needed</li>
          <li>Execute the entire collection or specific requests as needed</li>
        </ol>
        
        <p>Collections serve as the backbone of organized API testing, allowing structured and repeatable test execution across your project lifecycle.</p>
      </div>
    `
  },
  'Assertions': {
    title: 'Assertions and Validations',
    icon: <FaCheck />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Assertions and validations are used to verify API responses dynamically. They help ensure that an API returns the expected status code, response time, and specific data in the response body. TestMasterHub provides built-in functions to define and execute validations automatically.</p>
        
        <h5>Why use it?</h5>
        <p>Assertions automate the process of checking API responses against expected values, reduce manual debugging effort by highlighting failures instantly, help maintain data integrity by ensuring API responses conform to expected structures, support different validation types, and improve API reliability by ensuring that responses remain consistent across versions.</p>
        
        <h5>Supported Assertions:</h5>
        
        <h6>1. Status Code Validation</h6>
        <pre><code class="language-javascript">TMH.test("Status code should be 200", () => {
    TMH.expect(TMH.response.status()).toBe(200);
});</code></pre>
        
        <h6>2. Response Time Validation</h6>
        <pre><code class="language-javascript">TMH.test("Response time must be below 500ms", () => {
    TMH.expect(TMH.response.time()).toBeBelow(500);
});</code></pre>
        
        <h6>3. JSON Property Exists</h6>
        <pre><code class="language-javascript">TMH.test("Response should contain 'user_id'", () => {
    TMH.expect(TMH.response.json().user_id).toBeDefined();
});</code></pre>
        
        <h6>4. JSON Value Matching</h6>
        <pre><code class="language-javascript">TMH.test("User name should be John", () => {
    TMH.expect(TMH.response.json().name).toBe("John");
});</code></pre>
        
        <h6>5. Response Content Validation</h6>
        <pre><code class="language-javascript">TMH.test("Token is valid format", () => {
    TMH.expect(TMH.response.json().token).toMatch(/^ey/);
});</code></pre>
        
        <h6>6. Value Comparison</h6>
        <pre><code class="language-javascript">TMH.test("Count should be greater than 0", () => {
    TMH.expect(TMH.response.json().count).toBeGreaterThan(0);
});</code></pre>
        
        <p>Assertions form the foundation of automated API testing, allowing you to validate responses without manual inspection.</p>
      </div>
    `
  },
  'Environment': {
    title: 'Environment Management',
    icon: <FaGlobe />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Environment management in TestMasterHub allows you to create and switch between different API environments, such as Development, Staging, and Production. This feature helps manage API variables dynamically and prevents hardcoding values in requests.</p>
        
        <h5>Why use it?</h5>
        <p>Environment management simplifies API testing by allowing you to define variables for different environments, reduces manual effort by eliminating the need to change API URLs and keys manually, enhances security by storing credentials securely, supports variable substitution in all request components, and enables seamless switching between environments for efficient testing.</p>
        
        <h5>How to create and use environments:</h5>
        <ol>
          <li>Navigate to the <strong>Environment Page</strong></li>
          <li>Click the <strong>New Environment</strong> button</li>
          <li>Add key-value pairs, such as <code class="language-javascript">BASE_URL</code>, <code class="language-javascript">API_KEY</code>, etc.</li>
          <li>Save the environment and set it as active</li>
          <li>Use environment variables in API requests by referencing them as <code class="language-javascript">{{variable_name}}</code></li>
          <li>Select the desired environment before executing a request</li>
        </ol>
        
        <h5>Dynamic Environment Variables:</h5>
        <p>You can also set environment variables dynamically in test scripts:</p>
        
        <pre><code class="language-javascript">var jsonData = TMH.response.json();
TMH.env.set("token", jsonData.token);</code></pre>
        
        <h5>Clearing Environment Variables:</h5>
        <pre><code class="language-javascript">// Clear a specific variable
TMH.env.clear("token");

// Clear all variables
TMH.env.clearAll();</code></pre>
        
        <p>Environment management is crucial for maintaining flexibility in your API testing workflow, allowing tests to run across different environments without modification.</p>
      </div>
    `
  },
  'Build': {
    title: 'Build Page - Automate API Testing',
    icon: <FaTools />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>The Build feature in TestMasterHub allows you to automate the execution of API test collections with customized settings. You can schedule test runs, configure retry attempts, and generate detailed reports after execution.</p>
        
        <h5>Why use it?</h5>
        <p>The Build feature automates API testing, reducing the need for manual execution, allows bulk execution of collections with retry mechanisms for failed requests, provides execution logs and detailed reports for analysis, enables teams to run API tests on a scheduled basis, and improves test efficiency by detecting failures early in the development cycle.</p>
        
        <h5>Configuration Fields:</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Collections</td>
              <td>Select which collections to run in the build</td>
            </tr>
            <tr>
              <td>Environment</td>
              <td>Choose the environment for test execution</td>
            </tr>
            <tr>
              <td>Retry Count</td>
              <td>Specify the number of retry attempts on failure</td>
            </tr>
            <tr>
              <td>Generate Report</td>
              <td>Enable or disable report generation</td>
            </tr>
          </tbody>
        </table>
        
        <h5>How to set up a build:</h5>
        <ol>
          <li>Navigate to the <strong>Build Page</strong></li>
          <li>Click <strong>New Build</strong></li>
          <li>Select the collections to include</li>
          <li>Choose the environment</li>
          <li>Configure retry settings</li>
          <li>Enable report generation if needed</li>
          <li>Save and run the build</li>
        </ol>
        
        <p>Build automation is essential for continuous integration workflows, allowing teams to validate API functionality regularly without manual intervention.</p>
      </div>
    `
  },
'Test Scripts': {
  title: 'Test Scripts & Custom Functions',
  icon: <FaPlay />,
  content: `
    <div class="resource-section">
      <h5>What is it?</h5>
      <p>Test scripts in TestMasterHub provide a way to automate API response validation, set environment variables dynamically, and perform assertions using a simple and user-friendly syntax. This feature extends TestMasterHub's capabilities beyond basic request/response testing.</p>
      
      <h5>Core Features:</h5>
      <ol>
        <li><strong>Response Parsing</strong> - Extract and manipulate JSON response data</li>
        <li><strong>Assertions</strong> - Validate response status, body, and performance</li>
        <li><strong>Environment Management</strong> - Set and clear variables dynamically</li>
        <li><strong>Custom Functions</strong> - Register and reuse user-defined functions</li>
      </ol>
      
      <h5>Response Parsing Examples:</h5>
      <pre><code class="language-javascript">// Extract JSON Response
var jsonData = TMH.response.json();

// Get Response Status
var statusCode = TMH.response.status();

// Get Response Time
var responseTime = TMH.response.time();</code></pre>
      
      <h5>Custom Functions:</h5>
      <pre><code class="language-javascript">// Register a Function
TMH.registerFunction("validateToken", (token) => {
  TMH.test("Token is not empty", () => {
    TMH.expect(token.length).toBeGreaterThan(0);
  });
});

// Use a Custom Function
TMH.callFunction("validateToken", jsonData.token);</code></pre>
      
      <h5>Complete Test Script Example:</h5>
      <pre><code class="language-javascript">var jsonData = TMH.response.json();

TMH.env.set("token", jsonData.token);

TMH.test("Status code is 200", () => {
  TMH.expect(TMH.response.status()).toBe(200);
});

TMH.test("Response time is below 5000ms", () => {
  TMH.expect(TMH.response.time()).toBeBelow(5000);
});

TMH.registerFunction("validateToken", (token) => {
  TMH.test("Token is valid", () => {
    TMH.expect(token).toMatch(/^ey/);
  });
});

TMH.callFunction("validateToken", jsonData.token);</code></pre>
      
      <p>Test scripts provide powerful extensibility to your API testing workflow, allowing for sophisticated validations and dynamic test behavior.</p>
    </div>
  `
},
  'Reports': {
    title: 'Understanding Reports',
    icon: <FaFileAlt />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Reports in TestMasterHub provide insights into test execution results, helping you analyze API test outcomes. They display summary statistics, detailed request/response information, assertion results, and performance metrics.</p>
        
        <h5>Why use it?</h5>
        <p>Reports help track API test execution history, identify patterns in API failures, share test results with team members, document API behavior for compliance purposes, and provide metrics for test coverage and quality. Comprehensive reporting is essential for maintaining transparency in the testing process.</p>
        
        <h5>Report Components:</h5>
        <ol>
          <li><strong>Summary Dashboard</strong> - Overall test execution statistics</li>
          <li><strong>Request Details</strong> - Individual request execution information</li>
          <li><strong>Assertion Results</strong> - Pass/fail status of all assertions</li>
          <li><strong>Response Timeline</strong> - Visual representation of response times</li>
          <li><strong>Error Log</strong> - Detailed information about failed tests</li>
        </ol>
        
        <h5>How to access reports:</h5>
        <ol>
          <li>Navigate to the <strong>Reports Page</strong></li>
          <li>Select a build execution from the history</li>
          <li>View the summary dashboard</li>
          <li>Drill down into specific collection or request results</li>
          <li>Export reports as PDF or HTML for sharing</li>
        </ol>
        
        <p>Reports can be automatically generated after build executions or created on-demand for specific test runs. They provide valuable insights into API behavior and test coverage, helping teams maintain API quality over time.</p>
      </div>
    `
  }
};

const ResourcesPage = () => {
    const [selectedSection, setSelectedSection] = useState(Object.keys(sections)[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    // This will apply syntax highlighting to all code blocks
    Prism.highlightAll();
  }, [selectedSection]);
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Mobile Menu Toggle */}
        <div className="d-lg-none w-100 bg-light border-bottom p-3">
          <button 
            className="btn btn-outline-primary d-flex align-items-center" 
            onClick={toggleMobileMenu}
          >
            <FaBars className="me-2" />
            {selectedSection}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`col-lg-3 sidebar bg-white shadow-sm ${isMobileMenuOpen ? 'd-block' : 'd-none d-lg-block'}`}>
          <div className="p-4">
            <h4 className="mb-4 fw-bold text-primary">TestMasterHub Resources</h4>
            <div className="nav flex-column nav-pills">
              {Object.keys(sections).map(section => (
                <button 
                  key={section} 
                  className={`nav-link text-start mb-2 d-flex align-items-center ${selectedSection === section ? 'active bg-primary text-white' : 'text-dark'}`}
                  onClick={() => {
                    setSelectedSection(section);
                    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="me-2">{sections[section].icon}</span>
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="col-lg-9 content-area bg-light min-vh-100">
          <div className="p-4 p-lg-5">
            <div className="bg-white shadow-sm rounded p-4 mb-4">
              <h2 className="mb-4 fw-bold text-primary d-flex align-items-center">
                <span className="me-2">{sections[selectedSection].icon}</span>
                {sections[selectedSection].title}
              </h2>
              <div className="content" dangerouslySetInnerHTML={{ __html: sections[selectedSection].content }} />
            </div>
            
            {/* Next/Previous Navigation */}
            <div className="d-flex justify-content-between mt-4">
              {Object.keys(sections).indexOf(selectedSection) > 0 && (
                <button 
                  className="btn btn-outline-primary d-flex align-items-center" 
                  onClick={() => setSelectedSection(Object.keys(sections)[Object.keys(sections).indexOf(selectedSection) - 1])}
                >
                  <FaArrowLeft className="me-2" />
                  Previous
                </button>
              )}
              
              {Object.keys(sections).indexOf(selectedSection) < Object.keys(sections).length - 1 && (
                <button 
                  className="btn btn-primary d-flex align-items-center ms-auto" 
                  onClick={() => setSelectedSection(Object.keys(sections)[Object.keys(sections).indexOf(selectedSection) + 1])}
                >
                  Next
                  <FaArrowRight className="ms-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;