import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDownload } from 'react-icons/fa';

const BetaDownloadPage = () => {
  const downloadUrl = 'https://api.intranet.testmasterhub.com/v1/release/download/latest?type=prod-beta';

  const handleDownload = () => {
    window.location.href = downloadUrl;
    console.log(`Initiating download from: ${downloadUrl}`);
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <FaDownload className="text-success mb-3" size={50} />
          <h2 className="fw-bold text-success">TestMasterHub Beta Access</h2>
          <p className="text-muted">
            You're just one click away from experiencing the future of API testing with our beta build.
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="lead text-primary mb-3">This public beta is open for everyone!</p>
          <button
            className="btn btn-success btn-lg d-flex align-items-center justify-content-center mx-auto"
            onClick={handleDownload}
          >
            <FaDownload className="me-2" /> Download Beta Version
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetaDownloadPage;
