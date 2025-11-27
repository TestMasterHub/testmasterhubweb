import React from 'react';
import { Download, AlertTriangle, CheckCircle, MousePointerClick } from 'lucide-react';

// Import the screenshots you uploaded
import SmartScreen1 from '../assets/installations/SmartScreen1.png';
import SmartScreen2 from '../assets/installations/SmartScreen2.png';
import InstallScope from '../assets/installations/InstallScope.png';
import InstallFinish from '../assets/installations/InstallFinish.png';

const InstallationGuide = () => {
  return (
    <div className="bg-dark text-white py-5">
        <Helmet>
            <title>TestMasterHub Installation Guide</title>
            <meta
              name="description"
              content="Follow our step-by-step installation guide to get TestMasterHub up and running on your Windows machine."
            />
        </Helmet>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="resource-section">
                        <h1 className="display-4 fw-bold mb-4 hero-title-gradient">Installation Guide</h1>
                        <p className="lead text-white-50 mb-5">
                            Thank you for downloading TestMasterHub! Follow these simple steps to get started.
                        </p>

                        {/* --- Step 1 --- */}
                        <h5>Step 1: Run the Installer</h5>
                        <p>
                            Once the download is complete, locate the <code>TestMasterHub-AI-Inside-Setup-X.X.X.exe</code> file in your Downloads folder and double-click it to begin the installation.
                        </p>

                        {/* --- Step 2 --- */}
                        <h5><AlertTriangle className="text-warning me-2" />Step 2: Bypass Windows SmartScreen</h5>
                        <p>
                            Because TestMasterHub is a new application, Windows Defender SmartScreen may show a warning. This is normal for unsigned applications.
                        </p>
                        <p>
                            1. You will first see this blue popup. Click on <strong>"More info"</strong>.
                        </p>
                        <img src={SmartScreen1} alt="Windows SmartScreen warning step 1" className="img-fluid rounded mb-3" />
                        
                        <p className="mt-4">
                            2. After clicking "More info", the <strong>"Run anyway"</strong> button will appear. Click it to proceed with the installation.
                        </p>
                        <img src={SmartScreen2} alt="Windows SmartScreen warning step 2" className="img-fluid rounded mb-3" />

                        {/* --- Step 3 --- */}
                        <h5><MousePointerClick className="icon-gradient me-2" />Step 3: Choose Installation Scope</h5>
                        <p>
                            You can choose to install for just your user account (recommended) or for all users on the computer. Select <strong>"Only for me"</strong> and click <strong>"Next"</strong>.
                        </p>
                        <img src={InstallScope} alt="Choose installation options" className="img-fluid rounded mb-3" />

                        {/* --- Step 4 --- */}
                        <h5><CheckCircle className="text-success me-2" />Step 4: Complete Installation</h5>
                        <p>
                            That's it! Once the installation is finished, you can leave <strong>"Run TestMasterHub: AI Inside"</strong> checked and click <strong>"Finish"</strong> to launch the application.
                        </p>
                        <img src={InstallFinish} alt="Installation complete" className="img-fluid rounded mb-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InstallationGuide;