'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const BASE_URL_OTP = 'https://api.baynix.ai/v1/verify'
const BASE_URL_OTP_VALIDATE = 'https://api.baynix.ai/v1/verify/validate'

const sideItems = [
  { id: 'otp-overview', label: 'Overview' },
  { id: 'otp-generate', label: 'Generate OTP' },
  { id: 'otp-verify', label: 'Verify OTP' },
]

const otpEndpoints: Endpoint[] = [
  {
    id: 'otp-generate',
    method: 'POST',
    url: BASE_URL_OTP,
    title: 'Generate OTP',
    description:
      'This endpoint facilitates the generation of a One-Time Password (OTP). Upon successful invocation, a unique OTP is provided, enhancing the security of your system. By default, the OTP is designed for single-use and expires after a specified timeframe. Implementing this feature adds an additional layer of authentication to your application, bolstering overall security.',
    requiredParams: [
      {
        name: 'config-id',
        type: 'string',
        description: 'ID of the verification configuration based on which the OTP will be generated.',
      },
      { name: 'to', type: 'string', description: "Recipient's MSISDN" },
    ],
    payload: `{
  "configId": "a73cd9xe-XXXX-XXXX-XXXX-7f731bcf4y64",
  "to": "91XXXXXXXXXX"
}`,
    curl: `curl -X POST ${BASE_URL_OTP} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "configId": "a73cd9xe-XXXX-XXXX-XXXX-7f731bcf4y64",
    "to": "91XXXXXXXXXX"
  }'`,
    response: `{
  "data": "33888968-XXXX-XXXX-XXXX-3010e0069668",
  "error": null,
  "message": "OTP Generated Successfully!"
}`,
  },
  {
    id: 'otp-verify',
    method: 'POST',
    url: BASE_URL_OTP_VALIDATE,
    title: 'Verify OTP',
    description:
      'This endpoint verifies a user-submitted One-Time Password (OTP), confirming their identity for secure access. Successful validation grants authorized users access to the intended functionality, bolstering system security by ensuring only valid OTPs are accepted.',
    requiredParams: [
      {
        name: 'verifyId',
        type: 'string',
        description: 'The Verify ID which was sent in the Generate OTP API response.',
      },
      {
        name: 'otp',
        type: 'string',
        description: 'One Time Password which was sent to the user to validate them.',
      },
    ],
    payload: `{
  "verifyId": "33888968-XXXX-XXXX-XXXX-3010e0069668",
  "otp": "XXXXXX"
}`,
    curl: `curl -X POST ${BASE_URL_OTP_VALIDATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "verifyId": "33888968-XXXX-XXXX-XXXX-3010e0069668",
    "otp": "XXXXXX"
  }'`,
    response: `{
  "data": "33888968-XXXX-XXXX-XXXX-3010e0069668",
  "error": null,
  "message": "OTP Verified Successfully!"
}`,
  },
]

export default function OtpPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* OTP Overview */}
      <section id="otp-overview" style={{ marginBottom: '3rem' }}>
        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Heading */}
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
            background: 'rgba(99,102,241,0.12)',
            border: '1px solid rgba(99,102,241,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
          }}>
            🔐
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>Generate and Validate OTP</h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          The Generate and Validate OTP (One-Time Password) API Service is a secure and convenient solution for implementing multi-factor authentication in your applications. This API allows you to generate unique OTPs and validate them, enhancing the security of user accounts and transactions.
        </p>

        {/* Base URL */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          padding: '1.25rem 1.5rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Endpoint
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
            {BASE_URL_OTP}
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

      {/* OTP endpoint cards */}
      {otpEndpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
