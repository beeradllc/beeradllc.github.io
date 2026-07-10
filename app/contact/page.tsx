'use client';

import { useState, FormEvent } from 'react';
import styles from '@/styles/pages.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      // API not available (e.g. static hosting) — prompt the user to contact directly.
      setErrorMessage(
        'The online form is not available on this deployment. Please call (806) 632-9458 or email contact@beeradllc.com directly.'
      );
      setStatus('error');
    }
  };

  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Reach out for a free quote or to schedule service. We&apos;re here
            to help.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get In Touch</h2>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:8066329458" className={styles.contactLink}>
                    (806) 632-9458
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <h3>Email</h3>
                  <a
                    href="mailto:contact@beeradllc.com"
                    className={styles.contactLink}
                  >
                    contact@beeradllc.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h3>Service Area</h3>
                  <p>Lubbock, TX and surrounding areas</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>🕐</span>
                <div>
                  <h3>Hours</h3>
                  <p>Monday – Friday: 7am – 6pm</p>
                  <p>Saturday: 8am – 2pm</p>
                  <p>Emergency calls available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactFormWrapper}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>

              {status === 'success' ? (
                <div className={styles.successMessage}>
                  <span>✅</span>
                  <p>
                    Thank you! Your message has been sent. We&apos;ll get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.contactForm}
                  noValidate
                >
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(806) 555-0000"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Needed</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service...</option>
                      <option value="diagnostics">Diagnostics</option>
                      <option value="electrical">Electrical Systems</option>
                      <option value="hydraulics">Hydraulics</option>
                      <option value="hvac">HVAC</option>
                      <option value="general">General Repair</option>
                      <option value="farm">Farm Equipment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe the issue or service you need..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorMessage}>
                      <span>⚠️</span>
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
