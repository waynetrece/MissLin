"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// ===== Centered slide (title/hero style) =====
export function CenterSlide({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="h-full flex items-center justify-center"
      style={{
        background: dark ? "#0C0C0C" : "#FAFAF8",
        color: dark ? "#FFFFFF" : "#2C2C2C",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          width: "100%",
          padding: "0 48px",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ===== Content slide (left-aligned, wider) =====
export function ContentSlide({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="h-full flex items-center justify-center"
      style={{
        background: dark ? "#0C0C0C" : "#FAFAF8",
        color: dark ? "#FFFFFF" : "#2C2C2C",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          padding: "0 64px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ===== Split slide (left text, right content) =====
export function SplitSlide({
  left,
  right,
  dark = false,
}: {
  left: ReactNode;
  right: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="h-full flex items-center justify-center"
      style={{
        background: dark ? "#0C0C0C" : "#FAFAF8",
        color: dark ? "#FFFFFF" : "#2C2C2C",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          padding: "0 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}

// ===== Dense content slide (top-aligned, for content-heavy slides) =====
export function DenseSlide({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="h-full overflow-y-auto"
      style={{
        background: dark ? "#0C0C0C" : "#FAFAF8",
        color: dark ? "#FFFFFF" : "#2C2C2C",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: "40px 64px 80px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ===== Animated text elements =====
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== Styled elements =====
export function Label({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 13,
        letterSpacing: "0.15em",
        textTransform: "uppercase" as const,
        color: "#9A8866",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

export function Heading({
  children,
  size = "large",
}: {
  children: ReactNode;
  size?: "large" | "medium" | "small";
}) {
  const sizeMap = {
    large: 56,
    medium: 40,
    small: 32,
  };
  return (
    <h1
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: sizeMap[size],
        fontWeight: 300,
        lineHeight: 1.2,
        marginBottom: 24,
      }}
    >
      {children}
    </h1>
  );
}

export function Subtext({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 18,
        color: "#5C5C5C",
        fontWeight: 300,
        lineHeight: 1.8,
        maxWidth: 600,
      }}
    >
      {children}
    </p>
  );
}

export function GoldLine() {
  return (
    <div
      style={{ width: 64, height: 1, background: "#9A8866", margin: "24px 0" }}
    />
  );
}

export function GoldLineCentered() {
  return (
    <div
      style={{
        width: 64,
        height: 1,
        background: "#9A8866",
        margin: "24px auto",
      }}
    />
  );
}
