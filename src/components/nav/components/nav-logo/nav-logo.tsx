import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  return (
    <Link className="flex flex-row items-center" href="/">
      <Image
        src="https://xfsqopvtvhgawpcxjwae.supabase.co/storage/v1/object/public/images/logo.webp"
        width={1298}
        height={1302}
        alt="Neishastylist"
        className="size-12 sm:size-18 xl:size-30 rounded-full shadow-lg z-10"
        priority
      />
      <h1 className="font-header text-base sm:text-lg xl:text-2xl text-accent p-2 sm:p-4 font-medium whitespace-nowrap">
        Neisha Stylist Salon
      </h1>
    </Link>
  );
}
