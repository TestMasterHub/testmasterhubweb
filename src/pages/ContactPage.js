import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Clock,
  Sparkles,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link as fallback
    const mailtoLink = `mailto:social.testmasterhub@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )}`;

    try {
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('form-name', 'contact');
      formDataEncoded.append('name', formData.name);
      formDataEncoded.append('email', formData.email);
      formDataEncoded.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString()
      });

      if (response.ok || response.status === 200) {
        setIsSubmitted(true);
      } else {
        window.location.href = mailtoLink;
        setTimeout(() => setIsSubmitted(true), 500);
      }
    } catch (error) {
      window.location.href = mailtoLink;
      setTimeout(() => setIsSubmitted(true), 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="contact-success-wrapper">
        <div className="container">
          <div className="success-content">
            <div className="success-icon-wrapper">
              <CheckCircle size={64} strokeWidth={1.5} />
            </div>
            <h1>Thanks for reaching out!</h1>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <button className="btn-reset" onClick={resetForm}>
              Send Another Message
            </button>
          </div>
        </div>

        <style jsx>{`
          .contact-success-wrapper {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0a0a0a;
            padding: 2rem;
          }

          .success-content {
            text-align: center;
            max-width: 500px;
          }

          .success-icon-wrapper {
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, #ff66c4, #8150FF);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 2rem;
            color: white;
            animation: scaleIn 0.5s ease;
          }

          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          .success-content h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1rem;
          }

          .success-content p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 2rem;
          }

          .btn-reset {
            background: linear-gradient(135deg, #ff66c4, #8150FF);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 999px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .btn-reset:hover {
            transform: translateY(-2px);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="modern-contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge-modern">
              <MessageSquare size={16} />
              <span>CONTACT US</span>
            </div>
            <h1>Let's Talk</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what's on your mind..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="info-section">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <h3>Email Us</h3>
                <p>Our team is here to help</p>
                <a href="mailto:social.testmasterhub@gmail.com" className="info-link">
                  social.testmasterhub@gmail.com
                </a>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={24} />
                </div>
                <h3>Response Time</h3>
                <p>We typically respond within</p>
                <span className="info-highlight">24 hours</span>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Sparkles size={24} />
                </div>
                <h3>Get Started</h3>
                <p>Ready to try TestMasterHub?</p>
                <a href="/invite/beta-download" className="info-link">Download Now →</a>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <p className="social-label">Follow Us</p>
                <div className="social-links">
                  <a href="https://github.com/TestMasterHub/testmasterhub-app-support" className="social-icon" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/company/testmasterhub/" className="social-icon" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://x.com/TestmasterHub" className="social-icon" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modern-contact-page {
          background: #0a0a0a;
          min-height: 100vh;
          color: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Hero Section */
        .contact-hero {
          padding: 6rem 0 4rem;
          text-align: center;
          background: linear-gradient(180deg, #111 0%, #0a0a0a 100%);
        }

        .badge-modern {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(129, 80, 255, 0.1);
          border: 1px solid rgba(129, 80, 255, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #c8b3ff;
          margin-bottom: 2rem;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff, #c8b3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content p {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Main Content */
        .contact-main {
          padding: 4rem 0 6rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        /* Form Section */
        .form-section {
          background: #111;
          border: 1px solid #222;
          border-radius: 1.5rem;
          padding: 3rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .form-group input,
        .form-group textarea {
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 0.75rem;
          padding: 1rem;
          font-size: 1rem;
          color: #ffffff;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #8150FF;
          box-shadow: 0 0 0 3px rgba(129, 80, 255, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        .btn-submit {
          background: linear-gradient(135deg, #ff66c4, #8150FF);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(129, 80, 255, 0.3);
        }

        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Info Section */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          background: #111;
          border: 1px solid #222;
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }

        .info-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #ff66c4, #8150FF);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .info-card p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.75rem;
        }

        .info-link {
          color: #ff66c4;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .info-link:hover {
          color: #8150FF;
        }

        .info-highlight {
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
        }

        /* Social Section */
        .social-section {
          background: #111;
          border: 1px solid #222;
          border-radius: 1rem;
          padding: 2rem;
        }

        .social-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #ff66c4, #8150FF);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 4rem 0 3rem;
          }

          .form-section {
            padding: 2rem;
          }

          .contact-main {
            padding: 3rem 0 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;