'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.navLogo} onClick={closeMenu}>
          BeeRad <span className={styles.logoAccent}>LLC</span>
        </Link>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}
        >
          <li>
            <Link href="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={styles.navLink}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.navLink} ${styles.navCta}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
