import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/footer';
import { usePageTracking } from '../../hooks/usePageTracking';


const MainLayout = () => {
  // Run page tracking ONLY for the main app
  usePageTracking();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* The Outlet will render the specific page (Home, Product, etc.) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;