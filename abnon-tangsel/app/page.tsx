import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ProgramsSection from "@/components/sections/ProgramsSection";
import EventsSection from "@/components/sections/EventsSection";
import NewsSection from "@/components/sections/NewsSection";
import TourismSection from "@/components/sections/TourismSection";
import AlumniSection from "@/components/sections/AlumniSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProgramsSection />
      <EventsSection />
      <NewsSection />
      <TourismSection />
      <AlumniSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
