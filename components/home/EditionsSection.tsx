"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./editions.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Edition = {
  id: string;
  title: string;
  year: string;
  host: string;
  date: string;
  participants: string;
  venue: string;
  website?: string;
};

const EDITIONS: Edition[] = [
  {
    id: "tsyp13",
    title: "TSYP 13",
    year: "2025",
    host: "IEEE ENIS SB",
    date: "22–24 December 2025",
    participants: "1200+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
    website: "https://2025-tsyp.ieee.tn/",
  },
  {
    id: "tsyp12",
    title: "TSYP 12",
    year: "2024",
    host: "IEEE ENET'COM SB",
    date: "22–24 December 2024",
    participants: "1200+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
    website: "https://2024-tsyp.ieee.tn/",
  },
  {
    id: "tsyp11",
    title: "TSYP 11",
    year: "2023",
    host: "IEEE ESSTHS SB",
    date: "18–20 December 2023",
    participants: "1200+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
    website: "https://2023-tsyp.ieee.tn/",
  },
  {
    id: "tsyp10",
    title: "TSYP X",
    year: "2022",
    host: "IEEE ESPRIT SB",
    date: "19–21 December 2022",
    participants: "1100+ Participants",
    venue: "El Mouradi Club Kantaoui, Sousse",
  },
  {
    id: "tsyp9",
    title: "TSYP 9.0",
    year: "2021",
    host: "IEEE ENIS SB",
    date: "20–22 December 2021",
    participants: "700+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
  },
  {
    id: "tsyp8",
    title: "TSYP 8.0",
    year: "2021",
    host: "IEEE ENIG SB",
    date: "14–16 March 2021",
    participants: "500+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
  },
  {
    id: "tsyp7",
    title: "TSYP 7.0",
    year: "2019",
    host: "IEEE ENIT SB",
    date: "16–18 December 2019",
    participants: "1200+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
  },
  {
    id: "tsyp6",
    title: "TSYP 6.0",
    year: "2018",
    host: "IEEE INSAT SB",
    date: "16–18 December 2018",
    participants: "1000+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
  },
  {
    id: "tsyp5",
    title: "TSYP 5.0",
    year: "2017",
    host: "IEEE ENIS SB",
    date: "17–19 December 2017",
    participants: "700+ Participants",
    venue: "El Mouradi Club Kantaoui, Sousse",
  },
  {
    id: "tsyp4",
    title: "TSYP 4.0",
    year: "2016",
    host: "IEEE ULT SB",
    date: "18–20 December 2016",
    participants: "500+ Participants",
    venue: "Medina Congress Center, Yasmine Hammamet",
  },
  {
    id: "tsbc3",
    title: "TSBC 3.0",
    year: "2015",
    host: "IEEE INSAT SB",
    date: "20–22 December 2015",
    participants: "280+ Participants",
    venue: "Tej Marhaba Hotel, Sousse",
  },
  {
    id: "tsbc2",
    title: "TSBC 2.0",
    year: "2014",
    host: "IEEE ENIS SB",
    date: "22–23 December 2014",
    participants: "200+ Participants",
    venue: "Sousse",
  },
  {
    id: "tsbc1",
    title: "TSBC 1.0",
    year: "2013",
    host: "Jointly by all SBs",
    date: "17–18 December 2013",
    participants: "100+ Participants",
    venue: "Kartago El Ksar, Sousse",
  },
];

function CalendarIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 2v4M8 2v4M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M10 7h7v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className={styles.arrowIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m9 18 6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EditionCardContent({ edition }: { edition: Edition }) {
  return (
    <>
      <div className={styles.cardTopLine} />
      <div className={styles.cardGlow} />

      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.cardTitle}>{edition.title}</h3>
          <p className={styles.cardHost}>by {edition.host}</p>
        </div>

        <span className={styles.yearBadge}>{edition.year}</span>
      </div>

      <div className={styles.metaList}>
        <div className={styles.metaItem}>
          <CalendarIcon />
          <span>{edition.date}</span>
        </div>

        <div className={styles.metaItem}>
          <PeopleIcon />
          <span>{edition.participants}</span>
        </div>

        <div className={styles.metaItem}>
          <LocationIcon />
          <span>{edition.venue}</span>
        </div>
      </div>

      {edition.website && (
        <span className={styles.websiteButton}>
          Visit website
          <ExternalIcon />
        </span>
      )}

      <span className={styles.cardWatermark}>{edition.year}</span>
    </>
  );
}

function EditionCard({ edition }: { edition: Edition }) {
  if (edition.website) {
    return (
      <a
        href={edition.website}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
        aria-label={`Open ${edition.title} website`}
      >
        <EditionCardContent edition={edition} />
      </a>
    );
  }

  return (
    <article className={styles.card}>
      <EditionCardContent edition={edition} />
    </article>
  );
}

export default function EditionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const scrollPrevious = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>(
      `.${styles.card}`
    );

    const cardWidth = firstCard?.offsetWidth ?? 430;

    slider.scrollBy({
      left: -(cardWidth + 24),
      behavior: "smooth",
    });
  };

  const scrollNext = () => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>(
      `.${styles.card}`
    );

    const cardWidth = firstCard?.offsetWidth ?? 430;

    slider.scrollBy({
      left: cardWidth + 24,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="previous-editions"
      ref={sectionRef}
      className={styles.section}
    >
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
            <span className={styles.eyebrowText}>Previous Editions</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.title}>
            <span className={styles.solidText}>Previous </span>
            <span className={styles.outlinedText}>Editions</span>
          </h2>

          <p className={styles.subtitle}>
            A continuous journey through the editions that shaped the TSYP
            legacy.
          </p>
        </motion.div>

        <motion.div
          className={styles.sliderControls}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.65,
            ease: EASE,
            delay: 0.15,
          }}
        >
          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollPrevious}
            aria-label="Show previous editions"
          >
            <ArrowLeftIcon />
          </button>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollNext}
            aria-label="Show next editions"
          >
            <ArrowRightIcon />
          </button>
        </motion.div>
      </div>

      <motion.div
        className={styles.sliderWrapper}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.85,
          ease: EASE,
          delay: 0.2,
        }}
      >
        <div className={styles.timelineLine} />

        <div ref={sliderRef} className={styles.editionsSlider}>
          {EDITIONS.map((edition) => (
            <EditionCard key={edition.id} edition={edition} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}