import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            BeeRad <span className={styles.goldText}>LLC</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Mobile Heavy Equipment Diagnostics &amp; Repair
          </p>
          <p className={styles.heroDescription}>
            Serving Lubbock and surrounding areas with expert mobile diagnostics
            and repair for heavy equipment, farm machinery, and commercial
            vehicles. We come to you — no towing required.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.btnPrimary}>
              Get a Free Quote
            </Link>
            <Link href="/services" className={styles.btnSecondary}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose BeeRad LLC?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Mobile Service</h3>
              <p>
                We come directly to your job site or location — saving you time
                and costly towing fees.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Expert Diagnostics</h3>
              <p>
                Advanced diagnostic tools and years of experience with heavy
                equipment systems.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3>Reliable &amp; Trusted</h3>
              <p>
                Family-owned and operated, we built this company on hard work,
                dedication, and reliability.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Competitive Pricing</h3>
              <p>
                Fair, transparent pricing with no hidden fees. Get the repairs
                you need at a price you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesOverview}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>🔍</span>
              <span>Diagnostics</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>⚡</span>
              <span>Electrical Systems</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>💧</span>
              <span>Hydraulics</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>❄️</span>
              <span>HVAC</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>🔩</span>
              <span>General Repair</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceIcon}>🚜</span>
              <span>Farm Equipment</span>
            </div>
          </div>
          <div className={styles.ctaCenter}>
            <Link href="/services" className={styles.btnPrimary}>
              View All Services &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>
            Call us today at{' '}
            <a href="tel:8066329458" className={styles.goldText}>
              (806) 632-9458
            </a>{' '}
            or send us a message online.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
