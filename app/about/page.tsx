'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>About BeeRad LLC</h1>
        <p>Professional equipment repair services in Lubbock, Texas</p>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>🐝 Who We Are</h2>
          <p>
            BeeRad LLC is a mobile equipment repair and diagnostics company serving Lubbock, Texas and the surrounding
            areas. We specialize in fast, reliable repairs for all types of heavy equipment.
          </p>
          <p>
            Our team of experienced technicians brings over a decade of combined expertise in equipment diagnostics,
            electrical systems, hydraulics, HVAC, and general repairs.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <h2>Our Mission</h2>
          <p>
            To provide fast, professional, and affordable equipment repair services that minimize downtime and keep
            your operations running smoothly.
          </p>
          <p>
            We believe in transparency, quality workmanship, and customer satisfaction. When you choose BeeRad LLC, you
            choose reliability.
          </p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3>⚡ Speed</h3>
            <p>Quick diagnostics and repairs to get your equipment back in operation fast.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>✅ Quality</h3>
            <p>Professional repairs using quality parts and proven repair techniques.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>💰 Integrity</h3>
            <p>Transparent pricing with no hidden fees. You'll always know what you're paying for.</p>
          </div>
          <div className={styles.valueCard}>
            <h3>🤝 Customer Focus</h3>
            <p>Your satisfaction is our priority. We're here when you need us.</p>
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2>Why Choose Us?</h2>
        <ul className={styles.benefitsList}>
          <li>✓ Mobile service - we come to you</li>
          <li>✓ Fast turnaround times</li>
          <li>✓ Experienced, certified technicians</li>
          <li>✓ Transparent, competitive pricing</li>
          <li>✓ Quality parts and workmanship</li>
          <li>✓ Emergency service available</li>
          <li>✓ All types of heavy equipment</li>
          <li>✓ Preventive maintenance programs</li>
        </ul>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Work With Us?</h2>
        <p>Contact BeeRad LLC today for professional equipment repair services</p>
        <Link href="/contact" className={styles.primaryBtn}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}