import { SectionWrapper, SectionHeader } from "..";
import { SocialBar, StoreHours, ContactInfo } from "./components";

export default function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      className="w-full p-8 xl:p-16 bg-theme-dark flex flex-col items-center space-y-8 xl:space-y-16"
    >
      <SectionHeader>Contact Us</SectionHeader>
      <div className="md:grid grid-cols-2 space-x-8 sm:space-x-16 space-y-8">
        <ContactInfo />
        <StoreHours />
      </div>
      <SocialBar />
    </SectionWrapper>
  );
}
