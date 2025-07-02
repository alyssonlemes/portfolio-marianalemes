export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      target: string,
      parameters?: Record<string, unknown>
    ) => void;
  }
}

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: method,
  });
};

// Track service interest
export const trackServiceInterest = (service: string) => {
  event({
    action: 'service_interest',
    category: 'engagement',
    label: service,
  });
};
