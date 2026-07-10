'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>🐝 BeeRad LLC</h3>
          <p>Professional mobile equipment diagnostics and repair services in Lubbock, Texas.</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:8066329458">(806) 632-9458</a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:Beeradllc@gmail.com">Beeradllc@gmail.com</a>
          </p>
          <p>
            <strong>Location:</strong> Lubbock, Texas
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul>
            <li>Equipment Diagnostics</li>
            <li>Electrical Systems</li>
            <li>Hydraulics Repair</li>
            <li>HVAC Services</li>
            <li>Preventive Maintenance</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} BeeRad LLC. All rights reserved.</p>
        <p>Mobile Equipment Repair & Diagnostics | Serving Lubbock, Texas</p>
      </div>
    </footer>
  );
}