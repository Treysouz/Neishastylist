export default function NavLogo() {
  return (
    <a className="flex flex-row items-center px-4" href="/">
      <img
        src="/logo.png"
        alt="Neishastylist"
        className="size-30 rounded-full shadow-lg z-10"></img>
      <h1 className="font-header text-2xl text-accent bg-logo-dark pl-6 py-4 pr-4 font-medium -ml-4 rounded-r-2xl">
        Neisha Stylist
      </h1>
    </a>
  );
}
