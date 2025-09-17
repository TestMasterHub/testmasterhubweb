import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  Database, 
  Shield, 
  Users, 
  Zap, 
  Brain, 
  Lock, 
  Cloud, 
  HardDrive, 
  GitBranch,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Sparkles,
  Download,
  FileText
} from 'lucide-react';

const ComparisonPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'features', 'security', 'collaboration'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="d-inline-flex align-items-center bg-gradient-pink-purple rounded-pill px-4 py-2 mb-4">
                <Sparkles size={16} className="me-2" />
                <span className="fw-bold">PLATFORM COMPARISON</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                TestMasterHub vs Bruno vs Postman
              </h1>
              <p className="lead text-white-50 mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                Compare the leading API testing platforms. See why TestMasterHub combines the best of offline security 
                with AI-powered automation and seamless Postman migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row">
          {/* Simplified Sidebar */}
          <div className="col-lg-3">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="bg-dark-subtle rounded-3 p-4">
                <nav className="nav flex-column">
                  {[
                    { id: 'overview', title: 'Overview', icon: <Database size={16} /> },
                    { id: 'features', title: 'Core Features', icon: <Zap size={16} /> },
                    { id: 'security', title: 'Security', icon: <Shield size={16} /> },
                    { id: 'collaboration', title: 'Collaboration', icon: <Users size={16} /> }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`nav-link text-start border-0 bg-transparent p-3 rounded mb-2 d-flex align-items-center ${
                        activeSection === item.id ? 'bg-primary text-white' : 'text-white-50'
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.icon}
                      <span className="ms-3">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Clean Main Content */}
          <div className="col-lg-9">
            <div className="py-5">
              
              {/* Overview Section */}
              <section id="overview" className="mb-6">
                <h2 className="h3 fw-bold mb-5">Platform Overview</h2>
                
                <div className="row g-4 mb-5">
                  {/* TestMasterHub Card */}
                  <div className="col-lg-4">
                    <div className="card h-100 border-primary">
                      <div className="card-header bg-gradient-pink-purple text-center py-4">
                        <Brain size={32} className="mb-3" />
                        <h4 className="fw-bold mb-0">TestMasterHub</h4>
                        <p className="mb-0 opacity-75">AI + Security Leader</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">AI-powered assertions</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">AES-256 encryption</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">Offline-first design</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">Import Postman collections</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">Built-in automation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bruno Card */}
                  <div className="col-lg-4">
                    <div className="card h-100">
                      <div className="card-header bg-info text-center py-4">
                        <GitBranch size={32} className="mb-3" />
                        <h4 className="fw-bold mb-0">Bruno</h4>
                        <p className="mb-0 opacity-75">Git-Native</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">File-based storage</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">Git integration</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">No encryption</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">No auto-assertions</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">No automation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Postman Card */}
                  <div className="col-lg-4">
                    <div className="card h-100">
                      <div className="card-header bg-warning text-dark text-center py-4">
                        <Cloud size={32} className="mb-3" />
                        <h4 className="fw-bold mb-0">Postman</h4>
                        <p className="mb-0 opacity-75">Cloud-Heavy</p>
                      </div>
                      <div className="card-body p-4">
                        <ul className="list-unstyled mb-0">
                          <li className="d-flex align-items-center mb-2">
                            <CheckCircle size={16} className="text-success me-2 flex-shrink-0" />
                            <span className="small">Rich feature set</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <AlertTriangle size={16} className="text-warning me-2 flex-shrink-0" />
                            <span className="small">Paid automation</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">Cloud dependency</span>
                          </li>
                          <li className="d-flex align-items-center mb-2">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">Vendor lock-in</span>
                          </li>
                          <li className="d-flex align-items-center">
                            <XCircle size={16} className="text-danger me-2 flex-shrink-0" />
                            <span className="small">No auto-assertions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Migration Highlight */}
                <div className="card bg-gradient-pink-purple mb-5">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="d-flex align-items-center mb-2">
                          <Download size={24} className="me-3" />
                          <h4 className="fw-bold mb-0">Seamless Postman Migration</h4>
                        </div>
                        <p className="mb-0 opacity-90">
                          Import your existing Postman collections directly into TestMasterHub. 
                          Keep all your work while gaining AI-powered features and enhanced security.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center">
                        <button className="btn btn-light btn-lg text-dark fw-bold">
                          <FileText size={18} className="me-2" />
                          Import Collections
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Core Features Comparison */}
              <section id="features" className="mb-6">
                <h2 className="h3 fw-bold mb-5">Core Features</h2>
                
                <div className="table-responsive">
                  <table className="table table-dark">
                    <thead>
                      <tr className="border-bottom border-secondary">
                        <th className="border-0 py-3">Feature</th>
                        <th className="border-0 py-3 text-center">TestMasterHub</th>
                        <th className="border-0 py-3 text-center">Bruno</th>
                        <th className="border-0 py-3 text-center">Postman</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          feature: 'AI Auto-Assertions',
                          testmasterhub: { icon: <CheckCircle className="text-success" />, text: 'Built-in' },
                          bruno: { icon: <XCircle className="text-danger" />, text: 'None' },
                          postman: { icon: <XCircle className="text-danger" />, text: 'None' }
                        },
                        {
                          feature: 'Data Storage',
                          testmasterhub: { icon: <Lock className="text-success" />, text: 'Encrypted Local' },
                          bruno: { icon: <HardDrive className="text-warning" />, text: 'Plain Files' },
                          postman: { icon: <Cloud className="text-danger" />, text: 'Cloud Only' }
                        },
                        {
                          feature: 'Offline Mode',
                          testmasterhub: { icon: <CheckCircle className="text-success" />, text: 'Full Support' },
                          bruno: { icon: <CheckCircle className="text-success" />, text: 'Full Support' },
                          postman: { icon: <XCircle className="text-danger" />, text: 'Limited' }
                        },
                        {
                          feature: 'Test Automation',
                          testmasterhub: { icon: <Zap className="text-success" />, text: 'Built-in Free' },
                          bruno: { icon: <XCircle className="text-danger" />, text: 'None' },
                          postman: { icon: <AlertTriangle className="text-warning" />, text: 'Paid Only' }
                        },
                        {
                          feature: 'Collection Import',
                          testmasterhub: { icon: <Download className="text-success" />, text: 'Postman + JSON' },
                          bruno: { icon: <AlertTriangle className="text-warning" />, text: 'Limited' },
                          postman: { icon: <CheckCircle className="text-success" />, text: 'Native' }
                        }
                      ].map((row, index) => (
                        <tr key={index} className="border-bottom border-secondary border-opacity-25">
                          <td className="border-0 py-3 fw-bold">{row.feature}</td>
                          <td className="border-0 py-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              {row.testmasterhub.icon}
                              <span className="ms-2 small">{row.testmasterhub.text}</span>
                            </div>
                          </td>
                          <td className="border-0 py-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              {row.bruno.icon}
                              <span className="ms-2 small">{row.bruno.text}</span>
                            </div>
                          </td>
                          <td className="border-0 py-3 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                              {row.postman.icon}
                              <span className="ms-2 small">{row.postman.text}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="mb-6">
                <h2 className="h3 fw-bold mb-5">Security & Privacy</h2>
                
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="fw-bold mb-0 d-flex align-items-center">
                          <Shield size={20} className="me-2 text-success" />
                          TestMasterHub Security
                        </h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">✅ AES-256 encryption for all data</li>
                          <li className="mb-2">✅ Local-first, no cloud dependency</li>
                          <li className="mb-2">✅ Zero data collection</li>
                          <li className="mb-2">✅ Complete offline functionality</li>
                          <li className="mb-0">✅ Open data formats</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="fw-bold mb-0 d-flex align-items-center">
                          <AlertTriangle size={20} className="me-2 text-warning" />
                          Competitors
                        </h5>
                      </div>
                      <div className="card-body">
                        <p className="mb-3"><strong>Bruno:</strong></p>
                        <ul className="list-unstyled mb-3 small">
                          <li>❌ No encryption (plain text files)</li>
                          <li>✅ Local storage</li>
                        </ul>
                        <p className="mb-3"><strong>Postman:</strong></p>
                        <ul className="list-unstyled mb-0 small">
                          <li>❌ Cloud-dependent</li>
                          <li>❌ Data collection & analytics</li>
                          <li>❌ Vendor lock-in</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Collaboration Section */}
              <section id="collaboration" className="mb-6">
                <h2 className="h3 fw-bold mb-5">Team Collaboration</h2>
                
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row text-center">
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="bg-gradient-pink-purple rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                          <GitBranch size={24} />
                        </div>
                        <h5 className="fw-bold">TestMasterHub</h5>
                        <p className="text-white-50 small mb-0">Git integration + encrypted sharing (roadmap)</p>
                      </div>
                      <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="bg-info rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                          <GitBranch size={24} />
                        </div>
                        <h5 className="fw-bold">Bruno</h5>
                        <p className="text-white-50 small mb-0">Excellent Git-native workflow</p>
                      </div>
                      <div className="col-lg-4">
                        <div className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                          <Users size={24} className="text-dark" />
                        </div>
                        <h5 className="fw-bold">Postman</h5>
                        <p className="text-white-50 small mb-0">Cloud workspaces & real-time sync</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Simple CTA */}
      <section className="py-5 bg-gradient-pink-purple">
        <div className="container">
          <div className="text-center">
            <h2 className="h3 fw-bold mb-3">Ready to upgrade your API testing?</h2>
            <p className="mb-4 opacity-90">
              Get AI-powered assertions, enterprise security, and seamless Postman migration.
            </p>
            <a className="btn btn-light btn-lg px-5" href='/download'>
              <Brain size={18} className="me-2 text-dark" />
              <span className="text-dark fw-bold">Try TestMasterHub Free</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;