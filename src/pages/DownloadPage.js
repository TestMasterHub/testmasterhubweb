import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Download, 
  Sparkles, 
  Bug, 
  Zap, 
  ShieldCheck, 
  Layout, 
  Server, 
  ArrowRight,
  Monitor 
} from "lucide-react";
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { Helmet } from "react-helmet";

const DownloadPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [stableRelease, setStableRelease] = useState(null);
  const [betaRelease, setBetaRelease] = useState(null);
  
  const isBetaPage = location.pathname.includes("beta-download");
  const [activeTab, setActiveTab] = useState(isBetaPage ? "beta" : "stable");
  const BaseURL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setActiveTab(isBetaPage ? "beta" : "stable");
  }, [isBetaPage]);

  useEffect(() => {
    // Fetch releases (mocked for visual preview if env not set)
    const fetchReleases = async () => {
        try {
            const stableRes = await fetch(`${BaseURL}/v1/release/latest`);
            const stableData = await stableRes.json();
            setStableRelease(stableData);
        } catch (e) { console.error(e); }

        try {
            const betaRes = await fetch(`${BaseURL}/v1/release/latest?type=prod-beta`);
            const betaData = await betaRes.json();
            setBetaRelease(betaData);
        } catch (e) { console.error(e); }
    };
    fetchReleases();
  }, [BaseURL]);

  const currentRelease = activeTab === "stable" ? stableRelease : betaRelease;
  const downloadUrl = activeTab === "stable" 
    ? stableRelease?.downloadUrl 
    : `${BaseURL}/v1/release/download/latest?type=prod-beta`;

  const handleDownload = () => {
    if (downloadUrl) {
      window.location.href = downloadUrl;
      navigate("/installation-guide");
    }
  };

  return (
    <div className="download-page-wrapper">
      <Helmet>
        <title>Download TestMasterHub | Windows, Mac, Linux</title>
        <meta name="description" content="Get the latest version of TestMasterHub. Choose between Stable for production or Beta for the newest AI features." />
      </Helmet>

      {/* --- BACKGROUND ACCENTS --- */}
      <div className="bg-glow-top"></div>

      <div className="container position-relative z-2 pt-5 pb-5">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
                Get <span className="text-gradient-pink-purple">TestMasterHub</span>
            </h1>
            <p className="lead text-white-50 mx-auto" style={{maxWidth: "600px"}}>
                The local-first API automation platform. <br/>
                Available for macOS, Windows, and Linux.
            </p>
        </div>

        <div className="row g-5 justify-content-center">
            
            {/* LEFT COLUMN: DOWNLOAD CARD */}
            <div className="col-lg-5">
                <div className="download-card">
                    {/* TOGGLE SWITCH */}
                    <div className="release-toggle-container mb-4">
                        <button 
                            className={`toggle-btn ${activeTab === "stable" ? "active" : ""}`}
                            onClick={() => setActiveTab("stable")}
                        >
                            <ShieldCheck size={16} className="me-2"/> Stable Release
                        </button>
                        <button 
                            className={`toggle-btn ${activeTab === "beta" ? "active" : ""}`}
                            onClick={() => setActiveTab("beta")}
                        >
                            <Zap size={16} className="me-2"/> Beta Access
                        </button>
                    </div>

                    <div className="text-center py-4">
                        <div className="os-icon-wrapper mb-3">
                            <FaWindows size={48} className="text-white"/>
                        </div>
                        <h3 className="fw-bold mb-1">TestMasterHub for Windows</h3>
                        <p className="text-white-50 small mb-3">
                            {currentRelease ? `Version ${currentRelease.version}` : "Checking latest version..."}
                        </p>

                        {activeTab === "beta" && (
                             <div className="beta-warning mb-4">
                                <Sparkles size={14} className="text-warning me-2"/>
                                <span>Includes AI TestGen & Doc Hub</span>
                             </div>
                        )}

                        <button 
                            onClick={handleDownload}
                            disabled={!currentRelease && !downloadUrl}
                            className={`btn btn-lg w-100 fw-bold d-flex align-items-center justify-content-center ${activeTab === 'beta' ? 'btn-beta' : 'btn-primary-gradient'}`}
                        >
                            <Download size={20} className="me-2"/>
                            {activeTab === "beta" ? "Download Beta" : "Download Stable"}
                        </button>
                        
                        <p className="mt-3 mb-0 text-white-50 small">
                            Requires Windows 10 or later (x64)
                        </p>
                    </div>

                    <div className="card-footer-links">
                        <a href="#" className="footer-link"><FaApple className="me-2"/> macOS<sup> Coming Soon</sup></a>
                        <span className="divider">|</span>
                        <a href="#" className="footer-link"><FaLinux className="me-2"/> Linux<sup> Coming Soon</sup></a>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: RELEASE NOTES */}
            <div className="col-lg-6">
                <div className="release-notes-wrapper">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h4 className="fw-bold m-0">What's New</h4>
                        <span className="badge bg-dark border border-secondary text-white-50">
                            {currentRelease?.version || "Loading..."}
                        </span>
                    </div>

                    {currentRelease ? (
                        <div className="notes-scroll-area">
                            
                            {/* FEATURE SECTION */}
                            {currentRelease.releaseNotes?.whatsnew?.length > 0 && (
                                <div className="mb-4">
                                    <h6 className="notes-header text-success">
                                        <Sparkles size={14} className="me-2"/> New Features
                                    </h6>
                                    <ul className="notes-list">
                                        {currentRelease.releaseNotes.whatsnew.map((note, i) => (
                                            <li key={i}>{note}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* BUG FIX SECTION */}
                            {currentRelease.releaseNotes?.bugfixes?.length > 0 && (
                                <div className="mb-4">
                                    <h6 className="notes-header text-danger">
                                        <Bug size={14} className="me-2"/> Bug Fixes
                                    </h6>
                                    <ul className="notes-list">
                                        {currentRelease.releaseNotes.bugfixes.map((note, i) => (
                                            <li key={i}>{note}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* GENERIC PLACEHOLDER IF EMPTY */}
                            {!currentRelease.releaseNotes?.whatsnew?.length && !currentRelease.releaseNotes?.bugfixes?.length && (
                                <p className="text-white-50">No detailed notes available for this release.</p>
                            )}
                        </div>
                    ) : (
                        // SKELETON LOADER
                        <div className="notes-skeleton">
                             <div className="skel-line w-50 mb-4"></div>
                             <div className="skel-line w-100 mb-2"></div>
                             <div className="skel-line w-75 mb-2"></div>
                             <div className="skel-line w-90 mb-4"></div>
                             <div className="skel-line w-40 mb-4 mt-5"></div>
                             <div className="skel-line w-100 mb-2"></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>

      <style jsx>{`
        .download-page-wrapper {
            background-color: var(--gsap-dark);
            min-height: 100vh;
            color: #fff;
            position: relative;
            overflow-x: hidden;
        }
        .bg-glow-top {
            position: absolute; top: -10%; left: 50%; transform: translateX(-50%);
            width: 80vw; height: 50vh;
            background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
            pointer-events: none;
        }

        /* --- DOWNLOAD CARD --- */
        .download-card {
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 24px;
            padding: 30px;
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
            position: relative;
            overflow: hidden;
        }
        
        /* Toggle Switch */
        .release-toggle-container {
            background: #09090b;
            padding: 4px;
            border-radius: 12px;
            display: flex;
            border: 1px solid #27272a;
        }
        .toggle-btn {
            flex: 1;
            border: none;
            background: transparent;
            color: #71717a;
            padding: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 8px;
            transition: all 0.2s ease;
            display: flex; align-items: center; justify-content: center;
        }
        .toggle-btn.active {
            background: #27272a;
            color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .toggle-btn:hover:not(.active) { color: #fff; }

        /* OS Icon Area */
        .os-icon-wrapper {
            width: 80px; height: 80px; margin: 0 auto;
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }

        /* Beta Warning Pill */
        .beta-warning {
            display: inline-flex; align-items: center;
            background: rgba(234, 179, 8, 0.1);
            border: 1px solid rgba(234, 179, 8, 0.2);
            color: #facc15;
            font-size: 0.8rem;
            padding: 6px 16px;
            border-radius: 50px;
        }

        /* Buttons */
        .btn-primary-gradient {
            background: linear-gradient(135deg, #6366f1, #a855f7);
            border: none; color: white; padding: 14px;
            transition: transform 0.2s;
        }
        .btn-beta {
            background: #27272a; border: 1px solid #3f3f46; color: white; padding: 14px;
        }
        .btn-beta:hover { background: #3f3f46; }
        .btn:hover { transform: translateY(-2px); color: white; }

        /* Footer Links */
        .card-footer-links {
            margin-top: 30px; padding-top: 20px; border-top: 1px solid #27272a;
            display: flex; justify-content: center; align-items: center; gap: 15px;
        }
        .footer-link { color: #71717a; text-decoration: none; font-size: 0.9rem; display: flex; align-items: center; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }
        .divider { color: #27272a; }

        /* --- RELEASE NOTES --- */
        .release-notes-wrapper {
            padding: 20px;
        }
        .notes-scroll-area {
            max-height: 500px; overflow-y: auto; padding-right: 10px;
            /* Scrollbar styling */
            scrollbar-width: thin;
            scrollbar-color: #3f3f46 #18181b;
        }
        .notes-header {
            text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.8rem; font-weight: 700;
            margin-bottom: 12px; display: flex; align-items: center;
        }
        .notes-list {
            list-style: none; padding: 0; margin: 0;
        }
        .notes-list li {
            position: relative; padding-left: 20px; margin-bottom: 10px; color: #a1a1aa; font-size: 0.95rem; line-height: 1.6;
        }
        .notes-list li::before {
            content: "•"; position: absolute; left: 0; color: #52525b;
        }

        /* Skeleton */
        .skel-line { background: #27272a; height: 12px; border-radius: 4px; }
        .w-40 { width: 40%; } .w-90 { width: 90%; }
        
        @media (max-width: 992px) {
            .download-card { margin-bottom: 40px; }
        }
      `}</style>
    </div>
  );
};

export default DownloadPage;