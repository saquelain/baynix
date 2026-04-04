const PAGE_MAP: Record<string, string> = {
  '/bulk-sms':                    'Bulk SMS',
  '/whatsapp-api':                'WhatsApp API',
  '/rcs-messaging':               'RCS Messaging',
  '/voice':                       'Voice Solutions',
  '/voice-otp':                   'Voice OTP',
  '/voice-api':                   'Voice API',
  '/email-api':                   'Email API',
  '/email-to-sms':                'Email to SMS',
  '/otp-authenticator':           'OTP Authenticator',
  '/otp-api':                     'OTP API',
  '/sms-api':                     'SMS API',
  '/sms-gateway':                 'SMS Gateway',
  '/smpp-platform':               'SMPP Platform',
  '/shortcode':                   'Shortcode',
  '/longcode':                    'Longcode',
  '/number-masking':              'Number Masking',
  '/ivr-system':                  'IVR System',
  '/outbound-dialing-service':    'Outbound Dialing Service',
  '/inbound-dialing-service':     'Inbound Dialing Service',
  '/missed-call-service':         'Missed Call Service',
  '/whatsapp-crm':                'WhatsApp CRM',
  '/whatsapp-chatbot':            'WhatsApp Chatbot',
  '/conversational-ai-chatbot':   'Conversational AI Chatbot',
  '/click-to-whatsapp-ads':       'Click to WhatsApp Ads',
  '/e-commerce-d2c':              'E-Commerce / D2C',
  '/bsfi-fintech':                'BFSI & Fintech',
  '/edtech':                      'EdTech',
  '/logistics':                   'Logistics',
  '/health-care':                 'Healthcare',
  '/start-ups':                   'Startups',
  '/enterprises':                 'Enterprises',
  '/pricing':                     'Pricing',
  '/about':                       'About',
  '/contact':                     'Contact',
  '/career':                      'Career',
  '/api-docs/sms':                'SMS API Docs',
  '/api-docs/otp':                'OTP API Docs',
  '/api-docs/rcs':                'RCS API Docs',
  '/api-docs/whatsapp':           'WhatsApp API Docs',
}

export function detectPage(pathname: string): string {
  for (const [key, val] of Object.entries(PAGE_MAP)) {
    if (pathname.startsWith(key)) return val
  }
  return 'General'
}
