"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Navigation";
import { slides, navSections } from "./slides/slideData";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Presentation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useCallback(
    (newIndex: number) => {
      if (isAnimating || newIndex === currentIndex) return;
      if (newIndex < 0 || newIndex >= slides.length) return;
      setDirection(newIndex > currentIndex ? 1 : -1);
      setCurrentIndex(newIndex);
      setIsAnimating(true);
    },
    [currentIndex, isAnimating]
  );

  const goNext = useCallback(() => {
    if (currentIndex < slides.length - 1) navigate(currentIndex + 1);
  }, [currentIndex, navigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) navigate(currentIndex - 1);
  }, [currentIndex, navigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Find which nav section this slide belongs to
  const currentSection = slides[currentIndex].section;
  const currentNavIndex = navSections.findIndex((s) => s.id === currentSection);

  const CurrentSlide = slides[currentIndex].component;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg-primary">
      <Navigation
        sections={navSections}
        currentNavIndex={currentNavIndex}
        onNavigate={(sectionId: string) => {
          const idx = slides.findIndex((s) => s.section === sectionId);
          if (idx >= 0) navigate(idx);
        }}
      />

      <AnimatePresence
        initial={false}
        custom={direction}
        onExitComplete={() => setIsAnimating(false)}
        mode="wait"
      >
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0 pt-16"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => navigate(i)}
            className="transition-all duration-500"
            style={{
              width: i === currentIndex ? 28 : 6,
              height: 6,
              borderRadius: 3,
              background: i === currentIndex ? "#9A8866" : "#D4D4D0",
            }}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-border-subtle hover:border-brand-gold text-text-muted hover:text-brand-gold transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentIndex < slides.length - 1 && (
        <button
          onClick={goNext}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center rounded-full border border-border-subtle hover:border-brand-gold text-text-muted hover:text-brand-gold transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Page number */}
      <div className="fixed bottom-8 right-8 z-50 text-sm tracking-wider" style={{ color: "#707070" }}>
        <span style={{ color: "#9A8866" }}>{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
