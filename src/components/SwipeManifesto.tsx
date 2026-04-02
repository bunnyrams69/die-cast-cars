"use client";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MANIFESTO_LINES = [
  "You know the car.",
  "You know the color.",
  "The engine note.",
  "The feeling.",
  "",
  "Most men leave it on a screen.",
  "A wallpaper. A screenshot. A \"someday.\"",
  "",
  "The ones who make it real",
  "do something different.",
  "",
  "They put it where they can see it.",
  "Every morning.",
  "Until someday becomes today.",
];

const CAROUSEL_IMAGES = [
  "/us-t1.jpg",
  "/us-t2.jpg",
  "/us-t3.jpg",
  "/us-t4.jpg",
  "/us-t5.jpg",
  "/us-t6.jpg",
];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;

export default function SwipeManifesto() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (constraintsRef.current) {
      const containerWidth = constraintsRef.current.offsetWidth;
      const totalWidth = CAROUSEL_IMAGES.length * STEP - CARD_GAP;
      setMaxDrag(Math.max(0, totalWidth - containerWidth));
    }
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    const current = x.get();
    const target = direction === "left"
      ? Math.min(current + STEP, 0)
      : Math.max(current - STEP, -maxDrag);
    animate(x, target, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section className="bg-[#080808] px-6 py-[80px] md:px-[8vw] md:py-[120px] flex flex-col md:flex-row gap-10 md:gap-[8vw] overflow-hidden">
      {/* Left: Manifesto text */}
      <div className="md:w-[40%] flex-shrink-0 flex flex-col justify-center">
        <div className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-10">THE MANIFESTO</div>
        <div className="space-y-1">
          {MANIFESTO_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: line === "" ? 0 : 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`font-inter text-[16px] md:text-[18px] leading-relaxed ${line === "" ? "h-6" : "text-[#9A9A9A]"}`}
            >
              {line}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 font-bebas text-[20px] md:text-[24px] tracking-[4px] text-[#E8000D] uppercase"
        >
          NEVER OUT OF SIGHT. NEVER OUT OF REACH.
        </motion.div>
      </div>
      {/* Right: Drag carousel with nav buttons */}
      <div className="md:w-[60%] relative flex items-center">
        {/* Left arrow */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/60 hover:text-white backdrop-blur-md transition-all duration-300"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        {/* Carousel */}
        <div className="w-full overflow-hidden" ref={constraintsRef}>
          <motion.div
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            style={{ x: springX }}
            className="flex gap-4 cursor-grab active:cursor-grabbing"
          >
            {CAROUSEL_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[320px] h-[360px] md:h-[420px] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Lifestyle shot ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Right arrow */}
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/60 hover:text-white backdrop-blur-md transition-all duration-300"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
