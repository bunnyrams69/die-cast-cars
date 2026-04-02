import Link from "next/link";

export default function ManifestBanner() {
  return (
    <section className="relative w-full aspect-auto min-h-[60vw] md:aspect-video md:min-h-0 bg-[url('/banner-bg.png')] bg-cover bg-[position:center_left] bg-no-repeat flex flex-col justify-end items-center pb-[8vw] md:pb-0 md:justify-center md:items-end overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(8,8,8,0.3)] to-[rgba(8,8,8,0.7)]" />
      <div className="w-[85%] md:w-[38%] text-center md:text-left z-10 flex flex-col items-center md:items-start md:-ml-[10%]">
        <p className="font-inter font-normal uppercase tracking-wider text-[rgba(255,255,255,0.65)] text-[clamp(13px,1.2vw,18px)] mb-2">Give yourself a reason to struggle.</p>
        <h2 className="font-bebas text-white text-[clamp(32px,4.5vw,72px)] leading-none mb-4 md:mb-6">Buy yours now.</h2>
        <Link href="#the-cars" className="font-inter font-medium text-white border-b border-white hover:text-[#E8000D] hover:border-[#E8000D] transition-colors pb-1 uppercase text-sm tracking-wide inline-block">
          Shop the Collection &rarr;
        </Link>
      </div>
    </section>
  );
}
