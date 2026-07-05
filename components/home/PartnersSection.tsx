"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./partners.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  {
    name: "Foundation",
    logo: "/partners/foundation.png",
  },
  {
    name: "SPAX",
    logo: "/partners/spax.webp",
  },
];

function PartnerCard({
  partner,
  delay,
}: {
  partner: Partner;
  delay: number;
}) {
  return (
    <motion.div
      className={styles.partnerCard}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.logoWrap}>
     <Image
  src={partner.logo}
  alt={`${partner.name} logo`}
  fill
  className={styles.logo}
  unoptimized
/>
      </div>
    </motion.div>
  );
}

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.ambientGlowRight} />
      <div className={styles.ambientGlowLeft} />

      <div className={styles.header}>
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className={styles.eyebrowLineLeft} />
          <span className={styles.eyebrowText}>They Support TSYP XIV</span>
          <span className={styles.eyebrowLineRight} />
        </motion.div>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          <span>Our </span>
          <span className={styles.outlinedText}>Partners</span>
        </motion.h2>
      </div>

      <motion.div
        className={styles.partnersGrid}
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      >
        {PARTNERS.map((partner, index) => (
          <PartnerCard
            key={partner.name}
            partner={partner}
            delay={0.28 + index * 0.08}
          />
        ))}
      </motion.div>
    </section>
  );
}