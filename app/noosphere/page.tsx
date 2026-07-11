"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./noosphere.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const KEY_IDEAS = [
  {
    number: "01",
    title: "Collective Intelligence",
    text: "The noosphere represents a shared sphere of human thought, knowledge, reasoning, and collaboration.",
  },
  {
    number: "02",
    title: "Connected Systems",
    text: "Teams are encouraged to build systems that connect people, information, institutions, and technologies instead of creating isolated solutions.",
  },
  {
    number: "03",
    title: "Ethical Decision-Making",
    text: "Solutions should help communities make responsible decisions, especially when time, trust, and resources are limited.",
  },
  {
    number: "04",
    title: "Resilience Under Pressure",
    text: "The objective is to strengthen how communities prepare, respond, adapt, and recover during difficult situations.",
  },
];

function BrainIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.3A3.5 3.5 0 0 0 4.5 15a3.5 3.5 0 0 0 5 3.2M14.5 4.5A3.5 3.5 0 0 1 18 8v.3a3.5 3.5 0 0 1 1.5 6.7 3.5 3.5 0 0 1-5 3.2M12 3v18M8 9.5h4M12 14.5h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10.7 7.2 6.3 15.7M13.3 7.2l4.4 8.5M7.5 18h9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function NoospherePage() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <main className={styles.page}>
      <section ref={sectionRef} className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.gridPattern} />
        <div className={styles.watermark}>NOOSPHERE</div>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLineLeft} />
            <span className={styles.eyebrowText}>TSYP XIV Theme</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h1 className={styles.title}>
            <span className={styles.solidText}>Architects of the </span>
            <span className={styles.outlinedText}>Noosphere</span>
          </h1>

          <p className={styles.heroText}>
            Designing ethical, collaborative intelligence systems that help
            communities reason, decide, and act wisely under pressure.
          </p>
        </motion.div>
      </section>

      <section className={styles.explanationSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.introGrid}
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.12 }}
          >
            <article className={styles.definitionCard}>
              <div className={styles.cardTopLine} />

              <div className={styles.iconBox}>
                <BrainIcon />
              </div>

              <span className={styles.cardLabel}>The Concept</span>

              <h2 className={styles.sectionTitle}>What is the Noosphere?</h2>

              <p className={styles.paragraph}>
                The noosphere is the idea of a third layer of the planet,
                alongside the geosphere and biosphere: the sphere of collective
                human thought and reasoning.
              </p>

              <p className={styles.paragraph}>
                “Architects of the Noosphere” borrows that image on purpose.
                Teams are not asked to build an isolated piece of software or
                hardware, but to design a connected layer of ethical,
                collective intelligence.
              </p>
            </article>

            <article className={styles.definitionCard}>
              <div className={styles.cardTopLine} />

              <div className={styles.iconBox}>
                <NetworkIcon />
              </div>

              <span className={styles.cardLabel}>The Challenge</span>

              <h2 className={styles.sectionTitle}>Why does it matter?</h2>

              <p className={styles.paragraph}>
                Recent crises show that technology alone rarely saves a system
                under stress.
              </p>

              <p className={styles.paragraph}>
                What breaks first is often not the infrastructure, but the
                decision-making around it: fragmented information, eroded trust,
                weak coordination, and ethical shortcuts taken in a hurry.
              </p>
            </article>
          </motion.div>

          <motion.div
            className={styles.statementCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <span className={styles.statementLabel}>In One Sentence</span>

            <p className={styles.statementText}>
              Student teams design ethical, collaborative intelligence systems
              — technological, organizational, or social — that strengthen how
              communities decide and recover under pressure.
            </p>
          </motion.div>

          <div className={styles.ideasGrid}>
            {KEY_IDEAS.map((idea, index) => (
              <motion.article
                key={idea.number}
                className={styles.ideaCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  ease: EASE,
                  delay: index * 0.08,
                }}
              >
                <span className={styles.ideaNumber}>{idea.number}</span>
                <h3 className={styles.ideaTitle}>{idea.title}</h3>
                <p className={styles.ideaText}>{idea.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}