import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Basic email validation to prevent header injection.
 * Uses string methods rather than regex to avoid ReDoS.
 */
function isValidEmail(value: unknown): boolean {
  if (typeof value !== 'string' || value.length > 254) return false;
  const atIdx = value.indexOf('@');
  // Must have exactly one '@', not at the start, and not at the end.
  if (atIdx < 1 || atIdx !== value.lastIndexOf('@')) return false;
  const local = value.slice(0, atIdx);
  const domain = value.slice(atIdx + 1);
  // Local part must be non-empty and free of whitespace.
  if (!local || /\s/.test(local)) return false;
  // Domain must contain a dot that is not the first or last character.
  const dotIdx = domain.lastIndexOf('.');
  return dotIdx > 0 && dotIdx < domain.length - 1 && !/\s/.test(domain);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    if (!emailUser || !emailPass) {
      console.error('Email configuration missing. Check environment variables.');
      return NextResponse.json(
        {
          error:
            'Email service not configured. Please call us directly at (806) 632-9458.',
        },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: emailUser,
      to: emailTo,
      replyTo: email, // safe: validated above with isValidEmail
      subject: `BeeRad LLC Contact Form: ${safeService ? `[${safeService}] ` : ''}${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ffd700; background: #111; padding: 20px; margin: 0;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border: 1px solid #ddd;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
            <p><strong>Service Requested:</strong> ${safeService || 'Not specified'}</p>
            <hr style="margin: 16px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="font-size: 12px; color: #666; padding: 10px;">
            This message was sent from the BeeRad LLC website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error:
          'Failed to send message. Please try again or call (806) 632-9458.',
      },
      { status: 500 }
    );
  }
}
