const API_BASE_URL = process.env.REACT_APP_API_URL;

class PageTrackingService {
  async trackPageVisit(pagePath) {
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

  async getRecentVisits(limit = 50, hours = 24) {
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

  async getVisitStats(hours = 24) {
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