import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (
      key: string,
      trackingId: string,
      config: { page_path: string }
    ) => void;
  }
}

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // INPUT_REQUIRED {add your Google Analytics tracking ID}

export const useAnalytics = () => {
  const location = useLocation();
  const logger = console;

  useEffect(() => {
    const trackPageView = (path: string) => {
      try {
        if (typeof window.gtag !== 'undefined') {
          logger.debug('Tracking page view:', path);
          window.gtag('config', GA_TRACKING_ID, {
            page_path: path,
          });
          logger.info('Successfully tracked page view:', path);
        } else {
          logger.warn('Google Analytics not initialized - gtag is undefined');
        }
      } catch (error) {
        logger.error('Error tracking page view:', error);
      }
    };

    trackPageView(location.pathname + location.search);
  }, [location]);
};