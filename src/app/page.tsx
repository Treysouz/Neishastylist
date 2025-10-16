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
      <NavBar></NavBar>
      <main className="h-full w-full">
        <HeroSection></HeroSection>
        <WorkSection></WorkSection>
        <AboutSection></AboutSection>
        <ServicesSection></ServicesSection>
        <StaffSection></StaffSection>
        <ContactFooter></ContactFooter>
      </main>
    </div>
  );
}
