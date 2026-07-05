"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  aotnTeam,
  executiveCommittee,
  itTeam,
  mediaTeam,
  secretaryTeam,
  sponsoringTeam,
} from "./data";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ─────────────────────────────────────
   DATA
───────────────────────────────────── */

interface Member {
  name: string;
  position: string;
  email: string;
  phone: string;
  photo: string;
}

interface TeamGroup {
  title: string;
  members: Member[];
}

const TEAMS: TeamGroup[] = [
  { title: "Executive Committee", members: executiveCommittee },
  { title: "Secretary Team", members: secretaryTeam },
  { title: "Architects Of The Noosphere Committee (AOTN)", members: aotnTeam },
  { title: "Media Team", members: mediaTeam },
  { title: "IT Team", members: itTeam },
  { title: "Sponsoring Team", members: sponsoringTeam },
];

/* ─────────────────────────────────────
   INTERACTIVE MEMBER CARD
───────────────────────────────────── */

function MemberCard({
  member,
  index,
  inView,
}: {
  member: Member;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.05 + index * 0.04, duration: 0.5, ease: EASE }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#0a0510",
        border: `1px solid ${
          hovered ? "rgba(155,48,255,0.35)" : "rgba(255,255,255,0.04)"
        }`,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(155,48,255,0.15), 0 0 0 1px rgba(155,48,255,0.15)"
          : "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <motion.img
          src={member.photo}
          alt={member.name}
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to top, #0a0510 0%, rgba(10,5,16,0.4) 35%, transparent 60%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "4px 10px",
            borderRadius: "6px",
            background: hovered
              ? "linear-gradient(135deg, rgba(155,48,255,0.85), rgba(124,58,237,0.8))"
              : "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${
              hovered ? "rgba(200,132,252,0.4)" : "rgba(255,255,255,0.08)"
            }`,
            fontSize: "8px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#ffffff",
            transition: "all 0.3s ease",
          }}
        >
          {member.position}
        </div>
      </div>

      <div style={{ padding: "14px 14px 16px" }}>
        <h3
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 6px",
            fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            lineHeight: 1.3,
          }}
        >
          {member.name}
        </h3>

        <a
          href={`mailto:${member.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "9px",
            color: "rgba(155,48,255,0.5)",
            textDecoration: "none",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.3s ease",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4l-10 7L2 4" />
          </svg>
          {member.email}
        </a>

        <br />

        <a
          href={`tel:${member.phone}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "9px",
            color: "rgba(155,48,255,0.5)",
            textDecoration: "none",
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            opacity: hovered ? 1 : 0.5,
            transition: "opacity 0.3s ease",
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.13.86.33 1.7.59 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 6 6l.67-1.2a2 2 0 0 1 2.11-.45c.8.26 1.64.46 2.5.59A2 2 0 0 1 22 16.92z" />
          </svg>
          {member.phone}
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   PAGE
───────────────────────────────────── */

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <>
      <main style={{ background: "#000000", minHeight: "100vh" }}>
        <section
          ref={heroRef}
          style={{
            position: "relative",
            padding: "120px 24px 40px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(155,48,255,0.5))",
                }}
              />

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "rgba(155,48,255,0.6)",
                }}
              >
                TSYP 14 · Organisation Committee
              </span>

              <span
                style={{
                  width: "32px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(155,48,255,0.5), transparent)",
                }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              margin: 0,
              fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            }}
          >
            <span style={{ color: "#ffffff" }}>The Minds </span>
            <span
              style={{
                background: "linear-gradient(135deg, #9b30ff 20%, #c084fc 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shaping It
            </span>
          </motion.h1>
        </section>

        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(155,48,255,0.2) 50%, transparent)",
          }}
        />

        <section
          ref={teamRef}
          style={{
            padding: "80px 24px 100px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              left: "-5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(155,48,255,0.04) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {TEAMS.map((team) => (
              <div key={team.title} style={{ marginBottom: "60px" }}>
                {team.title !== "Executive Committee" && (
                  <motion.h2
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(155,48,255,0.75)",
                      margin: "0 0 22px 2px",
                      fontFamily:
                        "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "28px",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, rgba(155,48,255,0.8), transparent)",
                      }}
                    />

                    {team.title}

                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "rgba(155,48,255,0.8)",
                        boxShadow: "0 0 12px rgba(155,48,255,0.4)",
                      }}
                    />
                  </motion.h2>
                )}

                <div
                  className="about-team-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "16px",
                  }}
                >
                  {team.members.map((member, i) => (
                    <MemberCard
                      key={member.name}
                      member={member}
                      index={i}
                      inView={teamInView}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}