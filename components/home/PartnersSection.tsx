"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./partners.module.css";

const EASE = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number,
];

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const PARTNERS: Partner[] = [
  {
    name: "IEEE Foundation",
    logo: "/partners/foundation.png",
    website: "https://www.ieeefoundation.org/",
  },
  {
    name: "SPAX",
    logo: "/partners/spax.webp",
    website:
      "https://students.ieee.org/student-opportunities/professional-awareness/spax-events/",
  },
  {
    name: "IEEE Electronics Packaging Society",
    logo: "/partners/eps.png",
    website: "https://eps.ieee.org/",
  },
  {
    name: "IEEE MTT-S",
    logo: "/partners/mtts.png",
    website: "https://mtt.org/",
  },
  {
    name: "IEEE AESS",
    logo: "/partners/aess.png",
    website: "https://ieee-aess.org/",
  },
  {
    name: "IEEE Smart Cities",
    logo: "/partners/smart-city.png",
    website: "https://smartcities.ieee.org/",
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
    <motion.a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${partner.name} website`}
      className={styles.partnerCard}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        ease: EASE,
        delay,
      }}
      whileHover={{
        y: -5,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <div className={styles.logoWrap}>
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          sizes="
            (max-width: 640px) 85vw,
            (max-width: 980px) 45vw,
            260px
          "
          className={styles.logo}
          draggable={false}
          unoptimized
        />
      </div>
    </motion.a>
  );
}

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-70px",
  });

  const scrollPartners = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector<HTMLElement>(
      `.${styles.partnerCard}`,
    );

    const computedStyles = window.getComputedStyle(slider);
    const gap = Number.parseFloat(computedStyles.columnGap) || 22;

    const scrollDistance = firstCard
      ? firstCard.offsetWidth + gap
      : slider.clientWidth * 0.8;

    const maximumScroll =
      slider.scrollWidth - slider.clientWidth;

    const isAtBeginning = slider.scrollLeft <= 5;
    const isAtEnd =
      slider.scrollLeft >= maximumScroll - 5;

    /*
     * Lorsque le carrousel arrive à la fin,
     * la flèche droite le ramène au début.
     */
    if (direction === "right" && isAtEnd) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });

      return;
    }

    /*
     * Lorsque le carrousel est au début,
     * la flèche gauche l'envoie à la fin.
     */
    if (direction === "left" && isAtBeginning) {
      slider.scrollTo({
        left: maximumScroll,
        behavior: "smooth",
      });

      return;
    }

    slider.scrollBy({
      left:
        direction === "right"
          ? scrollDistance
          : -scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.ambientGlowRight} />
      <div className={styles.ambientGlowLeft} />

      <div className={styles.header}>
        <motion.div
          className={styles.eyebrow}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            ease: EASE,
          }}
        >
          <span className={styles.eyebrowLineLeft} />

          <span className={styles.eyebrowText}>
            They Support TSYP XIV
          </span>

          <span className={styles.eyebrowLineRight} />
        </motion.div>

        <motion.h2
          className={styles.title}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: 0.08,
          }}
        >
          <span>Our </span>

          <span className={styles.outlinedText}>
            Partners
          </span>
        </motion.h2>
      </div>

      <motion.div
        className={styles.carousel}
        initial={{
          opacity: 0,
          y: 22,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: EASE,
          delay: 0.2,
        }}
      >
        <div
          ref={sliderRef}
          className={styles.partnersSlider}
        >
          {PARTNERS.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              delay={0.28 + index * 0.06}
            />
          ))}
        </div>

        <div className={styles.carouselControls}>
          <motion.button
            type="button"
            className={styles.navigationButton}
            aria-label="Show previous partners"
            onClick={() => scrollPartners("left")}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={styles.navigationIcon}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <motion.button
            type="button"
            className={styles.navigationButton}
            aria-label="Show next partners"
            onClick={() => scrollPartners("right")}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={styles.navigationIcon}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}