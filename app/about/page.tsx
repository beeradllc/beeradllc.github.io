import Link from 'next/link';
import styles from '@/styles/pages.module.css';

export default function AboutPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>About BeeRad LLC</h1>
          <p className={styles.pageSubtitle}>
            Family-owned and operated. Built on hard work, dedication, and
            reliability.
          </p>
        </div>
      </section>

      <section className={styles.aboutStory}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p>
                We lovingly crafted the name BeeRad by blending parts of our
                children&apos;s names, symbolizing family at our core. My
                husband started this company to leave them something that shows
                that as long as you work hard, are dedicated, and are reliable,
                you can make a difference in this world.
              </p>
              <p>
                We&apos;re committed to serving Lubbock and surrounding areas
                with that same dedication, ensuring our hard work stands the
                test of time.
              </p>
            </div>
            <div className={styles.aboutValues}>
              <h2 className={styles.sectionTitle}>Our Values</h2>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>💪</span>
                  <div>
                    <h3>Hard Work</h3>
                    <p>
                      We put in the effort to get the job done right, every
                      time.
                    </p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>🎯</span>
                  <div>
                    <h3>Dedication</h3>
                    <p>
                      We&apos;re committed to your equipment and your success.
                    </p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>🤝</span>
                  <div>
                    <h3>Reliability</h3>
                    <p>
                      When you call us, we show up — on time and prepared.
                    </p>
                  </div>
                </div>
                <div className={styles.valueItem}>
                  <span className={styles.valueIcon}>❤️</span>
                  <div>
                    <h3>Family First</h3>
                    <p>
                      Built for family, and we treat our customers like family
                      too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose BeeRad LLC?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📍</div>
              <h3>Local Business</h3>
              <p>
                Based in Lubbock, TX — we know the area and understand the
                needs of local equipment operators.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3>Mobile Service</h3>
              <p>
                We come to your location — your field, job site, or yard. No
                need to tow your equipment.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔧</div>
              <h3>Expert Technicians</h3>
              <p>
                Years of hands-on experience with heavy equipment, farm
                machinery, and commercial vehicles.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✅</div>
              <h3>Quality Work</h3>
              <p>
                We stand behind every repair. Our goal is to fix it right the
                first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Let&apos;s Work Together</h2>
          <p>
            Ready to get your equipment back in action? Call us at{' '}
            <a href="tel:8066329458" className={styles.goldText}>
              (806) 632-9458
            </a>
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
