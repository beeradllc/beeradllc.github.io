import Link from 'next/link';
import styles from '@/styles/pages.module.css';

const services = [
  {
    id: 1,
    name: 'Diagnostic Services',
    icon: '🔍',
    description:
      'Comprehensive diagnostic services using advanced tools to identify issues in heavy equipment, farm machinery, and commercial vehicles.',
    details: [
      'Full system diagnostic scans',
      'Fault code reading and interpretation',
      'Performance testing',
      'Pre-purchase inspections',
    ],
    price: 'Starting at $125',
  },
  {
    id: 2,
    name: 'Electrical Systems',
    icon: '⚡',
    description:
      'Expert electrical diagnostics and repair for all heavy equipment electrical components and systems.',
    details: [
      'Wiring harness repair and replacement',
      'Sensor diagnostics and replacement',
      'Control module programming',
      'Lighting systems',
      'Charging system repair',
    ],
    price: 'Starting at $150/hr',
  },
  {
    id: 3,
    name: 'Hydraulic Systems',
    icon: '💧',
    description:
      'Hydraulic system diagnostics, repair, and maintenance to keep your equipment operating at peak performance.',
    details: [
      'Hydraulic pump repair',
      'Cylinder repair and replacement',
      'Hose replacement',
      'System pressure testing',
      'Fluid analysis and replacement',
    ],
    price: 'Starting at $150/hr',
  },
  {
    id: 4,
    name: 'HVAC Services',
    icon: '❄️',
    description:
      'Heating, ventilation, and air conditioning services for cab comfort in all makes and models of heavy equipment.',
    details: [
      'A/C recharge and repair',
      'Heater core services',
      'Blower motor replacement',
      'Climate control diagnostics',
    ],
    price: 'Starting at $135/hr',
  },
  {
    id: 5,
    name: 'General Repair',
    icon: '🔩',
    description:
      'Broad-scope mechanical repair services for a wide range of heavy equipment and machinery issues.',
    details: [
      'Engine repair and maintenance',
      'Transmission services',
      'Brake system repair',
      'Suspension and steering',
      'Preventive maintenance',
    ],
    price: 'Starting at $125/hr',
  },
  {
    id: 6,
    name: 'Farm Equipment',
    icon: '🚜',
    description:
      'Specialized repair and maintenance for agricultural equipment to minimize downtime during critical seasons.',
    details: [
      'Tractors and combines',
      'Planting and harvesting equipment',
      'Irrigation systems',
      'Sprayers and applicators',
      'Emergency field repairs',
    ],
    price: 'Starting at $125/hr',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Our Services</h1>
          <p className={styles.pageSubtitle}>
            Mobile heavy equipment repair and diagnostics — we come to your
            location in Lubbock and surrounding areas.
          </p>
        </div>
      </section>

      <section className={styles.servicesDetail}>
        <div className={styles.container}>
          <div className={styles.servicesDetailGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceDetailCard}>
                <div className={styles.serviceDetailHeader}>
                  <span className={styles.serviceDetailIcon}>
                    {service.icon}
                  </span>
                  <h2 className={styles.serviceDetailName}>{service.name}</h2>
                </div>
                <p className={styles.serviceDetailDescription}>
                  {service.description}
                </p>
                <ul className={styles.serviceDetailList}>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <div className={styles.servicePrice}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Need a Service Not Listed?</h2>
          <p>
            Contact us at{' '}
            <a href="tel:8066329458" className={styles.goldText}>
              (806) 632-9458
            </a>{' '}
            — we can help with most heavy equipment issues.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
