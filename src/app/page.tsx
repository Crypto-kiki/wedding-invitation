import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import DateLocation from "@/components/DateLocation";
import PreviewGallery from "@/components/PreviewGallery";
import BankSection from "@/components/BankSection"; // 계좌안내 추가!
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-[#fdf6f0] via-[#faece1] to-[#f7ece2]">
      <Hero />
      <CoupleSection />
      <PreviewGallery />
      <DateLocation />
      <BankSection />
      <Footer />
    </main>
  );
}
