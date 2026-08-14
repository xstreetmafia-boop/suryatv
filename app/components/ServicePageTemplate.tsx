import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Reveal from "./Reveal";
import ServiceDiagram from "./ServiceDiagram";
import styles from "./ServicePageTemplate.module.css";

type Step = { num: string; title: string; text: string };
type DiagramNode = { label: string; Icon: React.ComponentType };

export default function ServicePageTemplate({
  eyebrow,
  heading,
  subtext,
  centerIcon,
  nodes,
  steps,
  ctaHeading = "Ready to get started?",
}: {
  eyebrow: string;
  heading: string;
  subtext: string;
  centerIcon: React.ReactNode;
  nodes: DiagramNode[];
  steps: Step[];
  ctaHeading?: string;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.glow} />
      <SiteHeader />

      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>

      <section className={styles.hero}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subtext}>{subtext}</p>
      </section>

      <section className={styles.diagramSection}>
        <ServiceDiagram centerIcon={centerIcon} nodes={nodes} />
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
        <h2 className={styles.ctaHeading}>{ctaHeading}</h2>
        <Link href="/contact" className={styles.ctaBtn}>
          Get in touch →
        </Link>
      </Reveal>

      <SiteFooter />
    </main>
  );
}
