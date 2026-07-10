'use client';

import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>🐝 BeeRad LLC</h1>
          <h2>Professional Mobile Equipment Repair & Diagnostics</h2>
          <p>Fast, reliable service for all your heavy equipment needs in Lubbock, Texas</p>
          <div className={styles.heroButtons}>
            <Link href="/services" className={styles.primaryBtn}>
              View Services
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2>Why Choose BeeRad LLC?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Fast Service</h3>
            <p>Quick diagnostics and repairs to minimize downtime for your equipment.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3>Expert Technicians</h3>
            <p>Experienced professionals trained in all types of heavy equipment repair.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Mobile Service</h3>
            <p>We come to you! Mobile diagnostics and repairs on-site.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Competitive Pricing</h3>
            <p>Transparent pricing with no hidden fees for our quality services.</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesPreview}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>🔍 Diagnostics</h3>
            <p>Comprehensive diagnostic services to quickly identify equipment issues.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>⚡ Electrical Systems</h3>
            <p>Expert repair and maintenance of electrical components and wiring.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>💧 Hydraulics</h3>
            <p>Hydraulic system repair, maintenance, and component replacement.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>❄️ HVAC</h3>
            <p>Heating, ventilation, and air conditioning system services.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>🔨 General Repair</h3>
            <p>Complete repair and maintenance for all heavy equipment types.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>📋 Preventive Maintenance</h3>
            <p>Regular maintenance programs to keep equipment running smoothly.</p>
          </div>
        </div>
        <Link href="/services" className={styles.viewAllBtn}>
          View All Services →
        </Link>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Get Your Equipment Fixed?</h2>
        <p>Contact BeeRad LLC today for fast, professional service</p>
        <Link href="/contact" className={styles.primaryBtn}>
          Get in Touch
        </Link>
      </section>
    </div>
  );
}