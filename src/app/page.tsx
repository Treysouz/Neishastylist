import {NavBar} from "@/components";
import { HeroSection, AboutSection, GallerySection } from "@/sections";

export default function Home() {
  return <div className="relative overflow-auto">
    <NavBar></NavBar>
    <main className="bg-black h-full w-full">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <GallerySection></GallerySection>
    </main>


  </div>;
}
