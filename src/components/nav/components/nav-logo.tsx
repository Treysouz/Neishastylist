import Link from "next/link";
import Image from "next/image";

export default function NavLogo() {
  return (
    <Link className="flex flex-row items-center" href="/">
      <Image
        src="/logo.png"
        width={1298}
        height={1302}
        alt="Neishastylist"
        className="size-15 sm:size-30 rounded-full shadow-lg z-10"
      ></Image>
      <h1 className="font-header text-lg sm:text-2xl text-accent bg-logo-dark p-4 font-medium">
        Neisha Stylist
      </h1>
    </Link>
  );
}
