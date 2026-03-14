'use client'

import ApiDocsLayout, { EndpointCard, ParamTable, Endpoint, Param } from '@/components/ApiDocsLayout'

const WA_CREATE = 'https://api.baynix.ai/v1/whatsapp/createWaTemplate'
const WA_HEADER_HANDLE = 'https://api.baynix.ai/v1/whatsapp/generateHeaderHandle'
const WA_TEMPLATE_LIST = 'https://api.baynix.ai/v1/whatsapp/waTemplateList'
const WA_GET_TEMPLATE = 'https://api.baynix.ai/v1/whatsapp/getWaTemplate'

const sideItems = [
  { id: 'wa-create-overview', label: 'Overview' },
  { id: 'wa-header-handle', label: 'Generate Header Handle' },
  { id: 'wa-how-to-create', label: 'How to Create a Template' },
  { id: 'wa-copy-code-auth', label: 'Copy Code Auth' },
  { id: 'wa-autofill-auth', label: 'Autofill Auth' },
  { id: 'wa-zero-tap-auth', label: 'Zero-Tap Auth' },
  { id: 'wa-simple-marketing', label: 'Simple Marketing' },
  { id: 'wa-marketing-media', label: 'Marketing + Media Header' },
  { id: 'wa-catalog', label: 'Catalog Template' },
  { id: 'wa-carousel', label: 'Carousel Template' },
  { id: 'wa-flow', label: 'Flow Template' },
  { id: 'wa-simple-utility', label: 'Simple Utility' },
  { id: 'wa-utility-media', label: 'Utility + Media Header' },
  { id: 'wa-utility-order', label: 'Order Details' },
  { id: 'wa-template-list', label: 'Get Template List' },
  { id: 'wa-template-by-id', label: 'Get Template By ID' },
]

const waCreateEndpoints: Endpoint[] = [
  {
    id: 'wa-header-handle',
    method: 'POST',
    url: WA_HEADER_HANDLE,
    title: 'Generate Header Handle',
    description:
      'A header handle is the unique ID returned by Meta after uploading media (image, video, or document) to the WhatsApp Cloud API. Upload your media file here and use the returned media_id as the header handle in your template payload.',
    requiredParams: [
      {
        name: 'file',
        type: 'file',
        description:
          'The media file to upload. Supported: JPEG, PNG, PDF, MP4. Max size: 5 MB (images), 16 MB (video), 100 MB (documents).',
      },
    ],
    payload: `# Multipart form-data upload
# Field: file (binary)
#
# Supported formats: JPEG, PNG, PDF, MP4
# Max size: 5 MB (images) · 16 MB (video) · 100 MB (documents)
#
# The returned media_id is used as the header_handle
# in your createWaTemplate request.`,
    curl: `curl -X POST ${WA_HEADER_HANDLE} \\
  -H 'apikey: string' \\
  -F 'file=@"/path/to/your/file.jpg"'`,
    response: `{
  "media_id": "4::aW1hZ2UvanBlZw==:ARYWyx-...",
  "message": "Header handle generated successfully!"
}`,
  },
  {
    id: 'wa-copy-code-auth',
    method: 'POST',
    url: WA_CREATE,
    title: 'Copy Code Authentication Template',
    description:
      'Copy code authentication templates allow you to send a one-time password or code along with a copy code button. The user taps "Copy Code" to copy the OTP to their clipboard.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use AUTHENTICATION.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components that make up the template (BODY, BUTTONS).' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code (e.g. en_US, hi_IN).' },
      { name: 'code_expiration_minutes', type: 'integer', description: 'Minutes until code expires. Min 1, max 90.' },
    ],
    payload: `{
  "name": "copy_code_auth",
  "category": "AUTHENTICATION",
  "language": "en_US",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "Your security code is {{1}}. Please enter it in your app to proceed.",
      "example": {
        "body_text": [["123456"]]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "COPY_CODE"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "copy_code_auth",
    "category": "AUTHENTICATION",
    "language": "en_US",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "BODY",
        "text": "Your security code is {{1}}.",
        "example": { "body_text": [["123456"]] }
      },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "OTP", "otp_type": "COPY_CODE" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-autofill-auth',
    method: 'POST',
    url: WA_CREATE,
    title: 'Autofill Authentication Template',
    description:
      'Autofill authentication templates include a one-tap autofill button. When a WhatsApp user taps the button, the WhatsApp client triggers an activity that opens your app and delivers the password or code automatically.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use AUTHENTICATION.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components that make up the template.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code (e.g. en_US, hi_IN).' },
      { name: 'code_expiration_minutes', type: 'integer', description: 'Minutes until code expires. Min 1, max 90.' },
    ],
    payload: `{
  "name": "auto_fill_auth",
  "category": "AUTHENTICATION",
  "language": "en_US",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "Enter the auto-filled code {{1}} to verify your login.",
      "example": {
        "body_text": [["654321"]]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "AUTO_FILL"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "auto_fill_auth",
    "category": "AUTHENTICATION",
    "language": "en_US",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "BODY",
        "text": "Enter the auto-filled code {{1}} to verify your login.",
        "example": { "body_text": [["654321"]] }
      },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "OTP", "otp_type": "AUTO_FILL" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-zero-tap-auth',
    method: 'POST',
    url: WA_CREATE,
    title: 'Zero-Tap Authentication Template',
    description:
      'Zero-tap authentication templates allow your users to receive one-time passwords via WhatsApp without having to leave your app. The code is delivered silently and used automatically.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use AUTHENTICATION.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components that make up the template.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code (e.g. en_US, hi_IN).' },
      { name: 'code_expiration_minutes', type: 'integer', description: 'Minutes until code expires. Min 1, max 90.' },
    ],
    payload: `{
  "name": "zero_tap_auth",
  "category": "AUTHENTICATION",
  "language": "en_US",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "For your security, tap to approve the login. Your device will be automatically verified.",
      "example": {
        "body_text": [[""]]
      }
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "OTP",
          "otp_type": "ZERO_TAP"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "zero_tap_auth",
    "category": "AUTHENTICATION",
    "language": "en_US",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "BODY",
        "text": "For your security, tap to approve the login.",
        "example": { "body_text": [[""]] }
      },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "OTP", "otp_type": "ZERO_TAP" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-simple-marketing',
    method: 'POST',
    url: WA_CREATE,
    title: 'Simple Marketing Template (without header & footer)',
    description:
      'Marketing templates are designed for promotional and re-engagement messages such as offers, discounts, reminders, and announcements. Must clearly describe the offer and comply with Meta policy.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use MARKETING.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components that make up the template.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code (e.g. en_US, hi_IN).' },
    ],
    payload: `{
  "name": "summer_sale",
  "language": "en_US",
  "category": "MARKETING",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "Hi {{1}}, enjoy our Summer Sale! Get up to 30% off on selected items. Shop now before {{2}}."
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "summer_sale",
    "language": "en_US",
    "category": "MARKETING",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "BODY",
        "text": "Hi {{1}}, enjoy our Summer Sale! Get up to 30% off. Shop before {{2}}."
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-marketing-media',
    method: 'POST',
    url: WA_CREATE,
    title: 'Marketing Template (Media Header + Button)',
    description:
      'Media headers can be an image, video, or document such as a PDF. Use the Generate Header Handle endpoint to upload your media and get the header_handle value to use here.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use MARKETING.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components: HEADER (media), BODY, BUTTONS.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code (e.g. en_US, hi_IN).' },
    ],
    payload: `{
  "name": "new_arrivals",
  "language": "en_US",
  "category": "MARKETING",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "HEADER",
      "format": "IMAGE",
      "example": {
        "header_handle": ["4::aW1hZ2UvanBlZw==:ARYWyx-..."]
      }
    },
    {
      "type": "BODY",
      "text": "Exciting news, {{1}}! Our new arrivals are here. Tap below to explore."
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "URL",
          "text": "Shop Now",
          "url": "https://example.com/new-arrivals"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "new_arrivals",
    "language": "en_US",
    "category": "MARKETING",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "HEADER",
        "format": "IMAGE",
        "example": { "header_handle": ["4::aW1hZ2UvanBlZw==:ARYWyx-..."] }
      },
      { "type": "BODY", "text": "Exciting news, {{1}}! New arrivals are here." },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "URL", "text": "Shop Now", "url": "https://example.com/new-arrivals" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-catalog',
    method: 'POST',
    url: WA_CREATE,
    title: 'Catalog Template',
    description:
      'A Catalog Template promotes products or services listed in your WhatsApp Business Catalog. It enables businesses to showcase items directly within a conversation. Use CATALOG button to open the full catalog or CATALOG_ITEM to open a specific product.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use MARKETING.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components: HEADER (optional), BODY, FOOTER (optional), BUTTONS (CATALOG).' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "catalog_promo_template",
  "category": "MARKETING",
  "allow_category_change": true,
  "language": "en",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "✨ New Collection Alert!"
    },
    {
      "type": "BODY",
      "text": "Hi, check out our latest arrivals in the catalog and grab exclusive discounts."
    },
    {
      "type": "FOOTER",
      "text": "Powered by Baynix"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        { "type": "CATALOG", "text": "View Catalog" }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "catalog_promo_template",
    "category": "MARKETING",
    "allow_category_change": true,
    "language": "en",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      { "type": "HEADER", "format": "TEXT", "text": "✨ New Collection Alert!" },
      { "type": "BODY", "text": "Check out our latest arrivals." },
      { "type": "FOOTER", "text": "Powered by Baynix" },
      { "type": "BUTTONS", "buttons": [{ "type": "CATALOG", "text": "View Catalog" }] }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-carousel',
    method: 'POST',
    url: WA_CREATE,
    title: 'Carousel Template',
    description:
      'A Carousel Template displays multiple items in a horizontal scrollable card layout. Each card can contain an image, body, footer, and up to 2 buttons. Best for product showcases, service comparisons, and promotions. Max 10 cards per carousel.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use MARKETING.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'BODY component + CAROUSEL component with cards array.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "promo_carousel_template",
  "category": "MARKETING",
  "language": "en",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "Check out our latest offers."
    },
    {
      "type": "CAROUSEL",
      "cards": [
        {
          "header": { "type": "IMAGE", "image_url": "https://example.com/product1.jpg" },
          "body": "Wireless Earbuds - High Quality Sound",
          "footer": "₹1999 only",
          "buttons": [
            { "type": "URL", "text": "Buy Now", "url": "https://shop.com/earbuds" },
            { "type": "URL", "text": "View Details", "url": "https://shop.com/earbuds-info" }
          ]
        },
        {
          "header": { "type": "IMAGE", "image_url": "https://example.com/product2.jpg" },
          "body": "Smart Watch - Track Fitness & Health",
          "footer": "₹4999 only",
          "buttons": [
            { "type": "URL", "text": "Buy Now", "url": "https://shop.com/watch" },
            { "type": "URL", "text": "View Details", "url": "https://shop.com/watch-info" }
          ]
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "promo_carousel_template",
    "category": "MARKETING",
    "language": "en",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      { "type": "BODY", "text": "Check out our latest offers." },
      {
        "type": "CAROUSEL",
        "cards": [
          {
            "header": { "type": "IMAGE", "image_url": "https://example.com/product1.jpg" },
            "body": "Wireless Earbuds - High Quality Sound",
            "footer": "₹1999 only",
            "buttons": [
              { "type": "URL", "text": "Buy Now", "url": "https://shop.com/earbuds" }
            ]
          }
        ]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-flow',
    method: 'POST',
    url: WA_CREATE,
    title: 'Flow Template',
    description:
      'A Flow Template enables interactive, step-by-step user journeys inside WhatsApp — such as filling forms, booking services, or providing feedback — directly in the chat, without leaving the app.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category (e.g. UTILITY, MARKETING).' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'HEADER (optional), BODY, FOOTER (optional), BUTTONS with type FLOW.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "customer_feedback_flow",
  "category": "UTILITY",
  "language": "en",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "We value your feedback!"
    },
    {
      "type": "BODY",
      "text": "Hello, please take a moment to share your feedback using the flow form below."
    },
    {
      "type": "FOOTER",
      "text": "Thank you for your time"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "FLOW",
          "text": "Give Feedback",
          "flow_id": "feedback_form_001"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "customer_feedback_flow",
    "category": "UTILITY",
    "language": "en",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      { "type": "HEADER", "format": "TEXT", "text": "We value your feedback!" },
      { "type": "BODY", "text": "Please share your feedback using the flow form below." },
      { "type": "FOOTER", "text": "Thank you for your time" },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "FLOW", "text": "Give Feedback", "flow_id": "feedback_form_001" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-simple-utility',
    method: 'POST',
    url: WA_CREATE,
    title: 'Simple Utility Template (without header & footer)',
    description:
      'Utility templates are for important, non-promotional customer communications — order confirmations, shipping updates, appointment reminders, payment receipts. Promotional or upselling content is not allowed.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use UTILITY.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'Components that make up the template.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "payment_receipt",
  "language": "en_US",
  "category": "UTILITY",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "BODY",
      "text": "Hi {{1}}, we have received your payment of \${{2}}. Your transaction ID is {{3}}."
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "payment_receipt",
    "language": "en_US",
    "category": "UTILITY",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "BODY",
        "text": "Hi {{1}}, we received your payment of \${{2}}. Transaction ID: {{3}}."
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-utility-media',
    method: 'POST',
    url: WA_CREATE,
    title: 'Utility Template (Media Header + Button)',
    description:
      'Attach a media header (image, video, or document) to your utility message. Use the Generate Header Handle endpoint to upload media and get the header_handle value.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use UTILITY.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'HEADER (media), BODY, FOOTER (optional), BUTTONS.' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "invoice_with_button",
  "language": "en_US",
  "category": "UTILITY",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "HEADER",
      "format": "DOCUMENT",
      "example": {
        "header_handle": ["4::aW1hZ2UvanBlZw==:ARYWyx-..."]
      }
    },
    {
      "type": "BODY",
      "text": "Hi {{1}}, your invoice for order {{2}} is attached. Total amount: \${{3}}."
    },
    {
      "type": "FOOTER",
      "text": "Tap below to view your invoice."
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "URL",
          "text": "View Invoice",
          "url": "https://example.com/invoices/{{2}}"
        }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "invoice_with_button",
    "language": "en_US",
    "category": "UTILITY",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      {
        "type": "HEADER",
        "format": "DOCUMENT",
        "example": { "header_handle": ["4::aW1hZ2UvanBlZw==:ARYWyx-..."] }
      },
      { "type": "BODY", "text": "Hi {{1}}, your invoice for order {{2}} is attached." },
      { "type": "FOOTER", "text": "Tap below to view your invoice." },
      {
        "type": "BUTTONS",
        "buttons": [{ "type": "URL", "text": "View Invoice", "url": "https://example.com/invoices/{{2}}" }]
      }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-utility-order',
    method: 'POST',
    url: WA_CREATE,
    title: 'Utility Template (Order Details)',
    description:
      'Send a structured order details message with customer name, order ID, item list, total amount, and expected delivery date. Uses the ORDER_DETAILS button type for Meta-native order actions.',
    requiredParams: [
      { name: 'name', type: 'string', description: 'Template name. Maximum 512 characters.' },
      { name: 'category', type: 'string', description: 'Template category. Use UTILITY.' },
      { name: 'wabaId', type: 'number', description: 'WhatsApp Business Account ID assigned by Meta.' },
      { name: 'components', type: 'Array', description: 'HEADER (TEXT "Order Details"), BODY with 5 placeholders, FOOTER, BUTTONS (ORDER_DETAILS).' },
    ],
    optionalParams: [
      { name: 'language', type: 'string', description: 'Language and locale code.' },
    ],
    payload: `{
  "name": "order_detail_template",
  "language": "en_US",
  "category": "UTILITY",
  "wabaId": "245XXXXXXXXXXXX",
  "components": [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Order Details"
    },
    {
      "type": "BODY",
      "text": "Hi {{1}}, your order {{2}} has been confirmed.\\n\\nItems:\\n{{3}}\\n\\nTotal: \${{4}}.\\nExpected delivery: {{5}}."
    },
    {
      "type": "FOOTER",
      "text": "Thank you for shopping with us!"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        { "type": "ORDER_DETAILS", "text": "Review and Pay" }
      ]
    }
  ]
}`,
    curl: `curl -X POST ${WA_CREATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "name": "order_detail_template",
    "language": "en_US",
    "category": "UTILITY",
    "wabaId": "245XXXXXXXXXXXX",
    "components": [
      { "type": "HEADER", "format": "TEXT", "text": "Order Details" },
      {
        "type": "BODY",
        "text": "Hi {{1}}, your order {{2}} is confirmed. Items: {{3}}. Total: \${{4}}. Delivery: {{5}}."
      },
      { "type": "FOOTER", "text": "Thank you for shopping with us!" },
      { "type": "BUTTONS", "buttons": [{ "type": "ORDER_DETAILS", "text": "Review and Pay" }] }
    ]
  }'`,
    response: `{
  "id": "template_id_XXXX",
  "status": "PENDING",
  "message": "Template submitted for review successfully!"
}`,
  },
  {
    id: 'wa-template-list',
    method: 'POST',
    url: WA_TEMPLATE_LIST,
    title: 'Get Template List',
    description:
      'Retrieve a list of all pre-approved WhatsApp message templates associated with your WhatsApp Business Account (WABA). Use this to validate template approval status or populate a template selector in your UI.',
    payload: `{}`,
    curl: `curl -X POST ${WA_TEMPLATE_LIST} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json'`,
    response: `{
  "data": [
    {
      "id": "template_id_XXXX",
      "name": "welcome_template",
      "status": "APPROVED",
      "category": "MARKETING",
      "language": "en_US"
    }
  ],
  "message": "Templates fetched successfully!"
}`,
  },
  {
    id: 'wa-template-by-id',
    method: 'POST',
    url: WA_GET_TEMPLATE,
    title: 'Get WhatsApp Template By ID',
    description:
      'Retrieve full details of a single WhatsApp template by its unique ID — including name, category, language, components (header, body, footer, buttons), and approval status.',
    requiredParams: [
      { name: 'id', type: 'string', description: 'The unique identifier of the template you want to fetch.' },
    ],
    payload: `{
  "id": "1459497515392771"
}`,
    curl: `curl -X POST ${WA_GET_TEMPLATE} \\
  -H 'apikey: string' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "id": "1459497515392771"
  }'`,
    response: `{
  "data": {
    "id": "1459497515392771",
    "name": "welcome_template",
    "status": "APPROVED",
    "category": "MARKETING",
    "language": "en_US",
    "components": [
      { "type": "BODY", "text": "Hello {{1}}, welcome to Baynix!" }
    ]
  },
  "message": "Template fetched successfully!"
}`,
  },
]

export default function WaCreateTemplatesPage() {
  return (
    <ApiDocsLayout sideItems={sideItems}>
      {/* WhatsApp: Create Templates Overview */}
      <section id="wa-create-overview" style={{ marginBottom: '3rem' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)', marginBottom: '2rem' }} />

        {/* Heading */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{
            width: 36, height: 36, borderRadius: 9,
            background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
          }}>
            💬
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text)' }}>WhatsApp — Create Templates</h2>
        </div>

        <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 720 }}>
          Use this endpoint to create a new WhatsApp message template on the platform. Templates must follow Meta&apos;s WhatsApp Business Policy. Each template includes a name, language code, category, and components such as header, body, footer, and buttons. The only required component is the body. A template can only be edited when it is in a state of Approved, Rejected, or Paused — once per day, up to 10 times per month.
        </p>

        {/* Endpoint */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Base Endpoint</p>
          <code style={{ display: 'block', padding: '0.75rem 1rem', background: '#070b14', border: '1px solid var(--border)', borderRadius: 8, fontSize: '0.85rem', color: '#34d399', fontFamily: 'monospace' }}>
            {WA_CREATE}
          </code>
        </div>

        {/* Headers */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Headers</p>
          <ParamTable label="" params={[
            { name: 'Content-Type', type: 'string', description: 'This should be set to application/json.' },
            { name: 'apikey', type: 'string', description: 'Find your API key under your login account.' },
          ]} />
        </div>

        {/* How to Create a Template guide */}
        <div id="wa-how-to-create" style={{ background: 'var(--surface)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4ade80', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>How to Create a Template</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', title: 'Choose a Template Name', body: 'Use only lowercase letters, numbers, and underscores. Examples: order_update, otp_login.' },
              { step: '2', title: 'Select a Language', body: 'Templates are tied to a specific language (e.g., en_US, hi_IN). Create separate templates for each language.' },
              { step: '3', title: 'Pick a Category', body: 'UTILITY — order confirmations, shipping updates. MARKETING — offers, promotions. AUTHENTICATION — OTP, login codes, password reset.' },
              { step: '4', title: 'Define Components', body: 'Header (optional) — text or media. Body (required) — supports placeholders {{1}}, {{2}}. Footer (optional). Buttons (optional) — quick replies or call-to-action.' },
              { step: '5', title: 'Submit via API', body: 'Send a POST /whatsapp/createWaTemplate request with the payload that defines your template.' },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#4ade80', flexShrink: 0, marginTop: 2 }}>
                  {step}
                </div>
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.2rem' }}>{title}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.6 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authentication Templates info card */}
        <div style={{ background: 'var(--surface)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#a78bfa', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Authentication Templates</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Authentication templates are designed for OTP and login verification flows. They allow you to send time-sensitive passcodes securely and consist of:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              'Fixed preset text: <VERIFICATION_CODE> is your verification code.',
              'Optional security disclaimer: For your security, do not share this code.',
              'Optional expiration warning: This code expires in <NUM_MINUTES> minutes.',
              'Button options: Copy Code, One-Tap Autofill, or Zero-Tap (no button).',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#a78bfa', fontSize: '0.7rem', marginTop: 4 }}>▸</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing Templates info card */}
        <div style={{ background: 'var(--surface)', border: '1px solid rgba(251,146,60,0.2)', borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fb923c', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Marketing Templates</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
            Designed for promotional and re-engagement messages (offers, discounts, reminders, announcements). Must comply with Meta&apos;s policies and clearly describe the offer.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text3)', lineHeight: 1.6 }}>
            Structure: <span style={{ color: 'var(--text2)' }}>Header</span> (optional — text or media) ·{' '}
            <span style={{ color: 'var(--text2)' }}>Body</span> (required — supports {`{{1}}, {{2}}`} placeholders) ·{' '}
            <span style={{ color: 'var(--text2)' }}>Footer</span> (optional) ·{' '}
            <span style={{ color: 'var(--text2)' }}>Buttons</span> (optional — CTA like Visit Website, Shop Now, Call Us).
          </p>
        </div>

        {/* Utility Templates info card */}
        <div style={{ background: 'var(--surface)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: 12, padding: '1.25rem 1.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#22d3ee', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Utility Templates</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
            For important, non-promotional customer communications — order confirmations, shipping updates, appointment reminders, payment receipts.
          </p>
          <p style={{ fontSize: '0.82rem', color: '#f87171', lineHeight: 1.6 }}>
            Not allowed: Promotional or upselling content. Use Marketing Templates for those.
          </p>
        </div>
      </section>

      {/* WA Create endpoints */}
      {waCreateEndpoints.map((ep) => (
        <EndpointCard key={ep.id} ep={ep} />
      ))}
    </ApiDocsLayout>
  )
}
