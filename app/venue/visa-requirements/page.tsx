"use client";

import { motion } from "framer-motion";
import { VisaChecker } from "../_components/VenueSections";
import { EASE } from "../venueData";
import styles from "./visaRequirements.module.css";

const VISA_FREE_COUNTRIES = [
  { flag: "🇪🇺", name: "All European Union citizens except Cyprus" },
  { flag: "🇩🇿", name: "Algeria" },
  { flag: "🇦🇩", name: "Andorra" },
  { flag: "🇦🇴", name: "Angola" },
  { flag: "🇦🇬", name: "Antigua and Barbuda" },
  { flag: "🇦🇷", name: "Argentina" },
  { flag: "🇦🇺", name: "Australia" },
  { flag: "🇧🇭", name: "Bahrain" },
  { flag: "🇧🇧", name: "Barbados" },
  { flag: "🇧🇯", name: "Benin" },
  { flag: "🇧🇦", name: "Bosnia and Herzegovina" },
  { flag: "🇧🇷", name: "Brazil" },
  { flag: "🇧🇳", name: "Brunei" },
  { flag: "🇧🇫", name: "Burkina Faso" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇨🇻", name: "Cape Verde" },
  { flag: "🇨🇱", name: "Chile" },
  { flag: "🇰🇲", name: "Comoros" },
  { flag: "🇨🇷", name: "Costa Rica" },
  { flag: "🇨🇮", name: "Côte d'Ivoire" },
  { flag: "🇬🇶", name: "Equatorial Guinea" },
  { flag: "🇫🇯", name: "Fiji" },
  { flag: "🇬🇦", name: "Gabon" },
  { flag: "🇬🇲", name: "Gambia" },
  { flag: "🇬🇳", name: "Guinea" },
  { flag: "🇬🇼", name: "Guinea-Bissau" },
  { flag: "🇭🇰", name: "Hong Kong" },
  { flag: "🇭🇳", name: "Honduras" },
  { flag: "🇮🇸", name: "Iceland" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇯🇴", name: "Jordan" },
  { flag: "🇰🇮", name: "Kiribati" },
  { flag: "🇰🇷", name: "South Korea" },
  { flag: "🇰🇼", name: "Kuwait" },
  { flag: "🇱🇾", name: "Libya" },
  { flag: "🇱🇮", name: "Liechtenstein" },
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇲🇻", name: "Maldives" },
  { flag: "🇲🇱", name: "Mali" },
  { flag: "🇲🇷", name: "Mauritania" },
  { flag: "🇲🇺", name: "Mauritius" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇲🇩", name: "Moldova" },
  { flag: "🇲🇨", name: "Monaco" },
  { flag: "🇲🇪", name: "Montenegro" },
  { flag: "🇲🇦", name: "Morocco" },
  { flag: "🇳🇦", name: "Namibia" },
  { flag: "🇳🇿", name: "New Zealand" },
  { flag: "🇳🇪", name: "Niger" },
  { flag: "🇲🇰", name: "North Macedonia" },
  { flag: "🇳🇴", name: "Norway" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇷🇺", name: "Russia" },
  { flag: "🇰🇳", name: "Saint Kitts and Nevis" },
  { flag: "🇱🇨", name: "Saint Lucia" },
  { flag: "🇸🇲", name: "San Marino" },
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇸🇳", name: "Senegal" },
  { flag: "🇷🇸", name: "Serbia" },
  { flag: "🇸🇨", name: "Seychelles" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇨🇭", name: "Switzerland" },
  { flag: "🇹🇷", name: "Turkey" },
  { flag: "🇦🇪", name: "United Arab Emirates" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇻🇦", name: "Vatican City" },
];

const SPECIAL_DURATION_CASES = [
  {
    flag: "🇨🇦",
    country: "Canada",
    duration: "Can stay up to 4 months without a visa",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    duration: "Can stay up to 4 months without a visa",
  },
  {
    flag: "🇧🇬",
    country: "Bulgaria",
    duration: "Can stay up to 2 months without a visa",
  },
  {
    flag: "🇬🇷",
    country: "Greece",
    duration: "Can stay up to 1 month without a visa",
  },
  {
    flag: "🇺🇸",
    country: "United States",
    duration: "Can stay up to 4 months without a visa",
  },
];
const TSYP_TRAVEL_STEPS = [
  {
    number: "01",
    label: "Passport Check",
    title: "Confirm your entry status",
    text: "Start by checking whether your passport allows visa-free entry to Tunisia. The checker above gives a first indication, but official confirmation should always come from Tunisian consular sources.",
    points: [
      "Check your passport nationality",
      "Confirm the allowed duration of stay",
      "Verify the latest rules before booking",
    ],
  },
  {
    number: "02",
    label: "Participant File",
    title: "Prepare your TSYP travel file",
    text: "Before traveling, prepare the documents usually requested for international events. This helps you avoid last-minute issues at the airport, hotel, or embassy.",
    points: [
      "Valid passport",
      "Flight details",
      "Accommodation confirmation",
      "Event registration confirmation",
    ],
  },
  {
    number: "03",
    label: "Visa Support",
    title: "Request support if needed",
    text: "If your visa application requires proof of participation, you may need an invitation or confirmation letter related to TSYP XIV after completing your registration.",
    points: [
      "Register for the event first",
      "Prepare personal passport information",
      "Request a support letter if required",
      "Use it only for visa-related procedures",
    ],
  },
  {
    number: "04",
    label: "Final Review",
    title: "Apply early and track progress",
    text: "If a visa is required, contact the nearest Tunisian embassy or consulate as early as possible. Processing times can vary depending on country, season, and application type.",
    points: [
      "Submit early",
      "Keep copies of every document",
      "Track embassy updates",
      "Do not wait until the final week",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className={styles.miniIcon} viewBox="0 0 24 24" fill="none">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className={styles.largeIcon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg className={styles.applyIcon} viewBox="0 0 24 24" fill="none">
      <path
        d="M22 2 11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m22 2-7 20-4-9-9-4 20-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className={styles.applyIcon} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 21h18M6 21V7l6-4 6 4v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VisaHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.gridPattern} />

      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: EASE }}
      >
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLineLeft} />
          <span className={styles.eyebrowText}>Travel Information</span>
          <span className={styles.eyebrowLineRight} />
        </div>

        <h1 className={styles.title}>
          <span className={styles.solidText}>Visa </span>
          <span className={styles.gradientText}>Requirements</span>
        </h1>

        <p className={styles.heroText}>
          Review visa-free entry, special duration cases, and application options
          before traveling to Tunisia for TSYP XIV.
        </p>
      </motion.div>
    </section>
  );
}

function VisaFreeEntrySection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.bigCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className={styles.cardTopLine} />

          <div className={styles.cardHeader}>
            <div className={styles.headerIcon}>
              <CheckIcon />
            </div>

            <div>
              <h2 className={styles.cardTitle}>Visa-Free Entry</h2>
              <p className={styles.cardSubtitle}>
                Citizens of the following countries do not need a visa for short
                stays, typically 90 days or less.
              </p>
            </div>
          </div>

          <div className={styles.countryGrid}>
            {VISA_FREE_COUNTRIES.map((country, index) => (
              <motion.div
                key={country.name}
                className={styles.countryPill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: Math.min(index * 0.012, 0.45),
                }}
              >
                <span className={styles.flag}>{country.flag}</span>
                <span>{country.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SpecialDurationSection() {
  return (
    <section className={styles.sectionCompact}>
      <div className={styles.container}>
        <motion.div
          className={styles.bigCard}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className={styles.cardTopLine} />

          <div className={styles.cardHeader}>
            <div className={`${styles.headerIcon} ${styles.warningHeaderIcon}`}>
              <ClockIcon />
            </div>

            <div>
              <h2 className={styles.specialTitle}>
                Country-Specific Stay Durations
              </h2>
              <p className={styles.cardSubtitle}>
                Some visa-free travelers may benefit from different maximum stay
                periods depending on their nationality.
              </p>
            </div>
          </div>

          <div className={styles.specialGrid}>
            {SPECIAL_DURATION_CASES.map((item, index) => (
              <motion.div
                key={item.country}
                className={styles.specialItem}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: index * 0.08,
                }}
              >
                <span className={styles.specialFlag}>{item.flag}</span>

                <div>
                  <h3 className={styles.specialCountry}>{item.country}</h3>
                  <p className={styles.specialText}>{item.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.warningBox}>
            <span className={styles.warningIcon}>!</span>
            <div>
              <strong>TSYP XIV Travel Reminder</strong>
              <p>
                This section is designed to help international participants plan
                their trip to Tunisia early. Visa and entry rules may change
                depending on nationality, passport type, travel purpose, or
                embassy updates. Before booking your flight or finalizing your
                documents, please confirm your exact situation with the nearest
                Tunisian embassy or consulate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function HowToApplySection() {
  return (
    <section className={styles.applySection}>
      <div className={styles.sectionGlowLeft} />

      <div className={styles.container}>
        <motion.div
          className={styles.applyHeader}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLineLeft} />
            <span className={styles.eyebrowText}>TSYP Travel Path</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.sectionTitle}>
            Prepare Your{" "}
            <span className={styles.outlinedText}>Journey to Tunisia</span>
          </h2>

          <p className={styles.applySubtitle}>
            A TSYP-focused guide to help international participants organize
            their travel documents, visa support needs, and final checks before
            arriving in Hammamet.
          </p>
        </motion.div>

        <div className={styles.travelGuideGrid}>
          {TSYP_TRAVEL_STEPS.map((step, index) => (
            <motion.article
              key={step.number}
              className={styles.travelStepCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: index * 0.08,
              }}
            >
              <div className={styles.cardTopLine} />

              <div className={styles.travelStepHeader}>
                <span className={styles.travelStepNumber}>{step.number}</span>
                <span className={styles.travelStepLabel}>{step.label}</span>
              </div>

              <h3 className={styles.travelStepTitle}>{step.title}</h3>

              <p className={styles.travelStepText}>{step.text}</p>

              <div className={styles.travelChecklist}>
                {step.points.map((point) => (
                  <div key={point} className={styles.travelChecklistItem}>
                    <span className={styles.travelCheckIcon}>✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.travelNotice}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
        >
          <span className={styles.travelNoticeBadge}>Important</span>

          <p>
            TSYP XIV can guide participants with event-related documentation, but
            visa approval remains the responsibility of the official Tunisian
            embassy or consulate. Always verify the latest requirements before
            making final travel decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function VisaRequirementsPage() {
  return (
    <main className={styles.page}>
      <VisaHero />
      <VisaChecker />
      <VisaFreeEntrySection />
      <SpecialDurationSection />
      <HowToApplySection />
    </main>
  );
}