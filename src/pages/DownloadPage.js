import React, { useEffect, useState } from 'react';
import { Download, Sparkles, Bug, Cpu, MemoryStick, HardDrive, Monitor } from 'lucide-react';
import { FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DownloadPage = () => {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    fetch("https://api.intranet.testmasterhub.com/v1/release/latest")
      .then(response => response.json())
      .then(data => setRelease(data))
      .catch(error => console.error("Error fetching release data:", error));
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // --- Animate sections on scroll ---
        gsap.utils.toArray('.animated-section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });
        
        // Stagger animation for requirement cards
        gsap.from('.requirement-card', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.requirements-grid',
                start: 'top 85%',
            }
        });
    });
    return () => ctx.revert();
  }, []);
  
  // Animate release notes list items when data arrives
  useEffect(() => {
    if (release) {
      const ctx = gsap.context(() => {
        gsap.from('.release-note-item', {
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out'
        });
      });
      return () => ctx.revert();
    }
  }, [release]);


  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="text-center py-5 animated-section">
        <div className="container py-5">
          <h1 className="display-3 fw-bold hero-title-gradient">Your Workflow Upgrade Awaits.</h1>
          <p className="lead text-white-50 mx-auto mt-4" style={{ maxWidth: '800px' }}>
            Download the latest version of TestMasterHub, packed with new features and improvements to accelerate your API testing.
          </p>
        </div>
      </section>
      
      {/* Download Section */}
      <section className="container py-5 animated-section">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="card animated-card p-4">
                    <div className="card-body text-center">
                        <FaWindows size={48} className="mb-3 icon-gradient" />
                        <h2 className="fw-bold">TestMasterHub for Windows</h2>
                        {release ? (
                            <>
                                <p className="text-white-50 mb-4">
                                    Version {release.version}
                                </p>
                                <a href={release.downloadUrl}
                                   className="btn btn-primary-gradient btn-lg w-100"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    <Download className="me-2" size={20} />
                                    Download for Windows x64
                                </a>
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

      {/* Minimum Requirements Section */}
      <section className="container py-5 animated-section">
        <div className="text-center mb-5">
            <h2 className="fw-bold">Minimum System Requirements</h2>
            <p className="text-white-50">Ensure your system is ready for TestMasterHub.</p>
        </div>
        <div className="row g-4 justify-content-center requirements-grid">
            {[
                { icon: FaWindows, title: 'Operating System', details: 'Windows 10 (64-bit), macOS 11+, or Linux (Debian/Ubuntu)' },
                { icon: Cpu, title: 'Processor', details: 'Dual-core 2GHz or faster' },
                { icon: MemoryStick, title: 'Memory (RAM)', details: '4 GB (8 GB Recommended)' },
                { icon: HardDrive, title: 'Disk Space', details: '500 MB available space' }
            ].map((req, index) => (
                <div className="col-md-6 col-lg-3 requirement-card" key={index}>
                    <div className="card animated-card h-100 text-center">
                        <div className="card-body p-4">
                            <req.icon size={32} className="icon-gradient mb-3" />
                            <h5 className="fw-bold">{req.title}</h5>
                            <p className="text-white-50 mb-0">{req.details}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Release Notes Section */}
      <section id="release-notes" className="py-5 bg-dark-subtle animated-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h2 className="fw-bold text-center mb-5">Release Notes</h2>
                    {release ? (
                        <div className="card animated-card">
                            <div className="card-body p-4 p-md-5">
                                <div className="mb-5">
                                    <h4 className="fw-bold d-flex align-items-center mb-3">
                                        <Sparkles className="icon-gradient me-3" />
                                        What's New
                                    </h4>
                                    <ul className="list-group list-group-flush release-notes-list">
                                        {release.releaseNotes.whatsnew.map((item, index) => (
                                            <li key={index} className="list-group-item release-note-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="fw-bold d-flex align-items-center mb-3">
                                        <Bug className="icon-gradient me-3" />
                                        Bug Fixes
                                    </h4>
                                    <ul className="list-group list-group-flush release-notes-list">
                                        {release.releaseNotes.bugfixes.map((item, index) => (
                                            <li key={index} className="list-group-item release-note-item">{item}</li>
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