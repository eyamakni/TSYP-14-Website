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
          <span className={styles.eyebrowText}>For Travelers to Tunisia</span>
          <span className={styles.eyebrowLineRight} />
        </div>

        <h1 className={styles.title}>
          <span className={styles.solidText}>Visa </span>
          <span className={styles.gradientText}>Info</span>
        </h1>

        <p className={styles.heroText}>
          Find out whether you may need a visa to travel to Tunisia, explore
          visa-free entry information, and prepare the documents required for
          your participation in TSYP XIV.
        </p>
      </motion.div>
    </section>
  );
}
function VisaPolicySection() {
  return (
    <section className={styles.policySection}>
      <div className={styles.sectionGlow} />

      <motion.div
        className={styles.policyCard}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.75, ease: EASE }}
      >
        <span className={styles.policyLabel}>Before You Travel</span>

        <h2 className={styles.policyTitle}>Visa Policy for Tunisia</h2>

        <p className={styles.policyText}>
          Entry requirements for Tunisia depend on your nationality, passport
          type, purpose of travel, and intended duration of stay. Some travelers
          may enter Tunisia without a visa for a limited period, while others
          must obtain authorization from a Tunisian embassy or consulate before
          departure.
        </p>

        <div className={styles.policyNotice}>
          <span className={styles.policyNoticeIcon}>!</span>

          <div>
            <strong>Important travel notice</strong>

            <p>
              The information presented on this page is intended as an initial
              guide for TSYP XIV participants. Before booking flights or making
              final travel arrangements, verify the latest requirements with the
              Tunisian embassy or consulate responsible for your country of
              residence.
            </p>
          </div>
        </div>
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
            <span className={styles.eyebrowText}>Visa Preparation</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.sectionTitle}>
  Prepare Your{" "}
  <span className={styles.outlinedText}>Visa Application</span>
</h2>
<p className={styles.applySubtitle}>
  Follow these steps to verify your entry status, prepare your participant
  file, request event-related documentation, and complete your application
  early.
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
const IMPORTANT_VISA_NOTES = [
  {
    number: "01",
    title: "Verify Requirements Early",
    text:
      "All TSYP XIV participants are responsible for checking and fulfilling their own entry and visa requirements before traveling to Tunisia.",
  },
  {
    number: "02",
    title: "Regulations Vary by Nationality",
    text:
      "Visa procedures, supporting documents, permitted stay durations, fees, and processing times can differ depending on nationality and passport type.",
  },
  {
    number: "03",
    title: "Begin the Process Early",
    text:
      "Participants who require a visa should begin the application process as early as possible to avoid delays or last-minute travel complications.",
  },
];

function ImportantVisaNotesSection() {
  return (
    <section className={styles.importantNotesSection}>
      <div className={styles.sectionGlowLeft} />

      <div className={styles.container}>
        <motion.div
          className={styles.applyHeader}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLineLeft} />
            <span className={styles.eyebrowText}>Participant Guidance</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.sectionTitle}>
            Important <span className={styles.outlinedText}>Visa Notes</span>
          </h2>

          <p className={styles.applySubtitle}>
            Please review these points carefully before completing your travel
            arrangements for TSYP XIV.
          </p>
        </motion.div>

        <div className={styles.importantNotesGrid}>
          {IMPORTANT_VISA_NOTES.map((note, index) => (
            <motion.article
              key={note.number}
              className={styles.importantNoteCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: EASE,
                delay: index * 0.08,
              }}
            >
              <span className={styles.importantNoteNumber}>
                {note.number}
              </span>

              <h3 className={styles.importantNoteTitle}>{note.title}</h3>

              <p className={styles.importantNoteText}>{note.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.invitationLetterCard}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
        >
          <div className={styles.invitationLetterHeader}>
            <span className={styles.invitationLetterIcon}>✦</span>

            <div>
              <span className={styles.invitationLetterLabel}>
                TSYP XIV Documentation
              </span>

              <h3 className={styles.invitationLetterTitle}>
                Conference Invitation Letter
              </h3>
            </div>
          </div>

          <p className={styles.invitationLetterText}>
            After your registration fees have been successfully paid and your
            participation has been confirmed, an official conference invitation
            letter may be made available to support your visa application.
          </p>

          <div className={styles.organizerNotice}>
            <strong>Please note</strong>

            <p>
              The invitation letter confirms participation in TSYP XIV. It does
              not guarantee that a visa will be issued. Conference organizers
              cannot submit individual visa applications, influence processing
              times, contact embassies on a participant&apos;s behalf, or
              intervene in decisions made by diplomatic authorities.
            </p>
          </div>
        </motion.div>

        <motion.a
          href="https://www.diplomatie.gov.tn/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.embassyButton}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          Find Tunisian Embassies &amp; Consulates
          <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </section>
  );
}
export default function VisaRequirementsPage() {
  return (
    <main className={styles.page}>
      <VisaHero />
      <VisaPolicySection />
      <VisaChecker />
      <VisaFreeEntrySection />
      <SpecialDurationSection />
      <HowToApplySection />
      <ImportantVisaNotesSection />
    </main>
  );
}