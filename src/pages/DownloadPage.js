import React, { useEffect, useState } from 'react';
// Import useNavigate
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Sparkles, Bug, Zap } from 'lucide-react';
import { FaWindows } from "react-icons/fa";

const DownloadPage = () => {
  const location = useLocation();
  // Initialize useNavigate
  const navigate = useNavigate(); 
  
  const [stableRelease, setStableRelease] = useState(null);
  const [betaRelease, setBetaRelease] = useState(null);
  
  const isBetaPage = location.pathname.includes('beta-download');
  const [activeTab, setActiveTab] = useState(isBetaPage ? 'beta' : 'stable');
 const BaseURL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    setActiveTab(isBetaPage ? 'beta' : 'stable');
  }, [isBetaPage]);

  useEffect(() => {
    fetch(`${BaseURL}/v1/release/latest`)
      .then(response => response.json())
      .then(data => setStableRelease(data))
      .catch(error => console.error("Error fetching stable release:", error));

    fetch(`${BaseURL}/v1/release/latest?type=prod-beta`)
      .then(response => response.json())
      .then(data => setBetaRelease(data))
      .catch(error => console.error("Error fetching beta release:", error));
  }, []);

  const currentRelease = activeTab === 'stable' ? stableRelease : betaRelease;
  const downloadUrl = activeTab === 'stable' 
    ? stableRelease?.downloadUrl 
    : `${BaseURL}/v1/release/download/latest?type=prod-beta`;

  const handleDownload = () => {
    // This handler is now used for the beta button
    if (activeTab === 'beta') {
      window.location.href = downloadUrl;
      // Navigate to the guide
      navigate('/installation-guide'); 
    }
  };

  const handleStableDownload = () => {
    // New handler for the stable button
    if (downloadUrl) {
      window.location.href = downloadUrl;
      // Navigate to the guide
      navigate('/installation-guide');
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Hero Section */}
      <section className="text-center py-5">
        <div className="container py-5">
          <h1 className="display-3 fw-bold hero-title-gradient">Download TestMasterHub</h1>
          <p className="lead text-white-50 mx-auto mt-4" style={{ maxWidth: '700px' }}>
            Choose between stable release or beta version with latest features
          </p>
        </div>
      </section>
      {/* Download Section */}
      <section className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card animated-card p-4">
              <div className="card-body text-center">
                {activeTab === 'stable' ? (
                  <FaWindows size={48} className="mb-3 icon-gradient" />
                ) : (
                  <Zap size={48} className="mb-3 icon-gradient" />
                )}
                
                <h2 className="fw-bold">
                  TestMasterHub {activeTab === 'beta' ? 'Beta' : ''} for Windows
                </h2>
                
                {activeTab === 'beta' && (
                  <span className="badge bg-primary fs-6 px-3 py-2 mt-2 mb-3">
                    Public Beta • Open for Everyone
                  </span>
                )}

                {currentRelease ? (
                  <>
                    <p className="text-white-50 mb-4 mt-3">Version {currentRelease.version}</p>
                    {activeTab === 'stable' ? (
                      // Changed from <a> to <button> and use handleStableDownload
                      <button
                         onClick={handleStableDownload}
                         className="btn btn-primary-gradient btn-lg w-100"
                         disabled={!downloadUrl}
                      >
                        <Download className="me-2" size={20} />
                        Download for Windows x64
                      </button>
                    ) : (
                      // This button already uses handleDownload
                      <button
                        onClick={handleDownload}
                        className="btn btn-primary-gradient btn-lg w-100">
                        <Download className="me-2" size={20} />
                        Download Beta Version
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <div className="spinner-border my-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="text-white-50">Fetching latest version...</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Release Notes Section (no changes here) */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-center mb-5">Release Notes</h2>
              {currentRelease ? (
                <div className="card animated-card">
                  <div className="card-body p-4 p-md-5">
                    {/* What's New */}
                    <div className="mb-5">
                      <h4 className="fw-bold d-flex align-items-center mb-4">
                        <Sparkles className="icon-gradient me-3" size={24} />
                        What's New
                      </h4>
                      <ul className="list-unstyled ms-4">
                        {currentRelease.releaseNotes.whatsnew.map((item, index) => (
                          <li key={index} className="mb-3 d-flex text-white-50">
                            <span className="text-success me-3">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bug Fixes */}
                    <div>
                      <h4 className="fw-bold d-flex align-items-center mb-4">
                        <Bug className="icon-gradient me-3" size={24} />
                        Bug Fixes
                      </h4>
                      <ul className="list-unstyled ms-4">
                        {currentRelease.releaseNotes.bugfixes.map((item, index) => (
                          <li key={index} className="mb-3 d-flex text-white-50">
                            <span className="text-danger me-3">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="spinner-border" role="status" style={{width: '3rem', height: '3rem'}}>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;