"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./technical.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type ProgramItem = {
  time: string;
  title: string;
};

type ProgramDay = {
  id: string;
  label: string;
  dateLabel: string;
  title: string;
  items: ProgramItem[];
};

const PROGRAM_DAYS: ProgramDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    dateLabel: "21 December 2026",
    title: "Arrival, Opening & Networking",
    items: [
      {
        time: "8:00 AM - 12:00 PM",
        title: "Check-in & Booth Setup",
      },
      {
        time: "1:30 PM - 5:00 PM",
        title: "Opening Ceremony",
      },
      {
        time: "5:00 PM - 5:30 PM",
        title: "Networking Break",
      },
      {
        time: "5:30 PM - 7:30 PM",
        title: "Job Fair",
      },
      {
        time: "7:30 PM - 9:30 PM",
        title: "Dinner",
      },
      {
        time: "9:30 PM - 12:00 AM",
        title: "Networking Night & Surprise Challenge",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    dateLabel: "22 December 2026",
    title: "Workshops, Challenges & Awards",
    items: [
      {
        time: "7:00 AM - 8:30 AM",
        title: "Breakfast",
      },
      {
        time: "9:00 AM - 10:30 AM",
        title: "Workshops, Technical Challenge Pitching & Noosphere Forum",
      },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Networking Break",
      },
      {
        time: "11:00 AM - 12:30 PM",
        title: "Workshops, Technical Challenge Pitching & Noosphere Forum",
      },
      {
        time: "12:30 PM - 2:00 PM",
        title: "Networking Break",
      },
      {
        time: "2:30 PM - 4:00 PM",
        title: "Workshops, Technical Challenge Pitching & Noosphere Forum",
      },
      {
        time: "4:00 PM - 4:30 PM",
        title: "Networking Break",
      },
      {
        time: "4:30 PM - 6:00 PM",
        title: "Workshops, Technical Challenge Pitching & Noosphere Forum",
      },
      {
        time: "6:00 PM - 7:00 PM",
        title: "Transition Break",
      },
      {
        time: "7:00 PM - 8:30 PM",
        title: "Dinner",
      },
      {
        time: "9:00 PM - 12:00 AM",
        title: "Awards Ceremony",
      },
    ],
  },
  {
    id: "day-3",
    label: "Day 3",
    dateLabel: "23 December 2026",
    title: "Finals, Voting & Closing",
    items: [
      {
        time: "7:00 AM - 9:00 AM",
        title: "Breakfast & Check-out",
      },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Tunisia Section Awards",
      },
      {
        time: "10:30 AM - 12:30 PM",
        title: "Three Finalists Pitching, Q&A & Voting",
      },
      {
        time: "12:30 PM - 12:50 PM",
        title: "Winner Announcement",
      },
      {
        time: "12:50 PM - 1:00 PM",
        title: "Closing Word",
      },
    ],
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

function ClockIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProgramCard({
  item,
  index,
}: {
  item: ProgramItem;
  index: number;
}) {
  return (
    <motion.article
      className={styles.programCard}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.55,
        ease: EASE,
        delay: index * 0.045,
      }}
    >
      <div className={styles.cardTime}>
        <ClockIcon />
        <span>{item.time}</span>
      </div>

      <h3 className={styles.cardTitle}>{item.title}</h3>
    </motion.article>
  );
}

export default function TechnicalProgramPage() {
  const [activeDayId, setActiveDayId] = useState(PROGRAM_DAYS[0].id);

  const activeDay =
    PROGRAM_DAYS.find((day) => day.id === activeDayId) ?? PROGRAM_DAYS[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.ambientGlowOne} />
        <div className={styles.ambientGlowTwo} />
        <div className={styles.gridPattern} />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLineLeft} />
            <span className={styles.eyebrowText}>TSYP XIV</span>
            <span className={styles.eyebrowLineRight} />
          </div>

          <h1 className={styles.title}>
            <span className={styles.solidText}>Technical </span>
            <span className={styles.outlinedText}>Program</span>
          </h1>

          <p className={styles.subtitle}>
            A three-day journey combining ceremonies, workshops, technical
            challenges, networking moments, and the Noosphere Forum.
          </p>

          <div className={styles.eventInfo}>
            <div className={styles.eventInfoItem}>
              <CalendarIcon />
              <span>21–23 December 2026</span>
            </div>

            <div className={styles.eventInfoItem}>
              <span className={styles.infoDot} />
              <span>Medina Congress Center, Yasmine Hammamet, Tunisia</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.programSection}>
        <div className={styles.programContainer}>
          <motion.div
  className={styles.programNotice}
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: EASE }}
>
  <strong>Program is subject to change.</strong> The final version of the
  program will be available on <strong>30 November 2026</strong>.
</motion.div>
          <motion.div
            className={styles.dayTabs}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          >
            {PROGRAM_DAYS.map((day) => (
              <button
                key={day.id}
                type="button"
                className={`${styles.dayButton} ${
                  activeDayId === day.id ? styles.dayButtonActive : ""
                }`}
                onClick={() => setActiveDayId(day.id)}
              >
                <span className={styles.dayLabel}>{day.label}</span>
                <span className={styles.dayDate}>{day.dateLabel}</span>
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay.id}
              className={styles.scheduleLayout}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <aside className={styles.daySummary}>
                <div className={styles.summaryTopLine} />

                <span className={styles.summaryLabel}>{activeDay.label}</span>

                <h2 className={styles.summaryTitle}>{activeDay.title}</h2>

                <p className={styles.summaryDate}>{activeDay.dateLabel}</p>
              </aside>

              <div className={styles.timeline}>
                <div className={styles.timelineLine} />

                {activeDay.items.map((item, index) => (
                  <ProgramCard
                    key={`${item.time}-${item.title}`}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        
        </div>
      </section>
    </main>
  );
}