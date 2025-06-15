// src/components/forum/ForumDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MessageSquare, User, Clock, Eye, Pin, Lock } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';
import { useAuth } from '../../contexts/AuthContext';

const ForumDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [forumData, setForumData] = useState({ forum: {}, threads: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForumData = async () => {
      try {
        const response = await axios.get(`/api/forums/${slug}`);
        setForumData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load forum data. The forum may not exist or there was a server error.');
        setLoading(false);
      }
    };

    fetchForumData();
  }, [slug]);

  const handleNewThread = () => {
    if (isAuthenticated) {
      navigate(`/forum/${slug}/new-thread`, { state: { forumId: forumData.forum._id } });
    } else {
      navigate('/login', { state: { from: `/forum/${slug}`, message: 'Please log in to create a new thread' } });
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  const { forum, threads } = forumData;

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/forum">Forums</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {forum.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">{forum.name}</h1>
        <button 
          className="btn btn-primary" 
          onClick={handleNewThread}
        >
          Start New Thread
        </button>
      </div>

      <p className="text-muted mb-5">{forum.description}</p>

      {threads.length === 0 ? (
        <div className="alert alert-info">
          No threads have been created in this forum yet. Be the first to start a discussion!
        </div>
      ) : (
        <div className="card shadow-sm">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col" className="ps-4" style={{ width: '60%' }}>Thread</th>
                  <th scope="col" className="text-center">Replies</th>
                  <th scope="col" className="text-center">Views</th>
                  <th scope="col">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {threads.map(thread => (
                  <tr key={thread._id}>
                    <td className="ps-4">
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-1">
                          {thread.isPinned && (
                            <Pin size={14} className="text-warning me-1" />
                          )}
                          {thread.isLocked && (
                            <Lock size={14} className="text-secondary me-1" />
                          )}
                          <Link 
                            to={`/forum/thread/${thread._id}`}
                            className="fw-bold text-decoration-none"
                          >
                            {thread.title}
                          </Link>
                        </div>
                        <div className="d-flex align-items-center small text-muted">
                          <User size={14} className="me-1" />
                          <span>{thread.author.username}</span>
                          <span className="mx-1">•</span>
                          <Clock size={14} className="me-1" />
                          <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center align-middle">
                      <span className="badge bg-light text-dark">
                        {thread.replyCount}
                      </span>
                    </td>
                    <td className="text-center align-middle">
                      <span className="text-muted small">{thread.viewCount}</span>
                    </td>
                    <td className="align-middle">
                      <span className="text-muted small">
                        {new Date(thread.lastReplyAt).toLocaleDateString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumDetail;