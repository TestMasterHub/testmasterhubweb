// src/pages/auth/Register.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    employmentStatus: 'student',
    company: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, isAuthenticated, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If user is already authenticated, redirect them
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validateForm = () => {
    if (!formData.username.trim()) return 'Username is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.password) return 'Password is required';
    if (formData.password.length < 8) return 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    const result = await register(
      formData.username, 
      formData.email, 
      formData.password
    );
    
    if (result.success) {
      // Create additional user profile data in Firestore
      try {
        const { db } = await import('../../utils/firebaseConfig');
        const { doc, setDoc } = await import('firebase/firestore');
        
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          username: formData.username,
          email: formData.email,
          role: formData.role,
          employmentStatus: formData.employmentStatus,
          company: formData.company || 'N/A',
          createdAt: new Date()
        });

        navigate('/login', { 
          state: { 
            message: 'Registration successful! Please log in with your new account.' 
          } 
        });
      } catch (err) {
        setError('Account created but failed to save profile data. Please try logging in.');
        setIsSubmitting(false);
      }
    } else {
      setError(result.message);
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsSubmitting(true);
    setError('');
    
    const result = await loginWithGoogle();
    
    if (result.success) {
      navigate('/');
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
              <h1 className="h3 text-center mb-4">Create Account</h1>
              
              {error && (
                <div className="alert alert-danger d-flex align-items-center mb-4">
                  <AlertCircle size={18} className="me-2" />
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    autoComplete="username"
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
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
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    autoComplete="new-password"
                    required
                  />
                  <div className="form-text">Password must be at least 8 characters</div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    autoComplete="new-password"
                    required
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="employmentStatus" className="form-label">Employment Status</label>
                    <select
                      id="employmentStatus"
                      name="employmentStatus"
                      className="form-select"
                      value={formData.employmentStatus}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="student">Student</option>
                      <option value="employee">Employee</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                      id="role"
                      name="role"
                      className="form-select"
                      value={formData.role}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="user">User</option>
                      <option value="dev">Developer</option>
                      <option value="qa">QA</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="form-label">Company (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </form>
              
              <div className="d-grid mt-3">
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={handleGoogleSignup}
                  disabled={isSubmitting}
                >
                  <i className="bi bi-google me-2"></i>
                  Continue with Google
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="mb-0">
                  Already have an account? <Link to="/login" className="text-decoration-none">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;