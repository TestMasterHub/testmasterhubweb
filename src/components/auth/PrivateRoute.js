// src/components/auth/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // You could replace this with a loading spinner
    return <div className="d-flex justify-content-center p-5">Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect to the login page with the current location in state
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;