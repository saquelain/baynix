'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const WA_SEND = 'https://api.baynix.ai/v1/whatsapp'

const sideItems = [
  { id: 'wa-send-overview', label: 'Overview' },
  { id: 'wa-send-no-header', label: 'No Header' },
  { id: 'wa-send-no-header-vars', label: 'No Header + Variables' },
  { id: 'wa-send-text-header', label: 'Text Header' },
  { id: 'wa-send-image-header', label: 'Image Header' },
  { id: 'wa-send-video-header', label: 'Video Header' },
  { id: 'wa-send-doc-header', label: 'Document Header' },
  { id: 'wa-send-auth', label: 'Authentication Template' },
  { id: 'wa-send-personalize-url', label: 'Personalize URL Button' },
  { id: 'wa-send-catalog', label: 'Template with Catalog' },
]

const WA_SEND_RESPONSE = `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "+91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`

const WA_COMMON_REQUIRED: Param[] = [
  { name: 'from', type: 'string', description: 'WhatsApp Business number to send from. Prefix country code — e.g. +91XXXXXXXXXX.' },
  { name: 'templateName', type: 'string', description: 'Template name — lowercase alphanumeric characters and underscores only.' },
  { name: 'to', type: 'string', description: "Recipient's MSISDN." },
  { name: 'type', type: 'string', description: 'WhatsApp message type. Use "template".' },
]
const WA_CAMPAIGN_OPTIONAL: Param[] = [
  { name: 'campaignName', type: 'string', description: 'Name/title given to the WhatsApp campaign.' },
]

const waSendEndpoints: Endpoint[] = [
  {
    id: 'wa-send-no-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — None',
    description: "For templates with no header or complex settings. Just plug in and you're good to go.",
    requiredParams: WA_COMMON_REQUIRED,
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-no-header-vars',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — None and variables',
    description: 'For templates without complex headers but with body parameters for customization. Pass variable values in the params array in the same order as your template placeholders.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.body.params', type: 'string[]', description: 'Array of variable values matching the template placeholders in order. Pass an empty array [] if no placeholders.' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "body": {
      "params": ["var1", "var2", "var3"]
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "body": { "params": ["var1", "var2", "var3"] }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-text-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — Text and variables',
    description: 'For text-header templates with customizable body parameters. Include a header object with type "text" and the header text value.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.body.params', type: 'string[]', description: 'Array of body variable values.' },
      { name: 'components.header.type', type: 'string', description: 'Set to "text".' },
      { name: 'components.header.text', type: 'string', description: 'The text value for the header.' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "body": {
      "params": ["var1", "var2", "var3"]
    },
    "header": {
      "type": "text",
      "text": "text value"
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "body": { "params": ["var1", "var2", "var3"] },
      "header": { "type": "text", "text": "text value" }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-image-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — Image and variables',
    description: 'For image-header templates. Provide an image URL (https:// or http://) in supported formats: JPG, JPEG, or PNG. Maximum size: 5 MB.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.body.params', type: 'string[]', description: 'Array of body variable values.' },
      { name: 'components.header.type', type: 'string', description: 'Set to "image".' },
      { name: 'components.header.image.link', type: 'string', description: 'Public URL of the image (JPG/JPEG/PNG, max 5 MB).' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "body": {
      "params": ["var1", "var2", "var3"]
    },
    "header": {
      "type": "image",
      "image": {
        "link": "https://example.com/image.jpg"
      }
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "body": { "params": ["var1", "var2", "var3"] },
      "header": { "type": "image", "image": { "link": "https://example.com/image.jpg" } }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-video-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — Video and variables',
    description: 'For video-header templates. Provide a publicly accessible video URL.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.body.params', type: 'string[]', description: 'Array of body variable values.' },
      { name: 'components.header.type', type: 'string', description: 'Set to "video".' },
      { name: 'components.header.video.link', type: 'string', description: 'Public URL of the video.' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "body": {
      "params": ["var1", "var2", "var3"]
    },
    "header": {
      "type": "video",
      "video": {
        "link": "https://example.com/video.mp4"
      }
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "body": { "params": ["var1", "var2", "var3"] },
      "header": { "type": "video", "video": { "link": "https://example.com/video.mp4" } }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-doc-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with header — Document and variables',
    description: 'For document-header templates. Provide a document URL and an optional filename.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.body.params', type: 'string[]', description: 'Array of body variable values.' },
      { name: 'components.header.type', type: 'string', description: 'Set to "document".' },
      { name: 'components.header.document.link', type: 'string', description: 'Public URL of the document.' },
      { name: 'components.header.document.filename', type: 'string', description: 'Filename shown to the recipient.' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "body": {
      "params": ["var1", "var2", "var3"]
    },
    "header": {
      "type": "document",
      "document": {
        "link": "https://example.com/doc.pdf",
        "filename": "document_name.pdf"
      }
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "body": { "params": ["var1", "var2", "var3"] },
      "header": { "type": "document", "document": { "link": "https://example.com/doc.pdf", "filename": "document_name.pdf" } }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-auth',
    method: 'POST',
    url: WA_SEND,
    title: 'Authentication Template',
    description: 'Send an authentication template with an OTP code. Use pre-approved authentication templates.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'otp', type: 'string', description: 'The One-Time Password to send to the user.' },
    ],
    optionalParams: [
      { name: 'campaignName', type: 'string', description: 'Name/title given to the WhatsApp campaign.' },
      { name: 'language.code', type: 'string', description: 'Language code for the template (e.g. "en").' },
    ],
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "otp": "XXXX",
  "type": "template",
  "language": {
    "code": "en"
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "otp": "XXXX",
    "type": "template",
    "language": { "code": "en" }
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-personalize-url',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with button — Personalize URL',
    description: 'For templates that include a dynamic/personalized URL button. Pass the URL value in the buttons params array.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.buttons.params', type: 'string[]', description: 'Array containing the personalized URL to append to the button.' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "buttons": {
      "params": ["https://example.com/page"]
    }
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": {
      "buttons": { "params": ["https://example.com/page"] }
    },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
  {
    id: 'wa-send-catalog',
    method: 'POST',
    url: WA_SEND,
    title: 'Template with Catalog',
    description: 'Send a WhatsApp template message that includes a product catalog button.',
    requiredParams: [
      ...WA_COMMON_REQUIRED,
      { name: 'components.type', type: 'string', description: 'Set to "button".' },
      { name: 'components.sub_type', type: 'string', description: 'Set to "catalog".' },
      { name: 'components.index', type: 'string', description: 'Button index. Set to "0".' },
    ],
    optionalParams: WA_CAMPAIGN_OPTIONAL,
    payload: `{
  "from": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "to": "+91XXXXXXXXXX",
  "templateName": "template_name",
  "components": {
    "type": "button",
    "sub_type": "catalog",
    "index": "0"
  },
  "type": "template"
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "from": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "to": "+91XXXXXXXXXX",
    "templateName": "template_name",
    "components": { "type": "button", "sub_type": "catalog", "index": "0" },
    "type": "template"
  }'`,
    response: WA_SEND_RESPONSE,
  },
]

export default function WaSendTemplatesPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* WhatsApp: Send Templates Overview */}
      <section id="wa-send-overview" style={{ marginBottom: '3rem' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
          }}>
            📤
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>WhatsApp — Send Templates</h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          The WhatsApp Business API facilitates seamless integration of WhatsApp messaging into your applications, enabling efficient and personalized customer communication. With rich features, it empowers businesses to engage effectively, provide timely updates, and offer responsive customer support.
        </p>

        {/* Endpoint */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Endpoint</p>
          <code style={{ display: 'block', padding: '0.75rem 1rem', background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.85rem', color: '#34d399', fontFamily: 'monospace' }}>
            {WA_SEND}
          </code>
        </div>

        {/* Headers */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Headers</p>
          <ParamTable label="" params={[
            { name: 'Content-Type', type: 'string', description: 'This should be set to application/json.' },
            { name: 'apikey', type: 'string', description: 'Find your API key under your login account.' },
          ]} />
        </div>
      </section>

      {/* WA Send endpoints */}
      {waSendEndpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
