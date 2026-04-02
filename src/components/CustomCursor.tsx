"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const DOT_SPRING = { mass: 0.1, damping: 10, stiffness: 131 };
const RING_SPRING = { mass: 0.3, damping: 15, stiffness: 100 };

export default function CustomCursor() {
  const [hasMouse, setHasMouse] = useState(false);

  // Raw position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Inner dot springs (tight, snappy)
  const dotX = useSpring(mouseX, DOT_SPRING);
  const dotY = useSpring(mouseY, DOT_SPRING);

  // Outer ring springs (laggier, playful trailing)
  const ringX = useSpring(mouseX, RING_SPRING);
  const ringY = useSpring(mouseY, RING_SPRING);

  // Opacity & scale springs
  const opacitySpring = useSpring(0, DOT_SPRING);
  const scaleSpring = useSpring(0, DOT_SPRING);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.style.cursor = "";
      return;
    }

    setHasMouse(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacitySpring.set(1);
      scaleSpring.set(1);
    };

    const handleMouseLeave = () => {
      opacitySpring.set(0);
      scaleSpring.set(0);
    };

    const handleMouseEnter = () => {
      opacitySpring.set(1);
      scaleSpring.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hasMouse) return null;

  return (
    <>
      {/* Inner dot — snappy spring */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          opacity: opacitySpring,
          scale: scaleSpring,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99999,
        }}
        className="fixed top-0 left-0 size-[10px] rounded-full bg-[#E8000D] pointer-events-none"
      />
      {/* Outer ring — laggier trailing spring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          opacity: opacitySpring,
          scale: scaleSpring,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99998,
        }}
        className="fixed top-0 left-0 size-[40px] rounded-full border border-[#E8000D]/30 pointer-events-none"
      />
    </>
  );
}
