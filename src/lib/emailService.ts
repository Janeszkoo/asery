import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key from .env.local
// Get your credentials from: https://dashboard.emailjs.com/admin
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '0FbUt9772yinchhbs';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_oycg3rh';
const EMAILJS_TEMPLATE_ID = 'contact_form';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<void> {
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: 'szlgyjanos25@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType || 'Not specified',
      message: formData.message,
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
}
