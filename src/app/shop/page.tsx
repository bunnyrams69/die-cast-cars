import Navbar from "@/components/Navbar";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import MarqueeBanner from "@/components/MarqueeBanner";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#080808] selection:bg-[#E8000D] selection:text-white">
      <Navbar />
      <div className="pt-[64px]"><MarqueeBanner variant="dark" /></div>
      <section className="px-6 md:px-[8vw] pt-20 pb-10">
        <h1 className="font-bebas text-[48px] md:text-[80px] leading-none tracking-[-2px] uppercase bg-[linear-gradient(180deg,#FFFFFF_0%,#6A6A6A_100%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
          FULL CATALOG
        </h1>
        <p className="font-inter text-[16px] text-[#9A9A9A] text-center mt-6 max-w-[500px] mx-auto">
          Every model in the collection. Premium 1:32 scale die-cast. Built for those who act.
        </p>
      </section>
      <Collection />
      <MarqueeBanner variant="red" />
      <Footer />
    </main>
  );
}
