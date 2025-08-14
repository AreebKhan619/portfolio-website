// Modern analytics setup - you can integrate with Google Analytics, Plausible, or other providers

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Usage examples:
// trackEvent('button_click', { button_name: 'download_resume' })
// trackPageView('/about')