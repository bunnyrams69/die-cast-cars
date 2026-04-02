"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARS = [
  { id: "m4", handle: "bmw-m4", tab: "BMW M4", headline: "THE FIRST STEP.", subline: "Every man who owns the real car started somewhere.", price: "49.99", video: "/assets/hero/Car_moving_on_202604021110.mp4", videoPosition: "center center" },
  { id: "sto", handle: "huracan-sto", tab: "HURACÁN STO", headline: "THE DREAM IS REAL.", subline: "Keep it where you can see it. Every morning.", price: "49.99", video: "/assets/hero/Lamborghini_sprinting_down_202604021112.mp4", videoPosition: "center center" },
  { id: "gt3", handle: "porsche-911-gt3-rs", tab: "PORSCHE GT3 RS", headline: "BUILT FOR THOSE WHO KNOW.", subline: "The men who own these cars once held one like this.", price: "49.99", video: "/assets/hero/Porsche_911_GT3_202604021103.mp4", videoPosition: "65% center" },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const interval = setInterval(() => setActiveIdx(p => (p + 1) % CARS.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const car = CARS[activeIdx];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080808] flex flex-col justify-center">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        {/* Fallback gradient when no video is available */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#080808]" />
        {mounted && CARS.map((c, idx) => (
          <video key={c.id} src={c.video} autoPlay loop muted playsInline
            style={{ objectPosition: c.videoPosition }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-[1] ${idx === activeIdx ? "opacity-80" : "opacity-0"}`}
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(90deg,rgba(8,8,8,0.75)_0%,rgba(8,8,8,0.3)_35%,transparent_60%)]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button onClick={() => setActiveIdx(p => (p - 1 + CARS.length) % CARS.length)} className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-white backdrop-blur-md hidden md:block transition-all duration-300"><ChevronLeft size={32} strokeWidth={1.5} /></button>
        <button onClick={() => setActiveIdx(p => (p + 1) % CARS.length)} className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/50 hover:text-white backdrop-blur-md hidden md:block transition-all duration-300"><ChevronRight size={32} strokeWidth={1.5} /></button>
      </div>
      <div className="relative z-10 w-full px-6 md:pl-[4vw] xl:pl-[8vw] max-w-[600px] mt-12 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div key={car.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <h1 className="font-bebas text-[clamp(64px,10vw,120px)] text-white leading-[0.87] mb-6 uppercase">{car.headline}</h1>
            <p className="font-inter text-[16px] text-[#9A9A9A] max-w-[360px] leading-relaxed mb-10">{car.subline}</p>
            <button className="inline-block font-bebas text-[16px] tracking-[4px] px-10 py-4 uppercase text-white bg-[#E8000D] btn-premium transition-all duration-300 hover:bg-[#FF1A1A] hover:shadow-[0_0_40px_rgba(232,0,13,0.3)]">CLAIM YOURS — ${car.price}</button>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] tracking-[4px] text-[#4A4A4A] uppercase">Scroll</span>
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-[#E8000D]"
        />
      </div>
      {/* Car tabs */}
      <div className="absolute bottom-12 right-8 z-10 hidden md:flex gap-4">
        {CARS.map((c, idx) => (
          <button key={c.id} onClick={() => setActiveIdx(idx)}
            className={`font-bebas text-[14px] tracking-[3px] transition-all duration-300 ${idx === activeIdx ? "text-white border-b border-[#E8000D]" : "text-[#4A4A4A] hover:text-[#9A9A9A]"}`}>
            {c.tab}
          </button>
        ))}
      </div>
    </section>
  );
}
