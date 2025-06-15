// src/pages/auth/Login.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, loginWithGoogle, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get redirect location or message from state if available
  const from = location.state?.from || '/';
  const message = location.state?.message || null;

  useEffect(() => {
    // If user is already authenticated, redirect them
    if (isAuthenticated) {
      navigate(from);
    }
  }, [isAuthenticated, navigate, from]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.password) {
      setError('Email and password are required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate(from);
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    setError('');
    
    const result = await loginWithGoogle();
    
    if (result.success) {
      navigate(from);
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h1 className="h3 text-center mb-4">Log In</h1>
              
              {message && (
                <div className="alert alert-info mb-4">
                  {message}
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger d-flex align-items-center mb-4">
                  <AlertCircle size={18} className="me-2" />
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    autoComplete="email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    autoComplete="current-password"
                    required
                  />
                  <div className="form-text text-end">
                    <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
                  </div>
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Logging in...' : 'Log In'}
                  </button>
                </div>
              </form>
              
              <div className="d-grid mt-3">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={handleGoogleLogin}
                  disabled={isSubmitting}
                >
                  <i className="bi bi-google me-2"></i>
                  Continue with Google
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="mb-0">
                  Don't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;