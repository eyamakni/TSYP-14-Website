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

const VISA_ON_ARRIVAL_COUNTRIES = [
  { flag: "🇲🇾", name: "Malaysia" },
  { flag: "🇹🇭", name: "Thailand" },
  { flag: "🇮🇩", name: "Indonesia" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🌍", name: "And others..." },
];

const REQUIRED_DOCUMENTS = [
  {
    title: "Valid Passport",
    text: "Valid for at least 6 months beyond your stay",
  },
  {
    title: "Hotel Booking",
    text: "Proof of accommodation for your entire stay",
  },
  {
    title: "Return Ticket",
    text: "Confirmed flight reservation showing departure",
  },
  {
    title: "Sufficient Funds",
    text: "Cash or bank statements showing financial capability",
  },
];

const EMBASSY_STEPS = [
  {
    number: "1",
    title: "Find Embassy",
    text: "Locate your nearest Tunisian diplomatic mission",
  },
  {
    number: "2",
    title: "Prepare Documents",
    text: "Gather all required application materials",
    details: [
      "Completed visa application form",
      "Recent passport-sized photos",
      "Flight itinerary & hotel booking",
      "Invitation letter from conference organizers",
      "Bank statements as proof of funds",
    ],
  },
  {
    number: "3",
    title: "Submit Application",
    text: "Apply in person or by mail depending on embassy requirements",
  },
  {
    number: "4",
    title: "Pay Fee",
    text: "Visa fees vary by nationality and visa type",
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
              <h2 className={styles.specialTitle}>Special Duration Cases</h2>
              <p className={styles.cardSubtitle}>
                Extended stay periods for select countries.
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
              <strong>Note:</strong>
              <p>
                Always verify current requirements with the Tunisian embassy or
                consulate in your country.
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
            <span className={styles.eyebrowText}>Visa Application</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h2 className={styles.sectionTitle}>
            How to Apply for a{" "}
            <span className={styles.outlinedText}>Tunisian Visa</span>
          </h2>

          <p className={styles.applySubtitle}>
            Choose the application method that best suits your nationality and
            travel plans.
          </p>
        </motion.div>

        <div className={styles.applyGrid}>
          <motion.article
            className={styles.applyCard}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className={styles.cardTopLine} />

            <div className={styles.applyCardHeader}>
              <div className={styles.applyIconBox}>
                <PlaneIcon />
              </div>

              <div>
                <h3 className={styles.applyTitle}>
                  Option 1: Visa on Arrival
                </h3>
                <p className={styles.applyIntro}>
                  Some nationalities can obtain a visa upon arrival at
                  Tunis-Carthage Airport or other entry points.
                </p>
              </div>
            </div>

            <div className={styles.eligibleBox}>
              <h4 className={styles.miniTitle}>
                Eligible countries include:
              </h4>

              <div className={styles.arrivalCountryList}>
                {VISA_ON_ARRIVAL_COUNTRIES.map((country) => (
                  <span key={country.name} className={styles.arrivalPill}>
                    <span>{country.flag}</span>
                    {country.name}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.docsList}>
              <h4 className={styles.miniTitle}>Required Documents</h4>

              {REQUIRED_DOCUMENTS.map((doc) => (
                <div key={doc.title} className={styles.docRow}>
                  <span className={styles.docIcon}>▣</span>
                  <div>
                    <strong>{doc.title}</strong>
                    <p>{doc.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className={styles.applyCard}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div className={styles.cardTopLine} />

            <div className={styles.applyCardHeader}>
              <div className={`${styles.applyIconBox} ${styles.blueIcon}`}>
                <BuildingIcon />
              </div>

              <div>
                <h3 className={styles.applyTitle}>
                  Option 2: Embassy Application
                </h3>
                <p className={styles.applyIntro}>
                  If your country is not eligible for visa-free or
                  visa-on-arrival entry, apply in advance.
                </p>
              </div>
            </div>

            <div className={styles.embassySteps}>
              <h4 className={styles.miniTitle}>Application Process</h4>

              {EMBASSY_STEPS.map((step) => (
                <div key={step.number} className={styles.embassyStep}>
                  <span className={styles.embassyNumber}>{step.number}</span>

                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>

                    {step.details && (
                      <ul className={styles.stepDetails}>
                        {step.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
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