// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Download from './pages/DownloadPage';
import Resources from './pages/Resources';
import ForumHome from './components/forum/ForumHome';
import ForumDetail from './components/forum/ForumDetail';
import ThreadDetail from './components/forum/ThreadDetail';
import NewThreadForm from './components/forum/NewThreadForm';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForumSearch from './components/forum/ForumSearch';
import PrivateRoute from './components/auth/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

// CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/download" element={<Download />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Public Forum Routes */}
              <Route path="/forum" element={<ForumHome />} />
              <Route path="/forum/:slug" element={<ForumDetail />} />
              <Route path="/forum/thread/:threadId" element={<ThreadDetail />} />
              <Route path="/forum/search" element={<ForumSearch />} />
              
              {/* Protected Forum Routes */}
              <Route 
                path="/forum/:slug/new-thread" 
                element={
                  <PrivateRoute>
                    <NewThreadForm />
                  </PrivateRoute>
                } 
              />
              
              {/* Add other protected routes here */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;