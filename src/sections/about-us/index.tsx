import SectionWrapper from "../section-wrapper";
import { Card } from "@/components";
import SectionHeader from "../section-header";
import Image from "next/image";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="xl:p-16 p-8  flex">
      <div className="h-full lg:grid grid-cols-4 lg:space-x-16 space-y-8 lg:space-y-0 grow">
        <Card className="rounded-box shadow-lg col-span-2">
          <Image
            src="https://xfsqopvtvhgawpcxjwae.supabase.co/storage/v1/object/public/images/hero.webp"
            width={2560}
            height={1708}
            alt="Neishastylist"
            className="h-full object-cover rounded-box"
          />
        </Card>
        <div className="flex flex-col space-y-8 xl:space-y-16 col-span-2 text-center lg:text-left h-full">
          <SectionHeader>About Us</SectionHeader>

          <p className="text-sm sm:text-base 2xl:text-lg leading-8 sm:leading-10 2xl:leading-12">
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
