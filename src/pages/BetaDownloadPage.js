import React from 'react';
import { Download } from 'lucide-react';

const BetaDownloadPage = () => {
  const downloadUrl = 'https://api.intranet.testmasterhub.com/v1/release/download/latest?type=prod-beta';

  const handleDownload = () => {
    window.location.href = downloadUrl;
  };

  return (
    <div className="bg-dark text-white d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="card w-100" style={{ maxWidth: '500px' }}>
        <div className="card-body p-4 p-md-5 text-center">
          <Download className="icon-gradient mb-3" size={48} />
          <h2 className="fw-bold">TestMasterHub Beta Access</h2>
          <p className="text-white-50">
            You're one click away from experiencing the future of API testing. This public beta is open for everyone!
          </p>
          <div className="text-center mt-4">
            <button className="btn btn-primary-gradient btn-lg d-flex align-items-center justify-content-center mx-auto" onClick={handleDownload}>
              <Download className="me-2" /> Download Beta Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaDownloadPage;