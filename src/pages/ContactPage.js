import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Users, 
  Building, 
  Send, 
  CheckCircle,
  Clock,
  Sparkles,
  Brain,
  Shield,
  Zap
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
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

  const handleInquiryTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: type
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For Netlify Forms, create a FormData object
      const submitData = new URLSearchParams();
      submitData.append('form-name', 'contact');
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submitData.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="bg-gradient-pink-purple rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                <CheckCircle size={40} />
              </div>
              <h1 className="h2 fw-bold mb-3">Message Sent Successfully!</h1>
              <p className="lead text-white-50 mb-4">
                Thank you for contacting TestMasterHub. We'll get back to you within 24 hours.
              </p>
              <button 
                className="btn btn-primary-gradient btn-lg"
                onClick={resetForm}
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageSquare size={20} /> },
    { value: 'sales', label: 'Sales & Pricing', icon: <Building size={20} /> },
    { value: 'support', label: 'Technical Support', icon: <Zap size={20} /> },
    { value: 'partnership', label: 'Partnership', icon: <Users size={20} /> }
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="d-inline-flex align-items-center bg-gradient-pink-purple rounded-pill px-4 py-2 mb-4">
                <MessageSquare size={16} className="me-2" />
                <span className="fw-bold">GET IN TOUCH</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">Contact TestMasterHub</h1>
              <p className="lead text-white-50 mb-0">
                Have questions about our AI-powered API testing platform? We're here to help you streamline your testing workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="h3 fw-bold mb-4">Send us a Message</h2>

                <div onSubmit={handleSubmit}>
                  {/* Inquiry Type Selection */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">What can we help you with?</label>
                    <div className="row g-3">
                      {inquiryTypes.map((type) => (
                        <div key={type.value} className="col-sm-6 col-lg-3">
                          <div 
                            className={`card p-3 cursor-pointer h-100 ${
                              formData.inquiryType === type.value 
                                ? 'border-primary bg-primary bg-opacity-10' 
                                : 'border-secondary'
                            }`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleInquiryTypeChange(type.value)}
                          >
                            <div className="text-center">
                              <div className={`mb-2 ${
                                formData.inquiryType === type.value ? 'text-primary' : 'text-white-50'
                              }`}>
                                {type.icon}
                              </div>
                              <small className="fw-bold">{type.label}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-bold">Full Name *</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-bold">Email Address *</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Company */}
                    <div className="col-md-6">
                      <label htmlFor="company" className="form-label fw-bold">Company</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-md-6">
                      <label htmlFor="subject" className="form-label fw-bold">Subject *</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Brief subject line"
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-bold">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="btn btn-primary-gradient btn-lg px-4 d-inline-flex align-items-center"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner-border spinner-border-sm me-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Alternative: Manual Email Link */}
                <div className="mt-4 pt-4 border-top border-secondary">
                  <p className="text-white-50 small mb-2">Or email us directly:</p>
                  <a href="mailto:social.testmasterhub@gmail.com?subject=Contact from Website" className="btn btn-outline-light">
                    <Mail size={16} className="me-2" />
                    social.testmasterhub@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information & Why Choose Us */}
          <div className="col-lg-4">
            {/* Contact Info */}
            <div className="card mb-4">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Get in Touch</h4>
                
                <div className="d-flex align-items-start mb-3">
                  <div className="bg-gradient-pink-purple rounded-circle p-2 me-3 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <a href="mailto:social.testmasterhub@gmail.com" className="text-white-50 text-decoration-none small">
                      social.testmasterhub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div className="bg-gradient-pink-purple rounded-circle p-2 me-3 flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Response Time</h6>
                    <p className="mb-0 text-white-50 small">Within 24 hours</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="bg-gradient-pink-purple rounded-circle p-2 me-3 flex-shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Support</h6>
                    <p className="mb-0 text-white-50 small">Community & Enterprise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose TestMasterHub */}
            <div className="card">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Why TestMasterHub?</h4>
                
                <div className="d-flex align-items-start mb-3">
                  <Brain size={20} className="text-primary me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">AI-Powered</h6>
                    <p className="mb-0 text-white-50 small">Automatic assertion generation saves hours of manual work</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <Shield size={20} className="text-success me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Secure & Private</h6>
                    <p className="mb-0 text-white-50 small">AES-256 encryption with offline-first design</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <Zap size={20} className="text-warning me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Full Automation</h6>
                    <p className="mb-0 text-white-50 small">Built-in scheduling and monitoring at no extra cost</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <Sparkles size={20} className="text-info me-3 flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold mb-1">Modern Experience</h6>
                    <p className="mb-0 text-white-50 small">Intuitive interface designed for developer productivity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-5 bg-dark-subtle">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h3 fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-white-50">Quick answers to common questions</p>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="contactFaqAccordion">
                {[
                  {
                    q: 'How quickly do you respond to inquiries?',
                    a: 'We typically respond to all inquiries within 24 hours during business days. For urgent technical support issues, enterprise customers receive priority response times.'
                  },
                  {
                    q: 'Do you offer demos or trials?',
                    a: 'Yes! TestMasterHub offers a free trial with full access to all features. We also provide personalized demos for teams and enterprises.'
                  },
                  {
                    q: 'Can you help migrate from Postman?',
                    a: 'Absolutely! TestMasterHub includes built-in Postman collection import, and our team provides migration guidance to ensure a smooth transition.'
                  },
                  {
                    q: 'What kind of support do you provide?',
                    a: 'We offer community support for all users, comprehensive documentation, video tutorials, and dedicated enterprise support for business customers.'
                  }
                ].map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={`contactFaqH${index}`}>
                      <button 
                        className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#contactFaqC${index}`}
                        aria-expanded="false"
                        aria-controls={`contactFaqC${index}`}
                      >
                        {faq.q}
                      </button>
                    </h3>
                    <div 
                      id={`contactFaqC${index}`} 
                      className="accordion-collapse collapse" 
                      aria-labelledby={`contactFaqH${index}`}
                      data-bs-parent="#contactFaqAccordion"
                    >
                      <div className="accordion-body">{faq.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-gradient-pink-purple">
        <div className="container">
          <div className="text-center">
            <h2 className="h3 fw-bold mb-3">Ready to try TestMasterHub?</h2>
            <p className="mb-4 opacity-90">
              Start your free trial today and experience AI-powered API testing.
            </p>
            <a className="btn btn-light btn-lg px-5" href='/download'>
              <Brain size={18} className="me-2 text-dark" />
              <span className="text-dark fw-bold">Start Free Trial</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;