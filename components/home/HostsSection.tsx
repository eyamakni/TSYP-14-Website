"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./hosts.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Host = {
  name: string;
  role: string;
  logo: string;
  website: string;
};

const HOSTS: Host[] = [
  {
    name: "IEEE INSAT Student Branch",
    role: "Hosting Student Branch",
    logo: "/sb.png",
    website: "https://insat.ieee.tn/",
  },
  {
    name: "IEEE Tunisia Section",
    role: "Hosting IEEE Section",
    logo: "/ieee-tunisia-light.png",
    website: "https://ieee.tn/",
  },
];

function ExternalIcon() {
  return (
    <svg
      className={styles.externalIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HostCard({
  host,
  index,
  inView,
}: {
  host: Host;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.a
      href={host.website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.hostCard}
      aria-label={`Visit ${host.name} website`}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: EASE,
        delay: 0.18 + index * 0.1,
      }}
      whileHover={{ y: -7 }}
      whileTap={{ scale: 0.985 }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardTopLine} />

      <div className={styles.logoArea}>
        <Image
          src={host.logo}
          alt={`${host.name} logo`}
          fill
          sizes="(max-width: 767px) 260px, 340px"
          className={styles.logo}
          unoptimized
        />
      </div>

      <div className={styles.cardInfo}>
        <span className={styles.hostRole}>{host.role}</span>

        <h3 className={styles.hostName}>{host.name}</h3>

        <span className={styles.visitLink}>
          Visit website
          <ExternalIcon />
        </span>
      </div>
    </motion.a>
  );
}

export default function HostsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    margin: "-70px",
  });

  return (
    <section id="hosts" ref={sectionRef} className={styles.section}>
      <div className={styles.ambientGlowOne} />
      <div className={styles.ambientGlowTwo} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLineLeft} />
            <span className={styles.eyebrowText}>The Teams Behind TSYP XIV</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.title}>
            <span className={styles.solidText}>Event </span>
            <span className={styles.outlinedText}>Hosts</span>
          </h2>

          <p className={styles.subtitle}>
            TSYP XIV is proudly hosted by IEEE INSAT Student Branch in
            collaboration with IEEE Tunisia Section.
          </p>
        </motion.div>

        <div className={styles.hostsGrid}>
          {HOSTS.map((host, index) => (
            <HostCard
              key={host.name}
              host={host}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}