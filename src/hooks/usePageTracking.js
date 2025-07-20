import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import pageTrackingService from '../services/pageTrackingService';

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page visit when location changes
    const trackVisit = async () => {
      const pagePath = location.pathname + location.search + location.hash;
      await pageTrackingService.trackPageVisit(pagePath);
    };

    // Small delay to ensure page has loaded
    const timeoutId = setTimeout(trackVisit, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);
};

// Alternative hook with more control
export const usePageTrackingWithOptions = (options = {}) => {
  const location = useLocation();
  const { 
    enabled = true, 
    excludePaths = [], 
    delay = 100,
    trackQueryParams = true,
    trackHash = false 
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const currentPath = location.pathname;
    
    // Check if current path should be excluded
    if (excludePaths.some(path => currentPath.startsWith(path))) {
      return;
    }

    const trackVisit = async () => {
      let pagePath = location.pathname;
      
      if (trackQueryParams && location.search) {
        pagePath += location.search;
      }
      
      if (trackHash && location.hash) {
        pagePath += location.hash;
      }

      await pageTrackingService.trackPageVisit(pagePath);
    };

    const timeoutId = setTimeout(trackVisit, delay);
    return () => clearTimeout(timeoutId);
  }, [location, enabled, excludePaths, delay, trackQueryParams, trackHash]);
};