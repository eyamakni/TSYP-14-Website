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

const EASE = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number,
];

const CONTACT_EMAIL = "tsyp@ieee.tn";

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
  {
    title: "Executive Committee",
    members: executiveCommittee,
  },
  {
    title: "Secretary Team",
    members: secretaryTeam,
  },
  {
    title: "Architects Of The Noosphere Committee (AOTN)",
    members: aotnTeam,
  },
  {
    title: "Media Team",
    members: mediaTeam,
  },
  {
    title: "IT Team",
    members: itTeam,
  },
  {
    title: "Sponsoring Team",
    members: sponsoringTeam,
  },
];

/* ─────────────────────────────────────
   ICONS
───────────────────────────────────── */

function MailIcon({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.13.86.33 1.7.59 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 6 6l.67-1.2a2 2 0 0 1 2.11-.45c.8.26 1.64.46 2.5.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

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
      initial={{
        opacity: 0,
        y: 30,
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
        delay: 0.05 + index * 0.04,
        duration: 0.5,
        ease: EASE,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${
          hovered
            ? "rgba(155,48,255,0.35)"
            : "rgba(255,255,255,0.04)"
        }`,
        borderRadius: "16px",
        background: "#0a0510",
        cursor: "pointer",
        transform: hovered
          ? "translateY(-8px)"
          : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 50px rgba(155,48,255,0.15), 0 0 0 1px rgba(155,48,255,0.15)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        transition:
          "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "3/4",
        }}
      >
        <motion.img
          src={member.photo}
          alt={member.name}
          animate={{
            scale: hovered ? 1.08 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: EASE,
          }}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0a0510 0%, rgba(10,5,16,0.4) 35%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            padding: "4px 10px",
            border: `1px solid ${
              hovered
                ? "rgba(200,132,252,0.4)"
                : "rgba(255,255,255,0.08)"
            }`,
            borderRadius: "6px",
            background: hovered
              ? "linear-gradient(135deg, rgba(155,48,255,0.85), rgba(124,58,237,0.8))"
              : "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            color: "#ffffff",
            fontSize: "8px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
        >
          {member.position}
        </div>
      </div>

      <div
        style={{
          padding: "14px 14px 16px",
        }}
      >
        <h3
          style={{
            margin: "0 0 6px",
            color: "#ffffff",
            fontFamily:
              "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 700,
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
            color: "rgba(155,48,255,0.65)",
            fontFamily:
              "var(--font-inter), 'Inter', sans-serif",
            fontSize: "9px",
            textDecoration: "none",
            opacity: hovered ? 1 : 0.55,
            transition:
              "opacity 0.3s ease, color 0.3s ease",
          }}
        >
          <MailIcon width={10} height={10} />
          {member.email}
        </a>

        <br />

        <a
          href={`tel:${member.phone}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "4px",
            color: "rgba(155,48,255,0.65)",
            fontFamily:
              "var(--font-inter), 'Inter', sans-serif",
            fontSize: "9px",
            textDecoration: "none",
            opacity: hovered ? 1 : 0.55,
            transition:
              "opacity 0.3s ease, color 0.3s ease",
          }}
        >
          <PhoneIcon />
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
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, {
    once: true,
    margin: "-50px",
  });

  const teamRef = useRef<HTMLElement>(null);
  const teamInView = useInView(teamRef, {
    once: true,
    margin: "-80px",
  });

  const contactRef = useRef<HTMLElement>(null);
  const contactInView = useInView(contactRef, {
    once: true,
    margin: "-70px",
  });

  return (
    <main
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      {/* HERO */}

      <section
        ref={heroRef}
        style={{
          position: "relative",
          padding: "120px 24px 40px",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            heroInView
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
                color: "rgba(155,48,255,0.6)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
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
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            heroInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            delay: 0.1,
            duration: 0.7,
            ease: EASE,
          }}
          style={{
            margin: 0,
            fontFamily:
              "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: "#ffffff",
            }}
          >
            The Minds{" "}
          </span>

          <span
            style={{
              background:
                "linear-gradient(135deg, #9b30ff 20%, #c084fc 80%)",
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

      {/* TEAMS */}

      <section
        ref={teamRef}
        style={{
          position: "relative",
          padding: "80px 24px 100px",
        }}
      >
        <div
          aria-hidden="true"
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

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {TEAMS.map((team) => (
            <div
              key={team.title}
              style={{
                marginBottom: "60px",
              }}
            >
              {team.title !== "Executive Committee" && (
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={
                    teamInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    margin: "0 0 22px 2px",
                    color: "rgba(155,48,255,0.75)",
                    fontFamily:
                      "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                    fontSize: "18px",
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
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
                      background:
                        "rgba(155,48,255,0.8)",
                      boxShadow:
                        "0 0 12px rgba(155,48,255,0.4)",
                    }}
                  />
                </motion.h2>
              )}

              <div
                className="about-team-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(5, minmax(0, 1fr))",
                  gap: "16px",
                }}
              >
                {team.members.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    inView={teamInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT US */}

      <section
        ref={contactRef}
        style={{
          position: "relative",
          padding:
            "30px 24px 120px",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "760px",
            height: "360px",
            transform:
              "translate(-50%, -50%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155,48,255,0.12), rgba(155,48,255,0.03) 45%, transparent 72%)",
            filter: "blur(32px)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          animate={
            contactInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.75,
            ease: EASE,
          }}
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            padding:
              "clamp(38px, 6vw, 72px)",
            overflow: "hidden",
            border:
              "1px solid rgba(155,48,255,0.2)",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(20,10,38,0.95), rgba(7,3,15,0.98))",
            boxShadow:
              "0 28px 80px rgba(0,0,0,0.55), 0 0 42px rgba(155,48,255,0.08)",
            textAlign: "center",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: "20%",
              left: "20%",
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, rgba(155,48,255,0.9), rgba(192,38,211,0.45), transparent)",
              boxShadow:
                "0 0 22px rgba(155,48,255,0.3)",
            }}
          />

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "22px",
              color:
                "rgba(195,160,255,0.88)",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(155,48,255,0.85))",
              }}
            />

            Contact Us

            <span
              style={{
                width: "30px",
                height: "1px",
                background:
                  "linear-gradient(90deg, rgba(155,48,255,0.85), transparent)",
              }}
            />
          </span>

          <h2
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#ffffff",
              fontFamily:
                "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
              fontSize:
                "clamp(30px, 5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.1,
            }}
          >
            Have a question about TSYP XIV?
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "20px auto 0",
              color:
                "rgba(215,210,235,0.64)",
              fontFamily:
                "var(--font-inter), 'Inter', sans-serif",
              fontSize:
                "clamp(14px, 1.5vw, 17px)",
              lineHeight: 1.8,
            }}
          >
            Reach out to the organizing team for
            general information, participation
            details, partnerships, or assistance
            related to the congress.
          </p>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={`Send an email to ${CONTACT_EMAIL}`}
            whileHover={{
              y: -4,
              scale: 1.02,
              boxShadow:
                "0 14px 34px rgba(155,48,255,0.25)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "32px",
              padding: "14px 22px",
              border:
                "1px solid rgba(155,48,255,0.38)",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, rgba(155,48,255,0.2), rgba(124,58,237,0.12))",
              color: "#ffffff",
              fontFamily:
                "var(--font-inter), 'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              textDecoration: "none",
              boxShadow:
                "0 10px 28px rgba(155,48,255,0.12)",
              transition:
                "border-color 0.25s ease, background 0.25s ease",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                color:
                  "rgba(205,176,255,0.95)",
              }}
            >
              <MailIcon />
            </span>

            {CONTACT_EMAIL}
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}