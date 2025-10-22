import SectionWrapper from "./section-wrapper";
import { Card } from "@/components";
import SectionHeader from "./section-header";
import Image from "next/image";

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="xl:p-16 p-8 lg:h-dvh lg:max-h-[calc(100vh-128px)] xl:max-h-[calc(100vh-136px)]"
    >
      <div className="lg:grid grid-cols-5 lg:space-x-16  space-y-8 lg:space-y-0 h-full">
        <Card className="rounded-box shadow-lg overflow-hidden col-span-2">
          <Image
            src="https://xfsqopvtvhgawpcxjwae.supabase.co/storage/v1/object/public/images/hero.webp"
            width={2560}
            height={1708}
            alt="Neishastylist"
            className="h-full object-cover"
          />
        </Card>
        <div className="flex flex-col space-y-8 xl:space-y-16 col-span-3 text-center lg:text-left">
          <SectionHeader>About Us</SectionHeader>

          <p className="max-w-4xl col-span-1 text-sm sm:text-base 2xl:text-lg leading-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae nisi massa. Donec luctus, odio efficitur ullamcorper
            efficitur, sapien quam aliquam erat, in consectetur odio magna eget
            nisi. Donec faucibus sollicitudin erat, non sodales dolor
            pellentesque a. Vestibulum venenatis fermentum mauris, eget gravida
            quam hendrerit quis.
            <br />
            <br />
            Cras ultricies felis vel purus ultricies, vitae laoreet nisi rutrum.
            Nam sollicitudin, nulla a blandit scelerisque, dui elit gravida
            magna, eu ornare felis dolor ac elit. Etiam iaculis, metus sed
            commodo molestie, lacus risus laoreet magna, eget semper nunc ex ut
            neque. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
