// src/components/forum/ForumHome.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MessageSquare, User, Clock, Eye } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';

const ForumHome = () => {
  const [forums, setForums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForums = async () => {
      try {
        const response = await axios.get('/api/forums');
        setForums(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load forums. Please try again later.');
        setLoading(false);
      }
    };

    fetchForums();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">TestMasterHub Community Forums</h1>
        <Link to="/forum/search" className="btn btn-outline-primary">
          Search Forums
        </Link>
      </div>

      <p className="text-muted mb-5">
        Join discussions about API testing, share your experiences, and get help from the TestMasterHub community.
      </p>

      {forums.map(forum => (
        <div key={forum._id} className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="h5 mb-1">
                  <Link 
                    to={`/forum/${forum.slug}`} 
                    className="text-decoration-none text-primary"
                  >
                    {forum.name}
                  </Link>
                </h2>
                <p className="text-muted mb-0 small">
                  {forum.description}
                </p>
              </div>
              <div className="col-lg-2 mt-3 mt-lg-0 text-lg-center">
                <div className="d-flex flex-column">
                  <span className="text-primary fw-bold">{forum.threadCount}</span>
                  <span className="text-muted small">Threads</span>
                </div>
              </div>
              <div className="col-lg-3 mt-3 mt-lg-0">
                {forum.lastThread ? (
                  <div className="d-flex flex-column">
                    <Link 
                      to={`/forum/thread/${forum.lastThread._id}`} 
                      className="text-truncate text-decoration-none"
                    >
                      {forum.lastThread.title}
                    </Link>
                    <div className="d-flex align-items-center mt-1 small text-muted">
                      <User size={14} className="me-1" />
                      <span className="me-2">{forum.lastThread.author.username}</span>
                      <Clock size={14} className="me-1" />
                      <span>
                        {new Date(forum.lastThread.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="text-muted">No threads yet</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumHome;