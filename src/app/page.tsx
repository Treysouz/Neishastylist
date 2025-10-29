import {
  HeroSection,
  AboutSection,
  WorkSection,
  ServicesSection,
  StaffSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <StaffSection />
    </div>
  );
}
