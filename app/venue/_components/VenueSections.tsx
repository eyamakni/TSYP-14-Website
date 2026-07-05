"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "../venue.module.css";
import {
  CURRENCIES,
  DISCOVER_TAGS,
  EASE,
  FLOATING_FLAGS,
  TUNISIA_GALLERY,
  VENUE_FEATURES,
  VENUE_MAPS,
  VISA_FREE,
  type VenueFeatureIcon,
} from "../venueData";

function FeatureIcon({ type }: { type: VenueFeatureIcon }) {
  const commonProps = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: styles.iconPurple,
  };

  switch (type) {
    case "capacity":
      return (
        <svg {...commonProps}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
      );

    case "halls":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );

    case "workshops":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );

    case "wifi":
      return (
        <svg {...commonProps}>
          <path d="M5 12.55a11 11 0 0114.08 0" />
          <path d="M1.42 9a16 16 0 0121.16 0" />
          <path d="M8.53 16.11a6 6 0 016.95 0" />
          <circle cx="12" cy="20" r="1" />
        </svg>
      );

    case "parking":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 17V7h4a3 3 0 010 6H9" />
        </svg>
      );

    case "catering":
      return (
        <svg {...commonProps}>
          <path d="M18 8h1a4 4 0 010 8h-1" />
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      );
  }
}

function LocationIcon() {
  return (
    <svg
      className={styles.iconSmall}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className={styles.iconSmall}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ExternalIcon() {
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
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      className={styles.arrowIcon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      className={styles.arrowIcon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg
      className={styles.checkIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function XCircle() {
  return (
    <svg
      className={styles.xIcon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      className={styles.alertIcon}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className={styles.eyebrow}>
      <span className={styles.eyebrowLineLeft} />
      <span className={styles.eyebrowText}>{label}</span>
      <span className={styles.eyebrowLineRight} />
    </div>
  );
}

function SectionTitle({
  solid,
  outlined,
}: {
  solid: string;
  outlined: string;
}) {
  return (
    <h2 className={styles.sectionTitle}>
      <span>{solid} </span>
      <span className={styles.outlinedText}>{outlined}</span>
    </h2>
  );
}

function GradientDivider() {
  return <div className={styles.gradientDivider} />;
}

export function VenueHero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className={`${styles.section} ${styles.hero}`}>
      <div className={styles.heroBackground} />
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroIntro}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <SectionEyebrow label="TSYP 14 · Venue" />

            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Medina</span>
              <span className={styles.heroTitleLine}>Congress</span>
              <span
                className={`${styles.heroTitleLine} ${styles.gradientText}`}
              >
                Center
              </span>
            </h1>

            <motion.div
              className={styles.heroDivider}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            />

            <div className={styles.heroMeta}>
              <div className={styles.metaItem}>
                <LocationIcon /> Yasmine Hammamet, Tunisia
              </div>

              <div className={styles.metaItem}>
                <CalendarIcon /> 21-23 December 2026
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Medina+Congress+Center+Yasmine+Hammamet"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 28px rgba(155,48,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Open in Maps <ExternalIcon />
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.heroImageWrap}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          >
            <div className={styles.heroImageGlow} />

            <div className={`${styles.imageCard} ${styles.heroImageCard}`}>
             <Image
                src="/venue/venue-hero.webp"
                alt="Medina Congress Center"
                fill
                priority
                sizes="(max-width: 767px) 100vw, 50vw"
                className={styles.imageCover}
/>

              <div className={styles.imageOverlay} />
              <div className={styles.imageBottomGlow} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


export function VenueMap() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeMap, setActiveMap] = useState(0);

  return (
    <section ref={ref} className={`${styles.section} ${styles.mapSection}`}>
      <div className={styles.sectionGlowRight} />

      <div className={styles.sectionHeaderCompact}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <SectionEyebrow label="Floor Plans" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
        >
          <SectionTitle solid="Venue" outlined="Map" />
        </motion.div>
      </div>

      <motion.div
        className={styles.mapButtons}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
      >
        {VENUE_MAPS.map((map, index) => (
          <button
            key={map.label}
            onClick={() => setActiveMap(index)}
            className={`${styles.mapButton} ${
              activeMap === index ? styles.mapButtonActive : ""
            }`}
          >
            {map.label}
          </button>
        ))}
      </motion.div>

      <motion.div
        className={styles.mapContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
      >
        <div className={styles.mapCard}>
          <AnimatePresence mode="wait">
          <motion.div
  key={activeMap}
  className={styles.mapImageWrap}
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.98 }}
  transition={{ duration: 0.4, ease: EASE }}
>
  <Image
    src={VENUE_MAPS[activeMap].src}
    alt={VENUE_MAPS[activeMap].label}
    width={1200}
    height={800}
    loading="lazy"
    sizes="(max-width: 767px) 100vw, 1000px"
    className={styles.mapImage}
  />
</motion.div>
          </AnimatePresence>

          <div className={styles.topGlow} />
        </div>

        <div className={styles.arrowButtons}>

        </div>
      </motion.div>
    </section>
  );
}

export function DiscoverTunisia() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.discoverSection}`}
    >
      <GradientDivider />
      <div className={styles.sectionGlowLeft} />

      <div className={styles.contentContainer}>
        <div className={`${styles.twoColumnGrid} ${styles.twoColumnGridStart}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <SectionEyebrow label="Discover" />

            <h2 className={styles.largeTitle}>
              <span>Tunisia </span>
              <span className={styles.gradientText}>تونس</span>
            </h2>

            <motion.div
              className={styles.textDivider}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            />

            <p className={styles.paragraph}>
              Tunisia offers stunning beaches and vast deserts. Explore ancient
              sites like <strong>Carthage</strong>, stroll through vibrant
              Medinas, or unwind by the sea. The culture blends{" "}
              <strong>Arab, Berber, and French</strong> influences. Enjoy
              delicious food, unique architecture, and lively festivals.
            </p>

            <div className={styles.tagList}>
              {DISCOVER_TAGS.map((tag, index) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${
                    index < 3 ? styles.tagStrong : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <div className={styles.mapLabel}>
              <span className={styles.eyebrowLineLeft} />
              <span className={styles.eyebrowText}>Find Us Here</span>
            </div>

            <div className={styles.mapEmbedCard}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.5!2d10.56!3d36.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI0JzAwLjAiTiAxMMKwMzMnMzYuMCJF!5e0!3m2!1sen!2stn!4v1"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue location"
              />

              <div className={styles.topGlow} />
            </div>

            <a
              href="https://maps.google.com/?q=Medina+Congress+Center+Yasmine+Hammamet+Tunisia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              Open in Google Maps <ExternalIcon />
            </a>
          </motion.div>
        </div>
      </div>

      <div className={styles.galleryWrap}>
        <div className={styles.galleryMask}>
          <div className={styles.galleryTrack}>
            {[...TUNISIA_GALLERY, ...TUNISIA_GALLERY].map((src, index) => (
              <div key={`${src}-${index}`} className={styles.galleryCard}>
               <Image
  src={src}
  alt="Tunisia"
  fill
  loading="lazy"
  sizes="(max-width: 767px) 280px, 380px"
  className={styles.imageCover}
/>

                <div className={styles.galleryTopGlow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisaChecker() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<null | boolean>(null);
  const [checkedCountry, setCheckedCountry] = useState("");

  const suggestions =
    query.length >= 2
      ? VISA_FREE.filter((country) =>
          country.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5)
      : [];

  const handleCheck = () => {
    if (!query.trim()) return;

    const match = VISA_FREE.find(
      (country) => country.toLowerCase() === query.trim().toLowerCase()
    );

    setCheckedCountry(query.trim());
    setResult(Boolean(match));
  };

  return (
    <section ref={ref} className={`${styles.section} ${styles.visaSection}`}>
      <GradientDivider />
      <div className={styles.sectionGlowRight} />

      <div className={`${styles.contentContainer} ${styles.narrowContainer}`}>
        <div className={`${styles.twoColumnGrid} ${styles.twoColumnGridStart}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <SectionEyebrow label="Guidelines" />

            <h2 className={styles.mediumTitle}>
              <span>Visa Requirements for</span>
              <br />
              <span className={styles.gradientText}>Visiting Tunisia</span>
            </h2>

            <p className={styles.paragraphSmall}>
              Find out if you need a visa to travel to Tunisia or qualify for
              visa-free entry.
            </p>

            <div className={styles.formWrap}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setResult(null);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleCheck();
                  }}
                  placeholder="Start typing your country..."
                  className={styles.textInput}
                />

                <button onClick={handleCheck} className={styles.checkButton}>
                  Check
                </button>
              </div>

              {suggestions.length > 0 && result === null && (
                <div className={styles.suggestions}>
                  {suggestions.map((country) => (
                    <button
                      key={country}
                      onClick={() => {
                        setQuery(country);
                        setResult(null);
                      }}
                      className={styles.suggestionButton}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {result !== null && (
                <motion.div
                  key={String(result)}
                  className={`${styles.resultBox} ${
                    result ? styles.resultSuccess : styles.resultError
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {result ? <CheckCircle /> : <XCircle />}

                  <span className={styles.resultText}>
                    {result
                      ? `${checkedCountry} citizens enjoy visa-free entry to Tunisia.`
                      : `${checkedCountry} citizens may need a visa. Check with the Tunisian embassy.`}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.notes}>
              <div className={styles.note}>
                <div className={styles.noteIcon}>
                  <AlertIcon />
                </div>

                <p className={styles.noteText}>
                  Always check with the Tunisian embassy or consulate in your
                  country for the most up-to-date visa information before
                  planning your trip.
                </p>
              </div>

              <div className={styles.note}>
                <div className={styles.noteIcon}>
                  <AlertIcon />
                </div>

                <p className={styles.noteText}>
                  The TSYP 14 organizers cannot assist with individual visa
                  applications. However, they can provide an invitation letter to
                  support your visa application.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.flagOrbit}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <div className={styles.flagOrbitInner}>
              <div className={styles.orbitCircleLarge} />
              <div className={styles.orbitCircleMedium} />
              <div className={styles.orbitCircleDashed} />

              <div className={styles.globeIcon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(155,48,255,0.7)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>

              {FLOATING_FLAGS.map((flag, index) => (
                <motion.div
                  key={flag.code}
                  className={styles.flagCard}
                  style={{ left: flag.x, top: flag.y }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                 <img
  src={`https://flagcdn.com/w80/${flag.code}.png`}
  alt={flag.name}
  className={styles.flagImage}
  loading="lazy"
/>

                  <span className={styles.flagCode}>{flag.code}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CurrencyConverter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [from, setFrom] = useState("USD");
  const [amount, setAmount] = useState("");

  const converted = amount
    ? (parseFloat(amount) * (CURRENCIES[from]?.rate || 0)).toFixed(2)
    : "0.00";

  return (
    <section
      ref={ref}
      className={`${styles.section} ${styles.currencySection}`}
    >
      <GradientDivider />

      <div className={`${styles.contentContainer} ${styles.narrowContainer}`}>
        <div className={styles.twoColumnGrid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <SectionEyebrow label="Currency" />

            <h2 className={`${styles.mediumTitle} ${styles.currencyTitle}`}>
              <span>Dinar </span>
              <span className={styles.gradientText}>دينار</span>
            </h2>

            <p className={styles.paragraphSmall}>
              The national currency is the{" "}
              <strong>Tunisian Dinar (TND)</strong>. The converter below uses
              static rates for display purposes.
            </p>

            <div className={styles.currencyControls}>
              <span className={styles.currencyLabel}>From</span>

              <select
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                className={styles.selectInput}
              >
                {Object.entries(CURRENCIES).map(([code, { name }]) => (
                  <option key={code} value={code}>
                    {name} ({code})
                  </option>
                ))}
              </select>

              <span className={styles.currencyLabel}>To</span>

              <div className={styles.tndBox}>Tunisian Dinar (TND)</div>
            </div>

            <div className={styles.amountBox}>
              <input
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder="Enter amount"
                className={styles.amountInput}
              />
            </div>

            <motion.div animate={{ opacity: 1 }} className={styles.convertedAmount}>
              <span className={styles.convertedLabel}>Converted amount:</span>
              <span className={styles.convertedValue}>{converted}</span>
              <span className={styles.convertedCurrency}>TND</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.currencyImageWrap}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
          >
            <div className={`${styles.imageCard} ${styles.currencyImageCard}`}>
              <Image
  src="/venue/tnd-bills.png"
  alt="Tunisian Dinar banknotes"
  fill
  loading="lazy"
  sizes="(max-width: 767px) 100vw, 460px"
  className={styles.imageCover}
/>

              <div className={styles.banknoteOverlay} />
              <div className={styles.topGlow} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

