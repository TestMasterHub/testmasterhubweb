// src/components/forum/NewThreadForm.js
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const NewThreadForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const forumId = location.state?.forumId;
  const forumSlug = location.pathname.split('/')[2];

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { 
        state: { 
          from: location.pathname,
          message: 'Please log in to create a new thread' 
        } 
      });
    }
  }, [isAuthenticated, navigate, location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      setError('Title and content are required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(
        '/api/threads',
        { title, content, forumId },
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      
      navigate(`/forum/thread/${response.data._id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create thread. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!forumId) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          <p className="mb-0">
            Invalid forum. <Link to="/forum">Return to forums</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/forum">Forums</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/forum/${forumSlug}`}>Forum</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            New Thread
          </li>
        </ol>
      </nav>

      <h1 className="mb-4">Create New Thread</h1>

      {error && (
        <div className="alert alert-danger d-flex align-items-center mb-4">
          <AlertCircle size={18} className="me-2" />
          {error}
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="threadTitle" className="form-label">Thread Title</label>
              <input
                type="text"
                className="form-control"
                id="threadTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={100}
                placeholder="Enter a descriptive title for your thread"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="threadContent" className="form-label">Thread Content</label>
              <textarea
                className="form-control"
                id="threadContent"
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                placeholder="Write your thread content here... Markdown is supported"
              />
              <div className="form-text">
                Markdown formatting is supported.
              </div>
            </div>
            
            <div className="d-flex justify-content-end">
              <Link 
                to={`/forum/${forumSlug}`} 
                className="btn btn-outline-secondary me-2"
              >
                Cancel
              </Link>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Thread'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewThreadForm;