import { Icon, SVGS } from "@/components";

interface SocialLinkProps {
  /** SVG icon to render for link */
  icon: keyof typeof SVGS;
  /** Link's href */
  href: string;
  /** Accessibility label for link */
  label: string;
}

function SocialLink({ icon, href, label }: SocialLinkProps) {
  return (
    <div className="btn btn-link p-0 h-min">
      <a href={href} target="_blank" rel="noopener" aria-label={label}>
        <Icon className="size-8 sm:size-12" svg={icon} />
      </a>
    </div>
  );
}

export default function SocialBar() {
  return (
    <div className="flex flex-row space-x-4">
      <SocialLink
        href="https://www.tiktok.com/@neishastylistnyc"
        icon="tiktok"
        label="TikTok"
      />
      <SocialLink
        href="https://www.facebook.com/NeishaStylist/"
        icon="facebook"
        label="Facebook"
      />
      <SocialLink
        href="https://www.instagram.com/neishastylist/?hl=en"
        icon="instagram"
        label="Instagram"
      />
    </div>
  );
}
