export const WHATSAPP_PHONE = "5594991877509";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

interface WhatsAppClickData {
  source: string;
  pageType: 'home' | 'practice_area';
  practiceAreaSlug?: string;
  practiceAreaTitle?: string;
}

export function trackWhatsAppClick(data: WhatsAppClickData) {
  const payload = {
    event: 'whatsapp_click',
    source: data.source,
    pageType: data.pageType,
    practiceAreaSlug: data.practiceAreaSlug || '',
    practiceAreaTitle: data.practiceAreaTitle || '',
    path: window.location.pathname
  };

  console.log('Tracking WhatsApp Click:', payload);

  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push(payload);
  }
}
