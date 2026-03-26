# Email Setup Guide

Your contact form is now ready to send emails! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/ and sign up for a free account
2. Verify your email address

## Step 2: Add Gmail Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service** and select **Gmail**
3. Follow the prompts:
   - Connect your Gmail account (use szlgyjanos25@gmail.com)
   - Grant EmailJS permission to send emails
4. Copy your **Service ID** (looks like: `service_xxxxxxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set the template name to: `contact_form`
4. In the template editor, set up like this:

**To Email:**
```
aseryesports@gmail.com
```

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}
```

5. Save the template and copy your **Template ID** (looks like: `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys** in the EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Add Environment Variables

Create a `.env.local` file in the root of your project with:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=contact_form
```

Then update `src/lib/emailService.ts` to use the environment variables:

```typescript
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE';
```

## Step 6: Test It

1. Save all files
2. Restart your development server (`npm run dev`)
3. Fill out the contact form and submit
4. You should receive an email at szlgyjanos25@gmail.com!

## Troubleshooting

- **Error "Service ID not found"**: Make sure you copied the correct Service ID from EmailJS
- **Error "Template ID not found"**: Make sure the template is named exactly `contact_form`
- **Email not received**: Check your spam/promotions folder or add `noreply@emailjs.com` to your contacts
- **CORS error**: Make sure you're using your Public Key (not Secret Key) in the client-side code

## Notes

- EmailJS free tier allows 200 emails/month
- Emails come from your Gmail account
- You can upgrade to a paid plan for higher limits
