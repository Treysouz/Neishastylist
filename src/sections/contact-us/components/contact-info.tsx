import { Icon, SVGS } from "@/components";

interface ContactLinkProps {
  /** SVG icon to render for link */
  icon: keyof typeof SVGS;
  /** Link's href */
  href: string;
  /** Text to render for link */
  text: string;
}

function ContactLink({ icon, href, text }: ContactLinkProps) {
  return (
    <li className="btn btn-link p-0 h-min">
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="flex flex-row items-center space-x-2 sm:space-x-4"
      >
        <Icon className="size-4 sm:size-8 text-accent shrink-0" svg={icon} />
        <span className="text-xs sm:text-base lg:text-lg text-left">
          {text}
        </span>
      </a>
    </li>
  );
}

export default function ContactInfo() {
  return (
    <div className="col-span-1 space-y-4">
      <h3 className="text-accent text-sm sm:text-xl lg:text-2xl font-bold">
        Contact Info
      </h3>
      <ul className="h-full flex flex-col items-start space-y-2">
        <ContactLink
          href="https://www.google.com/maps?sca_esv=2a6646da058cd39e&sxsrf=AE3TifMxcSW0qnaVkLiLNQ2n5rZMCjlygQ:1761145248525&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiDW5laXNoYXN0eWxpc3QyBxAjGLADGCcyCBAAGLADGO8FMgsQABiABBiwAxiiBDILEAAYgAQYsAMYogQyCxAAGLADGKIEGIkFMggQABiwAxjvBUjzBFCPBFiPBHABeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgGgAgSYAwCIBgGQBgaSBwExoAcAsgcAuAcAwgcDMi0xyAcD&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KZMD7FhG88KJMUTPvWTfGaqY&daddr=1230+E+Gun+Hill+Rd,+Bronx,+NY+10469"
          icon="map-pin"
          text="1230 E Gun Hill Rd, Bronx, NY 10469"
        />
        <ContactLink
          href="tel:+13472379564"
          icon="phone"
          text="(347) 237-9564"
        />
        <ContactLink
          href="mailto:NeishaStylist@gmail.com"
          icon="envelope"
          text="NeishaStylist@gmail.com"
        />
      </ul>
    </div>
  );
}
