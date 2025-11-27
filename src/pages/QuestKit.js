import React, { useState } from "react";
import { Helmet } from "react-helmet"; // ⬅️ add this
const TesterTools = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Test Data Generator
  const [dataType, setDataType] = useState("email");
  const [dataCount, setDataCount] = useState(10);
  const [generatedData, setGeneratedData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("US");

  // Bug Report
  const [bugReport, setBugReport] = useState({
    title: "",
    severity: "medium",
    environment: "",
    steps: "",
    expected: "",
    actual: "",
  });
  const getSeoForTab = (tab) => {
    switch (tab) {
      case "json-diff":
        return {
          title: "JSON Diff Tool – Compare JSON Online | TesterTools",
          description:
            "Free JSON Diff tool by TesterTools to compare JSON schema and API responses. Detect missing fields, extra properties, type mismatches, and array differences in seconds.",
          keywords:
            "json diff, json compare, compare json online, json schema diff, json response diff, api json diff, tester tools",
        };
      case "data-gen":
        return {
          title: "Test Data Generator for QA & Developers | TesterTools",
          description:
            "Generate realistic test data like emails, names, phone numbers, addresses, usernames and more. Ideal for QA engineers and API testing workflows.",
          keywords:
            "test data generator, fake data generator, qa test data, sample emails, sample names, dummy data, tester tools",
        };
      case "regex":
        return {
          title: "Online Regex Tester for QA & Developers | TesterTools",
          description:
            "Test and validate regular expressions online using TesterTools. Great for form validation, API response checks, and automation scripts.",
          keywords:
            "regex tester, regular expression tester, online regex tool, test regex, validate regex, qa regex",
        };
      case "bug-report":
        return {
          title: "Bug Report Template Generator for QA Teams | TesterTools",
          description:
            "Generate structured bug reports with severity, environment, steps, expected and actual results to improve QA communication and defect tracking.",
          keywords:
            "bug report template, qa bug report, defect template, bug reporting tool, tester tools",
        };
      default:
        return {
          title:
            "TesterTools – Free Online QA Tools (JSON Diff, Regex, Data Generator)",
          description:
            "TesterTools provides free online QA utilities including JSON Diff, test data generator, regex tester, bug report template, HTTP status codes reference, password generator, and more.",
          keywords:
            "testertools, tester tools, qa tools, json diff, json compare, online qa utilities, developer tools, test data generator, regex tester",
        };
    }
  };

  const seo = getSeoForTab(activeTab);

  // Regex
  const [regexPattern, setRegexPattern] = useState("");
  const [regexTest, setRegexTest] = useState("");

  // JSON Diff
  const [jsonLeft, setJsonLeft] = useState("");
  const [jsonRight, setJsonRight] = useState("");

  // Status Search
  const [statusSearch, setStatusSearch] = useState("");

  // Password
  const [passwordConfig, setPasswordConfig] = useState({
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    special: true,
  });
  const [generatedPassword, setGeneratedPassword] = useState("");

  // Timezone
  const [selectedTime, setSelectedTime] = useState("12:00");

  // Base64
  const [base64Input, setBase64Input] = useState("");
  const [base64Output, setBase64Output] = useState("");

  // Screenshot Annotator
  const [screenshot, setScreenshot] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawMode, setDrawMode] = useState("arrow");
  const [annotations, setAnnotations] = useState([]);
  const [currentAnnotation, setCurrentAnnotation] = useState(null);
  const canvasRef = React.useRef(null);

  // SQL
  const [sqlInput, setSqlInput] = useState("");
  const [sqlOutput, setSqlOutput] = useState("");

  // Copy to clipboard
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(label);
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  const tools = [
    {
      id: "data-gen",
      name: "Test Data Generator",
      icon: "📊",
      color: "primary",
    },
    {
      id: "bug-report",
      name: "Bug Report Template",
      icon: "🐛",
      color: "danger",
    },
    { id: "regex", name: "Regex Tester", icon: "💻", color: "success" },
    { id: "json-diff", name: "JSON Diff", icon: "📄", color: "warning" },
    {
      id: "screenshot",
      name: "Screenshot Annotator",
      icon: "🖼️",
      color: "info",
    },
    {
      id: "status-codes",
      name: "HTTP Status Codes",
      icon: "📚",
      color: "secondary",
    },
    { id: "password", name: "Password Generator", icon: "🔑", color: "dark" },
    {
      id: "timezone",
      name: "Timezone Converter",
      icon: "🕐",
      color: "primary",
    },
    {
      id: "base64",
      name: "Base64 Encoder/Decoder",
      icon: "🔒",
      color: "success",
    },
    { id: "sql", name: "SQL Formatter", icon: "🗄️", color: "info" },
  ];

  const statusCodes = {
    // 1xx Informational
    100: "Continue - Client should continue with request",
    101: "Switching Protocols - Server is switching protocols",
    102: "Processing - Server has received and is processing the request",
    103: "Early Hints - Used to return some response headers before final response",

    // 2xx Success
    200: "OK - Request succeeded",
    201: "Created - Resource successfully created",
    202: "Accepted - Request accepted for processing",
    203: "Non-Authoritative Information - Returned meta-information is not from origin server",
    204: "No Content - Success but no content to return",
    205: "Reset Content - Client should reset the document view",
    206: "Partial Content - Partial GET has been successful",
    207: "Multi-Status - Multiple status codes for multiple operations",
    208: "Already Reported - Members already enumerated in previous reply",
    226: "IM Used - Response is a representation of the result of one or more instance-manipulations",

    // 3xx Redirection
    300: "Multiple Choices - Multiple options for the resource",
    301: "Moved Permanently - Resource permanently moved to new URL",
    302: "Found - Resource temporarily moved to different URI",
    303: "See Other - Response to the request can be found under another URI",
    304: "Not Modified - Resource has not been modified since last request",
    305: "Use Proxy - Requested resource must be accessed through proxy",
    307: "Temporary Redirect - Resource temporarily moved, use same HTTP method",
    308: "Permanent Redirect - Resource permanently moved, use same HTTP method",

    // 4xx Client Errors
    400: "Bad Request - Invalid syntax",
    401: "Unauthorized - Authentication required",
    402: "Payment Required - Reserved for future use",
    403: "Forbidden - Server refuses request",
    404: "Not Found - Resource not found",
    405: "Method Not Allowed - HTTP method not allowed for resource",
    406: "Not Acceptable - Content characteristics not acceptable",
    407: "Proxy Authentication Required - Client must authenticate with proxy",
    408: "Request Timeout - Server timed out waiting for request",
    409: "Conflict - Request conflicts with current state of server",
    410: "Gone - Resource no longer available and will not be available again",
    411: "Length Required - Content-Length header field is required",
    412: "Precondition Failed - Precondition in headers evaluated to false",
    413: "Payload Too Large - Request entity is larger than server limits",
    414: "URI Too Long - URI provided was too long for server to process",
    415: "Unsupported Media Type - Media type not supported by server",
    416: "Range Not Satisfiable - Range specified by Range header cannot be fulfilled",
    417: "Expectation Failed - Expectation in Expect header cannot be met",
    418: "I'm a teapot - Server refuses to brew coffee because it's a teapot",
    421: "Misdirected Request - Request directed at server unable to produce response",
    422: "Unprocessable Entity - Request well-formed but unable to process",
    423: "Locked - Resource being accessed is locked",
    424: "Failed Dependency - Request failed due to failure of previous request",
    425: "Too Early - Server unwilling to risk processing replayed request",
    426: "Upgrade Required - Client should switch to different protocol",
    428: "Precondition Required - Origin server requires request to be conditional",
    429: "Too Many Requests - User has sent too many requests",
    431: "Request Header Fields Too Large - Header fields are too large",
    451: "Unavailable For Legal Reasons - Resource unavailable due to legal reasons",

    // 5xx Server Errors
    500: "Internal Server Error - Server error",
    501: "Not Implemented - Server does not support functionality required",
    502: "Bad Gateway - Invalid response from upstream server",
    503: "Service Unavailable - Server temporarily unavailable",
    504: "Gateway Timeout - Upstream server failed to send request in time",
    505: "HTTP Version Not Supported - HTTP version not supported by server",
    506: "Variant Also Negotiates - Transparent content negotiation error",
    507: "Insufficient Storage - Server unable to store representation",
    508: "Loop Detected - Server detected infinite loop while processing request",
    510: "Not Extended - Further extensions to request are required",
    511: "Network Authentication Required - Client needs to authenticate to gain network access",
  };

  const generateData = () => {
    const data = [];
    const first = [
      "John",
      "Jane",
      "Mike",
      "Sarah",
      "David",
      "Emily",
      "Chris",
      "Anna",
      "Michael",
      "Jessica",
      "James",
      "Linda",
      "Robert",
      "Patricia",
      "William",
      "Jennifer",
    ];
    const last = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Garcia",
      "Miller",
      "Davis",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Wilson",
      "Anderson",
      "Thomas",
      "Taylor",
    ];
    const domains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "test.com",
      "email.com",
      "mail.com",
    ];

    // Country-specific data
    const addressData = {
      US: {
        streets: [
          "Main",
          "Oak",
          "Pine",
          "Maple",
          "Cedar",
          "Elm",
          "Washington",
          "Lake",
          "Hill",
          "Park",
        ],
        cities: [
          "New York",
          "Los Angeles",
          "Chicago",
          "Houston",
          "Phoenix",
          "Philadelphia",
          "San Antonio",
          "San Diego",
          "Dallas",
          "Austin",
        ],
        states: ["NY", "CA", "TX", "FL", "IL", "PA", "OH", "GA", "NC", "MI"],
      },
      IN: {
        streets: [
          "MG Road",
          "Park Street",
          "Brigade Road",
          "Anna Salai",
          "Link Road",
          "Station Road",
          "Market Road",
          "Church Street",
          "Gandhi Road",
          "Nehru Place",
        ],
        cities: [
          "Mumbai",
          "Delhi",
          "Bangalore",
          "Hyderabad",
          "Chennai",
          "Kolkata",
          "Pune",
          "Ahmedabad",
          "Jaipur",
          "Lucknow",
        ],
        states: ["MH", "DL", "KA", "TN", "WB", "GJ", "RJ", "UP", "TG", "KL"],
      },
      Canada: {
        streets: [
          "King",
          "Queen",
          "Yonge",
          "Bay",
          "Bloor",
          "Dundas",
          "College",
          "Richmond",
          "Wellington",
          "Adelaide",
        ],
        cities: [
          "Toronto",
          "Vancouver",
          "Montreal",
          "Calgary",
          "Edmonton",
          "Ottawa",
          "Winnipeg",
          "Quebec City",
          "Hamilton",
          "Kitchener",
        ],
        provinces: ["ON", "BC", "QC", "AB", "MB", "SK", "NS", "NB", "NL", "PE"],
      },
      Japan: {
        streets: [
          "Sakura",
          "Aoyama",
          "Shibuya",
          "Shinjuku",
          "Ginza",
          "Roppongi",
          "Akihabara",
          "Harajuku",
          "Ikebukuro",
          "Ueno",
        ],
        cities: [
          "Tokyo",
          "Osaka",
          "Kyoto",
          "Yokohama",
          "Nagoya",
          "Sapporo",
          "Fukuoka",
          "Kobe",
          "Kawasaki",
          "Hiroshima",
        ],
        prefectures: [
          "Tokyo",
          "Osaka",
          "Kyoto",
          "Kanagawa",
          "Aichi",
          "Hokkaido",
          "Fukuoka",
          "Hyogo",
          "Chiba",
          "Saitama",
        ],
      },
    };

    for (let i = 0; i < dataCount; i++) {
      if (dataType === "email") {
        const firstName =
          first[Math.floor(Math.random() * first.length)].toLowerCase();
        const lastName =
          last[Math.floor(Math.random() * last.length)].toLowerCase();
        const domain = domains[Math.floor(Math.random() * domains.length)];
        data.push(
          `${firstName}.${lastName}${Math.floor(Math.random() * 100)}@${domain}`
        );
      } else if (dataType === "name") {
        data.push(
          `${first[Math.floor(Math.random() * first.length)]} ${
            last[Math.floor(Math.random() * last.length)]
          }`
        );
      } else if (dataType === "phone") {
        data.push(
          `+1-${Math.floor(Math.random() * 900 + 100)}-${Math.floor(
            Math.random() * 900 + 100
          )}-${Math.floor(Math.random() * 9000 + 1000)}`
        );
      } else if (dataType === "address") {
        const countryData = addressData[selectedCountry];
        const streetNum = Math.floor(Math.random() * 9999 + 1);
        const street =
          countryData.streets[
            Math.floor(Math.random() * countryData.streets.length)
          ];
        const city =
          countryData.cities[
            Math.floor(Math.random() * countryData.cities.length)
          ];
        const region =
          countryData.states ||
          countryData.provinces ||
          countryData.prefectures;
        const regionCode = region[Math.floor(Math.random() * region.length)];

        let zipcode;
        if (selectedCountry === "US") {
          zipcode = Math.floor(Math.random() * 90000 + 10000);
        } else if (selectedCountry === "IN") {
          zipcode = Math.floor(Math.random() * 900000 + 100000);
        } else if (selectedCountry === "Canada") {
          const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const digits = "0123456789";
          zipcode = `${letters[Math.floor(Math.random() * letters.length)]}${
            digits[Math.floor(Math.random() * 10)]
          }${letters[Math.floor(Math.random() * letters.length)]} ${
            digits[Math.floor(Math.random() * 10)]
          }${letters[Math.floor(Math.random() * letters.length)]}${
            digits[Math.floor(Math.random() * 10)]
          }`;
        } else if (selectedCountry === "Japan") {
          zipcode = `${Math.floor(Math.random() * 900 + 100)}-${Math.floor(
            Math.random() * 9000 + 1000
          )}`;
        }

        data.push(
          `${streetNum} ${street}, ${city}, ${regionCode}, ${selectedCountry} ${zipcode}`
        );
      } else if (dataType === "username") {
        const firstName =
          first[Math.floor(Math.random() * first.length)].toLowerCase();
        const lastName =
          last[Math.floor(Math.random() * last.length)].toLowerCase();
        data.push(
          `${firstName}_${lastName}${Math.floor(Math.random() * 1000)}`
        );
      } else if (dataType === "company") {
        const prefixes = [
          "Tech",
          "Global",
          "Dynamic",
          "Smart",
          "Digital",
          "Innovative",
          "Premier",
          "Elite",
        ];
        const suffixes = [
          "Solutions",
          "Systems",
          "Technologies",
          "Corp",
          "Industries",
          "Enterprises",
          "Group",
          "Labs",
        ];
        data.push(
          `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${
            suffixes[Math.floor(Math.random() * suffixes.length)]
          }`
        );
      } else if (dataType === "url") {
        const protocols = ["https://www.", "https://"];
        const names = [
          "example",
          "test",
          "demo",
          "sample",
          "mysite",
          "website",
          "app",
          "platform",
        ];
        const tlds = [".com", ".net", ".org", ".io", ".co", ".app"];
        data.push(
          `${protocols[Math.floor(Math.random() * protocols.length)]}${
            names[Math.floor(Math.random() * names.length)]
          }${tlds[Math.floor(Math.random() * tlds.length)]}`
        );
      } else if (dataType === "date") {
        const year = Math.floor(Math.random() * 5 + 2020);
        const month = String(Math.floor(Math.random() * 12 + 1)).padStart(
          2,
          "0"
        );
        const day = String(Math.floor(Math.random() * 28 + 1)).padStart(2, "0");
        data.push(`${year}-${month}-${day}`);
      } else if (dataType === "creditcard") {
        const cardNum = `${Math.floor(
          Math.random() * 9000 + 1000
        )}-${Math.floor(Math.random() * 9000 + 1000)}-${Math.floor(
          Math.random() * 9000 + 1000
        )}-${Math.floor(Math.random() * 9000 + 1000)}`;
        const month = String(Math.floor(Math.random() * 12 + 1)).padStart(
          2,
          "0"
        );
        const year = String(Math.floor(Math.random() * 10 + 25)).padStart(
          2,
          "0"
        );
        const cvv = Math.floor(Math.random() * 900 + 100);
        data.push(`Card: ${cardNum} | Expiry: ${month}/${year} | CVV: ${cvv}`);
      } else if (dataType === "ipaddress") {
        const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(
          Math.random() * 256
        )}.${Math.floor(Math.random() * 256)}.${Math.floor(
          Math.random() * 256
        )}`;
        data.push(ip);
      }
    }
    setGeneratedData(data);
  };

  const generateBugReport = () => {
    return `# Bug Report

## Title
${bugReport.title || "[Bug Title]"}

## Severity
${bugReport.severity.toUpperCase()}

## Environment
${bugReport.environment || "[Browser/OS/Version]"}

## Steps to Reproduce
${bugReport.steps || "[Step 1]"}

## Expected Behavior
${bugReport.expected || "[What should happen]"}

## Actual Behavior
${bugReport.actual || "[What actually happens]"}`;
  };

  const testRegex = () => {
    try {
      const regex = new RegExp(regexPattern, "g");
      const matches = regexTest.match(regex);
      return matches ? matches.join(", ") : "No matches";
    } catch (e) {
      return "Invalid regex pattern";
    }
  };

  // ---- JSON DIFF HELPERS & CORE LOGIC ----

  const getJsonType = (value) => {
    if (Array.isArray(value)) return "array";
    if (value === null) return "null";
    return typeof value; // object, string, number, boolean, undefined
  };

  const formatJsonValue = (value) => {
    const type = getJsonType(value);
    if (type === "object") return "{...}";
    if (type === "array") return `[${value.length}]`;
    return JSON.stringify(value);
  };

  const compareJSON = () => {
    // No input yet – nothing to show
    if (!jsonLeft.trim() || !jsonRight.trim()) {
      return null;
    }

    try {
      const schema = JSON.parse(jsonLeft);
      const response = JSON.parse(jsonRight);

      const diffs = [];

      const walk = (schemaVal, responseVal, path) => {
        const schemaExists = typeof schemaVal !== "undefined";
        const responseExists = typeof responseVal !== "undefined";

        if (schemaExists && !responseExists) {
          diffs.push({
            path,
            issue: "missing-field",
            message: "Field is missing in response",
            schemaValue: schemaVal,
            responseValue: undefined,
          });
          return;
        }

        if (!schemaExists && responseExists) {
          diffs.push({
            path,
            issue: "extra-field",
            message: "Extra field present in response",
            schemaValue: undefined,
            responseValue: responseVal,
          });
          return;
        }

        if (!schemaExists && !responseExists) return;

        const schemaType = getJsonType(schemaVal);
        const responseType = getJsonType(responseVal);

        if (schemaType !== responseType) {
          diffs.push({
            path,
            issue: "type-mismatch",
            message: `Type mismatch: expected ${schemaType}, got ${responseType}`,
            schemaValue: schemaVal,
            responseValue: responseVal,
          });
          // still walk deeper for objects/arrays if possible to show nested issues
          if (schemaType === "object" && responseType === "object") {
            // will be handled below
          } else if (schemaType === "array" && responseType === "array") {
            // handled below
          } else {
            return;
          }
        }

        if (schemaType === "object" && responseType === "object") {
          const keys = new Set([
            ...Object.keys(schemaVal || {}),
            ...Object.keys(responseVal || {}),
          ]);

          keys.forEach((key) => {
            const childPath = path ? `${path}.${key}` : key;
            walk(
              schemaVal ? schemaVal[key] : undefined,
              responseVal ? responseVal[key] : undefined,
              childPath
            );
          });
        } else if (schemaType === "array" && responseType === "array") {
          if (schemaVal.length !== responseVal.length) {
            diffs.push({
              path,
              issue: "array-length-mismatch",
              message: `Array length mismatch: expected ${schemaVal.length}, got ${responseVal.length}`,
              schemaValue: schemaVal,
              responseValue: responseVal,
            });
          }
          const maxLen = Math.max(schemaVal.length, responseVal.length);
          for (let i = 0; i < maxLen; i++) {
            const childPath = `${path}[${i}]`;
            walk(schemaVal[i], responseVal[i], childPath);
          }
        } else {
          // primitive value comparison
          if (schemaVal !== responseVal) {
            diffs.push({
              path,
              issue: "value-mismatch",
              message: "Value differs from schema",
              schemaValue: schemaVal,
              responseValue: responseVal,
            });
          }
        }
      };

      walk(schema, response, "$");

      const stats = {
        missing: diffs.filter((d) => d.issue === "missing-field").length,
        extra: diffs.filter((d) => d.issue === "extra-field").length,
        type: diffs.filter((d) => d.issue === "type-mismatch").length,
        value: diffs.filter((d) => d.issue === "value-mismatch").length,
        arrayLength: diffs.filter((d) => d.issue === "array-length-mismatch")
          .length,
      };

      return { diffs, stats };
    } catch (e) {
      return { error: "Invalid JSON format. Please check your input." };
    }
  };

  const generatePassword = () => {
    const { length, upper, lower, numbers, special } = passwordConfig;
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (special) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(pwd);
  };

  const convertTimezones = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes), 0);

    const timezones = [
      { name: "UTC", zone: "UTC" },
      { name: "EST (US Eastern)", zone: "America/New_York" },
      { name: "CST (US Central)", zone: "America/Chicago" },
      { name: "MST (US Mountain)", zone: "America/Denver" },
      { name: "PST (US Pacific)", zone: "America/Los_Angeles" },
      { name: "GMT", zone: "GMT" },
      { name: "IST (India)", zone: "Asia/Kolkata" },
      { name: "JST (Japan)", zone: "Asia/Tokyo" },
      { name: "AEST (Australia)", zone: "Australia/Sydney" },
    ];

    return timezones.map((tz) => {
      const timeStr = date.toLocaleTimeString("en-US", {
        timeZone: tz.zone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      return `${tz.name}: ${timeStr}`;
    });
  };

  const encodeBase64 = () => {
    setBase64Output(btoa(base64Input));
  };

  const decodeBase64 = () => {
    try {
      setBase64Output(atob(base64Input));
    } catch (e) {
      setBase64Output("Invalid Base64");
    }
  };

  const formatSQL = () => {
    const formatted = sqlInput
      .replace(/\s+/g, " ")
      .replace(/SELECT/gi, "\nSELECT\n  ")
      .replace(/FROM/gi, "\nFROM\n  ")
      .replace(/WHERE/gi, "\nWHERE\n  ")
      .replace(/AND/gi, "\n  AND")
      .replace(/OR/gi, "\n  OR")
      .replace(/JOIN/gi, "\nJOIN\n  ")
      .replace(/,/g, ",\n  ");
    setSqlOutput(formatted);
  };

  // Screenshot Annotator Functions
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setScreenshot(event.target.result);
        setAnnotations([]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const blob = items[i].getAsFile();
          const reader = new FileReader();
          reader.onload = (event) => {
            setScreenshot(event.target.result);
            setAnnotations([]);
          };
          reader.readAsDataURL(blob);
        }
      }
    }
  };

  React.useEffect(() => {
    if (screenshot && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Redraw annotations
        annotations.forEach((ann) => {
          ctx.strokeStyle = "#FF0000";
          ctx.lineWidth = 3;
          ctx.fillStyle = "#FF0000";

          if (ann.type === "arrow") {
            drawArrow(ctx, ann.startX, ann.startY, ann.endX, ann.endY);
          } else if (ann.type === "rectangle") {
            ctx.strokeRect(
              ann.startX,
              ann.startY,
              ann.endX - ann.startX,
              ann.endY - ann.startY
            );
          } else if (ann.type === "text") {
            ctx.font = "20px Arial";
            ctx.fillText(ann.text, ann.x, ann.y);
          }
        });

        // Draw current annotation while dragging
        if (currentAnnotation && currentAnnotation.endX !== undefined) {
          ctx.strokeStyle = "#FF0000";
          ctx.lineWidth = 3;
          ctx.fillStyle = "#FF0000";

          if (drawMode === "arrow") {
            drawArrow(
              ctx,
              currentAnnotation.startX,
              currentAnnotation.startY,
              currentAnnotation.endX,
              currentAnnotation.endY
            );
          } else if (drawMode === "rectangle") {
            ctx.strokeRect(
              currentAnnotation.startX,
              currentAnnotation.startY,
              currentAnnotation.endX - currentAnnotation.startX,
              currentAnnotation.endY - currentAnnotation.startY
            );
          }
        }
      };
      img.src = screenshot;
    }
  }, [screenshot, annotations, currentAnnotation, drawMode]);

  const drawArrow = (ctx, fromX, fromY, toX, toY) => {
    const headLength = 15;
    const angle = Math.atan2(toY - fromY, toX - fromX);

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headLength * Math.cos(angle - Math.PI / 6),
      toY - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(toX, toY);
    ctx.lineTo(
      toX - headLength * Math.cos(angle + Math.PI / 6),
      toY - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  };

  const handleCanvasMouseDown = (e) => {
    if (!screenshot) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    if (drawMode === "text") {
      const text = prompt("Enter text:");
      if (text) {
        setAnnotations([...annotations, { type: "text", text, x, y }]);
      }
    } else {
      setIsDrawing(true);
      setCurrentAnnotation({
        startX: x,
        startY: y,
        endX: x,
        endY: y,
        type: drawMode,
      });
    }
  };

  const handleCanvasMouseMove = (e) => {
    if (!isDrawing || !screenshot) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    setCurrentAnnotation((prev) => ({ ...prev, endX: x, endY: y }));
  };

  const handleCanvasMouseUp = (e) => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (
      currentAnnotation &&
      (currentAnnotation.endX !== currentAnnotation.startX ||
        currentAnnotation.endY !== currentAnnotation.startY)
    ) {
      setAnnotations([...annotations, currentAnnotation]);
    }
    setCurrentAnnotation(null);
  };

  const downloadAnnotatedImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "annotated-screenshot.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const clearScreenshot = () => {
    setScreenshot(null);
    setAnnotations([]);
  };

  const renderTool = () => {
    switch (activeTab) {
      case "data-gen":
        return (
          <div>
            <h2 className="mb-4 text-dark">Test Data Generator</h2>
            <div className="row g-3 mb-3">
              <div className="col-md-3">
                <label className="form-label text-dark fw-bold">
                  Data Type
                </label>
                <select
                  className="form-select"
                  value={dataType}
                  onChange={(e) => setDataType(e.target.value)}
                >
                  <option value="email">Email</option>
                  <option value="name">Full Name</option>
                  <option value="phone">Phone Number</option>
                  <option value="address">Full Address</option>
                  <option value="username">Username</option>
                  <option value="company">Company Name</option>
                  <option value="url">Website URL</option>
                  <option value="date">Date (YYYY-MM-DD)</option>
                  <option value="creditcard">Credit Card</option>
                  <option value="ipaddress">IP Address</option>
                </select>
              </div>
              {dataType === "address" && (
                <div className="col-md-2">
                  <label className="form-label text-dark fw-bold">
                    Country
                  </label>
                  <select
                    className="form-select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="US">USA</option>
                    <option value="IN">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                  </select>
                </div>
              )}
              <div className={dataType === "address" ? "col-md-2" : "col-md-3"}>
                <label className="form-label text-dark fw-bold">Count</label>
                <input
                  type="number"
                  className="form-control"
                  value={dataCount}
                  onChange={(e) => setDataCount(parseInt(e.target.value))}
                />
              </div>
              <div className={dataType === "address" ? "col-md-2" : "col-md-3"}>
                <label className="form-label text-dark fw-bold">&nbsp;</label>
                <button
                  className="btn btn-primary w-100"
                  onClick={generateData}
                >
                  Generate
                </button>
              </div>
            </div>
            <div className="position-relative">
              <textarea
                className="form-control font-monospace"
                value={generatedData.join("\n")}
                readOnly
                rows="12"
              />
              {generatedData.length > 0 && (
                <button
                  className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                  onClick={() =>
                    copyToClipboard(generatedData.join("\n"), "Data copied!")
                  }
                >
                  📋 Copy
                </button>
              )}
            </div>
            {copySuccess === "Data copied!" && (
              <div className="alert alert-success mt-2">✓ {copySuccess}</div>
            )}
          </div>
        );

      case "bug-report":
        return (
          <div>
            <h2 className="mb-4 text-dark">Bug Report Template</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Bug Title"
                value={bugReport.title}
                onChange={(e) =>
                  setBugReport({ ...bugReport, title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <select
                className="form-select"
                value={bugReport.severity}
                onChange={(e) =>
                  setBugReport({
                    ...bugReport,
                    severity: e.target.value,
                  })
                }
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Environment"
                value={bugReport.environment}
                onChange={(e) =>
                  setBugReport({
                    ...bugReport,
                    environment: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Steps to Reproduce"
                value={bugReport.steps}
                onChange={(e) =>
                  setBugReport({
                    ...bugReport,
                    steps: e.target.value,
                  })
                }
                rows="3"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Expected Behavior"
                value={bugReport.expected}
                onChange={(e) =>
                  setBugReport({
                    ...bugReport,
                    expected: e.target.value,
                  })
                }
                rows="3"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Actual Behavior"
                value={bugReport.actual}
                onChange={(e) =>
                  setBugReport({
                    ...bugReport,
                    actual: e.target.value,
                  })
                }
                rows="3"
              />
            </div>
            <div className="card bg-light">
              <div className="card-body position-relative">
                <h5 className="text-dark">Generated Report:</h5>
                <pre className="mb-0 text-dark">{generateBugReport()}</pre>
                <button
                  className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                  onClick={() =>
                    copyToClipboard(generateBugReport(), "Report copied!")
                  }
                >
                  📋 Copy
                </button>
              </div>
            </div>
            {copySuccess === "Report copied!" && (
              <div className="alert alert-success mt-2">✓ {copySuccess}</div>
            )}
          </div>
        );

      case "regex":
        return (
          <div>
            <h2 className="mb-4 text-dark">Regex Tester</h2>
            <div className="mb-3">
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() =>
                  setRegexPattern(
                    "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
                  )
                }
              >
                Email
              </button>
              <button
                className="btn btn-sm btn-outline-secondary me-2"
                onClick={() => setRegexPattern("\\d{3}-\\d{3}-\\d{4}")}
              >
                Phone
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setRegexPattern("https?://[^\\s]+")}
              >
                URL
              </button>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control font-monospace"
                placeholder="Regex Pattern"
                value={regexPattern}
                onChange={(e) => setRegexPattern(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Test String"
                value={regexTest}
                onChange={(e) => setRegexTest(e.target.value)}
                rows="5"
              />
            </div>
            <div className="alert alert-success">
              <strong>Matches:</strong> {testRegex()}
            </div>
          </div>
        );

      case "json-diff": {
        const result = compareJSON();

        return (
          <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <h2 className="text-dark mb-0">JSON Diff</h2>
              <span className="text-muted small">
                Left = <strong>Schema</strong>, Right ={" "}
                <strong>Response</strong>
              </span>
            </div>

            <p className="text-muted mb-3">
              Paste your JSON <strong>schema</strong> on the left and the actual{" "}
              <strong>response</strong> on the right. The tool will highlight
              missing properties, extra fields, type mismatches, and array
              issues (including nested objects/arrays).
            </p>

            <div className="row g-3 mb-3">
              <div className="col-lg-6">
                <label className="form-label fw-bold text-dark">
                  JSON 1 – Schema
                </label>
                <textarea
                  className="form-control font-monospace"
                  placeholder='{"add":"wer","iopu":[{"yuio":5768},{"yuio":7990}],"id":980}'
                  value={jsonLeft}
                  onChange={(e) => setJsonLeft(e.target.value)}
                  rows="14"
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label fw-bold text-dark">
                  JSON 2 – Response
                </label>
                <textarea
                  className="form-control font-monospace"
                  placeholder='{"add":"wr","iopu":[{"yuio":7788}],"id":789}'
                  value={jsonRight}
                  onChange={(e) => setJsonRight(e.target.value)}
                  rows="14"
                />
              </div>
            </div>

            {!result ? (
              <div className="alert alert-info">
                Paste both JSON documents above to see a detailed diff.
              </div>
            ) : result.error ? (
              <div className="alert alert-danger">
                <strong>Error:</strong> {result.error}
              </div>
            ) : result.diffs.length === 0 ? (
              <div className="alert alert-success">
                <strong>✓ Identical:</strong> Response matches schema
                structurally and by value.
              </div>
            ) : (
              <>
                <div className="alert alert-warning mb-3 text-dark">
                  <strong>✗ Differences Found:</strong> {result.diffs.length}{" "}
                  issue(s) detected.
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-2">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body py-2 px-3">
                        <div className="text-light small">Missing</div>
                        <div className="fw-bold text-danger fs-5">
                          {result.stats.missing}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body py-2 px-3">
                        <div className="text-light small">Extra</div>
                        <div className="fw-bold text-secondary fs-5">
                          {result.stats.extra}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body py-2 px-3">
                        <div className="text-light small">Type mismatches</div>
                        <div className="fw-bold text-warning fs-5">
                          {result.stats.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body py-2 px-3">
                        <div className="text-light small">Value mismatches</div>
                        <div className="fw-bold text-primary fs-5">
                          {result.stats.value}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body py-2 px-3">
                        <div className="text-light small">Array length</div>
                        <div className="fw-bold text-info fs-5">
                          {result.stats.arrayLength}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={downloadHtmlReport}
                  >
                    💾 Download Detailed Comparison (HTML)
                  </button>
                </div>

                <div className="card">
                  <div className="card-header bg-light  text-dark">
                    <strong>Detailed Comparison</strong>
                  </div>
                  <div className="card-body p-0">
                    <table className="table table-bordered mb-0 align-middle">
                      <thead>
                        <tr>
                          <th style={{ width: "32%" }}>Path</th>
                          <th style={{ width: "18%" }}>Issue</th>
                          <th style={{ width: "25%" }} className="bg-light">
                            Schema (JSON 1)
                          </th>
                          <th style={{ width: "25%" }} className="bg-light">
                            Response (JSON 2)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.diffs.map((diff, index) => {
                          let rowClass = "";
                          if (diff.issue === "missing-field") {
                            rowClass = "table-danger";
                          } else if (diff.issue === "extra-field") {
                            rowClass = "table-secondary";
                          } else if (diff.issue === "type-mismatch") {
                            rowClass = "table-warning";
                          } else if (diff.issue === "array-length-mismatch") {
                            rowClass = "table-info";
                          } else if (diff.issue === "value-mismatch") {
                            rowClass = "table-light";
                          }

                          const badgeClassMap = {
                            "missing-field": "bg-danger",
                            "extra-field": "bg-secondary",
                            "type-mismatch": "bg-warning text-dark",
                            "value-mismatch": "bg-primary",
                            "array-length-mismatch": "bg-info text-dark",
                          };

                          const labelMap = {
                            "missing-field": "Missing",
                            "extra-field": "Extra",
                            "type-mismatch": "Type mismatch",
                            "value-mismatch": "Value mismatch",
                            "array-length-mismatch": "Array length",
                          };

                          return (
                            <tr key={index} className={rowClass}>
                              <td className="font-monospace small">
                                {diff.path}
                              </td>
                              <td>
                                <span
                                  className={
                                    "badge " +
                                    (badgeClassMap[diff.issue] ||
                                      "bg-secondary")
                                  }
                                >
                                  {labelMap[diff.issue] || diff.issue}
                                </span>
                                <div className="small text-muted mt-1">
                                  {diff.message}
                                </div>
                              </td>
                              <td>
                                <code className="d-block">
                                  {formatJsonValue(diff.schemaValue)}
                                </code>
                                <div className="small text-muted">
                                  {diff.schemaValue === undefined
                                    ? "—"
                                    : getJsonType(diff.schemaValue)}
                                </div>
                              </td>
                              <td>
                                <code className="d-block">
                                  {formatJsonValue(diff.responseValue)}
                                </code>
                                <div className="small text-muted">
                                  {diff.responseValue === undefined
                                    ? "—"
                                    : getJsonType(diff.responseValue)}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      }

      case "screenshot":
        return (
          <div>
            <h2 className="mb-4 text-dark">Screenshot Annotator</h2>

            {!screenshot ? (
              <div
                className="card bg-light text-center"
                style={{ minHeight: "400px", cursor: "pointer" }}
                onPaste={handlePaste}
                tabIndex="0"
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>
                    🖼️
                  </div>
                  <h5>Upload or Paste Screenshot</h5>
                  <p className="text-muted mb-3">
                    Click to upload, or press Ctrl+V to paste from clipboard
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="form-control w-50"
                    id="imageUpload"
                  />
                </div>
              </div>
            ) : (
              <div>
                <div className="btn-toolbar mb-3 gap-2">
                  <div className="btn-group">
                    <button
                      className={`btn btn-sm ${
                        drawMode === "arrow"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setDrawMode("arrow")}
                    >
                      ➡️ Arrow
                    </button>
                    <button
                      className={`btn btn-sm ${
                        drawMode === "rectangle"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setDrawMode("rectangle")}
                    >
                      ⬜ Rectangle
                    </button>
                    <button
                      className={`btn btn-sm ${
                        drawMode === "text"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => setDrawMode("text")}
                    >
                      📝 Text
                    </button>
                  </div>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={downloadAnnotatedImage}
                  >
                    💾 Download
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={clearScreenshot}
                  >
                    🗑️ Clear
                  </button>
                </div>

                <div
                  className="border rounded p-2 bg-white"
                  style={{ overflow: "auto", maxHeight: "600px" }}
                >
                  <canvas
                    ref={canvasRef}
                    onMouseDown={handleCanvasMouseDown}
                    onMouseMove={handleCanvasMouseMove}
                    onMouseUp={handleCanvasMouseUp}
                    style={{ cursor: "crosshair", maxWidth: "100%" }}
                  />
                </div>

                <div className="alert alert-info mt-3">
                  <strong>Instructions:</strong> Select a tool (Arrow,
                  Rectangle, or Text) and draw on the image. Click Download to
                  save your annotated screenshot.
                </div>
              </div>
            )}
          </div>
        );

      case "status-codes":
        return (
          <div>
            <h2 className="mb-4 text-dark">HTTP Status Codes</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search status code..."
                value={statusSearch}
                onChange={(e) => setStatusSearch(e.target.value)}
              />
            </div>
            <div>
              {Object.entries(statusCodes)
                .filter(
                  ([code, desc]) =>
                    code.includes(statusSearch) ||
                    desc.toLowerCase().includes(statusSearch.toLowerCase())
                )
                .map(([code, desc]) => (
                  <div key={code} className="card mb-2">
                    <div className="card-body">
                      <strong>{code}</strong> - {desc}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );

      case "password":
        return (
          <div>
            <h2 className="mb-4 text-dark">Password Generator</h2>
            <div className="mb-3">
              <label className="form-label text-dark fw-bold">
                Length: {passwordConfig.length}
              </label>
              <input
                type="range"
                className="form-range"
                min="8"
                max="32"
                value={passwordConfig.length}
                onChange={(e) =>
                  setPasswordConfig({
                    ...passwordConfig,
                    length: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={passwordConfig.upper}
                onChange={(e) =>
                  setPasswordConfig({
                    ...passwordConfig,
                    upper: e.target.checked,
                  })
                }
                id="upper"
              />
              <label className="form-check-label text-dark" htmlFor="upper">
                Uppercase (A-Z)
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={passwordConfig.lower}
                onChange={(e) =>
                  setPasswordConfig({
                    ...passwordConfig,
                    lower: e.target.checked,
                  })
                }
                id="lower"
              />
              <label className="form-check-label text-dark" htmlFor="lower">
                Lowercase (a-z)
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                checked={passwordConfig.numbers}
                onChange={(e) =>
                  setPasswordConfig({
                    ...passwordConfig,
                    numbers: e.target.checked,
                  })
                }
                id="numbers"
              />
              <label className="form-check-label text-dark" htmlFor="numbers">
                Numbers (0-9)
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={passwordConfig.special}
                onChange={(e) =>
                  setPasswordConfig({
                    ...passwordConfig,
                    special: e.target.checked,
                  })
                }
                id="special"
              />
              <label className="form-check-label text-dark" htmlFor="special">
                Special Characters (!@#$%)
              </label>
            </div>
            <button className="btn btn-dark mb-3" onClick={generatePassword}>
              Generate Password
            </button>
            {generatedPassword && (
              <div className="card bg-light position-relative">
                <div className="card-body">
                  <h5 className="font-monospace text-dark">
                    {generatedPassword}
                  </h5>
                  <button
                    className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                    onClick={() =>
                      copyToClipboard(generatedPassword, "Password copied!")
                    }
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
            )}
            {copySuccess === "Password copied!" && (
              <div className="alert alert-success mt-2">✓ {copySuccess}</div>
            )}
          </div>
        );

      case "timezone":
        return (
          <div>
            <h2 className="mb-4 text-dark">Timezone Converter</h2>
            <div className="mb-3">
              <input
                type="time"
                className="form-control"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
            <div>
              {convertTimezones(selectedTime).map((tz, i) => (
                <div key={i} className="card mb-2">
                  <div className="card-body">{tz}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "base64":
        return (
          <div>
            <h2 className="mb-4 text-dark">Base64 Encoder/Decoder</h2>
            <div className="mb-3">
              <textarea
                className="form-control font-monospace"
                placeholder="Input text or Base64"
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                rows="5"
              />
            </div>
            <div className="d-flex gap-2 mb-3">
              <button
                className="btn btn-success flex-fill"
                onClick={encodeBase64}
              >
                Encode
              </button>
              <button
                className="btn btn-primary flex-fill"
                onClick={decodeBase64}
              >
                Decode
              </button>
            </div>
            <div className="position-relative">
              <textarea
                className="form-control font-monospace bg-light"
                value={base64Output}
                readOnly
                rows="5"
              />
              {base64Output && (
                <button
                  className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                  onClick={() =>
                    copyToClipboard(base64Output, "Base64 copied!")
                  }
                >
                  📋 Copy
                </button>
              )}
            </div>
            {copySuccess === "Base64 copied!" && (
              <div className="alert alert-success mt-2">✓ {copySuccess}</div>
            )}
          </div>
        );

      case "sql":
        return (
          <div>
            <h2 className="mb-4 text-dark">SQL Formatter</h2>
            <div className="mb-3">
              <textarea
                className="form-control font-monospace"
                placeholder="Paste SQL query here..."
                value={sqlInput}
                onChange={(e) => setSqlInput(e.target.value)}
                rows="6"
              />
            </div>
            <button className="btn btn-info mb-3" onClick={formatSQL}>
              Format SQL
            </button>
            <div className="position-relative">
              <pre className="card card-body bg-light font-monospace">
                {sqlOutput}
              </pre>
              {sqlOutput && (
                <button
                  className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
                  onClick={() => copyToClipboard(sqlOutput, "SQL copied!")}
                >
                  📋 Copy
                </button>
              )}
            </div>
            {copySuccess === "SQL copied!" && (
              <div className="alert alert-success mt-2">✓ {copySuccess}</div>
            )}
          </div>
        );

      default:
        return (
          <div className="text-center py-5">
            <div style={{ fontSize: "5rem" }}>🔧</div>
            <h1 className="display-4 fw-bold text-primary mt-3">TesterTools</h1>
            <p className="lead">10 Essential Tools for Software Testers</p>
            <p className="text-muted">
              Select a tool from the sidebar to get started
            </p>
          </div>
        );
    }
  };
  const escapeHtml = (value) => {
    if (value === null || value === undefined) return "";
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const buildHtmlReport = (result) => {
    const { diffs, stats } = result;

    const issueLabelMap = {
      "missing-field": "Missing",
      "extra-field": "Extra",
      "type-mismatch": "Type mismatch",
      "value-mismatch": "Value mismatch",
      "array-length-mismatch": "Array length",
    };

    const issueDescMap = {
      "missing-field": "Field is missing in response",
      "extra-field": "Extra field present in response",
      "type-mismatch": "Type mismatch between schema and response",
      "value-mismatch": "Value differs from schema",
      "array-length-mismatch": "Array length mismatch between schema and response",
    };

    const getRowStyle = (issue) => {
      switch (issue) {
        case "missing-field":
          return "background-color:#f8d7da;"; // danger-like
        case "extra-field":
          return "background-color:#e2e3e5;"; // secondary-like
        case "type-mismatch":
          return "background-color:#fff3cd;"; // warning-like (light yellow)
        case "array-length-mismatch":
          return "background-color:#cff4fc;"; // info-like
        case "value-mismatch":
          return "background-color:#f8f9fa;"; // light
        default:
          return "";
      }
    };

    const rowsHtml = diffs
      .map((diff) => {
        const issueLabel = issueLabelMap[diff.issue] || diff.issue;
        const issueDesc = diff.message || issueDescMap[diff.issue] || "";
        const schemaType =
          diff.schemaValue === undefined ? "—" : getJsonType(diff.schemaValue);
        const responseType =
          diff.responseValue === undefined
            ? "—"
            : getJsonType(diff.responseValue);

        const rowStyle = getRowStyle(diff.issue);

        return `
          <tr style="${rowStyle}">
            <td class="path-cell">
              <code>${escapeHtml(diff.path)}</code>
            </td>
            <td class="issue-cell">
              <span class="badge badge-${escapeHtml(
                diff.issue
              )}">${escapeHtml(issueLabel)}</span>
              <div class="issue-desc">${escapeHtml(issueDesc)}</div>
            </td>
            <td class="schema-cell">
              <code class="json-value json-schema">${escapeHtml(
                formatJsonValue(diff.schemaValue)
              )}</code>
              <div class="value-type">${escapeHtml(schemaType)}</div>
            </td>
            <td class="response-cell">
              <code class="json-value json-response">${escapeHtml(
                formatJsonValue(diff.responseValue)
              )}</code>
              <div class="value-type">${escapeHtml(responseType)}</div>
            </td>
          </tr>
        `;
      })
      .join("");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JSON Diff Detailed Comparison – TesterTools</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #f8f9fa;
      padding: 24px;
      color: #212529;
    }
    h1 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 24px;
    }
    .summary {
      margin-bottom: 16px;
      padding: 12px 16px;
      background: #fff3cd;
      border-radius: 4px;
      border: 1px solid #ffeeba;
      font-size: 14px;
    }
    .summary span {
      display: inline-block;
      margin-right: 16px;
    }
    .summary strong {
      font-weight: 600;
    }

    .table-wrapper {
      background: #ffffff;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      overflow: hidden;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    thead {
      background-color: #f8f9fa;
    }
    th, td {
      border: 1px solid #dee2e6;
      padding: 8px 10px;
      vertical-align: top;
    }
    th {
      font-weight: 600;
    }

    code {
      font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
      font-size: 12px;
    }

    .issue-cell {
      min-width: 140px;
    }

    .issue-desc {
      margin-top: 4px;
      font-size: 12px;
      color: #495057;
    }

    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 600;
      color: #212529;
      background-color: #e2e3e5;
    }

    /* Badge colours similar to Bootstrap */
    .badge-missing-field {
      background-color: #f8d7da;
      color: #721c24;
    }
    .badge-extra-field {
      background-color: #e2e3e5;
      color: #383d41;
    }
    .badge-type-mismatch {
      background-color: #ffe08a;
      color: #7a5a00;
    }
    .badge-value-mismatch {
      background-color: #cfe2ff;
      color: #084298;
    }
    .badge-array-length-mismatch {
      background-color: #b6effb;
      color: #055160;
    }

    .json-value {
      display: block;
      margin-bottom: 4px;
    }
    .json-schema {
      color: #b03a9b; /* similar to pink-ish schema text */
    }
    .json-response {
      color: #c92a2a; /* red-ish response text */
    }
    .value-type {
      font-size: 11px;
      color: #6c757d;
    }
  </style>
</head>
<body>
  <h1>Detailed Comparison</h1>

  <div class="summary">
    <span><strong>Total issues:</strong> ${diffs.length}</span>
    <span><strong>Missing:</strong> ${stats.missing}</span>
    <span><strong>Extra:</strong> ${stats.extra}</span>
    <span><strong>Type mismatches:</strong> ${stats.type}</span>
    <span><strong>Value mismatches:</strong> ${stats.value}</span>
    <span><strong>Array length:</strong> ${stats.arrayLength}</span>
  </div>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th style="width:32%;">Path</th>
          <th style="width:18%;">Issue</th>
          <th style="width:25%;">Schema (JSON 1)</th>
          <th style="width:25%;">Response (JSON 2)</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  </div>
</body>
</html>`;
  };

  const downloadHtmlReport = () => {
    const result = compareJSON();
    if (!result || result.error) {
      alert("Please provide valid JSON in both fields before exporting.");
      return;
    }
    if (!result.diffs || result.diffs.length === 0) {
      alert("No differences found to export.");
      return;
    }

    const html = buildHtmlReport(result);
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "json-diff-detailed-comparison.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <Helmet>
          <meta property="og:site_name" content="TesterTools" />
          <meta name="twitter:site" content="@TesterTools" />
        </Helmet>

        <meta
          property="og:url"
          content="https://testmasterhub.com/testertools"
        />
      </Helmet>
      <style>{`
        body {
          background: #f8f9fa;
        }
        .sidebar {
          width: 250px;
          background: white;
          border-right: 1px solid #dee2e6;
          transition: transform 0.3s ease;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          z-index: 1000;
          top: 0;
          left: 0;
        }
        .main-content {
          margin-left: 250px;
          padding: 20px;
          flex: 1;
          background: #f8f9fa;
          min-height: 100vh;
        }
        .mobile-menu-btn {
          position: fixed;
          top: 15px;
          left: 15px;
          z-index: 1050;
          background: white;
          border: 1px solid #dee2e6;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        @media (max-width: 991.98px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.show {
            transform: translateX(0);
          }
          .main-content {
            margin-left: 0;
            padding-top: 70px;
          }
        }
        @media (min-width: 992px) {
          .mobile-menu-btn {
            display: none;
          }
        }
        .tool-card {
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          border-left: 4px solid transparent;
          padding: 12px 16px;
          color: #333;
        }
        .tool-card:hover {
          background-color: #f8f9fa;
        }
        .tool-card.active {
          background-color: #0d6efd;
          color: white;
          border-left-color: #0a58ca;
          font-weight: 500;
        }
        .tool-card.active .text-muted {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>

      <button
        className={`btn btn-light mobile-menu-btn ${
          mobileMenuOpen ? "d-none" : ""
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>

      {mobileMenuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-lg-none"
          style={{ zIndex: 999 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={`sidebar ${mobileMenuOpen ? "show" : ""}`}>
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-0 text-primary fw-bold">TesterTools</h4>
          </div>
          <button
            className="btn btn-sm btn-light d-lg-none"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="list-group list-group-flush">
          <div
            className={`tool-card list-group-item list-group-item-action ${
              activeTab === "home" ? "active" : ""
            }`}
            onClick={() => {
              setActiveTab("home");
              setMobileMenuOpen(false);
            }}
          >
            <span className="me-2">🏠</span> Home
          </div>
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`tool-card list-group-item list-group-item-action d-flex align-items-center ${
                activeTab === tool.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(tool.id);
                setMobileMenuOpen(false);
              }}
            >
              <span className="me-2" style={{ fontSize: "1.2rem" }}>
                {tool.icon}
              </span>
              <span style={{ fontSize: "0.9rem" }}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="main-content">{renderTool()}</div>
    </div>
  );
};

export default TesterTools;
