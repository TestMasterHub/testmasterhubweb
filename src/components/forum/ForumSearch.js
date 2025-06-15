

// src/components/forum/ForumSearch.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Search, MessageSquare, User } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

const ForumSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    
    setIsSearching(true);
    setSearchResults([]);
    
    try {
      // This would normally be an API call to search threads
      // For demonstration, we're using a timeout to simulate an API call
      setTimeout(() => {
        // Mock search results
        const results = [
          {
            _id: '1',
            title: 'How to test API endpoints with TestMasterHub',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            author: { username: 'testuser1', avatar: 'https://ui-avatars.com/api/?name=Test+User&background=random' },
            forum: { name: 'Getting Started', slug: 'getting-started' },
            createdAt: new Date().toISOString(),
            replyCount: 5
          },
          {
            _id: '2',
            title: 'Best practices for API security testing',
            content: 'Security testing is essential for any API. Here are some best practices...',
            author: { username: 'securityexpert', avatar: 'https://ui-avatars.com/api/?name=Security+Expert&background=random' },
            forum: { name: 'API Security', slug: 'api-security' },
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            replyCount: 12
          }
        ].filter(result => 
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          result.content.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        setSearchResults(results);
        setIsSearching(false);
        setSearchPerformed(true);
      }, 1000);
    } catch (err) {
      console.error('Error searching forums:', err);
      setIsSearching(false);
      setSearchPerformed(true);
    }
  };

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/forum">Forums</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Search
          </li>
        </ol>
      </nav>

      <h1 className="mb-4">Search Forums</h1>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <form onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for threads, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                required
              />
              <button 
                className="btn btn-primary" 
                type="submit"
                disabled={isSearching}
              >
                <Search size={18} className="me-2" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSearching ? (
        <LoadingSpinner />
      ) : searchPerformed ? (
        <div>
          <h2 className="h5 mb-3">Search Results for "{searchQuery}"</h2>
          
          {searchResults.length === 0 ? (
            <div className="alert alert-info">
              No results found for your search query. Try different keywords or browse the forums.
            </div>
          ) : (
            <div className="card shadow-sm">
              <div className="list-group list-group-flush">
                {searchResults.map(result => (
                  <Link
                    key={result._id}
                    to={`/forum/thread/${result._id}`}
                    className="list-group-item list-group-item-action p-3"
                  >
                    <h5 className="mb-1">{result.title}</h5>
                    <p className="mb-2 text-muted">
                      {result.content.substring(0, 150)}
                      {result.content.length > 150 ? '...' : ''}
                    </p>
                    <div className="d-flex justify-content-between align-items-center small">
                      <div className="d-flex align-items-center">
                        <User size={14} className="me-1" />
                        <span className="me-3">{result.author.username}</span>
                        <span className="text-muted me-3">
                          in {result.forum.name}
                        </span>
                        <span className="text-muted">
                          {new Date(result.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div>
                        <MessageSquare size={14} className="me-1" />
                        <span>{result.replyCount} replies</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ForumSearch;