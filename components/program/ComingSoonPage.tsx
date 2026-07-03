"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./comingSoon.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type ComingSoonPageProps = {
  title: string;
  description?: string;
};

export default function ComingSoonPage({
  title,
  description = "This section is currently being prepared. More details will be available soon.",
}: ComingSoonPageProps) {
  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} />
      <div className={styles.grid} />

      <motion.section
        className={styles.card}
        initial={{ opacity: 0, y: 26, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className={styles.cardTopGlow} />

        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        >
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>TSYP XIV</span>
          <span className={styles.eyebrowLine} />
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.16 }}
        >
          <span className={styles.gradientText}>Coming Soon</span>
        </motion.h1>

        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.24 }}
        >
          {title}
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.38 }}
        >
          <Link href="/" className={styles.primaryLink}>
            Back Home
          </Link>

          <Link href="/venue" className={styles.secondaryLink}>
            View Venue
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}