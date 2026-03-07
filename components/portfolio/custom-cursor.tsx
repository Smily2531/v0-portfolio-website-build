"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handlePointerCheck);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handlePointerCheck);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "rgb(94, 234, 212)" : "rgb(13, 148, 136)";
  const glowColor = isDark ? "rgba(94, 234, 212," : "rgba(13, 148, 136,";

  return (
    <>
      {/* Main dot */}
      <div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ease-out ${
            isPointer ? "h-10 w-10 opacity-50" : "h-3 w-3 opacity-100"
          }`}
          style={{
            backgroundColor: cursorColor,
            boxShadow: isPointer
              ? `0 0 20px ${glowColor} 0.8), 0 0 40px ${glowColor} 0.4)`
              : `0 0 10px ${glowColor} 0.6), 0 0 20px ${glowColor} 0.3)`,
          }}
        />
      </div>

      {/* Trailing glow */}
      <div
        className="pointer-events-none fixed z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 0.5 : 0,
          transition: "left 0.15s ease-out, top 0.15s ease-out, opacity 0.3s ease",
        }}
      >
        <div
          className="h-6 w-6 rounded-full"
          style={{
            backgroundColor: `${glowColor} 0.3)`,
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Hide default cursor globally */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
