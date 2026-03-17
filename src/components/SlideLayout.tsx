"use client";

import { ReactNode } from "react";

export default function SlideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full overflow-y-auto slide-content">
      <div
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 48px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
