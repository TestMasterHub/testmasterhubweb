// src/components/forum/ThreadDetail.js
import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Clock, MessageSquare, Eye, Pin, Lock, Flag } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';
import { useAuth } from '../../contexts/AuthContext';
import ReplyForm from './ReplyForm';
import ReactMarkdown from 'react-markdown';

const ThreadDetail = () => {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [threadData, setThreadData] = useState({ thread: {}, replies: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const replyFormRef = useRef(null);

  useEffect(() => {
    const fetchThreadData = async () => {
      try {
        const response = await axios.get(`/api/threads/${threadId}`);
        setThreadData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load thread. The thread may not exist or there was a server error.');
        setLoading(false);
      }
    };

    fetchThreadData();
  }, [threadId]);

  const handleReplySubmit = (newReply) => {
    setThreadData(prev => ({
      ...prev,
      replies: [...prev.replies, newReply]
    }));
  };

  const handleQuote = (content, username) => {
    if (replyFormRef.current) {
      replyFormRef.current.quoteContent(`> **${username} wrote:**\n> ${content.replace(/\n/g, '\n> ')}\n\n`);
      window.scrollTo({
        top: replyFormRef.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

// src/components/forum/ThreadDetail.js (continued)
  const handlePinThread = async () => {
    try {
      if (!isAuthenticated || (user.role !== 'admin' && user.role !== 'moderator')) {
        return;
      }
      
      const response = await axios.patch(
        `/api/threads/${threadId}/pin`,
        {},
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      
      setThreadData(prev => ({
        ...prev,
        thread: { ...prev.thread, isPinned: response.data.isPinned }
      }));
    } catch (err) {
      console.error('Error pinning thread:', err);
    }
  };
  
  const handleLockThread = async () => {
    try {
      if (!isAuthenticated || (user.role !== 'admin' && user.role !== 'moderator')) {
        return;
      }
      
      const response = await axios.patch(
        `/api/threads/${threadId}/lock`,
        {},
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      
      setThreadData(prev => ({
        ...prev,
        thread: { ...prev.thread, isLocked: response.data.isLocked }
      }));
    } catch (err) {
      console.error('Error locking thread:', err);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert message={error} />;

  const { thread, replies } = threadData;
  const isModerator = user && (user.role === 'admin' || user.role === 'moderator');

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/forum">Forums</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/forum/${thread.forum.slug}`}>{thread.forum.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {thread.title}
          </li>
        </ol>
      </nav>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">
          {thread.isPinned && <Pin size={20} className="text-warning me-2" />}
          {thread.isLocked && <Lock size={20} className="text-secondary me-2" />}
          {thread.title}
        </h1>
        
        {isModerator && (
          <div className="d-flex">
            <button 
              className={`btn ${thread.isPinned ? 'btn-warning' : 'btn-outline-warning'} me-2`}
              onClick={handlePinThread}
            >
              {thread.isPinned ? 'Unpin Thread' : 'Pin Thread'}
            </button>
            <button 
              className={`btn ${thread.isLocked ? 'btn-secondary' : 'btn-outline-secondary'}`}
              onClick={handleLockThread}
            >
              {thread.isLocked ? 'Unlock Thread' : 'Lock Thread'}
            </button>
          </div>
        )}
      </div>

      <div className="card mb-4">
        <div className="card-header bg-light d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center small text-muted">
              <Clock size={14} className="me-1" />
              <span>{new Date(thread.createdAt).toLocaleString()}</span>
              <span className="mx-2">•</span>
              <Eye size={14} className="me-1" />
              <span>{thread.viewCount} views</span>
            </div>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-danger">
              <Flag size={14} className="me-1" />
              Report
            </button>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-2 mb-3 mb-md-0 text-center">
              <img 
                src={thread.author.avatar} 
                alt={`${thread.author.username}'s avatar`} 
                className="rounded-circle mb-2"
                width="64"
                height="64"
              />
              <h6>{thread.author.username}</h6>
              <div className="small text-muted mb-2">
                Posts: {thread.author.postCount}
              </div>
              <div className="small text-muted">
                Member since:<br />
                {new Date(thread.author.createdAt).toLocaleDateString()}
              </div>
            </div>
            <div className="col-md-10">
              <div className="thread-content mb-3">
                <ReactMarkdown>{thread.content}</ReactMarkdown>
              </div>
              {thread.author.signature && (
                <div className="border-top pt-3 mt-3 text-muted small">
                  <ReactMarkdown>{thread.author.signature}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="card-footer bg-light d-flex justify-content-end">
          <button 
            className="btn btn-sm btn-primary"
            onClick={() => handleQuote(thread.content, thread.author.username)}
          >
            <MessageSquare size={14} className="me-1" />
            Quote
          </button>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <h5 className="mb-3">Replies ({replies.length})</h5>
      )}

      {replies.map((reply, index) => (
        <div className="card mb-4" key={reply._id} id={`reply-${reply._id}`}>
          <div className="card-header bg-light d-flex justify-content-between">
            <div className="d-flex align-items-center small text-muted">
              <Clock size={14} className="me-1" />
              <span>{new Date(reply.createdAt).toLocaleString()}</span>
              <span className="mx-2">•</span>
              <span>#{index + 1}</span>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-danger">
                <Flag size={14} className="me-1" />
                Report
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 mb-3 mb-md-0 text-center">
                <img 
                  src={reply.author.avatar} 
                  alt={`${reply.author.username}'s avatar`} 
                  className="rounded-circle mb-2"
                  width="64"
                  height="64"
                />
                <h6>{reply.author.username}</h6>
                <div className="small text-muted mb-2">
                  Posts: {reply.author.postCount}
                </div>
                <div className="small text-muted">
                  Member since:<br />
                  {new Date(reply.author.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="col-md-10">
                <div className="reply-content mb-3">
                  <ReactMarkdown>{reply.content}</ReactMarkdown>
                </div>
                {reply.author.signature && (
                  <div className="border-top pt-3 mt-3 text-muted small">
                    <ReactMarkdown>{reply.author.signature}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer bg-light d-flex justify-content-end">
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => handleQuote(reply.content, reply.author.username)}
            >
              <MessageSquare size={14} className="me-1" />
              Quote
            </button>
          </div>
        </div>
      ))}

      {/* Reply Form */}
      {!thread.isLocked ? (
        isAuthenticated ? (
          <div ref={replyFormRef}>
            <ReplyForm 
              threadId={threadId} 
              onReplySubmit={handleReplySubmit} 
            />
          </div>
        ) : (
          <div className="alert alert-info">
            <p className="mb-0">
              You need to <Link to="/login">log in</Link> or <Link to="/register">register</Link> to reply to this thread.
            </p>
          </div>
        )
      ) : (
        <div className="alert alert-warning">
          <p className="mb-0">
            This thread has been locked. No new replies can be posted.
          </p>
        </div>
      )}
    </div>
  );
};

export default ThreadDetail;