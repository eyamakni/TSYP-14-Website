"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import ParticleCanvas from "./ParticleCanvas";
import DemiSphere from "./DemiSphere";

const EVENT_START = new Date("2026-12-21T00:00:00");
const EVENT_DATE_LABEL = "21–23 December 2026";

function calcDiff() {
  const diff = Math.max(0, EVENT_START.getTime() - Date.now());

  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff % 864e5) / 36e5),
    minutes: Math.floor((diff % 36e5) / 6e4),
    seconds: Math.floor((diff % 6e4) / 1000),
  };
}

const WORDS = [
  { text: "ideas", color: "#a78bfa" },
  { text: "minds", color: "#c026d3" },
  { text: "tomorrow", color: "#7c3aed" },
  { text: "the noosphere", color: "#9b30ff" },
];

function CyclingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % WORDS.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  const word = WORDS[index];

  return (
    <div style={{ perspective: "400px", textAlign: "center" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ rotateX: 60, opacity: 0, y: 6 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -60, opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "block",
            transformOrigin: "center center",
            fontSize: "clamp(16px, 1.8vw, 22px)",
            fontWeight: 400,
            color: word.color,
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textShadow: `0 0 20px ${word.color}66`,
          }}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function MiniCountdown() {
  const [time, setTime] = useState(calcDiff);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(calcDiff());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HRS" },
    { value: time.minutes, label: "MIN" },
    { value: time.seconds, label: "SEC" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "clamp(20px, 4vw, 48px)",
      }}
    >
      {units.map(({ value, label }) => (
        <div
          key={label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontVariantNumeric: "tabular-nums",
              color: "#ffffff",
            }}
          >
            {String(value).padStart(2, "0")}
          </span>

          <span
            style={{
              fontSize: "clamp(9px, 1vw, 11px)",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(155,48,255,0.85)",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

const SPRING = [0.16, 1, 0.3, 1] as [number, number, number, number];

const HEADLINE_STYLE: React.CSSProperties = {
  fontSize: "clamp(24px, 5.5vw, 68px)",
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', sans-serif",
  display: "block",
  overflowWrap: "break-word",
  wordBreak: "break-word",
};

function LineReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div style={{ overflow: "hidden", display: "block" }}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.0, ease: SPRING, delay }}
        className={className}
        style={HEADLINE_STYLE}
      >
        {children}
      </motion.div>
    </div>
  );
}

function DrawLine({
  delay = 0,
  color = "rgba(155,48,255,0.45)",
  width = "55%",
}: {
  delay?: number;
  color?: string;
  width?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.65, ease: SPRING, delay }}
        style={{
          height: "1px",
          width,
          background: color,
          transformOrigin: "left center",
        }}
      />
    </div>
  );
}

function StatItem({
  target,
  suffix,
  label,
  tick,
}: {
  target: number;
  suffix: string;
  label: string;
  tick: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf: number;
    const duration = 1800;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(step);

    return () => cancelAnimationFrame(raf);
  }, [target, tick]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 clamp(20px, 4vw, 48px)",
      }}
    >
      <span
        style={{
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 700,
          lineHeight: 1,
          color: "#ffffff",
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {suffix}
      </span>

      <span
        style={{
          marginTop: "5px",
          fontSize: "11px",
          fontWeight: 500,
          color: "rgba(180,150,255,0.55)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
        }}
      >
        {label}
      </span>
    </div>
  );
}

const STATS = [
  { target: 1200, suffix: "+", label: "Participants" },
  { target: 50, suffix: "+", label: "Speakers" },
  { target: 60, suffix: "+", label: "Workshops" },
];

function StatsRow() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((currentTick) => currentTick + 1);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {STATS.map(({ target, suffix, label }, index) => (
        <div key={label} style={{ display: "flex", alignItems: "center" }}>
          <StatItem
            target={target}
            suffix={suffix}
            label={label}
            tick={tick}
          />

          {index < STATS.length - 1 && (
            <div
              style={{
                width: "1px",
                height: "36px",
                background: "rgba(155,48,255,0.2)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="hero-min-h"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "var(--font-inter), 'Inter', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#000000",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(100,60,200,0.18) 0%, rgba(80,40,160,0.06) 55%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 130% 100% at 50% 50%, transparent 50%, rgba(0,0,10,0.5) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <ParticleCanvas />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          paddingTop: "150px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <LineReveal delay={0.35}>
            <span style={{ color: "#ffffff" }}>
              Tunisian Student and Young
            </span>
          </LineReveal>

          <DrawLine
            delay={1.1}
            color="linear-gradient(90deg, transparent, rgba(155,48,255,0.5), rgba(200,80,180,0.4), transparent)"
            width="60%"
          />

          <LineReveal delay={0.8} className="gradient-flow">
            Professional Congress
          </LineReveal>

          <DrawLine
            delay={1.55}
            color="linear-gradient(90deg, transparent, rgba(200,80,180,0.35), rgba(155,48,255,0.5), transparent)"
            width="40%"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6, ease: SPRING }}
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
            }}
          >
            We architect
          </span>

          <CyclingWord />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6, ease: SPRING }}
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(180,150,255,0.7)",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
            }}
          >
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Medina Congress Center, Yasmine Hammamet, Tunisia
          </span>

          <span
            style={{
              display: "block",
              width: "1px",
              height: "12px",
              background: "rgba(155,48,255,0.25)",
            }}
          />

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(180,150,255,0.7)",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
            }}
          >
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
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {EVENT_DATE_LABEL}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, ease: SPRING }}
          className="hero-stats-mt"
          style={{ marginTop: "127px" }}
        >
          <StatsRow />
        </motion.div>
      </div>

      <DemiSphere />
    </section>
  );
}