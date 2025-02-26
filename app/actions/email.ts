'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConsultationEmail(formData: {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  serviceInterest: string;
  message: string;
}) {
  if (!process.env.CONTACT_EMAIL || !process.env.FROM_EMAIL) {
    return { error: 'Email configuration is missing' };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.CONTACT_EMAIL],
      subject: 'New Consultation Request',
      html: EmailTemplate({ formData }).html,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'Failed to send email' };
  }
} 