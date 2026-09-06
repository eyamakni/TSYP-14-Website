"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { Challenge, CHALLENGES } from "./challenges";

const EASE = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number
];

/* ─────────────────────────────────────
   NAVIGATION ICON
───────────────────────────────────── */

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* ─────────────────────────────────────
   CALENDAR ICON
───────────────────────────────────── */

function CalendarIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(155,48,255,0.6)"
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

/* ─────────────────────────────────────
   FLIP CARD
───────────────────────────────────── */

function ChallengeCard({
  challenge,
  index,
  inView,
}: {
  challenge: Challenge;
  index: number;
  inView: boolean;
}) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: EASE,
        delay: 0.05 + index * 0.05,
      }}
      style={{
        position: "relative",
        minWidth: 0,
      }}
    >
      {/* Constant Purple Glow */}
      <div
        style={{
          position: "absolute",
          inset: "-12px",
          background:
            "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(155,48,255,0.28) 0%, transparent 70%)",
          borderRadius: "24px",
          filter: "blur(16px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Animated Border */}
      <div
        className="flip-card-border"
        style={{
          position: "relative",
          zIndex: 1,
          height: "290px",
        }}
      >
        <div
          className="flip-card-wrapper"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div className="flip-card-inner">

            {/* ─────────────────────────────
                FRONT
            ───────────────────────────── */}

            <div
              className="flip-card-front"
              style={{
                background:
                  "linear-gradient(145deg, rgba(18,10,35,0.95) 0%, rgba(8,4,18,0.98) 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                padding: "24px 16px",
              }}
            >
              {/* Logos */}
              <div
                style={{
                  width: "100%",
                  minHeight: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                  padding: "8px",
                }}
              >
                {challenge.logos.map((logo, logoIndex) => (
                  <div
                    key={`${challenge.id}-logo-${logoIndex}`}
                    style={{
                      width: "72px",
                      height: "72px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "14px",
                      padding: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={logo}
                      alt={`${challenge.name} logo ${logoIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter:
                          "brightness(0) invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.15))",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Challenge Name */}
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#ffffff",
                  textAlign: "center",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  margin: 0,
                  fontFamily:
                    "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                }}
              >
                {challenge.name}
              </h3>
            </div>

            {/* ─────────────────────────────
                BACK
            ───────────────────────────── */}

            <div
              className="flip-card-back"
              style={{
                background:
                  "linear-gradient(145deg, rgba(30,10,60,0.97) 0%, rgba(10,4,25,0.99) 100%)",
                display: "flex",
                flexDirection: "column",
                padding: "20px 16px",
                gap: "10px",
              }}
            >
              {/* Label + Title */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "rgba(155,48,255,0.9)",
                      boxShadow:
                        "0 0 5px rgba(155,48,255,0.6)",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "7px",
                      fontWeight: 600,
                      letterSpacing: "0.35em",
                      textTransform: "uppercase",
                      color: "rgba(155,48,255,0.6)",
                    }}
                  >
                    Challenge
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.3,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    fontFamily:
                      "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {challenge.name}
                </h3>
              </div>

              

              {/* Dates */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                {/* Info Session */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CalendarIcon />

                  <span
                    style={{
                      fontSize: "8.5px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(155,48,255,0.6)",
                        fontWeight: 600,
                      }}
                    >
                      Info Session:
                    </span>{" "}
                    {challenge.infoSessionDate}
                  </span>
                </div>

                {/* Phase 1 Deadline */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <CalendarIcon />

                  <span
                    style={{
                      fontSize: "8.5px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(155,48,255,0.6)",
                        fontWeight: 600,
                      }}
                    >
                      Phase 1 Deadline:
                    </span>{" "}
                    {challenge.phase1Deadline}
                  </span>
                </div>
              </div>
              {/* Divider */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(155,48,255,0.08)",
                }}
              />
              {/* Logos */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {challenge.logos.map((logo, logoIndex) => (
                  <div
                    key={`back-${challenge.id}-logo-${logoIndex}`}
                    style={{
                      width: "42px",
                      height: "42px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "5px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <img
                      src={logo}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => router.push(challenge.specLink)}
                style={{
                  marginTop: "auto",
                  padding: "9px 0",
                  width: "100%",
                  background:
                    "linear-gradient(135deg, #9b30ff 0%, #7c3aed 100%)",
                  color: "#ffffff",
                  fontSize: "8.5px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  border: "1px solid rgba(155,48,255,0.4)",
                  cursor: "pointer",
                  boxShadow:
                    "0 0 12px rgba(155,48,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  transition:
                    "box-shadow 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 24px rgba(155,48,255,0.4)";
                  e.currentTarget.style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 0 12px rgba(155,48,255,0.2)";
                  e.currentTarget.style.transform =
                    "translateY(0)";
                }}
              >
                <ArrowIcon />
                See Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────
   PAGE
───────────────────────────────────── */

export default function ChallengesPage() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  return (
    <main
      style={{
        background: "#000000",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "120px 24px 40px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Glow */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155,48,255,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
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
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "rgba(155,48,255,0.6)",
              }}
            >
              TSYP 14 · Program
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

        {/* Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.7,
            ease: EASE,
          }}
          style={{
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            margin: 0,
            fontFamily:
              "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
          }}
        >
          <span style={{ color: "#ffffff" }}>
            The{" "}
          </span>

          <span
            style={{
              background:
                "linear-gradient(135deg, #9b30ff 20%, #c084fc 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Challenges
          </span>
        </motion.h1>
      </section>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(155,48,255,0.2) 50%, transparent)",
        }}
      />

      {/* CARDS */}
      <section
        ref={ref}
        style={{
          padding: "60px 24px 120px",
        }}
      >
        <div
          className="challenges-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            maxWidth: "1060px",
            margin: "0 auto",
          }}
        >
          {CHALLENGES.map((challenge, index) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </section>

      {/* RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          .challenges-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 560px) {
          .challenges-grid {
            grid-template-columns: 1fr !important;
            max-width: 340px !important;
          }
        }
      `}</style>
    </main>
  );
}