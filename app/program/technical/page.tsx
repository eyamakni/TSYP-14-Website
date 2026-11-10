"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./technical.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

type Session = {
  title: string;
  room: string;
  speaker?: string;
  tag?: string;
};

type ProgramItem = {
  time: string;
  title: string;
  sessions?: Session[];
};

type ProgramDay = {
  id: string;
  label: string;
  dateLabel: string;
  title: string;
  items: ProgramItem[];
};

/* ------------------------------------------------------------------ */
/*  Day 2 – parallel sessions (source: room/session planning PDF)       */
/*  Edit titles / speakers / rooms here only.                           */
/* ------------------------------------------------------------------ */

const SLOT_1: Session[] = [
  { title: "Architects of the Noosphere Forum (1/4)", room: "Hannibal Congress Room", tag: "AOTN" },
  { title: "Human Library (1/2)", room: "Cesar 1", tag: "Human Library" },
  { title: "MLOps", room: "Cesar 4", speaker: "Mrs. Imen Selmi", tag: "Workshop" },
  {
    title: "ENERWISE and the Energy Optimization – Carbon Accounting",
    room: "Cesar 6",
    speaker: "Pr. Khaled Mhamdi",
    tag: "Workshop",
  },
  {
    title: "From Concept to Connected Embedded Platform: Hardware & Wireless Connectivity",
    room: "Cesar 7",
    speaker: "Mr.Amine Guesmi",
    tag: "Workshop",
  },
  { title: "CS Symposium (1/2)", room: "Nuptune", tag: "Workshop" },
  { title: "ODC", room: "Cesar Amphitheatre", tag: "Masterclass" },
  { title: "SPS Session", room: "Palmier", tag: "Workshop" },
  {
    title: "Agentic AI for Software Development",
    room: "Figuier",
    speaker: "Mr. Ghassen El Abed",
    tag: "Workshop",
  },
  {
    title: "Profiling (Médis Lab)",
    room: "Laurier",
    speaker: "Dr. Salim Ouertani",
    tag: "Workshop",
  },
  { title: "IES (1/2)", room: "Oliver", tag: "Forum" },
  { title: "AWS User Group Tunisia (1/4)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "NVIDIA (1/3)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "IES Industrial Visit (1/2)", room: "First Location", tag: "Industrial Visit" },
  { title: "Industrial Visit (1/2)", room: "Second Location", tag: "Industrial Visit" },

  { title: "TBD : Technical Challenge 1", room: "Cesar 2", tag: "Challenge" },
  { title: "TBD : Technical Challenge 2", room: "Cesar 3", tag: "Challenge" },
  { title: "TBD : Technical Challenge 5", room: "Cesar 8", tag: "Challenge" },
];

const SLOT_2: Session[] = [
  { title: "Architects of the Noosphere Forum (2/4)", room: "Hannibal Congress Room", tag: "AOTN" },
  { title: "Human Library (2/2)", room: "Cesar 1", tag: "Human Library" },
  { title: "TBD", room: "Cesar 4", speaker: "Mr. Hafedh Hichri", tag: "Workshop" },
  {
    title: "Computer Vision",
    room: "Cesar 6",
    speaker: "Mr. Yousri Kessentini",
    tag: "Workshop",
  },
  {
    title: "TBD",
    room: "Cesar 7",
    speaker: "Pr. Samarth Deo",
    tag: "Talk",
  },
  { title: "CS Symposium (2/2)", room: "Nuptune", tag: "Workshop" },
  { title: "TAC (1/2)", room: "Cesar Amphitheatre", tag: "Workshop" },
  { title: "CSF (1/3)", room: "Palmier", tag: "Workshop" },
  {
    title: "Agentic AI for Everyday Tasks",
    room: "Figuier",
    speaker: "Mr. Ghassen El Abed",
    tag: "Workshop",
  },
  {
    title: "Innovative Process (Médis Lab)",
    room: "Laurier",
    speaker: "Dr. Salim Ouertani",
    tag: "Workshop",
  },
  {
    title: "Building a Grid that can Take the Heat (IEEE YP Climate & Sustainability Subcommittee)",
    room: "Jasmin",
    speaker: "Mrs. Zainab Abdelrazzak",
    tag: "Workshop",
  },
  { title: "IES (2/2)", room: "Oliver", tag: "Forum" },
  { title: "AWS User Group Tunisia (2/4)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "NVIDIA (2/3)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "IES Industrial Visit (2/2)", room: "First Location", tag: "Industrial Visit" },
  { title: "Industrial Visit (2/2)", room: "Second Location", tag: "Industrial Visit" },

  { title: "TBD : Technical Challenge 3", room: "Cesar 2", tag: "Challenge" },
  { title: "TBD : Technical Challenge 4", room: "Cesar 3", tag: "Challenge" },
  { title: "TBD : Technical Challenge 9", room: "Cesar 8", tag: "Challenge" },
];

const SLOT_3: Session[] = [
  { title: "Architects of the Noosphere Forum (3/4)", room: "Hannibal Congress Room", tag: "AOTN" },
  { title: "SAC", room: "Cesar 1", tag: "Workshop" },
  {
    title: "Renewable Energy, Industry 4.0 and Sustainability",
    room: "Cesar 4",
    speaker: "Mrs. Hela Bouallegue",
    tag: "Workshop",
  },
  {
    title: "Initiation to Hardware Design",
    room: "Cesar 6",
    speaker: "Raef Ben Jeddou",
    tag: "Workshop",
  },
  {
    title: "Entrepreneurship TLG Session",
    room: "Cesar 7",
    tag: "Talk",
  },
  { title: "TAC (2/2)", room: "Cesar Amphitheatre", tag: "Workshop" },
  { title: "CSF (2/3)", room: "Palmier", tag: "Workshop" },
  {
    title: "Building an Autonomous Mobile Robot (1/2)",
    room: "Figuier",
    speaker: "Mr.Montassar Hamza",
    tag: "Workshop",
  },
  { title: "IT consulting : Agility in the age of AI", room: "Laurier", speaker: "Ghalia Ben Jemia", tag: "Workshop" },
  { title: "ODC", room: "Jasmin", tag: "Workshop" },
  { title: "AWS User Group Tunisia (3/4)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "NVIDIA (3/3)", room: "El Mehari Conference Room", tag: "Workshop" },

  { title: "TBD : Technical Challenge 6", room: "Cesar 2", tag: "Challenge" },
  { title: "TBD : Technical Challenge 7", room: "Cesar 3", tag: "Challenge" },
  { title: "TBD : Technical Challenge 8", room: "Cesar 8", tag: "Challenge" },
];
const SLOT_4: Session[] = [
  { title: "Architects of the Noosphere Forum (4/4)", room: "Hannibal Congress Room", tag: "AOTN" },
  { title: "IAS", room: "Cesar 1", tag: "Workshop" },
  { title: "AESS Mentorship (2h)", room: "Cesar 4", tag: "Mentorship" },
  { title: "TBD : TEMS", room: "Cesar 6", tag: "Workshop" },
  { title: "TBD : MTTS", room: "Cesar 7", speaker: "Mr. Zied Bouida", tag: "Workshop" },
  { title: "ODC", room: "Cesar Amphitheatre", tag: "Masterclass" },
  { title: "ODC", room: "Laurier", tag: "Workshop" },
  { title: "Gaming Workshop By ODC", room: "Jasmin", tag: "Workshop" },
  { title: "CSF (3/3)", room: "Palmier", tag: "Workshop" },
  { title: "Building an Autonomous Mobile Robot (2/2)", room: "Figuier", speaker: "Mr. Montassar Hamza", tag: "Workshop" },
  { title: "AWS User Group Tunisia (4/4)", room: "El Mehari Conference Room", tag: "Workshop" },
  { title: "YP Meetup", room: "Open Space",tag: "Meetup"},
  { title: "WIE Panel", room: "Oliver", tag: "Panel" },
  { title: "TBD : Technical Challenge 10", room: "Cesar 3", tag: "Challenge" },
];

const SESSIONS_TITLE = "Workshops, Technical Challenge Pitching & Noosphere Forum";

const PROGRAM_DAYS: ProgramDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    dateLabel: "14 December 2026",
    title: "Arrival, Opening & Networking",
    items: [
      { time: "8:00 AM - 12:00 PM", title: "Check-in & Booth Setup" },
      { time: "1:30 PM - 5:00 PM", title: "Opening Ceremony" },
      { time: "5:00 PM - 5:30 PM", title: "Networking Break" },
      { time: "5:30 PM - 7:30 PM", title: "Job Fair" },
      { time: "7:30 PM - 9:30 PM", title: "Dinner" },
      {
        time: "9:30 PM - 12:00 AM",
        title: "Networking Night & Surprise Challenge",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    dateLabel: "15 December 2026",
    title: "Workshops, Challenges & Awards",
    items: [
      { time: "7:00 AM - 8:30 AM", title: "Breakfast" },
      {
        time: "9:00 AM - 10:30 AM",
        title: SESSIONS_TITLE,
        sessions: SLOT_1,
      },
      { time: "10:30 AM - 11:00 AM", title: "Networking Break" },
      {
        time: "11:00 AM - 12:30 PM",
        title: SESSIONS_TITLE,
        sessions: SLOT_2,
      },
      { time: "12:30 PM - 2:00 PM", title: "Networking Break" },
      {
        time: "2:30 PM - 4:00 PM",
        title: SESSIONS_TITLE,
        sessions: SLOT_3,
      },
      { time: "4:00 PM - 4:30 PM", title: "Networking Break" },
      {
        time: "4:30 PM - 6:00 PM",
        title: SESSIONS_TITLE,
        sessions: SLOT_4,
      },
      { time: "6:00 PM - 7:00 PM", title: "Transition Break" },
      { time: "7:00 PM - 8:30 PM", title: "Dinner" },
      { time: "9:00 PM - 12:00 AM", title: "Awards Ceremony" },
    ],
  },
  {
    id: "day-3",
    label: "Day 3",
    dateLabel: "16 December 2026",
    title: "Finals, Voting & Closing",
    items: [
      { time: "7:00 AM - 9:00 AM", title: "Breakfast & Check-out" },
      { time: "9:30 AM - 10:30 AM", title: "Tunisia Section Awards" },
      {
        time: "10:30 AM - 12:30 PM",
        title: "Three Finalists Pitching, Q&A & Voting",
      },
      { time: "12:30 PM - 12:50 PM", title: "Winner Announcement" },
      { time: "12:50 PM - 1:00 PM", title: "Closing Word" },
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
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" />
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

function PinIcon() {
  return (
    <svg
      className={styles.pinIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SessionCard({ session }: { session: Session }) {
  return (
    <div className={styles.sessionCard}>
      {session.tag && <span className={styles.sessionTag}>{session.tag}</span>}
      <h4 className={styles.sessionTitle}>{session.title}</h4>
      <div className={styles.sessionRoom}>
        <PinIcon />
        <span>{session.room}</span>
      </div>
      {session.speaker && (
        <div className={styles.sessionSpeaker}>{session.speaker}</div>
      )}
    </div>
  );
}

function ProgramCard({
  item,
  index,
}: {
  item: ProgramItem;
  index: number;
}) {
  const hasSessions = !!item.sessions?.length;

  return (
    <motion.article
      className={`${styles.programCard} ${
        hasSessions ? styles.programCardWide : ""
      }`}
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

      {hasSessions && (
        <>
          <p className={styles.sessionCount}>
            {item.sessions!.length} parallel sessions
          </p>
          <div className={styles.sessionGrid}>
            {item.sessions!.map((session, i) => (
              <SessionCard
                key={`${session.room}-${session.title}-${i}`}
                session={session}
              />
            ))}
          </div>
        </>
      )}
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
              <span>14-16 December 2026</span>
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
            <strong>Program is subject to change.</strong> The final version of
            the program will be available on <strong>30 November 2026</strong>.
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