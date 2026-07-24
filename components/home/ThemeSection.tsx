"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./theme.module.css";

const EASE = [0.16, 1, 0.3, 1] as [
  number,
  number,
  number,
  number,
];

type TubesApp = {
  dispose?: () => void;
};

type TubesCursorFactory = (
  canvas: HTMLCanvasElement,
  options: {
    tubes: {
      colors: string[];
      lights: {
        intensity: number;
        colors: string[];
      };
    };
  },
) => TubesApp;

declare global {
  interface Window {
    __TubesCursor?: TubesCursorFactory;
  }
}

const PILLARS = [
  {
    label: "Culture",
    accent: true,
  },
  {
    label: "Knowledge",
    accent: true,
  },
  {
    label: "Ethics",
    accent: true,
  },
  {
    label: "Ideas",
    accent: true,
  },
  {
    label: "AI & Human Synergy",
    accent: false,
  },
  {
    label: "Global Mind",
    accent: false,
  },
  {
    label: "Knowledge Sharing",
    accent: false,
  },
  {
    label: "Legacy Information Networks",
    accent: false,
  },
  {
    label: "Emerging Technologies",
    accent: false,
  },
  {
    label: "Consciousness",
    accent: false,
  },
];

export default function ThemeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesApp | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  useEffect(() => {
    let disposed = false;

    const initTubes = () => {
      if (
        disposed ||
        !canvasRef.current ||
        !window.__TubesCursor
      ) {
        return;
      }

      if (appRef.current?.dispose) {
        appRef.current.dispose();
      }

      appRef.current = window.__TubesCursor(
        canvasRef.current,
        {
          tubes: {
            colors: [
              "#9b30ff",
              "#7c3aed",
              "#c026d3",
              "#6d28d9",
            ],
            lights: {
              intensity: 180,
              colors: [
                "#9b30ff",
                "#b721ff",
                "#7c3aed",
                "#c026d3",
              ],
            },
          },
        },
      );
    };

    const timer = window.setTimeout(() => {
      if (window.__TubesCursor) {
        initTubes();
        return;
      }

      const existingScript =
        document.getElementById("__tubes-loader");

      if (existingScript) {
        window.addEventListener(
          "__tubes_ready",
          initTubes,
          {
            once: true,
          },
        );

        return;
      }

      const script =
        document.createElement("script");

      script.type = "module";
      script.id = "__tubes-loader";
      script.textContent = `
        import TubesCursor from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';

        window.__TubesCursor = TubesCursor;
        window.dispatchEvent(
          new CustomEvent('__tubes_ready')
        );
      `;

      window.addEventListener(
        "__tubes_ready",
        initTubes,
        {
          once: true,
        },
      );

      document.head.appendChild(script);
    }, 150);

    return () => {
      disposed = true;

      window.clearTimeout(timer);

      window.removeEventListener(
        "__tubes_ready",
        initTubes,
      );

      if (appRef.current?.dispose) {
        appRef.current.dispose();
      }
    };
  }, []);

  return (
    <section
      id="theme"
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.canvasZone}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
        />

        <div className={styles.topFade} />
        <div className={styles.bottomFade} />
        <div className={styles.leftFade} />
        <div className={styles.rightFade} />

        <div className={styles.titleContent}>
          <motion.div
            className={styles.eyebrow}
            initial={{
              opacity: 0,
              y: 12,
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
              duration: 0.7,
              ease: EASE,
              delay: 0.1,
            }}
          >
            <span className={styles.eyebrowLine} />

            <span className={styles.eyebrowText}>
              TSYP 14 · Theme
            </span>

            <span className={styles.eyebrowLine} />
          </motion.div>

          <motion.h2
            className={styles.title}
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: EASE,
              delay: 0.2,
            }}
          >
            <span className={styles.titleWhite}>
              THE{" "}
            </span>

            <span className={styles.titleGradient}>
              NOOSPHERE
            </span>
          </motion.h2>
        </div>
      </div>

      <div className={styles.descriptionZone}>
        <motion.div
          className={styles.divider}
          initial={{
            scaleX: 0,
          }}
          animate={
            inView
              ? {
                  scaleX: 1,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: 0.5,
          }}
        />

        <motion.div
          className={styles.descriptionGrid}
          initial={{
            opacity: 0,
            y: 16,
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
            duration: 0.8,
            ease: EASE,
            delay: 0.55,
          }}
        >
          <p className={styles.primaryText}>
            Architects of the Noosphere is a vision
            where innovation connects minds to serve
            humanity with dignity and transparency.
          </p>

          <div
            className={styles.descriptionDivider}
          />

          <p className={styles.secondaryText}>
            It inspires young engineers to build a
            shared intellectual space where
            collaboration, ethics, and emerging
            technology truly serve people.
          </p>
        </motion.div>

        <motion.div
          className={styles.pillars}
          initial={{
            opacity: 0,
            y: 12,
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
            duration: 0.7,
            ease: EASE,
            delay: 0.75,
          }}
        >
          {PILLARS.map(({ label, accent }) => (
            <span
              key={label}
              className={`${styles.pillar} ${
                accent
                  ? styles.pillarAccent
                  : styles.pillarStandard
              }`}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}