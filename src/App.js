import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Enterprise from './pages/Enterprise';
import DownloadPage from './pages/DownloadPage';
import InvitePage from './pages/InvitePage';
import PrivacyPolicy from './pages/privacy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import BetaDownloadPage from './pages/BetaDownloadPage';
// Import custom CSS
import './styles/custom.css';
import Resources from './pages/Resources';
import { usePageTracking } from './hooks/usePageTracking';

// Create a wrapper component that uses the hook inside Router context
function AppContent() {
  usePageTracking();
  
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
         <Route path="/" element={<Home />} />
            {/* Add other routes here */}
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/resources" element={<Resources />} />
            {/* <Route path="/community" element={<div className="container py-5"><h1>Community Page</h1><p>This page is under construction.</p></div>} /> */}
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/invite/BetaList/users" element={<InvitePage /> } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="invite/beta-download" element={<BetaDownloadPage />} />
            {/* Add more routes as needed */}
          </Routes>
      </main>
      <Footer />
    </div>
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