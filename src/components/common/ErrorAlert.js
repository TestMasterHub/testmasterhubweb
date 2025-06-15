

// src/components/common/ErrorAlert.js
import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorAlert = ({ message }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center my-4">
      <AlertCircle size={24} className="me-2" />
      <div>{message}</div>
    </div>
  );
};

export default ErrorAlert;