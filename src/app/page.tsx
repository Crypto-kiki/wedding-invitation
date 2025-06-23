// src/app/page.tsx
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
    <main
      className="
        w-full min-h-screen
        flex flex-col items-center
        bg-white/90 backdrop-blur-sm
        p-6
        rounded-2xl
        shadow-lg
      "
    >
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
