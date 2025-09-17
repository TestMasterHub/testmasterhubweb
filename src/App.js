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
import ComparisonPage from './pages/ComparisonPage';
import ContactPage from './pages/ContactPage';
// Import custom CSS
import './App.css';
import Resources from './pages/Resources';
import { usePageTracking } from './hooks/usePageTracking';
import 'bootstrap/dist/css/bootstrap.min.css';
// Create a wrapper component that uses the hook inside Router context
function AppContent() {
  usePageTracking();
  
  return (
    <div className="d-flex flex-column min-vh-100">
            {/* Product Hunt Alert Banner */}
      {/* <section className="py-1 banner-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 mb-2 mb-md-0">
              <p className="mb-0 fw-bold">
                <span className="me-2">🎉</span>
                We're now live on Product Hunt! Check out our launch and support us.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="https://www.producthunt.com/posts/testmasterhub?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-testmasterhub" target="_blank" rel="noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939910&theme=dark&t=1742550203552" alt="Product Hunt" style={{width: "250px", height: "54px"}} />
              </a>
            </div>
          </div>
        </div>
      </section> */}
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
            <Route path="/comparison" element={<ComparisonPage />} />
            <Route path="/contact" element={<ContactPage />} />
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