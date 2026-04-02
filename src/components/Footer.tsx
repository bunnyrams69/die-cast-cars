import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.04] px-6 md:px-[8vw] py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="inline-flex flex-col items-start mb-4">
            <span className="font-bebas text-[16px] tracking-[6px] text-white leading-none uppercase">MANIFEST</span>
            <div className="w-full h-[1px] bg-[#E8000D] my-[2px]" />
            <span className="font-bebas text-[16px] tracking-[6px] text-[#E8000D] leading-none uppercase">DRIVES</span>
          </div>
          <p className="font-inter text-[13px] text-[#4A4A4A] leading-relaxed mt-4">Own It In Your Hand First.</p>
          <p className="font-inter text-[11px] text-[#2A2A2A] mt-6 leading-relaxed">Free worldwide shipping on all orders.<br />1–2 day dispatch. 6–12 day delivery.</p>
        </div>
        {/* Spacer */}
        <div className="hidden md:block" />
        {/* Shop */}
        <div>
          <h4 className="font-bebas text-[16px] tracking-[4px] text-white mb-6">SHOP</h4>
          <div className="flex flex-col gap-3">
            <Link href="/#the-cars" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">The Cars</Link>
            <Link href="/#faq" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">FAQs</Link>
            <Link href="/shop" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Full Catalog</Link>
          </div>
        </div>
        {/* Legal */}
        <div>
          <h4 className="font-bebas text-[16px] tracking-[4px] text-white mb-6">LEGAL</h4>
          <div className="flex flex-col gap-3">
            <Link href="/policies#returns" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Returns & Refunds</Link>
            <Link href="/policies#shipping" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Shipping Policy</Link>
            <Link href="/policies#privacy" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policies#terms" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/policies#contact" className="font-inter text-[13px] text-[#4A4A4A] hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="font-inter text-[11px] text-[#2A2A2A] tracking-[2px]">© {new Date().getFullYear()} MANIFEST DRIVES. ALL RIGHTS RESERVED.</p>
        <p className="font-inter text-[11px] text-[#2A2A2A] tracking-[2px]">🌍 SHIPS WORLDWIDE</p>
      </div>
    </footer>
  );
}
