import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Enterprise from './pages/Enterprise';
import DownloadPage from './pages/DownloadPage';
// Import custom CSS
import './styles/custom.css';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
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
            <Route path="/community" element={<div className="container py-5"><h1>Community Page</h1><p>This page is under construction.</p></div>} />
            <Route path="/download" element={<DownloadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;