'use client';

import React, { useState } from 'react';
import styles from '@/styles/pages.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Contact Us</h1>
        <p>Get in touch with BeeRad LLC for all your equipment repair needs.</p>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <div className={styles.infoItem}>
            <h3>📞 Phone</h3>
            <p>
              <a href="tel:8066329458">(806) 632-9458</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>📧 Email</h3>
            <p>
              <a href="mailto:Beeradllc@gmail.com">Beeradllc@gmail.com</a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>📍 Location</h3>
            <p>Lubbock, Texas</p>
          </div>
          <div className={styles.infoItem}>
            <h3>🔧 Services</h3>
            <p>Mobile equipment diagnostics and repair</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h2>Send us a Message</h2>
          {success && (
            <div className={styles.successMessage}>
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(806) 632-9458"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about your equipment issue..."
                rows={5}
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}