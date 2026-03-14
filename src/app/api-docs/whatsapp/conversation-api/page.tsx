'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const WA_SEND = 'https://api.baynix.ai/v1/whatsapp'

const sideItems = [
  { id: 'wa-conv-overview', label: 'Overview' },
  { id: 'wa-conv-reply-no-header', label: 'Reply Buttons (No Header)' },
  { id: 'wa-conv-reply-text-header', label: 'Reply Buttons (Text Header)' },
  { id: 'wa-conv-reply-media-header', label: 'Reply Buttons (Media Header)' },
  { id: 'wa-conv-list', label: 'List Messages' },
  { id: 'wa-conv-location', label: 'Location Request' },
  { id: 'wa-conv-text', label: 'Text Messages' },
  { id: 'wa-conv-image', label: 'Image Messages' },
  { id: 'wa-conv-video', label: 'Video Messages' },
  { id: 'wa-conv-document', label: 'Document Messages' },
]

const WA_CONV_RESPONSE = `{
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

const waConvEndpoints: Endpoint[] = [
  {
    id: 'wa-conv-reply-no-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Reply Buttons (without header)',
    description: 'Send an interactive button message with no header. Assemble an interactive object of type "button". Max 3 buttons, max 20 characters per title.',
    requiredParams: [
      { name: 'body', type: 'object', description: 'Message body text. Maximum 1024 characters.' },
      { name: 'action.buttons', type: 'object[]', description: 'At least one button with type, id, and title. Max 3 buttons, max 20 characters per title.' },
    ],
    optionalParams: [
      { name: 'footer', type: 'object', description: 'Footer text. Maximum 60 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "body": {
      "text": "How would you rate your experience?"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": { "id": "btn_1", "title": "First Button" }
        },
        {
          "type": "reply",
          "reply": { "id": "btn_2", "title": "Second Button" }
        }
      ]
    }
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "body": { "text": "How would you rate your experience?" },
      "action": {
        "buttons": [
          { "type": "reply", "reply": { "id": "btn_1", "title": "First Button" } },
          { "type": "reply", "reply": { "id": "btn_2", "title": "Second Button" } }
        ]
      }
    }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-reply-text-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Reply Buttons (with text header)',
    description: 'Send an interactive button message with a text header. Set header type to "text" and provide the header text content. Maximum 60 characters.',
    requiredParams: [
      { name: 'body', type: 'object', description: 'Message body text. Maximum 1024 characters.' },
      { name: 'action.buttons', type: 'object[]', description: 'At least one button. Max 3 buttons, max 20 characters per title.' },
    ],
    optionalParams: [
      { name: 'header', type: 'object', description: 'Header with type "text" and a text field. Maximum 60 characters.' },
      { name: 'footer', type: 'object', description: 'Footer text. Maximum 60 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "your-header-content"
    },
    "body": {
      "text": "How would you rate your experience?"
    },
    "action": {
      "buttons": [
        { "type": "reply", "reply": { "id": "rate_good", "title": "Good" } },
        { "type": "reply", "reply": { "id": "rate_avg", "title": "Average" } },
        { "type": "reply", "reply": { "id": "rate_bad", "title": "Bad" } }
      ]
    }
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "header": { "type": "text", "text": "your-header-content" },
      "body": { "text": "How would you rate your experience?" },
      "action": {
        "buttons": [
          { "type": "reply", "reply": { "id": "rate_good", "title": "Good" } },
          { "type": "reply", "reply": { "id": "rate_avg", "title": "Average" } },
          { "type": "reply", "reply": { "id": "rate_bad", "title": "Bad" } }
        ]
      }
    }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-reply-media-header',
    method: 'POST',
    url: WA_SEND,
    title: 'Reply Buttons (with media header)',
    description: 'Send an interactive button message with an image, video, or document header. Set header type to the appropriate media type and provide the media link.',
    requiredParams: [
      { name: 'body', type: 'object', description: 'Message body text. Maximum 1024 characters.' },
      { name: 'action.buttons', type: 'object[]', description: 'At least one button. Max 3 buttons, max 20 characters per title.' },
    ],
    optionalParams: [
      { name: 'header', type: 'object', description: 'Header with type "image", "video", or "document" and the corresponding media object with a link field.' },
      { name: 'footer', type: 'object', description: 'Footer text. Maximum 60 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": {
      "type": "image",
      "image": { "link": "https://the-url/image.jpg" }
    },
    "body": {
      "text": "How would you rate your experience?"
    },
    "footer": {
      "text": "Thanks for your feedback"
    },
    "action": {
      "buttons": [
        { "type": "reply", "reply": { "id": "btn_1", "title": "First Button" } },
        { "type": "reply", "reply": { "id": "btn_2", "title": "Second Button" } }
      ]
    }
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "interactive",
    "interactive": {
      "type": "button",
      "header": { "type": "image", "image": { "link": "https://the-url/image.jpg" } },
      "body": { "text": "How would you rate your experience?" },
      "footer": { "text": "Thanks for your feedback" },
      "action": {
        "buttons": [
          { "type": "reply", "reply": { "id": "btn_1", "title": "First Button" } },
          { "type": "reply", "reply": { "id": "btn_2", "title": "Second Button" } }
        ]
      }
    }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-list',
    method: 'POST',
    url: WA_SEND,
    title: 'List Messages',
    description: 'Send an interactive list message. Max 10 sections, max 24 characters per section title. Each row has a title (max 24 chars) and description (max 72 chars).',
    requiredParams: [
      { name: 'body', type: 'object', description: 'Message body text. Maximum 1024 characters.' },
      { name: 'action.button', type: 'string', description: 'Label for the list button. Maximum 20 characters.' },
      { name: 'action.sections', type: 'object[]', description: 'At least one section (max 10) each containing at least one row with id, title, and optional description.' },
    ],
    optionalParams: [
      { name: 'header', type: 'object', description: 'Header with type "text". Maximum 60 characters.' },
      { name: 'footer', type: 'object', description: 'Footer text. Maximum 60 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "list",
    "header": { "type": "text", "text": "Book a Service" },
    "body": { "text": "Choose a service or support option:" },
    "footer": { "text": "Your Service Center" },
    "action": {
      "button": "See Options",
      "sections": [
        {
          "title": "Services",
          "rows": [
            { "id": "serv_1", "title": "Cleaning", "description": "Full home cleaning" },
            { "id": "serv_2", "title": "Plumbing", "description": "Fix water leakage" }
          ]
        },
        {
          "title": "Support",
          "rows": [
            { "id": "sup_1", "title": "Technical Support", "description": "For devices" },
            { "id": "sup_2", "title": "Account Support", "description": "For account issues" }
          ]
        }
      ]
    }
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "interactive",
    "interactive": {
      "type": "list",
      "header": { "type": "text", "text": "Book a Service" },
      "body": { "text": "Choose a service or support option:" },
      "footer": { "text": "Your Service Center" },
      "action": {
        "button": "See Options",
        "sections": [
          {
            "title": "Services",
            "rows": [
              { "id": "serv_1", "title": "Cleaning", "description": "Full home cleaning" },
              { "id": "serv_2", "title": "Plumbing", "description": "Fix water leakage" }
            ]
          }
        ]
      }
    }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-location',
    method: 'POST',
    url: WA_SEND,
    title: 'Location Request Messages',
    description: "Send a location request message with a 'Send Location' button. Tapping the button displays a location sharing screen. The user can then share their current location.",
    requiredParams: [
      { name: 'body', type: 'object', description: 'Message body text. Maximum 1024 characters.' },
      { name: 'action.name', type: 'string', description: 'Set to "send_location".' },
    ],
    optionalParams: [
      { name: 'footer', type: 'object', description: 'Footer text. Maximum 60 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "interactive",
  "interactive": {
    "type": "location_request_message",
    "body": {
      "text": "Can you please send your location?"
    },
    "footer": {
      "text": "Tap the button to share your location."
    },
    "action": {
      "name": "send_location"
    }
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "interactive",
    "interactive": {
      "type": "location_request_message",
      "body": { "text": "Can you please send your location?" },
      "footer": { "text": "Tap the button to share your location." },
      "action": { "name": "send_location" }
    }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-text',
    method: 'POST',
    url: WA_SEND,
    title: 'Text Messages',
    description: 'Send a plain text message. Set type to "text" and provide the message body.',
    requiredParams: [
      { name: 'text.body', type: 'string', description: 'The text content of the message. Maximum 1024 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "text",
  "text": {
    "body": "Hello! How can we help you today?"
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "text",
    "text": { "body": "Hello! How can we help you today?" }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-image',
    method: 'POST',
    url: WA_SEND,
    title: 'Image Messages',
    description: 'Send an image message. Provide a public HTTP/HTTPS URL to the image.',
    requiredParams: [
      { name: 'image.link', type: 'string', description: 'Public HTTP/HTTPS URL of the image.' },
    ],
    optionalParams: [
      { name: 'image.caption', type: 'string', description: 'Caption text. Maximum 1024 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "image",
  "image": {
    "link": "https://the-url/image.jpg",
    "caption": "Check this out!"
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "image",
    "image": { "link": "https://the-url/image.jpg", "caption": "Check this out!" }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-video',
    method: 'POST',
    url: WA_SEND,
    title: 'Video Messages',
    description: 'Send a video message. Provide a public HTTP/HTTPS URL to the video file.',
    requiredParams: [
      { name: 'video.link', type: 'string', description: 'Public HTTP/HTTPS URL of the video.' },
    ],
    optionalParams: [
      { name: 'video.caption', type: 'string', description: 'Caption text. Maximum 1024 characters.' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "video",
  "video": {
    "link": "https://the-url/video.mp4",
    "caption": "Watch this video"
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "video",
    "video": { "link": "https://the-url/video.mp4", "caption": "Watch this video" }
  }'`,
    response: WA_CONV_RESPONSE,
  },
  {
    id: 'wa-conv-document',
    method: 'POST',
    url: WA_SEND,
    title: 'Document Messages',
    description: 'Send a document message. Provide a public HTTP/HTTPS URL to the document. Note: captions are not supported for document media.',
    requiredParams: [
      { name: 'document.link', type: 'string', description: 'Public HTTP/HTTPS URL of the document.' },
    ],
    optionalParams: [
      { name: 'document.caption', type: 'string', description: 'Caption text (not supported for documents — omit this field).' },
    ],
    payload: `{
  "recipient_type": "individual",
  "from": "+91XXXXXXXXXX",
  "to": "+91XXXXXXXXXX",
  "type": "document",
  "document": {
    "link": "https://the-url/file.pdf"
  }
}`,
    curl: `curl -X POST ${WA_SEND} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "recipient_type": "individual",
    "from": "+91XXXXXXXXXX",
    "to": "+91XXXXXXXXXX",
    "type": "document",
    "document": { "link": "https://the-url/file.pdf" }
  }'`,
    response: WA_CONV_RESPONSE,
  },
]

export default function WaConversationApiPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* WhatsApp: Conversation API Overview */}
      <section id="wa-conv-overview" style={{ marginBottom: '3rem' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'rgba(251,146,60,0.1)', border: '1px solid rgba(251,146,60,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
          }}>
            🔁
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>WhatsApp — Conversation API</h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          Interactive messages give your users a simpler way to find and select what they want from your business on WhatsApp. Chatbots using interactive messaging features achieve significantly higher response rates and conversions compared to text-based messages.
        </p>

        {/* How to use */}
        <div style={{ background: 'var(--surface)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fb923c', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>How To Use It</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Set the message&apos;s <code style={{ color: '#93c5fd', fontFamily: 'monospace', fontSize: '0.82rem' }}>type</code> to{' '}
            <code style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '0.82rem' }}>&quot;interactive&quot;</code> and add the interactive object. Messages include up to 4 parts:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            {[
              { name: 'header', note: 'Optional — text, image, video, or document. Max 60 chars.', required: false },
              { name: 'body', note: 'Required — main message text. Max 1024 chars.', required: true },
              { name: 'footer', note: 'Optional — extra context. Max 60 chars.', required: false },
              { name: 'action', note: 'Required — buttons, list sections, or action name.', required: true },
            ].map(({ name, note, required }) => (
              <div key={name} style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                  <code style={{ color: '#93c5fd', fontFamily: 'monospace', fontSize: '0.82rem' }}>{name}</code>
                  <span style={{ fontSize: '0.6rem', padding: '0.1rem 0.4rem', borderRadius: 4, background: required ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.05)', color: required ? '#60a5fa' : 'var(--text3)', border: `1px solid ${required ? 'rgba(59,130,246,0.2)' : 'var(--border)'}` }}>
                    {required ? 'required' : 'optional'}
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text3)', lineHeight: 1.5 }}>{note}</p>
              </div>
            ))}
          </div>

          {/* Example snippets */}
          <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Structure Example</p>
          <pre style={{ background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem', fontSize: '0.76rem', lineHeight: 1.7, color: '#e2e8f0', overflowX: 'auto', fontFamily: '"Fira Code", monospace', marginBottom: '0.75rem' }}>
{`{
  "recipient_type": "individual",
  "to": "whatsapp-id",
  "type": "interactive",
  "interactive": {
    "type": "list" | "button" | "location_request_message",
    "header": {},
    "body": {},
    "footer": {},
    "action": {}
  }
}`}
          </pre>

          <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Action Example</p>
          <pre style={{ background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem', fontSize: '0.76rem', lineHeight: 1.7, color: '#e2e8f0', overflowX: 'auto', fontFamily: '"Fira Code", monospace', marginBottom: '0.75rem' }}>
{`"action": {
  "buttons": [
    { "type": "reply", "reply": { "id": "unique-id", "title": "First Button" } },
    { "type": "reply", "reply": { "id": "unique-id", "title": "Second Button" } }
  ]
}`}
          </pre>

          <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Header Example</p>
          <pre style={{ background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem', fontSize: '0.76rem', lineHeight: 1.7, color: '#e2e8f0', overflowX: 'auto', fontFamily: '"Fira Code", monospace' }}>
{`"header": {
  "type": "text" | "image" | "video" | "document",
  "text": "your text",
  // OR
  "image": { "link": "https://the-url" },
  // OR
  "video": { "link": "https://the-url" },
  // OR
  "document": { "link": "https://the-url", "filename": "file.pdf" }
}`}
          </pre>
        </div>

        {/* Endpoint + Headers */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Endpoint</p>
          <code style={{ display: 'block', padding: '0.75rem 1rem', background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.85rem', color: '#34d399', fontFamily: 'monospace' }}>
            {WA_SEND}
          </code>
        </div>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Headers</p>
          <ParamTable label="" params={[
            { name: 'Content-Type', type: 'string', description: 'This should be set to application/json.' },
            { name: 'apikey', type: 'string', description: 'Find your API key under your login account.' },
          ]} />
        </div>
      </section>

      {/* WA Conv endpoints */}
      {waConvEndpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
