// config.js
const config = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
    APP_NAME: process.env.REACT_APP_APP_NAME || 'Current Glimpse',
    ENABLE_VERIFICATION_BADGES: process.env.REACT_APP_ENABLE_VERIFICATION_BADGES === 'true',
    ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
    GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID || '',
  };
  
  export default config;