"use client";

import { motion } from "framer-motion";
import styles from "./aotn.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const RESOURCES = [
  {
    number: "01",
    label: "Official document",
    title: "Specification Book",
    description:
      "Explore the complete AOTN guidelines, requirements, evaluation criteria, and every detail needed to prepare your participation.",
    action: "View specification book",
    href: "https://online.fliphtml5.com/cayrn/ctjg/#p=1",
    icon: "book",
  },
  {
    number: "02",
    label: "Applications open",
    title: "Participation Form",
    description:
      "Ready to take part? Complete the official participation form and submit your application to join the AOTN experience.",
    action: "Fill participation form",
    href: "https://forms.gle/d3JqpsdwcK5esXqU7",
    icon: "form",
  },
] as const;

function ResourceIcon({ type }: { type: "book" | "form" }) {
  if (type === "book") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3h8M9 2v3h6V2M7 4H5.5A1.5 1.5 0 0 0 4 5.5v15A1.5 1.5 0 0 0 5.5 22h13a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 18.5 4H17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m8 13 2 2 5-5M8 19h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AotnPage() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.ambientGlowOne} />
        <div className={styles.ambientGlowTwo} />
        <div className={styles.gridPattern} />
        <div className={styles.watermark}>AOTN</div>

        <div className={styles.container}>
          <motion.header
            className={styles.header}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLineLeft} />
              <span className={styles.eyebrowText}>TSYP XIV</span>
              <span className={styles.eyebrowLineRight} />
            </div>

            <h1 className={styles.title}>
              <span className={styles.solidText}>Architects of </span>
              <span className={styles.outlinedText}>the Noosphere</span>
            </h1>

            <p className={styles.subtitle}>
              Discover the official AOTN specification book, prepare your
              application, and take the next step toward representing the
              spirit of the Noosphere at TSYP XIV.
            </p>
          </motion.header>

          <div className={styles.resourcesGrid}>
            {RESOURCES.map((resource, index) => (
              <motion.article
                key={resource.title}
                className={styles.card}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.18 + index * 0.12 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.cardTopLine} />
                <div className={styles.cardGlow} />
                <span className={styles.cardNumber}>{resource.number}</span>

                <div className={styles.iconFrame}>
                  <ResourceIcon type={resource.icon} />
                </div>

                <span className={styles.cardLabel}>{resource.label}</span>
                <h2 className={styles.cardTitle}>{resource.title}</h2>
                <p className={styles.cardDescription}>{resource.description}</p>

                <a
                  className={styles.action}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${resource.action} (opens in a new tab)`}
                >
                  <span>{resource.action}</span>
                  <ArrowIcon />
                </a>
              </motion.article>
            ))}
          </div>

          <motion.p
            className={styles.note}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Read the specification book before submitting your participation form.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
