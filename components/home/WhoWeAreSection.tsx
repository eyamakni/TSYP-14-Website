"use client";

import Image from "next/image";
import { type ReactNode, useRef } from "react";
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
    links: {
      facebook: "https://www.facebook.com/ieee.tunisia",
      instagram: "https://www.instagram.com/ieee.tunisia.section/",
      linkedin: "https://www.linkedin.com/company/ieee-tunisia/",
    },
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
    links: {
      facebook: "https://www.facebook.com/IeeeInsatStudentBranch",
      instagram: "https://www.instagram.com/ieee.insat.sb/",
      linkedin: "https://www.linkedin.com/company/ieee-insat-student-branch/",
    },
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
    links: {
      facebook: "https://www.facebook.com/insat.rnu.tn",
      instagram: "https://www.instagram.com/insat.tunisie/",
      linkedin:
        "https://www.linkedin.com/school/national-institute-of-applied-science-and-technology/posts/?feedView=all",
    },
  },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.2l.8-4h-4V7a1 1 0 0 1 1-1h3V2Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.socialIcon} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4v15h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.88c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V23H8V8Z"
        transform="scale(1.05)"
      />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={styles.socialLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
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
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -12, scale: 1.025 }}
      whileTap={{ scale: 0.985 }}
      transition={{
        duration: 0.75,
        ease: EASE,
        delay: 0.18 + index * 0.1,
      }}
    >
      <div className={styles.cardGlow} />
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
        <div>
          <span className={styles.statValue}>{organization.stat}</span>
          <span className={styles.statLabel}>{organization.statLabel}</span>
        </div>

        <div className={styles.socials}>
          <SocialLink href={organization.links.facebook} label={`${organization.title} Facebook`}>
            <FacebookIcon />
          </SocialLink>

          <SocialLink href={organization.links.instagram} label={`${organization.title} Instagram`}>
            <InstagramIcon />
          </SocialLink>

          <SocialLink href={organization.links.linkedin} label={`${organization.title} LinkedIn`}>
            <LinkedInIcon />
          </SocialLink>
        </div>
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