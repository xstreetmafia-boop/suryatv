"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { products as productData } from "./data/products";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

function SparkleIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18 L18 6 M18 6 H9 M18 6 V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <path d="M12 5 V19 M5 12 H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <path d="M5 12 H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 11.5c0 4.14-4.03 7.5-9 7.5-1.1 0-2.15-.16-3.12-.46L3 20l1.2-3.6C3.44 15.1 3 13.85 3 12.5 3 8.36 7.03 5 12 5s9 3.36 9 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" />
      <circle cx="17" cy="21" r="1.4" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20.5 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9a4.6 4.6 0 0 1 6.5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 11 L12 4 L20 11 V20 H4 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 20 V13 H15 V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4 V19 M12 19 L6 13 M12 19 L18 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "left" ? "M15 5 L8 12 L15 19" : "M9 5 L16 12 L9 19"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Product = { name: string; image: string; desc: string; slug?: string };

function ProductCarousel({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % products.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [products.length]);

  const go = (next: number) => {
    setIndex((next + products.length) % products.length);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {products.map((product) =>
          product.slug ? (
            <Link
              key={product.name}
              href={`/products/${product.slug}`}
              className={styles.carouselSlide}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.carouselImage}
              />
              <div className={styles.carouselInfo}>
                <h4 className={styles.carouselName}>{product.name}</h4>
                <p className={styles.carouselDesc}>{product.desc}</p>
                <span className={styles.carouselLink}>View details →</span>
              </div>
            </Link>
          ) : (
            <div key={product.name} className={styles.carouselSlide}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.carouselImage}
              />
              <div className={styles.carouselInfo}>
                <h4 className={styles.carouselName}>{product.name}</h4>
                <p className={styles.carouselDesc}>{product.desc}</p>
              </div>
            </div>
          )
        )}
      </div>

      <button
        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
        onClick={() => go(index - 1)}
        aria-label="Previous product"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
        onClick={() => go(index + 1)}
        aria-label="Next product"
      >
        <ChevronIcon direction="right" />
      </button>

      <div className={styles.carouselDots}>
        {products.map((product, i) => (
          <button
            key={product.name}
            className={`${styles.carouselDot} ${i === index ? styles.carouselDotActive : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to ${product.name}`}
          />
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    num: "01",
    title: "Home Automation",
    body: [
      "We design and install smart home systems that let you control lighting, security, climate and entertainment from a single app.",
      "Every setup is tailored to your home, with professional installation, device pairing and ongoing support included.",
    ],
    meta: [
      ["Devices supported", "200+"],
      ["Setup time", "Same day"],
      ["Warranty", "2 years"],
    ],
    images: ["/01.jpeg", "/011.jpeg", "/0111.jpeg"],
    moreLink: "/how-it-works",
  },
  {
    num: "02",
    title: "Our Products",
    body: [
      "We supply, install and support the complete SiyanoAV security suite for homes and businesses — Antivirus Pro, Internet Security and Total Security.",
      "You can check full specifications, features and reviews for every product online. Surya Communications is the only authorized SiyanoAV dealer in Kerala, so you get genuine licenses with local sales and support.",
    ],
    products: productData.map((p) => ({
      name: p.name,
      image: p.image,
      desc: p.shortDesc,
      slug: p.slug,
    })),
  },
  {
    num: "03",
    title: "Network & WiFi Solutions",
    body: [
      "We supply and install D-Link's EAGLE PRO AI and AQUILA PRO AI Wi-Fi 6 mesh systems for whole-home and office coverage, along with fiber optics and structured cabling.",
      "AI-powered self-optimization keeps your network fast and stable, with parental controls, voice control and WPA3 security built in.",
    ],
    meta: [
      ["Speeds", "Up to 1201 Mbps"],
      ["Devices", "Up to 128 connected"],
      ["Coverage", "Up to 4000 Sq.Ft"],
    ],
    products: [
      {
        name: "D-Link AQUILA PRO AI M30",
        image: "/dlink-aquila-pro-m30.png",
        desc: "Whole-home Wi-Fi 6 mesh router with AI-enabled coverage, rapid connectivity and simplified setup.",
      },
      {
        name: "D-Link EAGLE PRO AI R15",
        image: "/dlink-eagle-pro-r15.png",
        desc: "Smart Wi-Fi 6 AI router with WPA3 security, voice control and support for up to 128 devices.",
      },
      {
        name: "D-Link AQUILA PRO AI Mesh",
        image: "/dlink-aquila-pro-style.png",
        desc: "Stylish, uninterrupted whole-home Wi-Fi 6 mesh coverage that blends into any room.",
      },
    ],
  },
  {
    num: "04",
    title: "Electrical Engineering & Contracting",
    body: [
      "We handle electrical installations, maintenance and panel work for homes and businesses — the wiring foundation your automation and networking systems run on.",
    ],
    meta: [["Services", "Installations, Maintenance, Panels"]],
  },
  {
    num: "05",
    title: "Managed IT Services & Support",
    body: [
      "Our managed IT services keep your systems running with proactive monitoring, cybersecurity and ongoing maintenance, so problems get caught before they become downtime.",
    ],
    meta: [["Includes", "Monitoring, Cybersecurity, Maintenance"]],
  },
  {
    num: "06",
    title: "Broadband & Digital TV Solutions",
    body: [
      "We provide high-speed broadband and digital IPTV, with dedicated service in the Bolghatty area.",
    ],
    meta: [
      ["Coverage area", "Bolghatty"],
      ["Offerings", "High-Speed Internet, IPTV"],
    ],
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className={styles.page}>
      <div className={styles.heroGlow} />

      <SiteHeader />

      <div className={styles.floatingActions}>
        <button className={styles.floatingBtn}>
          <CartIcon />
        </button>
        <button className={styles.floatingBtn}>
          <HeartIcon />
        </button>
      </div>

      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>
          <span className={styles.heroLine}>
            YOUR HOME, <span className={styles.glowWord}>FULLY</span>
          </span>
          <span className={styles.heroLine}>
            AUTOMATED,{" "}
            <span className={styles.circledWord}>CONNECTED AND</span>
          </span>
          <span className={styles.heroLine}>ENTERTAINED</span>
        </h1>
        <Link href="/contact" className={styles.getInTouchBtn}>
          GET IN TOUCH <ArrowUpRightIcon size={14} />
        </Link>
      </section>

      <section className={styles.servicesList}>
        {services.map((service, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={service.num}
              className={`${styles.serviceRow} ${isOpen ? styles.serviceRowOpen : ""}`}
            >
              <span className={styles.serviceNumberWrap}>
                <span className={styles.serviceNumber}>{service.num}</span>
              </span>

              <div className={styles.serviceMain}>
                <div className={styles.serviceTitleRow}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <button
                    className={styles.serviceToggle}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </button>
                </div>

                {isOpen && service.body && (
                  <div className={styles.serviceBody}>
                    <div className={styles.serviceParagraphs}>
                      {service.body.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <div className={styles.serviceMeta}>
                      {service.meta?.map(([label, value]) => (
                        <p key={label}>
                          {label}: {value}
                        </p>
                      ))}
                    </div>
                    <span className={styles.chatBadge}>
                      <ChatIcon /> Chat
                    </span>

                    {service.images && (
                      <div className={styles.serviceImages}>
                        {service.images.map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt=""
                            className={styles.serviceImage}
                          />
                        ))}
                      </div>
                    )}

                    {service.moreLink && (
                      <Link href={service.moreLink} className={styles.moreLink}>
                        <span className={styles.moreLinkIcon}>
                          <ArrowDownIcon />
                        </span>
                        How It Works
                      </Link>
                    )}
                  </div>
                )}

                {isOpen && service.products && (
                  <ProductCarousel products={service.products} />
                )}
              </div>
            </div>
          );
        })}
      </section>

      <section className={styles.featureRow}>
        <div className={styles.featureVisual}>
          <span className={styles.pingRing} />
          <span className={styles.pingRing} />
          <span className={styles.pingRing} />
          <span className={styles.hubDot}>
            <HouseIcon />
          </span>
          <span className={styles.visualCaption}>Always connected</span>
        </div>
        <div className={styles.featureText}>
          <SparkleIcon size={18} />
          <p>
            We bring home automation, WiFi installation and SiyanoAV
            security together under one roof — installed, connected and
            supported locally across Kerala.
          </p>
        </div>
      </section>

      <section className={styles.certSection}>
        <div className={styles.certImageWrap}>
          <img
            src="/certificate-dlink.png"
            alt="D-Link Certificate of Completion presented to Surya Communications"
            className={styles.certImage}
          />
        </div>
        <div className={styles.certText}>
          <span className={styles.certLabel}>Certified &amp; Authorised</span>
          <h3 className={styles.certHeading}>
            D-Link Certified Technical Training, 2025
          </h3>
          <p className={styles.certDesc}>
            Surya Communications completed D-Link&apos;s hands-on technical
            training programme, and is also the only authorised SiyanoAV
            antivirus distributor for the state of Kerala.
          </p>
        </div>
      </section>

      <section className={styles.contactCta}>
        <div className={styles.contactGlow} />
        <Link href="/contact" className={styles.contactCtaLink}>
          <h2 className={styles.contactHeading}>
            <span className={styles.contactCircled}>CONTACT US</span>
            <ArrowUpRightIcon size={44} />
          </h2>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
