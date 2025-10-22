import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-dvh flex flex-col items-center justify-center sm:flex-row bg-theme-dark relative  xl:p-16"
    >
      <div className="z-0 polka-bg absolute top-0 left-0 h-full w-full" />
      <div className="flex flex-col justify-center z-10 items-center animate-fade-in">
        <div className="text-center">
          <div className="bg-theme-dark p-4 sm:p-8">
            <p className="text-3xl sm:text-6xl text-accent font-header leading-12 ">
              Hair By Design
            </p>
          </div>

          <p className="p-4 sm:p-8 text-lg sm:text-3xl text-white leading-8 sm:leading-12 tracking-widest bg-theme-dark">
            If You Can Dream It,
            <br />
            We Can Achieve It!
          </p>
        </div>
        <div className="p-4 sm:p-8 bg-theme-dark">
          <Link
            href="#contact"
            className="btn btn-primary text-white btn-lg sm:btn-xl"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
