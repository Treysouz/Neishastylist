export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-dvh flex flex-col items-center justify-center sm:flex-row space-x-16 bg-logo-dark relative"
    >
      <div className="z-0 polka-bg absolute top-0 left-0 h-full w-full"></div>
      <div className="w-full h-full flex flex-col justify-center space-y-16 z-10 items-center">
        <div className="space-y-16 text-center">
          <p className="text-6xl text-accent font-header">Hair By Design</p>

          <p className="text-3xl text-white leading-12 tracking-widest">
            If You Can Dream It,<br></br>We Can Achieve It!
          </p>
        </div>
        <div>
          <button className="btn btn-primary text-white btn-xl">
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
