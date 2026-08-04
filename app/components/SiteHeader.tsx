import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.nav}>
      <Link href="/">
        <img
          src="/logo.png"
          alt="Surya Communications"
          className={styles.logoImage}
        />
      </Link>
    </header>
  );
}
