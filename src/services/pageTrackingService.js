const API_BASE_URL = process.env.REACT_APP_API_URL;
const ENVIRONMENT = process.env.REACT_APP_Environment || 'production';

class PageTrackingService {

  constructor() {
    // Log initialization status
    if (ENVIRONMENT !== 'production') {
      console.log(`PageTrackingService initialized in ${ENVIRONMENT} environment. Tracking is disabled.`);
    } else {
      console.log("PageTrackingService initialized in production environment.");
    }
  }

  /**
   * Tracks a page visit. Does nothing if not in 'production' environment.
   */
  async trackPageVisit(pagePath) {
    // Guard clause: Only run in production
    if (ENVIRONMENT !== 'production') {
      return Promise.resolve(null);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/v1/tracking/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pagePath: pagePath
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Failed to track page visit:', error);
      // Don't throw - tracking failures shouldn't break the app
      return null;
    }
  }

  /**
   * Gets recent visits. Returns an empty array if not in 'production' environment.
   */
  async getRecentVisits(limit = 50, hours = 24) {
    // Guard clause: Only run in production
    if (ENVIRONMENT !== 'production') {
      return Promise.resolve([]); // Return an empty array as expected
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/v1/tracking/visits/recent?limit=${limit}&hours=${hours}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to get recent visits:', error);
      throw error;
    }
  }

  /**
   * Gets visit stats. Returns an empty object if not in 'production' environment.
   */
  async getVisitStats(hours = 24) {
    // Guard clause: Only run in production
    if (ENVIRONMENT !== 'production') {
      return Promise.resolve({}); // Return an empty object as expected
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/v1/tracking/visits/stats?hours=${hours}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to get visit stats:', error);
      throw error;
    }
  }
}

const pageTrackingService = new PageTrackingService();
export default pageTrackingService;