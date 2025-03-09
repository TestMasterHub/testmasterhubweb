# TestMasterHub - Complete Resources Page

TestMasterHub is a powerful and intuitive API testing tool designed for developers and testers to validate API responses efficiently. This page serves as a comprehensive guide covering every feature in **TestMasterHub**, explaining what it does, why it exists, and how to use it in detail.

---

## 📌 **1. API Request & Response Handling**

### ❓ What is it?

API request and response handling is the core functionality of TestMasterHub, enabling users to send HTTP requests such as GET, POST, PUT, DELETE, and PATCH. Users can also inspect responses, including response status codes, headers, response time, and response size. This feature provides a robust way to interact with APIs, simulate different request scenarios, and validate expected outputs.

### 🎯 Why use it?

- Allows quick testing of API endpoints to ensure they return the expected responses.
- Helps developers debug API interactions by checking request payloads and responses.
- Provides insights into API response times and size, helping optimize performance.
- Supports headers and body customization, enabling complex API calls.
- Allows users to simulate various HTTP methods and scenarios without writing code.

### 🔧 How to use it?

1. Navigate to the **Request Editor** in TestMasterHub.
2. Enter the API URL in the provided input field.
3. Select the request method (GET, POST, PUT, DELETE, PATCH, etc.).
4. Add request headers if authentication or additional metadata is required.
5. (Optional) Include a request body for POST, PUT, or PATCH requests.
6. Click **Send** to execute the API request.
7. Review the response, which includes the status code, response body, headers, and execution time.

### Example:

```http
GET https://api.testmasterhub.com/users/12345
Headers:
    Authorization: Bearer <token>
```

#### Response:

```json
{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

---

## 📂 **2. Collections - Organizing Requests**

### ❓ What is it?

Collections in TestMasterHub help users group multiple API requests into a structured format, making it easier to execute and manage them. Collections are useful for organizing APIs related to a specific service, testing workflows, and running multiple requests in sequence.

### 🎯 Why use it?

- Organizes API requests systematically, preventing clutter and improving productivity.
- Allows users to execute multiple requests at once instead of testing APIs individually.
- Helps simulate API workflows, such as user authentication followed by data retrieval.
- Enables reusability by storing frequently used API requests in a structured format.
- Supports importing and exporting collections for team collaboration.

### 🔧 How to create a collection?

1. Navigate to the **Collections Page**.
2. Click the **New Collection** button.
3. Provide a meaningful name for your collection.
4. Click **Save** to create an empty collection.
5. Add API requests to the collection by clicking **Add Request**.
6. Save and organize requests within the collection.
7. Execute the entire collection or specific requests as needed.

---

## ✅ **3. Assertions and Validations**

### ❓ What is it?

Assertions and validations are used to verify API responses dynamically. Assertions help ensure that an API returns the expected status code, response time, and specific data in the response body. TestMasterHub provides built-in functions to define and execute validations automatically.

### 🎯 Why use it?

- Automates the process of checking API responses against expected values.
- Reduces manual effort in debugging APIs by highlighting failures instantly.
- Helps maintain data integrity by ensuring API responses conform to expected structures.
- Supports different types of assertions, including status codes, response time, and JSON field validation.
- Improves API reliability by ensuring that responses remain consistent across versions.

### 🔧 Supported Assertions:

```javascript
// Validate Status Code
TMH.test("Status code should be 200", () => {
    TMH.expect(TMH.response.status()).toBe(200);
});

// Ensure Response Time is within limits
TMH.test("Response time must be below 500ms", () => {
    TMH.expect(TMH.response.time()).toBeBelow(500);
});

// Check if Response Contains Expected Property
TMH.test("Response should contain 'user_id'", () => {
    TMH.expect(TMH.response.json().user_id).toBeDefined();
});
```

---

## 🌍 **4. Environment Management**

### ❓ What is it?

Environment management in TestMasterHub allows users to create and switch between different API environments, such as Development, Staging, and Production. This feature helps manage API variables dynamically and prevents hardcoding values in requests.

### 🎯 Why use it?

- Simplifies API testing by allowing users to define variables for different environments.
- Reduces manual effort by eliminating the need to change API URLs and keys manually.
- Enhances security by storing credentials and tokens securely in environment configurations.
- Supports variable substitution in requests, headers, and body fields.
- Enables seamless switching between environments for easy testing.

### 🔧 How to create and use environments?

1. Navigate to the **Environment Page**.
2. Click the **New Environment** button.
3. Add key-value pairs, such as `BASE_URL`, `API_KEY`, etc.
4. Save the environment and set it as active.
5. Use environment variables in API requests by referencing them as `{{variable_name}}`.
6. Select the desired environment before executing a request.

---

## 📊 **5. Build Page - Automate API Testing**

### ❓ What is it?

The Build feature in TestMasterHub allows users to automate the execution of API test collections with customized settings. Users can schedule test runs, configure retry attempts, and generate detailed reports after execution.

### 🎯 Why use it?

- Automates API testing, reducing the need for manual execution.
- Allows bulk execution of collections with retry mechanisms for failed requests.
- Provides execution logs and detailed reports for analysis.
- Enables teams to run API tests on a scheduled basis.
- Improves test efficiency by detecting failures early.

### 🔧 Configuration Fields:

| Field           | Description                                      |
|----------------|--------------------------------------------------|
| Collections    | Select which collections to run in the build    |
| Environment    | Choose the environment for test execution       |
| Retry Count    | Specify the number of retry attempts on failure |
| Generate Report | Enable or disable report generation            |

---

## 🎯 **Conclusion**

TestMasterHub is an advanced yet user-friendly API testing solution designed to streamline API validation processes. By providing robust features such as collections, environment management, assertions, automated test execution, and reporting, TestMasterHub empowers developers and testers to enhance their API testing workflows. Whether you are an experienced tester or a beginner, TestMasterHub's intuitive UI ensures that you can test APIs efficiently with minimal effort.

