# 📧 Contact Form Email Setup Guide

## Overview
Your contact form is now configured to send emails to: **shivakumar28226@gmail.com**

## Setup Steps

### Step 1: Create `.env.local` file
Create a new file in your project root called `.env.local` (this file is already git-ignored for security):

```bash
# Copy from .env.example or create manually
EMAIL_USER=shivakumar28226@gmail.com
EMAIL_PASSWORD=your_16_character_app_password_here
```

### Step 2: Generate Gmail App Password
Since Gmail requires a secure app password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App Passwords** (appears after 2FA is enabled)
4. Select **Mail** and **Windows Computer**
5. Google will generate a **16-character password** - copy this
6. Paste it in `.env.local` as `EMAIL_PASSWORD`

**For example:**
```
EMAIL_USER=shivakumar28226@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### Step 3: Test Locally
```bash
npm run dev
```
- Go to http://localhost:3000
- Scroll to the contact form
- Fill in the form and click "Send Message"
- Check your Gmail inbox for the message

### Step 4: Deploy
When deploying to Vercel or other platforms:

1. Go to your **Project Settings** → **Environment Variables**
2. Add both variables:
   - `EMAIL_USER` = shivakumar28226@gmail.com
   - `EMAIL_PASSWORD` = your_app_password
3. Redeploy your application

## Features

✅ **Form Validation** - Required fields: Name, Email, Message  
✅ **Loading State** - Shows "Sending..." during submission  
✅ **Success Feedback** - Displays "Message Sent! ✓" for 3 seconds  
✅ **Error Handling** - Shows error message if sending fails  
✅ **Reply-To** - Emails will have reply-to set to visitor's email  
✅ **HTML Formatting** - Professional email formatting  

## Alternative Email Services

If you prefer not to use Gmail, alternatives include:

### 1. **SendGrid** (Free tier: 100 emails/day)
- Create account at https://sendgrid.com/
- Get API key from Settings
- Update `app/api/send-email/route.js` to use SendGrid

### 2. **Resend** (Recommended for Next.js, Free tier: 100 emails/day)
- Create account at https://resend.com/
- Install: `npm install resend`
- Update `app/api/send-email/route.js`

### 3. **Mailgun** (Free tier: 100 emails/month)
- Create account at https://www.mailgun.com/
- Configure DNS and SMTP settings

## Troubleshooting

### ❌ "Failed to send email" message
**Solution:** Check that:
1. `.env.local` file exists in project root
2. Email credentials are correct
3. Gmail App Password is properly generated (16 characters with spaces)
4. 2-Step Verification is enabled on your Google Account

### ❌ Form shows "Sending..." but never completes
**Solution:** Check browser console (F12 → Console tab) for error messages

### ❌ Email not received
1. Check your Gmail **Spam** folder
2. Verify `.env.local` is loaded (restart dev server after creating it)
3. Check Next.js server console for error messages

## Email Template Customization

The email is sent with this format:
```
From: shivakumar28226@gmail.com
To: shivakumar28226@gmail.com (can be changed in form)
Reply-To: [visitor's email]
Subject: New Contact Form Submission from [visitor's name]

Body includes:
- Visitor Name
- Visitor Email
- Visitor Phone (if provided)
- Message
```

To customize the email template, edit: `app/api/send-email/route.js`

## Contact Form Fields

Currently collecting:
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

## Security Notes

✅ Environment variables are NOT exposed to the browser  
✅ API route handles all email sending server-side  
✅ Form data is validated before sending  
✅ `.env.local` is in `.gitignore` and won't be committed  

## Production Checklist

Before deploying:
- [ ] Test contact form locally
- [ ] Set environment variables in hosting platform
- [ ] Verify emails are being received
- [ ] Test error states (submit without required fields)
- [ ] Monitor email sending for first few days

---

**Questions?** Review the code in:
- `components/ConnectForm.jsx` - Form UI
- `app/api/send-email/route.js` - Email sending logic
- `.env.example` - Environment variable reference
