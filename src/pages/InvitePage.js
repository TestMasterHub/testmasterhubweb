import React, { useState } from 'react';
import { Download, KeyRound } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const InvitePage = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const [message, setMessage] = useState('');

  const validInviteCodes = ['TMH2.0_BETALIST_2025', 'TESTMASTER_INVITE_01', 'PRIVATE_BUILD_ACCESS', 'ALPHA_TESTER_KEY'];
  const downloadUrl = 'https://api.intranet.testmasterhub.com/v1/release/download/latest?type=prod-inviteonly';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validInviteCodes.includes(inviteCode)) {
      setIsValidCode(true);
      setMessage('Invite code accepted! You can now download the private version.');
    } else {
      setIsValidCode(false);
      setMessage('Invalid invite code. Please try again.');
    }
  };

  const handleDownload = () => {
    window.location.href = downloadUrl;
  };

  return (
    <div className="bg-dark text-white d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="card w-100" style={{ maxWidth: '500px' }}>
        <div className="card-body p-4 p-md-5">
          <div className="text-center mb-4">
            <KeyRound className="icon-gradient mb-3" size={48} />
            <h2 className="fw-bold">Private Version Access</h2>
            <p className="text-white-50">Enter your invite code to download the exclusive build.</p>
          </div>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label htmlFor="inviteCode" className="form-label fw-bold">Invite Code</label>
              <input
                type="text"
                className="form-control form-control-dark form-control-lg"
                id="inviteCode"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter your invite code"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary-gradient btn-lg">
                Submit Code
              </button>
            </div>
          </form>

          {message && (
            <div className={`alert ${isValidCode ? 'alert-success-dark' : 'alert-danger-dark'} text-center mt-3`} role="alert">
              {message}
            </div>
          )}

          {isValidCode && (
            <div className="text-center mt-4">
              <button className="btn btn-primary-gradient btn-lg d-flex align-items-center justify-content-center mx-auto" onClick={handleDownload}>
                <Download className="me-2" /> Download Private Version
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvitePage;