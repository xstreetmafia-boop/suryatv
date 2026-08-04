import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerUrl}>www.suryacommunications.com</p>

      <div className={styles.footerDivider} />

      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <p className={styles.footerBrand}>Surya Communications</p>
          <p className={styles.footerTagline}>
            Smart home automation, WiFi and TV solutions for Kerala.
          </p>
        </div>

        <div className={styles.footerCol}>
          <a href="#">What we do</a>
          <a href="#">Our work</a>
          <a href="#">About us</a>
        </div>

        <div className={styles.footerCol}>
          <a href="#">FAQ</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

        <div className={styles.footerCol}>
          <p>Ernakulam, Kerala</p>
          <p>suryacommunications890@gmail.com</p>
          <p>+91 90746 19100</p>
          <p>+91 75609 71001</p>
          <div className={styles.socialRow}>
            <span className={styles.socialBtn}>FB</span>
            <span className={styles.socialBtn}>IG</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>All Rights Reserved</span>
        <span>&copy; 2026 Surya Communications</span>
      </div>
    </footer>
  );
}
