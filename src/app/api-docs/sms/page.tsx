'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const BASE_URL = 'https://api.baynix.ai/v1/sms'
const BASE_URL_TPL = 'https://api.baynix.ai/v1/sms/template'

const sideItems = [
  { id: 'sms-overview', label: 'Overview' },
  { id: 'sms-single', label: 'Send Single Message' },
  { id: 'sms-otp', label: 'Send OTP SMS' },
  { id: 'sms-bulk', label: 'Send Bulk SMS' },
  { id: 'sms-unicode', label: 'Send SMS with Unicode' },
  { id: 'sms-flash', label: 'Send Flash SMS' },
  { id: 'sms-template', label: 'Send Template SMS' },
  { id: 'sms-template-id', label: 'Send SMS with templateId' },
  { id: 'sms-shorturl', label: 'Send SMS with Short URL' },
]

const endpoints: Endpoint[] = [
  {
    id: 'sms-single',
    method: 'POST',
    url: BASE_URL,
    title: 'Send single message',
    description:
      'Our web app portal allows you to send individual SMS messages efficiently and securely.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Hello World!",
  "type": "TRANS"
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXX1",
    "text": "Hello, World!",
    "type": "TRANS"
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-otp',
    method: 'POST',
    url: BASE_URL,
    title: 'Send OTP SMS',
    description:
      "Our web app portal includes a robust feature for sending OTP (One-Time Password) SMS messages. This functionality is crucial for applications requiring enhanced security, such as user authentication, transaction verification, and password resets. The OTP SMS ensures that only the intended recipient can complete the action, adding an extra layer of security to your processes.",
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Hello World!",
  "type": "OTP"
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXXX",
    "text": "Hello, World!",
    "type": "OTP"
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-bulk',
    method: 'POST',
    url: BASE_URL,
    title: 'Send Bulk SMS',
    description:
      'Our web app portal is equipped with a powerful bulk SMS feature designed to facilitate large-scale communication with your audience. This functionality is ideal for marketing campaigns, event notifications, alerts, and any situation where you need to reach multiple recipients simultaneously.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN (comma-separated for bulk)" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXX1,91XXXXXXXXX2,91XXXXXXXXX3",
  "text": "Hello World!",
  "type": "TRANS"
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXX1,91XXXXXXXXXX2,91XXXXXXXXXX3",
    "text": "Hello, World!",
    "type": "TRANS"
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXX1",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    },
    {
      "recipient": "91XXXXXXXXX2",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:2"
    },
    {
      "recipient": "91XXXXXXXXX3",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:3"
    }
  ],
  "totalCount": 3,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-unicode',
    method: 'POST',
    url: BASE_URL,
    title: 'Send SMS with Unicode',
    description:
      'Our web app portal supports sending SMS messages with Unicode characters, allowing you to communicate in multiple languages and include special characters. This feature is essential for reaching a global audience, ensuring that your messages are accurately represented regardless of the language or symbols used.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    optionalParams: [
      {
        name: 'unicode',
        type: 'integer',
        description: 'To specify that the message to be sent is in unicode format.',
      },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Hello World!",
  "type": "TRANS",
  "unicode": 1
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXX1",
    "text": "Hello, World!",
    "type": "TRANS",
    "unicode": 1
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "unicode": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-flash',
    method: 'POST',
    url: BASE_URL,
    title: 'Send Flash SMS',
    description:
      "Our web app portal offers a Flash SMS feature, allowing you to send urgent and high-priority messages that appear directly on the recipient's mobile screen. Unlike regular SMS messages, Flash SMS doesn't get stored in the recipient's inbox by default, making it ideal for time-sensitive alerts, critical notifications, and emergency communications.",
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    optionalParams: [
      { name: 'flash', type: 'integer', description: 'Set to 1 to send as Flash SMS.' },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Hello World!",
  "type": "TRANS",
  "flash": 1
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXXX",
    "text": "Hello, World!",
    "type": "TRANS",
    "flash": 1
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1",
      "flash": 1
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-template',
    method: 'POST',
    url: BASE_URL,
    title: 'Send Template SMS',
    description:
      'Our web app portal includes a Template SMS feature designed to streamline and standardize your messaging processes. This functionality allows you to create and use predefined message templates for various scenarios such as promotions, reminders, notifications, and more.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      {
        name: 'type',
        type: 'string',
        description:
          'Route Type — Use TRANS for Transactional, PROMO for Promotional, OTP for OTP type.',
      },
    ],
    optionalParams: [
      { name: 'templateId', type: 'string', description: 'Unique ID of the template.' },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Hello World!",
  "type": "TRANS",
  "templateId": "templateId"
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXXX",
    "text": "Hello, World!",
    "type": "TRANS",
    "templateId": "templateId"
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-template-id',
    method: 'POST',
    url: BASE_URL_TPL,
    title: 'Send SMS with templateId',
    description:
      'Our web portal features a send SMS option with a templateId, making your messaging processes more efficient and consistent.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'templateId', type: 'string', description: 'Unique ID of the template.' },
      { name: 'type', type: 'string', description: 'TRANS' },
      {
        name: 'custom',
        type: 'object',
        description:
          'If the template contains variables, pass values in an array. Otherwise, pass a blank array.',
      },
    ],
    payload: `{
  "sender": "BAYNIX",
  "to": "91XXXXXXXXXX",
  "templateId": "150716565XXXXXXXXXX",
  "custom": ["var1", "var2"],
  "type": "TRANS"
}`,
    curl: `curl -X POST ${BASE_URL_TPL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: your_api_key' \\
  -d '{
    "sender": "BAYNIX",
    "to": "91XXXXXXXXXX",
    "templateId": "150716565XXXXXXXXXX",
    "custom": ["var1","var2"],
    "type": "TRANS"
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
  {
    id: 'sms-shorturl',
    method: 'POST',
    url: BASE_URL,
    title: 'Send SMS with Short URL',
    description:
      'Our web portal features a send SMS option with a Short URL, making your messaging processes more efficient and consistent.',
    requiredParams: [
      { name: 'sender', type: 'string', description: 'Originator/Alphanumeric ID' },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
      { name: 'text', type: 'string', description: 'The message content to be sent.' },
      { name: 'type', type: 'string', description: 'TRANS' },
    ],
    optionalParams: [
      {
        name: 'shortenUrlData',
        type: 'object',
        description:
          'Contains information related to URL shortening. Pass shortenUrl: true and targetUrl array.',
      },
    ],
    payload: `{
  "sender": "senderName",
  "to": "91XXXXXXXXXX",
  "text": "Thank you for contacting https://baynix.ai/SENDER/{SORT}",
  "type": "TRANS",
  "shortenUrlData": {
    "shortenUrl": true,
    "targetUrl": ["http://baynix.ai"]
  }
}`,
    curl: `curl -X POST ${BASE_URL} \\
  -H 'Content-Type: application/json' \\
  -H 'apikey: string' \\
  -d '{
    "sender": "senderName",
    "to": "91XXXXXXXXX1",
    "text": "Thank you for contacting https://baynix.ai/SENDER/{SORT}",
    "type": "TRANS",
    "shortenUrlData": {
      "shortenUrl": true,
      "targetUrl": ["http://baynix.ai"]
    }
  }'`,
    response: `{
  "id": "58d63c02-XXXX-XXXX-XXXX-XXXXbb39453",
  "data": [
    {
      "recipient": "91XXXXXXXXXX",
      "messageId": "58d63c02-XXXXX-XXXXX-XXXXX-XXXX9bb39453:1"
    }
  ],
  "totalCount": 1,
  "message": "Message Sent Successfully!",
  "error": null
}`,
  },
]

export default function SmsPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* SMS Overview */}
      <section id="sms-overview" style={{ marginBottom: '3rem' }}>
        {/* Section heading */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
        }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
          }}>
            💬
          </div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>SMS</h1>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          The Baynix Programmable SMS API helps you add robust messaging capabilities to your application. Our platform offers a comprehensive suite of SMS features to meet your communication needs — whether you&apos;re sending individual messages, bulk messages, or specialized types of SMS.
        </p>

        {/* Features */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Features
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '0.5rem' }}>Using SMS API, you can send:</p>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Bulk SMS', 'OTP SMS', 'Flash SMS', 'SMS with Unicode', 'WhatsApp API'].map((f) => (
              <li key={f} style={{
                padding: '0.3rem 0.85rem',
                background: 'rgba(59,130,246,0.08)',
                border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: 20,
                fontSize: '0.78rem',
                color: '#93c5fd',
              }}>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Base URL */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Base URL
          </p>
          <code style={{
            display: 'block',
            padding: '0.75rem 1rem',
            background: '#070b14',
            border: '1px solid var(--border)',
            borderRadius: 8,
            fontSize: '0.85rem',
            color: '#34d399',
            fontFamily: 'monospace',
          }}>
            {BASE_URL}
          </code>
        </div>

        {/* Headers */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Headers
          </p>
          <ParamTable
            label=""
            params={[
              { name: 'Content-Type', type: 'string', description: 'This should be set to application/json.' },
              { name: 'apikey', type: 'string', description: 'Find your API key under your login account.' },
            ]}
          />
        </div>
      </section>

      {/* Endpoint cards */}
      {endpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
