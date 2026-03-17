"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  sections: { id: string; label: string }[];
  currentNavIndex: number;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({
  sections,
  currentNavIndex,
  onNavigate,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
        style={{
          background: "rgba(250, 250, 248, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #ECECEA",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xl tracking-widest font-light"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <span style={{ color: "#9A8866" }}>i</span>Ware
          </span>
          <div style={{ width: 48, height: 1, background: "#9A8866" }} />
          <span
            className="hidden sm:block text-xs tracking-wider"
            style={{ color: "#9C9C9C" }}
          >
            Web Design & Development
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((section, i) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="relative px-4 py-2 text-sm tracking-wide transition-colors duration-300"
              style={{
                color: i === currentNavIndex ? "#9A8866" : "#5C5C5C",
              }}
            >
              {section.label}
              {i === currentNavIndex && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 16,
                    right: 16,
                    height: 1,
                    background: "#9A8866",
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className="w-5 h-px transition-all duration-300"
            style={{
              background: "#2C2C2C",
              transform: isMenuOpen
                ? "rotate(45deg) translateY(4px)"
                : "none",
            }}
          />
          <span
            className="w-5 h-px transition-all duration-300"
            style={{
              background: "#2C2C2C",
              transform: isMenuOpen
                ? "rotate(-45deg) translateY(-2px)"
                : "none",
            }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
            style={{
              background: "rgba(250, 250, 248, 0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col items-center gap-6">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onNavigate(section.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-2xl font-light tracking-wider transition-colors duration-300"
                  style={{
                    color: i === currentNavIndex ? "#9A8866" : "#5C5C5C",
                  }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
