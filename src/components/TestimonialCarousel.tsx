"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { img: "/us-t1.jpg", stars: 5, quote: "I set it on my desk the day it arrived. Now I look at it every morning before I start work. It's not just a model — it's a reminder.", name: "James R.", city: "Austin, TX" },
  { img: "/us-t2.jpg", stars: 5, quote: "The detail on this M4 is insane. My colleagues keep picking it up. Best $50 I've spent this year.", name: "Marcus T.", city: "Miami, FL" },
  { img: "/us-t3.jpg", stars: 5, quote: "Bought the Huracán STO model. It sits next to my monitor. My 8-year-old son now wants to be an engineer.", name: "David K.", city: "New York, NY" },
  { img: "/us-t4.jpg", stars: 5, quote: "The packaging was premium. Felt like unboxing a real luxury item. The GT3 RS is absolutely stunning.", name: "Alex M.", city: "Los Angeles, CA" },
  { img: "/us-t5.jpg", stars: 5, quote: "I've had it for two weeks. Every person who walks into my office asks about it. That's the energy I wanted.", name: "Ryan C.", city: "Chicago, IL" },
  { img: "/us-t6.jpg", stars: 5, quote: "Got all three. They sit on my bookshelf. My wife thinks I'm obsessed — she's right. These are incredible.", name: "Chris W.", city: "Seattle, WA" },
];

export default function TestimonialCarousel() {
  return (
    <section id="testimonials" className="bg-white py-[80px] md:py-[120px] px-6 md:px-[8vw]">
      <div className="text-center mb-16">
        <p className="font-inter text-[11px] tracking-[5px] text-[#E8000D] uppercase mb-6">THE PROOF</p>
        <h2 className="font-bebas text-[48px] md:text-[72px] text-[#080808] leading-none mb-6">REAL DESKS. REAL DRIVES.</h2>
        <div className="flex items-center justify-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#C9A84C" stroke="#C9A84C" />))}
          </div>
          <span className="font-inter text-[14px] text-[#4A4A4A]">4.9 · 200+ verified reviews</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#F7F7F7] border border-[#E5E5E5] overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="w-full h-[240px] overflow-hidden">
              <img src={review.img} alt={`Review by ${review.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex mb-3">
                {[...Array(review.stars)].map((_, j) => (<Star key={j} size={14} fill="#C9A84C" stroke="#C9A84C" />))}
              </div>
              <p className="font-inter text-[14px] text-[#333] leading-relaxed mb-4">&ldquo;{review.quote}&rdquo;</p>
              <div className="font-inter text-[12px] text-[#9A9A9A] uppercase tracking-[2px]">{review.name} — {review.city}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
