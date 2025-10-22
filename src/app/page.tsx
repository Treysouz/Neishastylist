import {
  HeroSection,
  AboutSection,
  WorkSection,
  ServicesSection,
  StaffSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <StaffSection />
    </div>
  );
}
