# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/sign-up)
2. Sign up with your email (rathod.kaushik@gmail.com) or use Google Sign-In
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (Recommended) - Connect with your Gmail account
   - Or use any other email service
3. Click **"Connect Account"** and authorize access
4. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Click **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Use this template content:

### Template Settings:
- **Template Name**: Portfolio Contact Form

### Email Template:
```
Subject: New Message from {{from_name}} - Portfolio Contact

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{from_email}}
```

### Template Variables (should match):
- `from_name` - Sender's name
- `from_email` - Sender's email
- `message` - Message content
- `to_name` - Your name (Kaushik Rathod)

4. **Set "Send To" email**: rathod.kaushik@gmail.com
5. Click **"Save"**
6. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in the sidebar
2. Find the **"Public Key"** section
3. Copy your **Public Key** (e.g., `abcDEF123xyz`)

## Step 5: Update .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcDEF123xyz
```

**Important**: Replace the values with YOUR actual IDs from EmailJS dashboard!

## Step 6: Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

The dev server needs to restart to load the new environment variables.

## Step 7: Test Your Contact Form

1. Open http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email (rathod.kaushik@gmail.com) for the test message

## Troubleshooting

### "EmailJS is not configured" Error
- Make sure your `.env` file has all three values filled in
- Restart the dev server after updating `.env`
- Check that the keys start with `VITE_` (required for Vite)

### Email Not Received
- Check your spam/junk folder
- Verify the "Send To" email in EmailJS template settings
- Check EmailJS dashboard for delivery logs
- Make sure your EmailJS account is verified

### Rate Limits
- **Free Tier**: 200 emails/month
- If you exceed the limit, consider upgrading or using a different service

## Alternative: Test Without EmailJS

If you want to test the form UI without setting up EmailJS immediately:
1. Leave the `.env` file as-is with placeholder values
2. The form will show an error message but won't break
3. You can still see the validation and UI working

## Security Notes

- ✅ `.env` file is already in `.gitignore` - your keys are safe
- ✅ Never commit your actual API keys to Git
- ✅ EmailJS Public Key is safe to expose (it's meant to be public)
- ✅ The form includes rate limiting and validation

## EmailJS Dashboard

Access your EmailJS dashboard anytime at: https://dashboard.emailjs.com/

Here you can:
- View email delivery logs
- Monitor usage statistics
- Update templates
- Manage services
- Check rate limits

---

Need help? Email me at rathod.kaushik@gmail.com
