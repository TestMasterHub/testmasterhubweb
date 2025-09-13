import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { FaRocket, FaCode, FaFileAlt, FaBars, FaArrowLeft, FaArrowRight, FaLayerGroup, FaGlobe, FaPlay,FaCheck } from 'react-icons/fa';
import Prism from 'prismjs';
import { gsap } from 'gsap';

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
                window.scrollTo(0, 0); // Scroll to top on section change
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
    <div className="bg-dark text-white resources-page">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Navigation */}
          <div className={`col-lg-3 resources-sidebar-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="resources-sidebar">
                <h4 className="mb-4 fw-bold">Documentation</h4>
                <nav className="nav flex-column">
                {sectionKeys.map(section => (
                    <a
                    key={section} 
                    href="#!"
                    className={`nav-link d-flex align-items-center ${selectedSection === section ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        handleSectionSelect(section);
                    }}
                    >
                    <span className="me-3">{sections[section].icon}</span>
                    {section}
                    </a>
                ))}
                </nav>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="d-lg-none resources-mobile-toggle">
            <button 
              className="btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="me-2" />
              Menu
            </button>
          </div>

          {/* Content Section */}
          <main className="col-lg-9 ms-lg-auto resources-content">
            <div ref={contentRef} className="content-inner">
                <div className="p-4 p-lg-5">
                    <h1 className="display-5 mb-4 fw-bold d-flex align-items-center">
                        <span className="me-3">{sections[selectedSection].icon}</span>
                        {sections[selectedSection].title}
                    </h1>
                    <div className="content" dangerouslySetInnerHTML={{ __html: sections[selectedSection].content }} />
                </div>
            
                {/* Next/Previous Navigation */}
                <div className="d-flex justify-content-between mt-5 p-4 p-lg-5 border-top-custom">
                    {prevSection ? (
                        <a href="#!" className="nav-link-card" onClick={(e) => { e.preventDefault(); handleSectionSelect(prevSection); }}>
                            <FaArrowLeft className="me-2" />
                            <div>
                                <small>Previous</small>
                                <span className="d-block fw-bold">{prevSection}</span>
                            </div>
                        </a>
                    ) : <div />}
                
                    {nextSection && (
                        <a href="#!" className="nav-link-card text-end" onClick={(e) => { e.preventDefault(); handleSectionSelect(nextSection); }}>
                            <div>
                                <small>Next</small>
                                <span className="d-block fw-bold">{nextSection}</span>
                            </div>
                            <FaArrowRight className="ms-2" />
                        </a>
                    )}
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;