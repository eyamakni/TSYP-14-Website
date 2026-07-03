"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./whoWeAre.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ORGANIZATIONS = [
  {
    id: "ieee-section",
    logo: "/ieee-tunisia-light.png",
    logoW: 170,
    logoH: 68,
    title: "IEEE Tunisia Section",
    label: "Section",
    description:
      "Founded in 2008, the IEEE Tunisia Section supports IEEE initiatives across Tunisia through educational programs, networking opportunities, student activities, chapters, awards, and technology-driven initiatives.",
    stat: "43+",
    statLabel: "Student Branches",
  },
  {
    id: "ieee-sb",
    logo: "/sb.png",
    logoW: 150,
    logoH: 76,
    title: "IEEE INSAT Student Branch",
    label: "Organizer",
    description:
      "IEEE INSAT Student Branch is one of Tunisia’s most active IEEE student branches. It brings together engineering students through workshops, competitions, events, and collaborative projects.",
    stat: "INSAT",
    statLabel: "Student Branch",
  },
  {
    id: "insat",
    logo: "/insat.png",
    logoW: 135,
    logoH: 76,
    title: "INSAT",
    label: "Institution",
    description:
      "The National Institute of Applied Science and Technology is a leading engineering school in Tunis, known for higher education, research, innovation, and academic excellence.",
    stat: "Tunis",
    statLabel: "Tunisia",
  },
];
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
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        ease: EASE,
        delay: 0.18 + index * 0.1,
      }}
    >
      <div className={styles.cardTopLine} />

      <div className={styles.logoArea}>
        <Image
          src={organization.logo}
          alt={organization.title}
          width={organization.logoW}
          height={organization.logoH}
          className={styles.logo}
        />
      </div>

      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>{organization.label}</span>

        <h3 className={styles.cardTitle}>{organization.title}</h3>

        <p className={styles.cardDescription}>{organization.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.statValue}>{organization.stat}</span>
        <span className={styles.statLabel}>{organization.statLabel}</span>
      </div>
    </motion.article>
  );
}

export default function WhoWeAreSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

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
            TSYP 14 is built through the collaboration of IEEE, INSAT, and the
            student community behind the event.
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
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
    </section>
  );
}