import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies — Manifest Drives",
  description: "Returns, shipping, privacy, terms, and contact information for Manifest Drives.",
};

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      <div className="pt-[120px] pb-20 px-6 md:px-[8vw]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bebas text-[48px] md:text-[64px] text-white tracking-[2px] mb-16 text-center">POLICIES</h1>

          {/* Returns & Refunds */}
          <section id="returns" className="mb-16 scroll-mt-24">
            <h2 className="font-bebas text-[32px] tracking-[2px] text-[#E8000D] mb-6">RETURNS & REFUNDS</h2>
            <div className="font-inter text-[15px] text-[#9A9A9A] leading-relaxed space-y-4">
              <p>We stand behind every product we ship. If your model arrives damaged or defective, we&apos;ll replace it or refund you within <strong className="text-white">30 days</strong> of delivery — no questions asked.</p>
              <p><strong className="text-white">Eligibility:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Item must be damaged, defective, or not as described.</li>
                <li>Contact us within 30 days of receiving your order.</li>
                <li>Photos of the issue are required for processing.</li>
              </ul>
              <p><strong className="text-white">Not eligible:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Change-of-mind returns after the order has been dispatched.</li>
                <li>Items that have been intentionally damaged or modified.</li>
              </ul>
              <p>To initiate a return, email <span className="text-[#E8000D]">support@manifestdrives.com</span> with your order number and photos.</p>
            </div>
          </section>

          {/* Shipping Policy */}
          <section id="shipping" className="mb-16 scroll-mt-24">
            <h2 className="font-bebas text-[32px] tracking-[2px] text-[#E8000D] mb-6">SHIPPING POLICY</h2>
            <div className="font-inter text-[15px] text-[#9A9A9A] leading-relaxed space-y-4">
              <p><strong className="text-white">Free worldwide shipping</strong> on every order. No minimum spend required.</p>
              <p><strong className="text-white">Dispatch:</strong> All orders are dispatched within 1–2 business days.</p>
              <p><strong className="text-white">Delivery:</strong> 6–12 business days worldwide.</p>
              <p><strong className="text-white">Tracking:</strong> A tracking number is sent via email once your order has shipped.</p>
              <p>Delivery times may vary depending on your location and local customs processing. We are not responsible for delays caused by customs or carrier operations.</p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="mb-16 scroll-mt-24">
            <h2 className="font-bebas text-[32px] tracking-[2px] text-[#E8000D] mb-6">PRIVACY POLICY</h2>
            <div className="font-inter text-[15px] text-[#9A9A9A] leading-relaxed space-y-4">
              <p>Manifest Drives respects your privacy. We collect only the information necessary to process your order and improve your experience.</p>
              <p><strong className="text-white">What we collect:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email, and shipping address (for order fulfillment).</li>
                <li>Payment information (processed securely via Shopify — we never store card details).</li>
                <li>Browsing data via cookies and analytics tools (to improve site performance).</li>
              </ul>
              <p><strong className="text-white">What we don&apos;t do:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Sell your personal data to third parties.</li>
                <li>Send unsolicited marketing without your consent.</li>
              </ul>
              <p>For data removal requests, email <span className="text-[#E8000D]">privacy@manifestdrives.com</span>.</p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="mb-16 scroll-mt-24">
            <h2 className="font-bebas text-[32px] tracking-[2px] text-[#E8000D] mb-6">TERMS OF SERVICE</h2>
            <div className="font-inter text-[15px] text-[#9A9A9A] leading-relaxed space-y-4">
              <p>By accessing and placing an order with Manifest Drives, you agree to the following terms:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All products are 1:32 scale die-cast models for display and collection purposes.</li>
                <li>Prices are listed in USD and include free worldwide shipping.</li>
                <li>We reserve the right to update pricing, product availability, and these terms at any time.</li>
                <li>All intellectual property, branding, and content on this site belong to Manifest Drives.</li>
                <li>Use of this website constitutes acceptance of our Privacy Policy and Return Policy.</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-16 scroll-mt-24">
            <h2 className="font-bebas text-[32px] tracking-[2px] text-[#E8000D] mb-6">CONTACT</h2>
            <div className="font-inter text-[15px] text-[#9A9A9A] leading-relaxed space-y-4">
              <p>Have a question, issue, or just want to say hi? We&apos;d love to hear from you.</p>
              <p><strong className="text-white">Email:</strong> <span className="text-[#E8000D]">support@manifestdrives.com</span></p>
              <p><strong className="text-white">Response time:</strong> Within 24 hours on business days.</p>
              <p>For order-related inquiries, please include your order number in the email.</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
