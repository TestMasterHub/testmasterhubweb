

// src/components/forum/ReplyForm.js
import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';

const ReplyForm = forwardRef(({ threadId, onReplySubmit }, ref) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef(null);
  
  // Expose the quoteContent method to parent components through ref
  useImperativeHandle(ref, () => ({
    quoteContent: (quoteText) => {
      setContent(prev => quoteText + prev);
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    },
    offsetTop: textareaRef?.current?.offsetTop || 0
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('Reply content is required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post(
        '/api/replies',
        { content, threadId },
        { headers: { 'x-auth-token': localStorage.getItem('token') } }
      );
      
      // Call the callback function with the new reply
      onReplySubmit(response.data);
      
      // Clear the form
      setContent('');
      setIsSubmitting(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to post reply. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-light">
        <h5 className="mb-0">Post a Reply</h5>
      </div>
      <div className="card-body">
        {error && (
          <div className="alert alert-danger d-flex align-items-center mb-3">
            <AlertCircle size={18} className="me-2" />
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              ref={textareaRef}
              className="form-control"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Write your reply here... Markdown is supported"
            />
            <div className="form-text">
              Markdown formatting is supported.
            </div>
          </div>
          
          <div className="d-flex justify-content-end">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Posting...' : 'Post Reply'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ReplyForm;