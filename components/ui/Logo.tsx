"use client";

interface LogoProps {
  className?: string;
  light?: boolean; // If true, tagline is white/light gray; if false, tagline is dark gray/black
}

export default function Logo({ className = "h-10 w-auto", light = true }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 90"
      className={className}
    >
      {/* "P" of PRISHTVIK */}
      <text
        x="0"
        y="64"
        fontWeight="bold"
        fontSize="80"
        fill="#2B76FF"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        P
      </text>
      
      {/* "RISHTVIK" of PRISHTVIK */}
      <text
        x="52"
        y="52"
        fontWeight="bold"
        fontSize="52"
        fill="#2B76FF"
        letterSpacing="1"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        RISHTVIK
      </text>
      
      {/* Tagline: Quality Workmanship */}
      <text
        x="120"
        y="78"
        fontWeight="700"
        fontSize="15.5"
        letterSpacing="0.02em"
        fill={light ? "#F1F5F9" : "#1F2937"}
        style={{ fontFamily: "var(--font-outfit), 'Outfit', 'Inter', sans-serif" }}
      >
        Quality Workmanship
      </text>
    </svg>
  );
}
