import React from 'react';
import { Section, Card } from '../styles/StyledComponents';
import MarkdownContent from '../components/MarkdownContent';

const optionalServicesMarkdown = `
# Optional but Good

While building full-stack applications, you may need additional services to enhance functionality. This section covers some useful services that can be integrated into your application, explaining when and why you might need them.

## OpenAI API for LLM Calls

OpenAI's API provides access to powerful language models like GPT-4 that can generate text, answer questions, and create conversational interfaces.

### When You Would Need It
- Creating AI-powered chatbots
- Content generation (blog posts, product descriptions, etc.)
- Text summarization
- Code assistance or generation
- Natural language processing tasks

### Getting Started

\`\`\`mac
# 1. Sign up for an OpenAI account at https://platform.openai.com/signup
# 2. Navigate to API keys section (https://platform.openai.com/api-keys)
# 3. Generate a new API key
# 4. Store the API key securely in your environment variables

# Install OpenAI library in your project
npm install openai
\`\`\`

\`\`\`windows
# 1. Sign up for an OpenAI account at https://platform.openai.com/signup
# 2. Navigate to API keys section (https://platform.openai.com/api-keys)
# 3. Generate a new API key
# 4. Store the API key securely in your environment variables

# Install OpenAI library in your project
npm install openai
\`\`\`

### Basic Usage Example
\`\`\`javascript
// Import the OpenAI package
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Example function to get a response from the API
async function getAIResponse(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 150,
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}
\`\`\`

## Cloudinary for Image Uploads

Cloudinary is a cloud-based service that provides an end-to-end image and video management solution including uploads, storage, manipulations, and delivery.

### When You Would Need It
- User profile pictures
- Product image galleries
- Blog post images
- Image transformations (resize, crop, filter)
- Optimized image delivery

### Getting Started

\`\`\`mac
# 1. Sign up for a Cloudinary account at https://cloudinary.com/users/register/free
# 2. Note your cloud name, API key, and API secret from the dashboard
# 3. Store these securely in your environment variables

# Install Cloudinary npm package
npm install cloudinary
\`\`\`

\`\`\`windows
# 1. Sign up for a Cloudinary account at https://cloudinary.com/users/register/free
# 2. Note your cloud name, API key, and API secret from the dashboard
# 3. Store these securely in your environment variables

# Install Cloudinary npm package
npm install cloudinary
\`\`\`

### Basic Usage Example
\`\`\`javascript
// Server-side configuration
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Example function to upload an image
async function uploadImage(filePath) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'my-app-uploads',
    });
    
    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}
\`\`\`

## Twilio for Sending Texts

Twilio is a cloud communications platform that allows you to build SMS, voice, and messaging applications.

### When You Would Need It
- Two-factor authentication
- Order confirmations
- Appointment reminders
- Notification systems
- Automated alerts

### Getting Started

\`\`\`mac
# 1. Sign up for a Twilio account at https://www.twilio.com/try-twilio
# 2. Purchase a phone number
# 3. Note your Account SID and Auth Token from the dashboard
# 4. Store these securely in your environment variables

# Install Twilio npm package
npm install twilio
\`\`\`

\`\`\`windows
# 1. Sign up for a Twilio account at https://www.twilio.com/try-twilio
# 2. Purchase a phone number
# 3. Note your Account SID and Auth Token from the dashboard
# 4. Store these securely in your environment variables

# Install Twilio npm package
npm install twilio
\`\`\`

### Basic Usage Example
\`\`\`javascript
// Import the Twilio package
const twilio = require('twilio');

// Initialize the Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Example function to send an SMS
async function sendSMS(to, body) {
  try {
    const message = await client.messages.create({
      body: body,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });
    
    console.log('Message sent with SID:', message.sid);
    return message.sid;
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw error;
  }
}
\`\`\`

## EmailJS for Sending Emails

EmailJS allows you to send emails directly from your JavaScript code without any server-side code.

### When You Would Need It
- Contact forms
- Email newsletters
- Welcome emails
- Password reset emails
- Order confirmations

### Getting Started

\`\`\`mac
# 1. Sign up for an EmailJS account at https://www.emailjs.com/
# 2. Create an email service (Gmail, Outlook, etc.)
# 3. Create an email template
# 4. Note your User ID, Service ID, and Template ID

# Install EmailJS npm package (for client-side usage)
npm install @emailjs/browser
\`\`\`

\`\`\`windows
# 1. Sign up for an EmailJS account at https://www.emailjs.com/
# 2. Create an email service (Gmail, Outlook, etc.)
# 3. Create an email template
# 4. Note your User ID, Service ID, and Template ID

# Install EmailJS npm package (for client-side usage)
npm install @emailjs/browser
\`\`\`

### Basic Usage Example
\`\`\`javascript
// Import EmailJS
import emailjs from '@emailjs/browser';

// Initialize EmailJS (do this once in your app, e.g., in componentDidMount or useEffect)
emailjs.init("YOUR_USER_ID");

// Example function to send an email
function sendEmail(templateParams) {
  return emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    templateParams
  ).then((response) => {
    console.log('Email sent successfully:', response);
    return response;
  }).catch((error) => {
    console.error('Error sending email:', error);
    throw error;
  });
}

// Example usage
sendEmail({
  to_name: 'John Doe',
  from_name: 'Your App',
  message: 'Thank you for signing up!',
  to_email: 'john.doe@example.com'
});
\`\`\`

## Firebase Authentication

Firebase provides a complete authentication system that's easy to implement and supports multiple authentication methods.

### When You Would Need It
- User authentication (sign up, login)
- Social media login (Google, Facebook, Twitter)
- Email verification
- Password reset
- Anonymous authentication

### Getting Started

\`\`\`mac
# 1. Create a Firebase account at https://firebase.google.com/
# 2. Create a new project
# 3. Enable Authentication and choose your preferred sign-in methods
# 4. Register your app and get your Firebase config

# Install Firebase npm package
npm install firebase
\`\`\`

\`\`\`windows
# 1. Create a Firebase account at https://firebase.google.com/
# 2. Create a new project
# 3. Enable Authentication and choose your preferred sign-in methods
# 4. Register your app and get your Firebase config

# Install Firebase npm package
npm install firebase
\`\`\`

### Basic Usage Example
\`\`\`javascript
// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Example function to register a user
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);
    return user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

// Example function to sign in a user
async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
    return user;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
}
\`\`\`

## Stripe for Payment Processing

Stripe is a payment processing platform that allows you to accept credit card payments securely.

### When You Would Need It
- E-commerce stores
- Subscription services
- Online donations
- Marketplace platforms
- SaaS billing

### Getting Started

\`\`\`mac
# 1. Sign up for a Stripe account at https://dashboard.stripe.com/register
# 2. Get your API keys from the dashboard
# 3. Store these securely in your environment variables

# Install Stripe npm package
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
\`\`\`

\`\`\`windows
# 1. Sign up for a Stripe account at https://dashboard.stripe.com/register
# 2. Get your API keys from the dashboard
# 3. Store these securely in your environment variables

# Install Stripe npm package
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
\`\`\`

### Basic Usage Example (Server-side)
\`\`\`javascript
// Import Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Example function to create a payment intent
async function createPaymentIntent(amount, currency = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: currency,
    });
    
    return {
      clientSecret: paymentIntent.client_secret
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}
\`\`\`

Remember, each of these services typically offers a free tier or trial period, which is perfect for development and small projects. As your application grows, you may need to upgrade to paid plans for additional capacity and features.
`;

const OptionalServices = () => {
  return (
    <Section id="optional-services">
      <Card>
        <MarkdownContent content={optionalServicesMarkdown} />
      </Card>
    </Section>
  );
};

export default OptionalServices; 