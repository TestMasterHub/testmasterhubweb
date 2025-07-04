import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRocket, FaCode, FaFileAlt, FaBars, FaArrowLeft, FaArrowRight, FaLayerGroup, FaCheck, FaGlobe, FaPlay } from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

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
              <li>Visit the <a href="https://www.testmasterhub.com/download" target="_blank" rel="noopener noreferrer">official TestMasterHub website's download page</a> to get the most current installer.</li>
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
              <li>Windows SmartScreen might occasionally display a warning for newly downloaded applications from unknown publishers. If you encounter this, it's a standard security measure and usually not an indication of a problem with the software.</li>
              <li>To proceed, click on "More Info" in the SmartScreen dialog.</li>
              <li>Then, select "Run Anyway" to bypass the warning and continue with the installation. TestMasterHub is a safe application, and this step is only necessary due to its recent release status.</li>
            </ul>
          </li>
          <li><strong>Launch TestMasterHub:</strong>
            <ul>
              <li>After successful installation, you can launch the application from your operating system's application launcher.</li>
              <li>On Windows, you'll find it in the Start menu under "TestMasterHub."</li>
              <li>On macOS, it will be in your Applications folder.</li>
              <li>For Linux users, navigate to the directory where the binary was extracted and execute it via the terminal (e.g., <code>./TestMasterHub</code>).</li>
            </ul>
          </li>
          <li><strong>Verify Installation:</strong>
            <ul>
              <li>To confirm that TestMasterHub is correctly installed and functioning, open the application.</li>
              <li>Navigate to the "Settings" or "About" section within the application to check the version number.</li>
              <li>As a final verification, create a simple GET request to a public API (e.g., <code>https://jsonplaceholder.typicode.com/todos/1</code>) and ensure you receive a valid response.</li>
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
        <p>API request and response handling forms the fundamental core functionality of TestMasterHub. This feature empowers users to construct and send various types of HTTP requests—including GET, POST, PUT, DELETE, PATCH, and more—to any API endpoint. Upon execution, TestMasterHub meticulously captures and displays the full API response, which encompasses crucial details such as the HTTP status code (e.g., 200 OK, 404 Not Found), response headers, the complete response body (in formats like JSON, XML, or plain text), and critical performance metrics like response time and payload size. This comprehensive view provides a robust and transparent way to interact with APIs and validate their outputs.</p>
        
        <h5>Why use it?</h5>
        <p>Leveraging TestMasterHub's request handling feature offers numerous benefits that streamline your API development and testing workflows:</p>
        <ul>
          <li><strong>Rapid Endpoint Validation:</strong> Quickly test individual API endpoints to ensure they are accessible and return the expected responses without needing to write any boilerplate code.</li>
          <li><strong>Efficient Debugging:</strong> Gain immediate insights into API interactions. You can easily inspect request payloads sent to the server and analyze the full responses received, which is invaluable for debugging issues related to data formatting, authentication, or server-side logic.</li>
          <li><strong>Performance Optimization:</strong> By providing clear metrics on API response times and payload sizes, TestMasterHub helps you identify performance bottlenecks and optimize your APIs for better responsiveness and efficiency.</li>
          <li><strong>Customization for Complex Scenarios:</strong> The tool supports extensive customization of requests. You can add custom HTTP headers (e.g., for authorization, content type), include complex request bodies (e.g., JSON, form-data), and configure query parameters, enabling you to simulate a wide range of real-world API call scenarios.</li>
          <li><strong>Reduced Manual Effort:</strong> Automate the process of sending requests and analyzing responses, significantly reducing the manual effort traditionally associated with API testing.</li>
          <li><strong>No Coding Required for Basic Tests:</strong> Perform extensive API testing directly through a graphical user interface, making it accessible even for users without deep programming knowledge.</li>
        </ul>
        
        <h5>How to use it:</h5>
        <p>Performing an API request in TestMasterHub is a straightforward process:</p>
        <ol>
          <li><strong>Navigate to the Request Editor:</strong> From the main TestMasterHub dashboard, locate and click on the "Request Editor" tab or section. This is your primary workspace for crafting API calls.</li>
          <li><strong>Enter the API URL:</strong> In the dedicated input field, type or paste the complete URL of the API endpoint you wish to test (e.g., <code>https://api.yourdomain.com/v1/users</code>).</li>
          <li><strong>Select the Request Method:</strong> Choose the appropriate HTTP method from the dropdown menu (e.g., GET for retrieving data, POST for creating new resources, PUT for updating existing resources, DELETE for removing resources, or PATCH for partial updates).</li>
          <li><strong>Add Request Headers (Optional but Recommended):</strong> If your API requires authentication (e.g., API keys, OAuth tokens) or additional metadata (e.g., <code>Content-Type</code>, <code>Accept</code>), navigate to the "Headers" tab and add them as key-value pairs.</li>
          <li><strong>Include a Request Body (for relevant methods):</strong> For methods like POST, PUT, and PATCH, you will typically need to send data in the request body. Switch to the "Body" tab, select the appropriate content type (e.g., JSON, form-data), and enter your data.</li>
          <li><strong>Click "Send":</strong> Once your request is fully configured, click the "Send" button (usually prominent). TestMasterHub will dispatch the request to the API.</li>
          <li><strong>Review the Response:</strong> The response panel will populate with the results. Carefully review the HTTP status code (e.g., 200 OK, 401 Unauthorized), the full response body, all returned headers, and the precise execution time of the request.</li>
        </ol>
        
        <h5>Example API Request:</h5>
        <p>Here's an example of a GET request to retrieve user data:</p>
        <pre><code class="language-javascript">GET https://api.testmasterhub.com/users/12345
Headers:
    Authorization: Bearer &lt;your_auth_token&gt;
    Content-Type: application/json</code></pre>
        
        <h5>Example API Response:</h5>
        <p>A typical successful JSON response for the above request might look like this:</p>
        <pre><code class="language-javascript">{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "status": "active",
    "created_at": "2023-01-15T10:30:00Z"
}</code></pre>
        <p>This detailed handling of requests and responses ensures that TestMasterHub provides a comprehensive environment for effective API interaction and validation.</p>
      </div>
    `
  },
  'Collections': {
    title: 'Collections - Organizing Requests',
    icon: <FaLayerGroup />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Collections in TestMasterHub are powerful organizational units that allow you to group multiple API requests into a structured and manageable format. Think of a collection as a folder or a suite that contains a series of related API calls. This feature is fundamental for organizing APIs related to a specific service, simulating complex business workflows, performing end-to-end testing scenarios, and running multiple requests in sequence to mimic real-world user interactions.</p>
        
        <h5>Why use it?</h5>
        <p>The strategic use of collections offers significant advantages for API testing and team collaboration:</p>
        <ul>
          <li><strong>Systematic Organization:</strong> Collections enable you to categorize and organize API requests systematically, preventing clutter in your workspace. This structured approach makes it easy to locate, understand, and manage your growing number of API tests.</li>
          <li><strong>Batch Execution:</strong> Instead of executing APIs individually, collections allow you to run multiple requests at once. This is crucial for integration testing, where a series of API calls might need to be executed in a specific order to test a complete feature or workflow.</li>
          <li><strong>Workflow Simulation:</strong> Collections are ideal for simulating realistic API workflows. For instance, you can create a collection that first authenticates a user (POST /login), then retrieves user data (GET /users/{id}), and finally updates a profile (PUT /users/{id}). This mirrors how an application interacts with its backend.</li>
          <li><strong>Reusability and Efficiency:</strong> Once an API request is part of a collection, it can be easily reused and rerun. This saves time and effort, as you don't need to reconfigure requests repeatedly. Common requests can be stored and accessed across projects.</li>
          <li><strong>Team Collaboration:</strong> Collections can be easily imported and exported, facilitating seamless sharing and collaboration among team members. This ensures that everyone on the team is working with the same set of tests and configurations, promoting consistency in testing practices.</li>
          <li><strong>Environment Integration:</strong> Collections can be linked to specific environments, allowing you to run the same set of tests against different configurations (e.g., development, staging, production) by simply switching the active environment.</li>
        </ul>
        
        <h5>How to create and use collections:</h5>
        <p>Follow these steps to effectively create, manage, and utilize collections in TestMasterHub:</p>
        <ol>
          <li><strong>Navigate to the Collections Page:</strong> From the TestMasterHub main navigation, click on the "Collections" tab or icon to access the collection management interface.</li>
          <li><strong>Click "New Collection":</strong> On the Collections page, you'll find a prominent "New Collection" button. Click it to initiate the creation of a new collection.</li>
          <li><strong>Provide a Meaningful Name:</strong> A dialog box will prompt you to enter a name for your new collection. Choose a descriptive name that reflects the purpose or scope of the requests it will contain (e.g., "User Management APIs", "Order Processing Workflow").</li>
          <li><strong>Click "Save":</strong> Confirm the name and click "Save" to create an empty collection. This new collection will now appear in your list of available collections.</li>
          <li><strong>Add API Requests:</strong> Select your newly created collection. Inside the collection view, you'll see an "Add Request" button. Click it to add individual API requests to this collection. For each request, configure its URL, HTTP method, headers, and body as needed.</li>
          <li><strong>Organize Requests within Folders (Optional):</strong> For very large collections, you can further organize requests into sub-folders. This provides an additional layer of structure, making navigation and management even easier (e.g., "Authentication", "Products", "Checkout" within an "E-commerce API" collection).</li>
          <li><strong>Execute the Collection:</strong> You have the flexibility to execute the entire collection at once (running all requests in sequence) or select and run specific requests within the collection. This is particularly useful for debugging or focusing on specific parts of a workflow.</li>
        </ol>
        
        <p>Collections serve as the backbone of organized, efficient, and repeatable API testing. By properly structuring your tests with collections, you enhance productivity, streamline collaboration, and ensure consistent validation across your project lifecycle.</p>
      </div>
    `
  },
  'Assertions': {
    title: 'Assertions and Validations',
    icon: <FaCheck />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Assertions and validations in TestMasterHub are crucial mechanisms used to programmatically verify the correctness and integrity of API responses. Instead of manually inspecting every response, assertions allow you to define expected outcomes (e.g., status codes, response times, specific data values or structures within the response body) that TestMasterHub automatically checks after each API call. If an assertion fails, it indicates a deviation from the expected behavior, signaling a potential issue with the API.</p>
        
        <h5>Why use it?</h5>
        <p>Automating validations with assertions brings significant advantages to your API testing strategy:</p>
        <ul>
          <li><strong>Automated Verification:</strong> Assertions fully automate the process of checking API responses against predefined expected values. This eliminates tedious manual verification, especially for large numbers of tests or frequent regressions.</li>
          <li><strong>Instant Failure Detection:</strong> TestMasterHub highlights failures instantly when an assertion fails. This immediate feedback loop helps developers and testers quickly pinpoint issues, reducing the time spent on debugging and troubleshooting.</li>
          <li><strong>Data Integrity Assurance:</strong> By validating specific data points and structures within the response body, assertions help ensure that your APIs consistently conform to expected data models and maintain data integrity across different operations.</li>
          <li><strong>Comprehensive Validation Types:</strong> TestMasterHub provides a rich set of built-in assertion functions that cover various validation scenarios, from simple equality checks to complex pattern matching and structural validation.</li>
          <li><strong>Improved API Reliability:</strong> Continuous assertion-based testing helps catch regressions and unexpected changes early in the development cycle, leading to more stable, reliable, and predictable APIs.</li>
          <li><strong>Documentation Through Tests:</strong> Well-written assertions effectively serve as living documentation for your API's expected behavior, making it easier for new team members to understand API contracts.</li>
        </ul>
        
        <h5>Supported Assertions:</h5>
        <p>TestMasterHub provides a comprehensive set of assertion functions accessible via the <code>TMH.expect()</code> syntax within your test scripts. Below are detailed examples of commonly used assertions:</p>
        
        <h6>1. Status Code Validation: <code>toBe(expectedStatusCode)</code></h6>
        <p>Verifies that the HTTP status code of the API response matches the expected value.</p>
        <pre><code class="language-javascript">TMH.test("Status code should be 200 OK for successful retrieval", () => {
    TMH.expect(TMH.response.status()).toBe(200);
});

TMH.test("Status code should be 404 Not Found for non-existent resource", () => {
    TMH.expect(TMH.response.status()).toBe(404);
});</code></pre>
        
        <h6>2. Response Time Validation: <code>toBeBelow(maxTimeInMs)</code></h6>
        <p>Checks if the total time taken for the API request and response cycle is below a specified threshold in milliseconds.</p>
        <pre><code class="language-javascript">TMH.test("Response time must be below 500ms for critical operations", () => {
    TMH.expect(TMH.response.time()).toBeBelow(500);
});

TMH.test("Response time for batch process should be under 5000ms", () => {
    TMH.expect(TMH.response.time()).toBeBelow(5000);
});</code></pre>
        
        <h6>3. JSON Property Existence: <code>toBeDefined()</code></h6>
        <p>Asserts that a specific property within the JSON response body exists and is not <code>undefined</code>.</p>
        <pre><code class="language-javascript">TMH.test("Response should contain 'user_id' for authenticated requests", () => {
    TMH.expect(TMH.response.json().user_id).toBeDefined();
});

TMH.test("Product data must include 'price'", () => {
    TMH.expect(TMH.response.json().product.price).toBeDefined();
});</code></pre>
        
        <h6>4. JSON Value Matching: <code>toBe(expectedValue)</code></h6>
        <p>Compares a specific value from the JSON response body to an exact expected value (case-sensitive and type-sensitive).</p>
        <pre><code class="language-javascript">TMH.test("User name should be 'John Doe' as per creation", () => {
    TMH.expect(TMH.response.json().name).toBe("John Doe");
});

TMH.test("Order status should be 'completed' after processing", () => {
    TMH.expect(TMH.response.json().orderStatus).toBe("completed");
});</code></pre>
        
        <h6>5. Response Content Validation (Regex): <code>toMatch(regexPattern)</code></h6>
        <p>Asserts that a string value within the response matches a specified regular expression pattern. This is useful for validating formats like tokens, IDs, or specific string structures.</p>
        <pre><code class="language-javascript">TMH.test("Auth token is in a valid JWT format (starts with 'ey')", () => {
    TMH.expect(TMH.response.json().token).toMatch(/^ey[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
});

TMH.test("Error message contains 'Invalid Input'", () => {
    TMH.expect(TMH.response.json().message).toMatch(/Invalid Input/i); // Case-insensitive match
});</code></pre>

        <h6>6. Value Comparison (Greater Than): <code>toBeGreaterThan(minValue)</code></h6>
        <p>Checks if a numeric value from the response is strictly greater than a specified minimum value.</p>
        <pre><code class="language-javascript">TMH.test("Total item count should be greater than 0 for a valid cart", () => {
    TMH.expect(TMH.response.json().itemCount).toBeGreaterThan(0);
});

TMH.test("User age must be greater than 18", () => {
    TMH.expect(TMH.response.json().age).toBeGreaterThan(18);
});</code></pre>

        <h6>7. Value Comparison (Less Than): <code>toBeLessThan(maxValue)</code></h6>
        <p>Checks if a numeric value from the response is strictly less than a specified maximum value.</p>
        <pre><code class="language-javascript">TMH.test("Product price should be less than 100 for affordable range", () => {
    TMH.expect(TMH.response.json().price).toBeLessThan(100);
});

TMH.test("Remaining stock should be less than 10 after a purchase", () => {
    TMH.expect(TMH.response.json().stock).toBeLessThan(10);
});</code></pre>

        <h6>8. Array/String Contains: <code>toContain(expectedItem)</code></h6>
        <p>Asserts that an array includes a specific item, or a string contains a specific substring.</p>
        <pre><code class="language-javascript">TMH.test("User roles array should contain 'admin'", () => {
    TMH.expect(TMH.response.json().user.roles).toContain("admin");
});

TMH.test("Search results description contains 'API'", () => {
    TMH.expect(TMH.response.json().results[0].description).toContain("API");
});</code></pre>

        <h6>9. Object Property Existence: <code>toHaveProperty(propertyName)</code></h6>
        <p>Asserts that an object within the JSON response has a specific property, regardless of its value.</p>
        <pre><code class="language-javascript">TMH.test("User object should definitely have an 'email' property", () => {
    TMH.expect(TMH.response.json().user).toHaveProperty("email");
});

TMH.test("Configuration object must include 'timeout' setting", () => {
    TMH.expect(TMH.response.json().config).toHaveProperty("timeout");
});</code></pre>

        <h6>10. Check for Null Value: <code>toBeNull()</code></h6>
        <p>Verifies that a specific value from the response is strictly <code>null</code>.</p>
        <pre><code class="language-javascript">TMH.test("Error message should be null for successful operations", () => {
    TMH.expect(TMH.response.json().error).toBeNull();
});

TMH.test("Old password field should be null after reset", () => {
    TMH.expect(TMH.response.json().oldPassword).toBeNull();
});</code></pre>

        <h6>11. Check Type of Value: <code>toBeType(expectedType)</code></h6>
        <p>Asserts that a value from the response is of a specific JavaScript type (e.g., "string", "number", "boolean", "object", "array").</p>
        <pre><code class="language-javascript">TMH.test("User ID should be a number", () => {
    TMH.expect(TMH.response.json().id).toBeType("number");
});

TMH.test("Product name should be a string", () => {
    TMH.expect(TMH.response.json().productName).toBeType("string");
});

TMH.test("Features array should be an array", () => {
    TMH.expect(TMH.response.json().features).toBeType("array");
});</code></pre>

        <h6>12. Check Length of Array/String: <code>toHaveLength(expectedLength)</code></h6>
        <p>Asserts that an array or a string from the response has a specific number of elements or characters.</p>
        <pre><code class="language-javascript">TMH.test("Items array should have exactly 3 items in the initial load", () => {
    TMH.expect(TMH.response.json().items).toHaveLength(3);
});

TMH.test("API key string length should be 32 characters", () => {
    TMH.expect(TMH.response.json().apiKey).toHaveLength(32);
});</code></pre>
        
        <p><strong>AI Assistance for Assertions:</strong> TestMasterHub offers an innovative Auto Assertion module. When enabled, this feature leverages artificial intelligence to intelligently analyze your API responses and automatically suggest or generate relevant assertions, significantly speeding up test creation and ensuring comprehensive coverage. This smart capability helps you write robust tests even faster.</p>
        <p>Assertions form the unbreakable foundation of automated API testing. By meticulously defining and executing these checks, you can validate API responses without manual inspection, ensuring the reliability, correctness, and performance of your backend services.</p>
      </div>
    `
  },
  'Environment': {
    title: 'Environment Management',
    icon: <FaGlobe />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Environment management in TestMasterHub provides a sophisticated way to handle different configurations for your API tests. It allows you to create and seamlessly switch between various API environments, such as Development, Staging, Production, or even specific feature branches. This feature is crucial for managing dynamic API variables (like base URLs, authentication tokens, API keys, and user credentials) without hardcoding them directly into your API requests, ensuring flexibility and security across your testing lifecycle.</p>
        
        <h5>Why use it?</h5>
        <p>Effective environment management is a cornerstone of scalable and secure API testing. Here’s why it’s indispensable:</p>
        <ul>
          <li><strong>Dynamic Variable Definition:</strong> Define variables specific to each environment (e.g., <code>BASE_URL=https://dev.api.com</code> for development, <code>BASE_URL=https://prod.api.com</code> for production). This allows you to use generic variable names in your requests (e.g., <code>{{BASE_URL}}/users</code>), which automatically resolve to the correct value based on the active environment.</li>
          <li><strong>Reduced Manual Effort & Errors:</strong> Eliminates the need to manually change API URLs, authentication keys, or other sensitive parameters when switching between testing environments. This drastically reduces human error and speeds up test execution.</li>
          <li><strong>Enhanced Security:</strong> Environment variables provide a secure way to store sensitive information like API keys, database credentials, or OAuth tokens. These values are encapsulated within the environment, preventing them from being exposed in shared request files or version control systems.</li>
          <li><strong>Seamless Environment Switching:</strong> With a single click or selection, you can switch the active environment, instantly applying all associated variables to your requests. This makes it effortless to test the same collection of APIs against different stages of your application's deployment.</li>
          <li><strong>Promotes Reusability:</strong> Your API requests and collections become highly reusable. The same test suite can be executed against any environment simply by selecting the desired context, ensuring consistency in testing methodologies.</li>
          <li><strong>Supports Diverse Workflows:</strong> Whether you're debugging on a local machine, validating changes on a staging server, or performing regression tests on production, environment management supports all these diverse workflows efficiently.</li>
        </ul>
        
        <h5>How to create and use environments:</h5>
        <p>Setting up and utilizing environments in TestMasterHub is intuitive:</p>
        <ol>
          <li><strong>Navigate to the Environment Page:</strong> In the TestMasterHub application, locate and click on the "Environments" tab or section in the main navigation. This page lists all your created environments.</li>
          <li><strong>Click "New Environment":</strong> On the Environment page, click the "New Environment" button to begin creating a new environment configuration.</li>
          <li><strong>Add Key-Value Pairs:</strong> For each environment, you will define a set of key-value pairs. The "key" is the name of your variable (e.g., <code>BASE_URL</code>, <code>AUTH_TOKEN</code>, <code>ADMIN_USERNAME</code>), and the "value" is its corresponding data for that specific environment (e.g., <code>https://dev.api.example.com</code>, <code>your_dev_token</code>, <code>dev_admin</code>). You can add as many variables as needed.</li>
          <li><strong>Save the Environment:</strong> Once you've defined all the necessary variables, save the new environment. It will now appear in your list of available environments.</li>
          <li><strong>Set as Active:</strong> To use an environment, select it from the dropdown or list on the Environment page or directly from the request editor. The selected environment becomes the "active" environment, meaning its variables will be used for all subsequent requests.</li>
          <li><strong>Use Environment Variables in API Requests:</strong> In your API requests (URLs, headers, body, query parameters), reference environment variables using double curly braces syntax: <code>{{variable_name}}</code>. For example, your URL might be <code>{{BASE_URL}}/users</code>, and a header could be <code>Authorization: Bearer {{AUTH_TOKEN}}</code>.</li>
          <li><strong>Execute Request:</strong> When you execute a request, TestMasterHub automatically replaces <code>{{variable_name}}</code> with the value from the currently active environment.</li>
        </ol>
        
        <h5>Dynamic Environment Variables via Test Scripts:</h5>
        <p>Beyond static definitions, TestMasterHub allows you to set environment variables dynamically within your test scripts. This is incredibly powerful for scenarios like extracting a generated token from a login response and using it in subsequent requests.</p>
        <pre><code class="language-javascript">var jsonData = TMH.response.json(); // Parse the JSON response
TMH.env.set("token", jsonData.access_token); // Set an environment variable named 'token' with the extracted value
console.log("Saved 'token' = '" + jsonData.access_token + "' to environment for subsequent use.");</code></pre>
        
        <h5>Clearing Environment Variables:</h5>
        <p>For security or testing purposes, you might need to clear environment variables:</p>
        <pre><code class="language-javascript">// Clear a specific variable by its key
TMH.env.clear("token"); 
console.log("Token environment variable cleared.");

// Clear all variables from the currently active environment
TMH.env.clearAll();
console.log("All environment variables cleared from active environment.");</code></pre>
        
        <p>Environment management is a critical feature for maintaining flexibility, security, and efficiency in your API testing workflow, allowing the same suite of tests to run robustly across diverse deployment environments without modification.</p>
      </div>
    `
  },
'Test Scripts': {
  title: 'Test Scripts & Custom Functions',
  icon: <FaPlay />,
  content: `
    <div class="resource-section">
      <h5>What is it?</h5>
      <p>Test scripts in TestMasterHub provide a powerful and flexible way to extend your API testing capabilities beyond simple request-response checks. Written in JavaScript, these scripts allow you to automate complex API response validation logic, dynamically manage environment variables based on previous responses, and perform intricate assertions using TestMasterHub's built-in assertion syntax. This feature transforms basic API testing into a sophisticated, programmatic validation workflow, enabling highly customized and robust test scenarios.</p>
      
      <h5>Core Features:</h5>
      <p>Test scripts unlock a range of advanced functionalities:</p>
      <ol>
        <li><strong>Dynamic Response Parsing & Manipulation:</strong> Scripts enable you to programmatically access, parse, and extract specific data from JSON or other structured API responses. You can then manipulate this data for further use in subsequent requests or assertions.</li>
        <li><strong>Advanced Assertions & Validations:</strong> While TestMasterHub offers built-in assertions, test scripts allow you to combine them with custom JavaScript logic. This means you can create complex validation rules that might involve multiple conditions, iterative checks, or external data comparisons.</li>
        <li><strong>Real-time Environment Management:</strong> A highly valuable feature is the ability to dynamically set and clear environment variables within your scripts. For example, you can extract an authentication token from a login API's response and immediately set it as an environment variable, which can then be used automatically by all subsequent requests in the same collection.</li>
        <li><strong>Custom Function Registration & Reuse:</strong> TestMasterHub allows you to define and register your own reusable JavaScript functions. This promotes modularity and code reusability, enabling you to encapsulate complex logic (e.g., data generation, custom validation algorithms) and call it across multiple test scripts without duplication.</li>
        <li><strong>Pre-request and Post-response Execution:</strong> Scripts can be configured to run either *before* an API request is sent (pre-request scripts, for setting up dynamic data or authentication) or *after* the response is received (test scripts, for validation and follow-up actions).</li>
      </ol>
      
      <h5>Response Parsing Examples:</h5>
      <p>Accessing and working with API response data is fundamental in test scripts:</p>
      <pre><code class="language-javascript">// --- Accessing JSON Response Body ---
// Use TMH.response.json() to parse the response body as a JavaScript object.
// This is essential for asserting on specific data points within the JSON.
var jsonData = TMH.response.json();
console.log("Parsed JSON data:", jsonData);

// Example: Accessing a specific property
console.log("User ID from response:", jsonData.user.id);
console.log("Status message:", jsonData.message);

// --- Getting Response Status Code ---
// TMH.response.status() returns the HTTP status code (e.g., 200, 404).
var statusCode = TMH.response.status();
console.log("HTTP Status Code:", statusCode);

// --- Getting Response Time ---
// TMH.response.time() returns the total time taken for the request in milliseconds.
var responseTime = TMH.response.time();
console.log("Response Time (ms):", responseTime);

// --- Accessing Response Headers ---
// TMH.response.headers() returns an object containing all response headers.
var responseHeaders = TMH.response.headers();
console.log("Content-Type Header:", responseHeaders['content-type']);

// --- Getting Raw Response Body ---
// TMH.response.raw() returns the raw, unparsed response body (string).
var rawBody = TMH.response.raw();
console.log("Raw Response Body Snippet:", rawBody.substring(0, 100) + "...");</code></pre>
      
      <h5>Dynamic Environment Variable Usage:</h5>
      <p>A common and powerful use case for test scripts is to extract dynamic values (like authentication tokens or newly created resource IDs) from a response and store them as environment variables for subsequent requests.</p>
      <pre><code class="language-javascript">var loginResponse = TMH.response.json();
// Assuming the login API returns an 'access_token'
if (loginResponse && loginResponse.access_token) {
  TMH.env.set("AUTH_TOKEN", loginResponse.access_token);
  console.log("Successfully extracted and set AUTH_TOKEN in environment.");
} else {
  console.error("Access token not found in login response.");
}

// In a subsequent request, you can use: Authorization: Bearer {{AUTH_TOKEN}}</code></pre>

      <h5>Custom Functions:</h5>
      <p>To improve code organization and reusability, you can define custom JavaScript functions and register them with TestMasterHub. These functions can then be called from any script.</p>
      <pre><code class="language-javascript">// --- Registering a Custom Function ---
// Define a function that performs a specific validation or data manipulation.
// TMH.registerFunction("functionName", (param1, param2) => { ... });
TMH.registerFunction("validateJwtTokenFormat", (token) => {
  TMH.test("JWT token format check", () => {
    // A basic regex for JWT (Header.Payload.Signature)
    TMH.expect(token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
  });
  TMH.test("JWT token should not be empty", () => {
    TMH.expect(token.length).toBeGreaterThan(0);
  });
  console.log("Custom validation 'validateJwtTokenFormat' executed.");
});

// --- Using a Custom Function ---
// Once registered, you can call it anywhere within your scripts using TMH.callFunction.
var userToken = TMH.response.json().token;
if (userToken) {
  TMH.callFunction("validateJwtTokenFormat", userToken);
} else {
  console.warn("No token found to validate with custom function.");
}</code></pre>
      
      <h5>Complete Test Script Example:</h5>
      <p>This example demonstrates a comprehensive test script that combines response parsing, environment variable setting, built-in assertions, and custom function calls:</p>
      <pre><code class="language-javascript">// 1. Parse the JSON response from the current API call
var jsonData = TMH.response.json();

// 2. Dynamically set an environment variable from the response
//    This allows subsequent requests to use the extracted 'session_id'
if (jsonData && jsonData.session_id) {
  TMH.env.set("current_session_id", jsonData.session_id);
  console.log("Session ID '" + jsonData.session_id + "' set as environment variable.");
} else {
  console.warn("Session ID not found in response, cannot set environment variable.");
}

// 3. Perform standard assertions on the API response
TMH.test("API call should return a 201 Created status code", () => {
  TMH.expect(TMH.response.status()).toBe(201);
});

TMH.test("Response time for resource creation should be under 1500ms", () => {
  TMH.expect(TMH.response.time()).toBeBelow(1500);
});

TMH.test("Newly created resource should have an 'id' defined", () => {
  TMH.expect(jsonData.id).toBeDefined();
});

TMH.test("Resource name should match the expected 'New Item'", () => {
  TMH.expect(jsonData.name).toBe("New Item");
});

// 4. Register a custom validation function for reusability
TMH.registerFunction("validateResourceProperties", (resource) => {
  TMH.test("Resource object must contain 'created_at' timestamp", () => {
    TMH.expect(resource).toHaveProperty("created_at");
  });
  TMH.test("The 'status' of the resource should be 'active'", () => {
    TMH.expect(resource.status).toBe("active");
  });
  console.log("Custom function 'validateResourceProperties' completed.");
});

// 5. Call the custom function with relevant data from the response
if (jsonData) {
  TMH.callFunction("validateResourceProperties", jsonData);
} else {
  console.error("Cannot call custom function, JSON data is null.");
}

console.log("Test script execution finished.");</code></pre>
      
      <p>Test scripts provide powerful extensibility and automation capabilities to your API testing workflow. They enable sophisticated validations, dynamic test behavior, and robust data management, ensuring that your APIs are thoroughly tested and reliable.</p>
    </div>
  `
},
  'Reports': {
    title: 'Understanding Reports',
    icon: <FaFileAlt />,
    content: `
      <div class="resource-section">
        <h5>What is it?</h5>
        <p>Reports in TestMasterHub are comprehensive analytical summaries generated after each API test execution, whether it's a single request, a collection run, or an automated build. These reports provide invaluable insights into test outcomes, helping you assess API health, performance, and correctness. They typically include high-level summary statistics, detailed information for each executed request and its response, the pass/fail status of all assertions, critical performance metrics, and a detailed log of any errors or failures encountered during the test run.</p>
        
        <h5>Why use it?</h5>
        <p>Comprehensive reporting is a cornerstone of effective quality assurance and continuous improvement for your APIs. Here’s why it’s essential:</p>
        <ul>
          <li><strong>Track Execution History & Trends:</strong> Reports allow you to maintain a historical record of all API test executions. Over time, you can identify patterns in API failures, performance regressions, or improvements, providing data-driven insights into your API's evolution.</li>
          <li><strong>Identify Issues & Debug:</strong> Detailed reports pinpoint exactly where and why a test failed. They provide granular information about failed assertions, request/response payloads, and error messages, which are crucial for rapid debugging and issue resolution.</li>
          <li><strong>Facilitate Team Collaboration:</strong> Reports serve as a universal communication tool. They can be easily shared with development teams, product managers, and stakeholders, ensuring everyone has a clear, objective understanding of API quality and testing progress. This promotes transparency and alignment.</li>
          <li><strong>Document API Behavior:</strong> Beyond just showing pass/fail, reports document the actual behavior of your APIs under test conditions. This can be valuable for compliance, auditing, or simply understanding how an API responds to various inputs over time.</li>
          <li><strong>Performance Monitoring:</strong> Performance metrics such as response times are captured in reports. This allows you to monitor API performance trends, identify bottlenecks, and ensure that your APIs meet predefined performance SLAs (Service Level Agreements).</li>
          <li><strong>Test Coverage & Quality Metrics:</strong> By analyzing reports, you can gain insights into your test coverage. The success rate and number of passed assertions provide quantifiable metrics for the overall quality and stability of your API suite.</li>
          <li><strong>Evidence for Releases:</strong> Before deploying new API versions to production, reports provide clear evidence that all functionalities are working as expected, supporting release decisions.</li>
        </ul>
        
        <h5>Report Components:</h5>
        <p>TestMasterHub reports are structured to provide a holistic view of your test results:</p>
        <ol>
          <li><strong>Summary Dashboard:</strong>
            <ul>
              <li><strong>Overall Statistics:</strong> A high-level overview showing total tests run, passed tests, failed tests, and total execution time.</li>
              <li><strong>Pass Rate:</strong> A clear percentage or graphical representation of successful tests.</li>
              <li><strong>Environment & Collections:</b> Information on which environment was used and which collections were executed.</li>
              <li><strong>Timestamp:</strong> When the build/test run started and ended.</li>
            </ul>
          </li>
          <li><strong>Request Details:</strong>
            <ul>
              <li><strong>Individual Request Information:</strong> For each API request executed, detailed information is provided, including the full URL, HTTP method, request headers, and request body.</li>
              <li><strong>Response Details:</strong> The corresponding HTTP status code, response headers, and the complete response body received from the API are displayed.</li>
              <li><strong>Performance Metrics:</strong> Specific response time for each request, and sometimes network latency or payload size.</li>
            </ul>
          </li>
          <li><strong>Assertion Results:</strong>
            <ul>
              <li><strong>Assertion-Level Status:</strong> A clear pass/fail status for every assertion defined within your test scripts.</li>
              <li><strong>Expected vs. Actual:</strong> For failed assertions, the report clearly indicates the expected value and the actual value received, making it easy to understand the discrepancy.</li>
              <li><strong>Assertion Name:</strong> The descriptive name you gave to each <code>TMH.test()</code> block.</li>
            </ul>
          </li>
          <li><strong>Response Timeline (Visual):</strong>
            <ul>
              <li>A graphical representation (e.g., bar chart, waterfall chart) showing the response times of individual requests within a collection or build. This helps visualize performance patterns and identify slow requests.</li>
            </ul>
          </li>
          <li><strong>Error Log / Failure Details:</strong>
            <ul>
              <li><strong>Detailed Error Messages:</strong> For any failed test or assertion, comprehensive error messages and stack traces (if applicable) are provided, guiding you to the root cause.</li>
              <li><strong>Contextual Information:</strong> Relevant data at the point of failure, helping in reproducing and debugging the issue.</li>
            </ul>
          </li>
        </ol>
        
        <h5>How to access reports:</h5>
        <p>Accessing your test reports in TestMasterHub is designed to be straightforward:</p>
        <ol>
          <li><strong>Navigate to the Reports Page:</strong> In the TestMasterHub application, find and click on the "Reports" tab or icon in the main navigation. This page serves as your central repository for all generated reports.</li>
          <li><strong>Select a Build Execution from History:</strong> The Reports page will display a list of all historical build executions or individual test runs. Each entry typically includes a timestamp and a summary of its outcome. Click on the specific build or run you wish to inspect.</li>
          <li><strong>View the Summary Dashboard:</strong> Upon selecting a report, you'll first see the summary dashboard, which provides an immediate high-level overview of the test results.</li>
          <li><strong>Drill Down into Details:</strong> Navigate through the report sections (e.g., "Requests," "Assertions," "Logs") to drill down into specific collection results, individual request details, or assertion outcomes.</li>
          <li><strong>Export Reports:</strong> TestMasterHub allows you to export reports in various formats, such as PDF or HTML. This is useful for sharing with team members, archiving, or integrating with other documentation systems.</li>
        </ol>
        
        <p>Reports can be automatically generated after build executions (as configured in the Build settings) or created on-demand for specific test runs. They provide invaluable, data-driven insights into API behavior and test coverage, empowering teams to maintain and continuously improve API quality over time.</p>
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