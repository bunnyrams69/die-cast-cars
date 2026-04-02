"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hasMouse, setHasMouse] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show custom cursor on non-touch desktop devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = "";
      const buttons = document.querySelectorAll("button, a");
      buttons.forEach((el) => ((el as HTMLElement).style.cursor = ""));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMouse) setHasMouse(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    // Trigger on first interaction
    setHasMouse(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hasMouse) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-[#E8000D] rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99999,
        }}
      />
      {/* Outer ring with spring lag */}
      <motion.div
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-[#E8000D]/30 rounded-full pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99998,
        }}
      />
    </>
  );
}
