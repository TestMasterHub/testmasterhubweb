import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { TfiMicrosoftAlt } from "react-icons/tfi";
import 'bootstrap/dist/css/bootstrap.min.css';
import UI from "../assets/images/UI.png"
const DownloadPage = () => {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    fetch("https://testmasterhub-release-server.vercel.app/v1/release/latest")
      .then(response => response.json())
      .then(data => setRelease(data))
      .catch(error => console.error("Error fetching release data:", error));
  }, []);

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <section className="text-center py-5">
        <h5 className="display-6 fw-bold">Download TestMasterHub</h5>
        <p className="fs-5 text-muted">Start using TestMasterHub with the latest features and improvements.</p>
      </section>
      
      {/* Download Section */}
      <section className="row align-items-center justify-content-between my-5">
        <div className="col-md-5">
          <h2 className="fw-bold">The TestMasterHub App</h2>
          <p className="fs-5 text-muted">Download the latest version of TestMasterHub and start testing with ease.</p>
          {release && (
            <a href={release.downloadUrl} 
               className="btn btn-primary btn-lg mt-3" 
               target="_blank" 
               rel="noopener noreferrer">
              <Download className="me-2" size={20} /> Windows 64-Bit <TfiMicrosoftAlt className="m-2"/>
            </a>
          )}
          <p className="mt-3">
            <a href="#release-notes" className="text-decoration-none text-primary fw-bold">Release Notes →</a>
          </p>
        </div>
        <div className="col-md-6">
          <img src={UI} alt="TestMasterHub UI" className="img-fluid rounded shadow" />
        </div>
      </section>

      {/* Release Notes Section */}
      <section id="release-notes" className="row justify-content-center mt-5">
        <div className="col-md-10">
          <div className="card shadow-sm border-0 p-4">
            <h2 className="fw-bold text-center mb-4">Release Notes</h2>
            {release ? (
              <>
                <h3 className="fw-bold text-primary">What's New</h3>
                <ul className="list-group list-group-flush mb-4">
                  {release.releaseNotes.whatsnew.map((item, index) => (
                    <li key={index} className="list-group-item fs-6">{item}</li>
                  ))}
                </ul>
                <h3 className="fw-bold text-danger">Bug Fixes</h3>
                <ul className="list-group list-group-flush">
                  {release.releaseNotes.bugfixes.map((item, index) => (
                    <li key={index} className="list-group-item fs-6">{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-center fs-5">Loading release notes...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
