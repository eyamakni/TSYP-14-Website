"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./speakers.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Speaker = {
  name: string;
  country: string;
  position: string;
};

const SPEAKERS: Speaker[] = [
  {
    name: "Sneha Satish Hegde",
    country: "France",
    position: "2026 Administrative Committee",
  },
  {
    name: "Nehad El-Sherif",
    country: "Egypt",
    position:
      "IEEE IAS CMD Chair, Founder of MNKYBR Technologies, 2024 IEEE IAS Electrical Safety Committee Excellence Award",
  },
  {
    name: "Ranbir Sedhey",
    country: "India",
    position:
      "IEEE International Client Services & University Partnership Program Manager",
  },
  {
    name: "Ahmed Ayman",
    country: "Egypt",
    position: "Initiative Lead, MGA Student Activities Committee",
  },
  {
    name: "Mohamed Saaed Darweesh",
    country: "Egypt",
    position:
      "R8 YP Chair, IEEE MGA Young Professionals Member 2025–2026, IEEE HTB Programs Committee Member",
  },
  {
    name: "Andrew Douglas Lowery",
    country: "USA",
    position: "IEEE MGA VP",
  },
];

function CountryIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12h20M12 2c3 3 4.5 6.5 4.5 10S15 19 12 22M12 2C9 5 7.5 8.5 7.5 12S9 19 12 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RoleIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 14c3.31 0 6-2.69 6-6S15.31 2 12 2 6 4.69 6 8s2.69 6 6 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 22a8 8 0 0 0-16 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerCard({
  speaker,
  index,
  inView,
}: {
  speaker: Speaker;
  index: number;
  inView: boolean;
}) {
  const initials = speaker.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: EASE,
        delay: 0.16 + index * 0.08,
      }}
      whileHover={{ y: -8, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={styles.cardTopLine} />
      <div className={styles.cardGlow} />

      <div className={styles.cardHeader}>
        <div className={styles.avatar}>{initials}</div>

        <div className={styles.speakerNumber}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.speakerName}>{speaker.name}</h2>

        <div className={styles.countryBadge}>
          <CountryIcon />
          <span>{speaker.country}</span>
        </div>

        <div className={styles.positionBlock}>
          <div className={styles.positionLabel}>
            <RoleIcon />
            <span>Position</span>
          </div>

          <p className={styles.positionText}>{speaker.position}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function SpeakersPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <main className={styles.page}>
      <section ref={sectionRef} className={styles.section}>
        <div className={styles.ambientGlowOne} />
        <div className={styles.ambientGlowTwo} />
        <div className={styles.gridPattern} />
        <div className={styles.watermark}>IEEE</div>

        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLineLeft} />
              <span className={styles.eyebrowText}>TSYP XIV</span>
              <span className={styles.eyebrowLineRight} />
            </div>

            <h1 className={styles.title}>
              <span className={styles.solidText}>Our </span>
              <span className={styles.outlinedText}>Speakers</span>
            </h1>

            <p className={styles.subtitle}>
              Meet the distinguished IEEE speakers and guests contributing to
              the TSYP XIV program through expertise, leadership, and global
              experience.
            </p>
          </motion.div>

          <motion.div
            className={styles.statsBar}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>06</span>
              <span className={styles.statLabel}>Speakers</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statValue}>05</span>
              <span className={styles.statLabel}>Countries</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statValue}>IEEE</span>
              <span className={styles.statLabel}>Global Network</span>
            </div>
          </motion.div>

          <div className={styles.cardsGrid}>
            {SPEAKERS.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}