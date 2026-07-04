"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./memories.module.css";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const IMAGES = [
  "/memo/img-02.jpg",
  "/memo/img-04.jpg",
  "/memo/img-07.jpg",
  "/memo/img-09.jpg",
  "/memo/img-10.jpg",
  "/memo/img-12.jpg",
  "/memo/g0i8OVM.jpeg",
  "/memo/nPXqChl.jpeg",
  "/memo/wGbAmaH.jpeg",
  "/memo/xqwrboq.jpeg",
];

const ROW1 = [...IMAGES, ...IMAGES];
const ROW2 = [...[...IMAGES].reverse(), ...[...IMAGES].reverse()];

function MemoryCard({ src, index }: { src: string; index: number }) {
  return (
    <div className={styles.memoryCard}>
      <Image
        src={src}
        alt={`TSYP memory ${index + 1}`}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 260px, 380px"
        className={styles.memoryImage}
      />

      <div className={styles.imageOverlay} />
      <div className={styles.memoryTopGlow} />
    </div>
  );
}

function MemoryRow({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  return (
    <div className={styles.rowMask}>
      <div
        className={`${styles.track} ${
          direction === "left" ? styles.trackLeft : styles.trackRight
        }`}
      >
        {images.map((src, index) => (
          <MemoryCard key={`${src}-${index}`} src={src} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function MemoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <section id="memories" ref={sectionRef} className={styles.section}>
      <div className={styles.ambientGlow} />

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE }}
      >
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLineLeft} />
          <span className={styles.eyebrowText}>TSYP · Archives</span>
          <span className={styles.eyebrowLineRight} />
        </div>

        <h2 className={styles.title}>Memories</h2>

        <p className={styles.subtitle}>From Previous Editions</p>
      </motion.div>

      {inView && (
        <motion.div
          className={styles.gallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        >
          <MemoryRow images={ROW1} direction="left" />
          <MemoryRow images={ROW2} direction="right" />
        </motion.div>
      )}
    </section>
  );
}