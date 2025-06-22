import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import CountdownTimer from "@/components/CountdownTimer";
import DateLocation from "@/components/DateLocation";
import PreviewGallery from "@/components/PreviewGallery";
import BankSection from "@/components/BankSection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3]">
      <LanguageToggle />
      <Hero />
      <CoupleSection />
      <CountdownTimer />
      <PreviewGallery />
      <DateLocation />
      <MessageSection />
      <BankSection />
      <Footer />
    </main>
  );
}