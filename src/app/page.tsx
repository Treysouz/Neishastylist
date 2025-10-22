import { NavBar } from "@/components";
import {
  HeroSection,
  AboutSection,
  WorkSection,
  ServicesSection,
  StaffSection,
  ContactFooter,
} from "@/sections";

export default function Home() {
  return (
    <div className="relative overflow-auto">
      <NavBar />
      <main className="h-full w-full">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <StaffSection />
        <ContactFooter />
      </main>
    </div>
  );
}
