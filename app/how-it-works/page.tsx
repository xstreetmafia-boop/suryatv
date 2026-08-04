import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Reveal from "../components/Reveal";
import AutomationDiagram from "../components/AutomationDiagram";
import styles from "./how-it-works.module.css";

const steps = [
  {
    num: "01",
    title: "We install your devices",
    text: "Smart lighting, security cameras, thermostats and entertainment systems are professionally installed and paired to a central home hub.",
  },
  {
    num: "02",
    title: "Everything connects",
    text: "Your hub links every device over WiFi, creating one connected system instead of separate gadgets that don't talk to each other.",
  },
  {
    num: "03",
    title: "You control it all from one app",
    text: "Turn on the lights, check the cameras, adjust the temperature or manage entertainment — all from a single app, from anywhere.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} />
      <SiteHeader />

      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>

      <section className={styles.hero}>
        <span className={styles.eyebrow}>How it works</span>
        <h1 className={styles.heading}>
          ONE APP, EVERY DEVICE, ONE CONNECTED HOME
        </h1>
        <p className={styles.subtext}>
          Here&apos;s what actually happens behind the scenes when we
          automate a home — lighting, security, climate and entertainment,
          all wired into a single system you control from your phone.
        </p>
      </section>

      <section className={styles.diagramSection}>
        <AutomationDiagram />
      </section>

      <section className={styles.steps}>
        {steps.map((step) => (
          <Reveal key={step.num} className={styles.step}>
            <span className={styles.stepNum}>{step.num}</span>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal className={styles.cta}>
        <h2 className={styles.ctaHeading}>Ready to automate your home?</h2>
        <Link href="/contact" className={styles.ctaBtn}>
          Get in touch →
        </Link>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
