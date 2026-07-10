'use client';

import React from 'react';
import styles from '@/styles/pages.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to BeeRad LLC</h1>
        <p className={styles.subtitle}>Mobile Heavy Equipment Diagnostics & Repair</p>
        <p className={styles.description}>
          We bring professional repair and diagnostic services directly to your equipment.
          Serving Lubbock, Texas with expertise and reliability.
        </p>
        <Link href="/contact">
          <button className={styles.cta}>Get Started</button>
        </Link>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>🔧 Expert Technicians</h3>
          <p>Our experienced team specializes in heavy equipment repair and diagnostics.</p>
        </div>
        <div className={styles.feature}>
          <h3>🚚 Mobile Service</h3>
          <p>We come to you. No need to transport your equipment.</p>
        </div>
        <div className={styles.feature}>
          <h3>⚡ Quick Diagnostics</h3>
          <p>Fast, accurate problem identification to minimize downtime.</p>
        </div>
      </section>
    </div>
  );
}