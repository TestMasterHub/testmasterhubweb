import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDownload, FaKey } from 'react-icons/fa'; // Importing icons for visual consistency

const InvitePage = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);
  const [message, setMessage] = useState('');

  // Array of valid invite codes, including a unique one for BetaList users
  const validInviteCodes = [
    'TMH2.0_BETALIST_2025', // Unique code for BetaList users
    'TESTMASTER_INVITE_01',
    'PRIVATE_BUILD_ACCESS',
    'ALPHA_TESTER_KEY',
  ];

  // The provided download URL
  const downloadUrl = 'https://api.intranet.testmasterhub.com/v1/release/download/latest?type=prod-inviteonly';

  const handleInviteCodeChange = (event) => {
    setInviteCode(event.target.value);
    // Reset validation state when user types
    setIsValidCode(false);
    setMessage('');
  };

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
    // Redirect the user to the provided download URL
    window.location.href = downloadUrl;
    console.log(`Initiating download from: ${downloadUrl}`);
    // Optionally, you might want to provide immediate feedback to the user
    // before the download starts, though browser behavior for downloads varies.
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4 p-md-5 w-100" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <FaKey className="text-primary mb-3" size={50} />
          <h2 className="fw-bold text-primary">Private Version Access</h2>
          <p className="text-muted">Enter your invite code to download the exclusive build.</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="inviteCode" className="form-label fw-bold">Invite Code</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="inviteCode"
              value={inviteCode}
              onChange={handleInviteCodeChange}
              placeholder="Enter your invite code"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">
              Submit Code
            </button>
          </div>
        </form>

        {message && (
          <div className={`alert ${isValidCode ? 'alert-success' : 'alert-danger'} text-center mt-3`} role="alert">
            {message}
          </div>
        )}

        {isValidCode && (
          <div className="text-center mt-4">
            <p className="lead text-success mb-3">Your invite code is valid!</p>
            <button
              className="btn btn-success btn-lg d-flex align-items-center justify-content-center mx-auto"
              onClick={handleDownload}
            >
              <FaDownload className="me-2" /> Download Private Version
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvitePage;