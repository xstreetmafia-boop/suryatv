import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Reveal from "../../components/Reveal";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.glow} />
      <SiteHeader />

      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>

      <section className={styles.hero}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.heroImage}
        />
        <div className={styles.heroInfo}>
          <span className={styles.dealerBadge}>
            Only authorized SiyanoAV dealer in Kerala
          </span>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
          <a href="#contact" className={styles.ctaBtn}>
            Contact us for pricing
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Overview</h2>
        {product.overview.map((line) => (
          <Reveal key={line} className={styles.paragraph}>
            {line}
          </Reveal>
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Key Features</h2>
        <div className={styles.featureList}>
          {product.features.map((feature) => (
            <Reveal key={feature} className={styles.featureItem}>
              <span className={styles.featureDot} />
              <span>{feature}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Specifications</h2>
        <div className={styles.specList}>
          {product.specs.map(([label, value]) => (
            <Reveal key={label} className={styles.specRow}>
              <span className={styles.specLabel}>{label}</span>
              <span className={styles.specValue}>{value}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className={styles.noteBlock}>
        Want the full technical specifications? You can check detailed specs,
        comparisons and reviews for {product.name} online. Surya
        Communications is the only authorized SiyanoAV dealer in Kerala —
        contact us for genuine licenses, local installation and support.
      </Reveal>

      <SiteFooter />
    </main>
  );
}
