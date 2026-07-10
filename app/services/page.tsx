'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/pages.module.css';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load services from localStorage
    const saved = localStorage.getItem('services');
    if (saved) {
      setServices(JSON.parse(saved));
    } else {
      // Default services if none saved
      const defaultServices: Service[] = [
        {
          id: '1',
          name: 'Diagnostics',
          description: 'Comprehensive diagnostic services to identify equipment issues quickly and accurately.',
          price: 150,
        },
        {
          id: '2',
          name: 'Electrical Systems',
          description: 'Expert repair and maintenance of electrical components and wiring systems.',
          price: 200,
        },
        {
          id: '3',
          name: 'Hydraulics',
          description: 'Hydraulic system repair, maintenance, and component replacement.',
          price: 250,
        },
        {
          id: '4',
          name: 'HVAC',
          description: 'Heating, ventilation, and air conditioning system services for equipment cabs.',
          price: 180,
        },
        {
          id: '5',
          name: 'General Repair',
          description: 'Complete repair and maintenance services for all heavy equipment types.',
          price: 220,
        },
        {
          id: '6',
          name: 'Preventive Maintenance',
          description: 'Regular maintenance programs to keep your equipment running smoothly.',
          price: 175,
        },
      ];
      setServices(defaultServices);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className={styles.container}><p>Loading services...</p></div>;
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>Our Services</h1>
        <p>Professional equipment repair and maintenance services tailored to your needs</p>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceDetailCard}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className={styles.servicePrice}>
                <span>Starting at: <strong>${service.price}</strong></span>
              </div>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '1rem' }}>
                Contact us for a detailed quote tailored to your specific needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.servicesInfo}>
        <h2>How Our Service Works</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Contact Us</h3>
            <p>Call or email us to describe your equipment issue</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Schedule Service</h3>
            <p>We arrange a convenient time for mobile diagnostics</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Diagnosis</h3>
            <p>Our technicians perform thorough equipment inspection</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <h3>Repair & Service</h3>
            <p>Professional repairs with quality parts and service</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Need Service? Contact Us Today!</h2>
        <p>Call (806) 632-9458 or fill out our contact form</p>
        <a href="/contact" className={styles.primaryBtn}>
          Request Service
        </a>
      </section>
    </div>
  );
}