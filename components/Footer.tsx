import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <h3 className={styles.footerLogo}>
              BeeRad <span className={styles.footerLogoAccent}>LLC</span>
            </h3>
            <p>
              Mobile heavy equipment diagnostics and repair serving Lubbock, TX
              and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerLinks}>
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

          {/* Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Services</h4>
            <ul className={styles.footerLinks}>
              <li>Diagnostics</li>
              <li>Electrical Systems</li>
              <li>Hydraulics</li>
              <li>HVAC</li>
              <li>General Repair</li>
              <li>Farm Equipment</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <ul className={styles.footerContact}>
              <li>
                <span>📞</span>
                <a href="tel:8066329458">(806) 632-9458</a>
              </li>
              <li>
                <span>📧</span>
                <a href="mailto:contact@beeradllc.com">
                  contact@beeradllc.com
                </a>
              </li>
              <li>
                <span>📍</span>
                <span>Lubbock, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; {currentYear} BeeRad LLC. All rights reserved. | Lubbock,
            Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
