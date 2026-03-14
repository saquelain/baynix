'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const RCS_URL = 'https://api.baynix.ai/v1/rcs'

const sideItems = [
  { id: 'rcs-overview', label: 'Overview' },
  { id: 'rcs-plain-text', label: 'Plain Text' },
  { id: 'rcs-rich-text', label: 'Rich Text' },
  { id: 'rcs-text-vars', label: 'Text with Variables' },
  { id: 'rcs-standalone-keep', label: 'Standalone (Keep Image)' },
  { id: 'rcs-standalone-custom', label: 'Standalone (Custom Image)' },
  { id: 'rcs-carousel-custom', label: 'Carousel (Custom Images)' },
  { id: 'rcs-carousel-keep', label: 'Carousel (Keep Images)' },
]

const RCS_RESPONSE = `{
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

const RCS_COMMON_REQUIRED: Param[] = [
  { name: 'number', type: 'string', description: "Recipient's RCS-enabled phone number in international format — e.g. +91XXXXXXXXXX." },
  { name: 'templateName', type: 'string', description: 'Name of the message template to be used.' },
  { name: 'botId', type: 'string', description: 'Identifier of the RCS bot used to send the message.' },
  { name: 'type', type: 'string', description: 'Route Type — Use TRANS for Transactional, PROMO for Promotional.' },
]
const RCS_CAMPAIGN_OPTIONAL: Param[] = [
  { name: 'campaignName', type: 'string', description: 'Name/title given to the RCS campaign.' },
]

const rcsEndpoints: Endpoint[] = [
  {
    id: 'rcs-plain-text',
    method: 'POST',
    url: RCS_URL,
    title: 'Plain Text',
    description: 'Send an RCS message using a predefined plain text campaign template. The message is sent via a specified bot ID to a valid RCS-enabled phone number.',
    requiredParams: RCS_COMMON_REQUIRED,
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "number": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "botId": "EXPOSE",
  "type": "TRANS",
  "templateName": "plane_text"
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "number": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "botId": "EXPOSE",
    "type": "TRANS",
    "templateName": "plane_text"
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-rich-text',
    method: 'POST',
    url: RCS_URL,
    title: 'Rich Text',
    description: 'Send an RCS rich text message. Rich Text goes beyond plain text by supporting formatting and media enhancements such as interactive buttons.',
    requiredParams: RCS_COMMON_REQUIRED,
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "number": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "botId": "EXPOSE",
  "type": "TRANS",
  "templateName": "rich_text"
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "number": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "botId": "EXPOSE",
    "type": "TRANS",
    "templateName": "rich_text"
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-text-vars',
    method: 'POST',
    url: RCS_URL,
    title: 'Text with Variables',
    description: 'Send an RCS text template with customizable parameters. Pass variable values in the content array params field in the same order as your template placeholders.',
    requiredParams: [
      ...RCS_COMMON_REQUIRED,
      { name: 'content', type: 'array', description: 'Array of content objects containing params (variable values) and/or fileUrl fields.' },
      { name: 'content[].params', type: 'string[]', description: 'Variable values matching template placeholders in order. Pass an empty array if no placeholders.' },
    ],
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "campaignName": "rcs-api-sms",
  "botId": "EXPOSE",
  "type": "TRANS",
  "number": "+91XXXXXXXXXX",
  "templateName": "text_with_variables",
  "content": [
    {
      "params": ["Business", "API's"]
    }
  ]
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "campaignName": "rcs-api-sms",
    "botId": "EXPOSE",
    "type": "TRANS",
    "number": "+91XXXXXXXXXX",
    "templateName": "text_with_variables",
    "content": [
      { "params": ["Business", "API'"'"'s"] }
    ]
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-standalone-keep',
    method: 'POST',
    url: RCS_URL,
    title: 'Standalone — Keep Template Image',
    description: "Send a standalone RCS card using the image already defined in the template. Use this when you don't need to override the template's media.",
    requiredParams: RCS_COMMON_REQUIRED,
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "number": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "botId": "EXPOSE",
  "type": "TRANS",
  "templateName": "standalone"
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "number": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "botId": "EXPOSE",
    "type": "TRANS",
    "templateName": "standalone"
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-standalone-custom',
    method: 'POST',
    url: RCS_URL,
    title: 'Standalone — Custom Image',
    description: 'Send a standalone RCS card and override the template image with a custom one. Provide a publicly accessible URL in the content array.',
    requiredParams: [
      ...RCS_COMMON_REQUIRED,
      { name: 'content', type: 'array', description: 'Array containing a single object with fileUrl pointing to the custom image.' },
      { name: 'content[].fileUrl', type: 'string', description: 'Publicly accessible URL to the media file you want to send.' },
    ],
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "campaignName": "rcs-api-sms",
  "botId": "EXPOSE",
  "type": "TRANS",
  "number": "+91XXXXXXXXXX",
  "templateName": "standalone",
  "content": [
    {
      "fileUrl": "https://example.com/uploads/image.jpg"
    }
  ]
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "campaignName": "rcs-api-sms",
    "botId": "EXPOSE",
    "type": "TRANS",
    "number": "+91XXXXXXXXXX",
    "templateName": "standalone",
    "content": [
      { "fileUrl": "https://example.com/uploads/image.jpg" }
    ]
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-carousel-custom',
    method: 'POST',
    url: RCS_URL,
    title: 'Carousel — Custom Images',
    description: 'Send an RCS carousel and override each card image with custom media URLs. Provide one fileUrl per card in the content array.',
    requiredParams: [
      ...RCS_COMMON_REQUIRED,
      { name: 'content', type: 'array', description: 'Array of objects, one per carousel card, each with a fileUrl for the card image.' },
      { name: 'content[].fileUrl', type: 'string', description: 'Publicly accessible URL to the media file for each card.' },
    ],
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "campaignName": "rcs-api-sms",
  "botId": "EXPOSE",
  "type": "TRANS",
  "number": "+91XXXXXXXXXX",
  "templateName": "carousel_with_chips&buttons",
  "content": [
    { "fileUrl": "https://example.com/uploads/card1.jpg" },
    { "fileUrl": "https://example.com/uploads/card2.jpg" }
  ]
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "campaignName": "rcs-api-sms",
    "botId": "EXPOSE",
    "type": "TRANS",
    "number": "+91XXXXXXXXXX",
    "templateName": "carousel_with_chips&buttons",
    "content": [
      { "fileUrl": "https://example.com/uploads/card1.jpg" },
      { "fileUrl": "https://example.com/uploads/card2.jpg" }
    ]
  }'`,
    response: RCS_RESPONSE,
  },
  {
    id: 'rcs-carousel-keep',
    method: 'POST',
    url: RCS_URL,
    title: 'Carousel — Keep Template Images',
    description: "Send an RCS carousel using the images already defined in the template. Use this when you don't need to override any card media.",
    requiredParams: RCS_COMMON_REQUIRED,
    optionalParams: RCS_CAMPAIGN_OPTIONAL,
    payload: `{
  "number": "+91XXXXXXXXXX",
  "campaignName": "api-test",
  "botId": "EXPOSE",
  "type": "TRANS",
  "templateName": "carousel_with_chips&buttons"
}`,
    curl: `curl -X POST ${RCS_URL} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "number": "+91XXXXXXXXXX",
    "campaignName": "api-test",
    "botId": "EXPOSE",
    "type": "TRANS",
    "templateName": "carousel_with_chips&buttons"
  }'`,
    response: RCS_RESPONSE,
  },
]

export default function RcsPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* RCS Overview */}
      <section id="rcs-overview" style={{ marginBottom: '3rem' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
          }}>
            📡
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>RCS Business API</h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          The RCS Business API facilitates seamless integration of RCS messaging into your applications, enabling efficient and personalized customer communication. With rich features, it empowers businesses to engage effectively, provide timely updates, and offer responsive customer support on a trusted platform.
        </p>

        {/* Message types info */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            { label: 'Plain Text', desc: 'Simple text messages', color: '#60a5fa' },
            { label: 'Rich Text', desc: 'Text with interactive buttons', color: '#34d399' },
            { label: 'Standalone Card', desc: 'Single media + button card', color: '#a78bfa' },
            { label: 'Carousel', desc: 'Multiple scrollable cards', color: '#fb923c' },
          ].map(({ label, desc, color }) => (
            <div key={label} style={{
              padding: '0.75rem 1rem',
              background: 'var(--surface)',
              border: `1px solid ${color}30`,
              borderRadius: 10,
              minWidth: 160,
            }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color, marginBottom: '0.2rem' }}>{label}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Endpoint */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Endpoint</p>
          <code style={{ display: 'block', padding: '0.75rem 1rem', background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.85rem', color: '#34d399', fontFamily: 'monospace' }}>
            {RCS_URL}
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

      {/* RCS endpoints */}
      {rcsEndpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
