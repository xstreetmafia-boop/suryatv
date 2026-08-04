import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import styles from "./contact.module.css";

function PhoneIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7 L12 13 L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7 V12 L15.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} />
      <SiteHeader />

      <section className={styles.hero}>
        <span className={styles.eyebrow}>Get in touch</span>
        <h1 className={styles.heading}>LET&apos;S TALK</h1>
        <p className={styles.subtext}>
          Questions about home automation, WiFi setup or SiyanoAV security
          products? Call us directly — we&apos;re based in Ernakulam, Kerala.
        </p>

        <div className={styles.phoneBlock}>
          <span className={styles.phoneGlow} />
          <span className={styles.phoneLabel}>
            <PhoneIcon /> For enquiries &amp; consultation
          </span>
          <div className={styles.phoneNumbers}>
            <a href="tel:+919074619100" className={styles.phoneNumber}>
              +91 90746 19100
            </a>
            <a href="tel:+917560971001" className={styles.phoneNumber}>
              +91 75609 71001
            </a>
          </div>
        </div>
      </section>

      <section className={styles.infoGrid}>
        <Reveal className={styles.infoCard}>
          <span className={styles.infoIcon}>
            <MailIcon />
          </span>
          <span className={styles.infoLabel}>Email</span>
          <a
            href="mailto:suryacommunications890@gmail.com"
            className={styles.infoValue}
          >
            suryacommunications890@gmail.com
          </a>
        </Reveal>

        <Reveal className={styles.infoCard}>
          <span className={styles.infoIcon}>
            <PinIcon />
          </span>
          <span className={styles.infoLabel}>Location</span>
          <span className={styles.infoValue}>Ernakulam, Kerala</span>
        </Reveal>

        <Reveal className={styles.infoCard}>
          <span className={styles.infoIcon}>
            <ClockIcon />
          </span>
          <span className={styles.infoLabel}>Hours</span>
          <span className={styles.infoValue}>Mon – Sat, 9:30 AM – 7:00 PM</span>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
