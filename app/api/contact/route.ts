import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configure your email service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'Beeradllc@gmail.com',
    pass: process.env.EMAIL_PASSWORD || '', // Use app-specific password for Gmail
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to you
    const mailOptions = {
      from: process.env.EMAIL_USER || 'Beeradllc@gmail.com',
      to: 'Beeradllc@gmail.com',
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to user
    const confirmationEmail = {
      from: process.env.EMAIL_USER || 'Beeradllc@gmail.com',
      to: email,
      subject: 'We received your message - BeeRad LLC',
      html: `
        <h2>Thank you for contacting BeeRad LLC!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>We received your message and will get back to you as soon as possible.</p>
        <p>Your message:</p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        <hr>
        <p>BeeRad LLC<br>Mobile Equipment Repair &amp; Diagnostics<br>Lubbock, Texas</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}