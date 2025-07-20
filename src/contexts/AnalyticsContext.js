import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pageTrackingService from '../services/pageTrackingService';

const AnalyticsContext = createContext();

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider = ({ children, config = {} }) => {
  const location = useLocation();
  const { enabled = true, excludePaths = ['/admin'] } = config;

  useEffect(() => {
    if (!enabled) return;

    const currentPath = location.pathname;
    if (excludePaths.some(path => currentPath.startsWith(path))) {
      return;
    }

    const trackVisit = async () => {
      const pagePath = location.pathname + location.search;
      await pageTrackingService.trackPageVisit(pagePath);
    };

    const timeoutId = setTimeout(trackVisit, 100);
    return () => clearTimeout(timeoutId);
  }, [location, enabled, excludePaths]);

  const trackCustomEvent = async (eventPath) => {
    await pageTrackingService.trackPageVisit(eventPath);
  };

  const value = {
    trackCustomEvent,
    getRecentVisits: pageTrackingService.getRecentVisits,
    getVisitStats: pageTrackingService.getVisitStats
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};