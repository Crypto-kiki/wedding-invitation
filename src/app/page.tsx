import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import DateLocation from "@/components/DateLocation";
import PreviewGallery from "@/components/PreviewGallery";
import AccountInfo from "@/components/AccountInfo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero />
      <CoupleSection />
      <DateLocation />
      <PreviewGallery />
      {/* <AccountInfo /> */}
      <Footer />
    </main>
  );
}
