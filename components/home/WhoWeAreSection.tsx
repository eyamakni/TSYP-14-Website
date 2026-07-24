"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./whoWeAre.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ORGANIZATIONS = [
  {
    id: "ieee-tunisia-section",
    logo: "/ieee-tunisia-light.png",
    title: "IEEE Tunisia Section",
    label: "National Section",
    description:
      "IEEE Tunisia Section supports IEEE initiatives across Tunisia through student activities, technical programs, chapters, events, awards, networking opportunities, and technology-driven initiatives.",
    stat: "55+",
    statLabel: "Student Branches",
    website: "https://ieee.tn/",
  },
  {
    id: "ieee-insat",
    logo: "/sb.png",
    title: "IEEE INSAT SB",
    label: "Student Branch",
    description:
      "IEEE INSAT Student Branch brings together engineering students through technical workshops, competitions, leadership experiences, collaborative projects, and large-scale IEEE events.",
    stat: "INSAT",
    statLabel: "Organizer",
    website: "https://insat.ieee.tn/",
  },
  {
    id: "sac-tunisia",
    logo: "/sac.png",
    title: "SAC Tunisia",
    label: "Student Activities",
    description:
      "The Student Activities Committee represents students’ voices, supports the creation and development of IEEE Student Branches, promotes membership growth, and encourages student engagement at local, national, and international levels.",
    stat: "SAC",
    statLabel: "Student Voice",
    website: "https://ieee.tn/activities/sac/",
  },
  {
    id: "tac-tunisia",
    logo: "/tac.png",
    title: "TAC Tunisia",
    label: "Technical Activities",
    description:
      "The Technical Activities Committee coordinates technical activities within IEEE Tunisia Section, supports technical chapters, promotes innovation, and strengthens collaboration between academia, industry, and IEEE societies.",
    stat: "30",
    statLabel: "Technical Chapters",
    website: "https://ieee.tn/activities/tac/",
  },
  {
    id: "yp-tunisia",
    logo: "/yp-tunisia.png",
    title: "YP Tunisia",
    label: "Young Professionals",
    description:
      "IEEE Tunisia Young Professionals connects graduates and early-career engineers through professional development, networking, technical exchange, mentoring, and community-oriented initiatives.",
    stat: "2010",
    statLabel: "Founded",
    website: "https://yp.ieee.tn/",
  },
  {
    id: "insat-university",
    logo: "/insat.png",
    title: "INSAT University",
    label: "Academic Institution",
    description:
      "The National Institute of Applied Science and Technology is a leading Tunisian engineering institution known for academic excellence, applied sciences, research, innovation, and technology education.",
    stat: "Tunis",
    statLabel: "Tunisia",
    website: "https://insat.rnu.tn/",
  },
  {
    id: "university-of-carthage",
    logo: "/ucar.png",
    title: "University of Carthage",
    label: "Public University",
    description:
      "Established in 1988, the University of Carthage is a Tunisian public university dedicated to education, research, academic excellence, innovation, and multidisciplinary learning.",
    stat: "289",
    statLabel: "Degrees",
    website: "https://ucar.rnu.tn/",
  },
  {
    id: "ieee-region-8",
    logo: "/ieee-region8.png",
    title: "IEEE Region 8",
    label: "EMEA Region",
    description:
      "IEEE Region 8 covers Europe, the Middle East, and Africa, supporting a diverse community of technology professionals, academics, students, sections, and student branches.",
    stat: "80+",
    statLabel: "Sections",
    website: "https://ieeer8.org/",
  },
  {
    id: "ieee-global",
    logo: "/ieee-global.webp",
    title: "IEEE Global",
    label: "Global Network",
    description:
      "IEEE is the world’s largest technical professional organization dedicated to advancing technology for humanity through standards, publications, conferences, education, and global communities.",
    stat: "Global",
    statLabel: "IEEE Network",
    website: "https://www.ieee.org/",
  },
];

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.arrowIcon} aria-hidden="true">
      <path
        d="M15 18 9 12l6-6"
        fill="none"
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
    <svg viewBox="0 0 24 24" className={styles.arrowIcon} aria-hidden="true">
      <path
        d="m9 18 6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.externalIcon} aria-hidden="true">
      <path
        d="M7 17 17 7M10 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrganizationCard({
  organization,
  index,
  inView,
}: {
  organization: (typeof ORGANIZATIONS)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.a
      href={organization.website}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`Open ${organization.title} website`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        duration: 0.75,
        ease: EASE,
        delay: 0.18 + index * 0.07,
      }}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardTopLine} />

      <div className={styles.logoArea}>
        <Image
          src={organization.logo}
          alt={`${organization.title} logo`}
          fill
          sizes="180px"
          className={styles.logo}
          unoptimized
        />
      </div>

      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>{organization.label}</span>

        <h3 className={styles.cardTitle}>{organization.title}</h3>

        <p className={styles.cardDescription}>{organization.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <div>
          <span className={styles.statValue}>{organization.stat}</span>
          <span className={styles.statLabel}>{organization.statLabel}</span>
        </div>

        <span className={styles.visitButton}>
          Visit
          <ExternalIcon />
        </span>
      </div>
    </motion.a>
  );
}

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -390,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 390,
      behavior: "smooth",
    });
  };

  return (
    <section id="who-we-are" ref={sectionRef} className={styles.section}>
      <div className={styles.ambientGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Who We Are</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2 className={styles.title}>
            <span className={styles.solidText}>The Organizations </span>
            <span className={styles.outlinedText}>Behind TSYP 14</span>
          </h2>

          <p className={styles.subtitle}>
            TSYP 14 is shaped by a strong ecosystem of IEEE communities,
            academic institutions, technical committees, and student-driven
            organizations.
          </p>
        </motion.div>

        <motion.div
          className={styles.controls}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
        >
          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollLeft}
            aria-label="Scroll organizations left"
          >
            <ArrowLeftIcon />
          </button>

          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollRight}
            aria-label="Scroll organizations right"
          >
            <ArrowRightIcon />
          </button>
        </motion.div>

        <div className={styles.sliderMask}>
          <div ref={sliderRef} className={styles.cardsSlider}>
            {ORGANIZATIONS.map((organization, index) => (
              <OrganizationCard
                key={organization.id}
                organization={organization}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}