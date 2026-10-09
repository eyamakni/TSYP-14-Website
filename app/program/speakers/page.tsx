"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./speakers.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Speaker = {
  name: string;
  country: string;
  position: string;
  photo: string;
  website?: string;
};

const SPEAKERS: Speaker[] = [
  {
    name: "Khaled B.Ltaief",
    country: "Hong Kong",
    position: "2019 President, IEEE Communications Society",
    photo: "/speakers/khaled-ltaief.jpg",
    website: "",
  },
  {
    name: "Mohamed Saaed Darweesh",
    country: "Egypt",
    position:
      "IEEE Region 8 Young Professionals Chair, IEEE MGA Young Professionals Committee Member 2025–2026, and IEEE HTB Programs Committee Member",
    photo: "/speakers/mohamed-darweesh.jpeg",
    website: "",
  },
  {
    name: "Zied Bouida",
    country: "Kuwait",
    position:
      "Assistant Professor at Kuwait College of Science and Technology (KCST)",
    photo: "/speakers/zied-bouida.jpg",
    website: "",
  },
  {
    name: "Khaled Mhamdi",
    country: "Tunisia",
    position: "Senior Process/Utilities Engineer and ENERWISE Developer",
    photo: "/speakers/khaled.png",
    website: "http://www.khaledmhamdi.com/",
  },
  {
    name: "Imen Selmi",
    country: "Tunisia",
    position:
      "AI & MLOps Engineer and PhD researcher specializing in Generative AI, LLMs, RAG, and AI security.",
    photo: "/speakers/imen.jpg",
    website: "",
  },
  {
    name: "Brahem Himed",
    country: "Algeria",
    position:
      "IEEE Life Fellow, AFRL Fellow, IEEE AESS President (2026-2027)",
    photo: "/speakers/brahem.jpeg",
    website: "",
  },
  {
    name: "Winnie YE",
    country: "Canada",
    position:
      "Chair, IEEE Women in Engineering (WIE) Board of Governors, IEEE Photonics Society (PHO)",
    photo: "/speakers/winnie-ey.jpeg",
    website: "",
  },
  {
    name: "Raef Ben Jeddou",
    country: "Tunisia",
    position:
      "CEO & Cofounder of TrinovaQ Former Chair of IEEE ENISo Student Branch (2020/2021)",
    photo: "/speakers/raef.jpg",
    website: "",
  },
  {
    name: "Hafedh Hichri",
    country: "Tunisia",
    position:
      "Software Engineer at Feyn, Qdrant Star, HuggingFace fellow",
    photo: "/speakers/hafedh.jpg",
    website: "",
  },
];

function CountryIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />
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
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function WebsiteIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 7 20l1.15-1.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
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

      <div className={styles.photoFrame}>
        <Image
          src={speaker.photo}
          alt={`${speaker.name} photo`}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className={styles.speakerPhoto}
          unoptimized
        />

        <div className={styles.photoOverlay} />
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.speakerName}>{speaker.name}</h2>

        {/* Country + Website */}
        <div className={styles.metaRow}>
          <div className={styles.countryBadge}>
            <CountryIcon />
            <span>{speaker.country}</span>
          </div>

          {speaker.website && (
            <a
              href={speaker.website}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.websiteLink}
              aria-label={`Visit ${speaker.name}'s website`}
            >
              <WebsiteIcon />
              <span>Website</span>
              <ExternalLinkIcon />
            </a>
          )}
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

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

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
            transition={{
              duration: 0.8,
              ease: EASE,
            }}
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
            transition={{
              duration: 0.7,
              ease: EASE,
              delay: 0.18,
            }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>09</span>
              <span className={styles.statLabel}>Speakers</span>
            </div>

            <div className={styles.statDivider} />

            <div className={styles.statItem}>
              <span className={styles.statValue}>06</span>
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