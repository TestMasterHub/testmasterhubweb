import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Import your new layout
import MainLayout from "./components/v2/MainLayout";

// Import Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Enterprise from "./pages/Enterprise";
import DownloadPage from "./pages/DownloadPage";
import InvitePage from "./pages/InvitePage";
import PrivacyPolicy from "./pages/privacy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import ComparisonPage from "./pages/ComparisonPage";
import ContactPage from "./pages/ContactPage";
import InstallationGuide from "./pages/InstallationGuide";
import QuestKit from "./pages/QuestKit";
import Resources from "./pages/Resources";

// Import Bootstrap (QuestKit needs this, so it stays global)
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/QuestKit.css";
import "./App.css";
// Create a wrapper component
function AppContent() {
  // REMOVE usePageTracking(); from here

  return (
    <>
      <Helmet>
        <title>
          TestMasterHub – AI-Powered Local-First API Testing Platform
        </title>
        <meta
          name="description"
          content="TestMasterHub is an AI-powered local-first API testing platform with offline execution, smart assertions, monitoring, and Git sync."
        />
      </Helmet>

      <Routes>
        <Route path="/testertools" element={<QuestKit />} />

      {/* ROUTE 2: ALL YOUR OTHER APP ROUTES
        These routes are nested inside the 'MainLayout' element.
        They will all share the Navbar, Footer, tracking, and App.css styles.
      */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/invite/BetaList/users" element={<InvitePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="invite/beta-download" element={<DownloadPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/installation-guide" element={<InstallationGuide />} />
        {/* Add any other main app routes here */}
      </Route>
    </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
