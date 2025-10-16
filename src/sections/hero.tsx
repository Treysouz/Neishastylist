export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-dvh flex flex-col sm:flex-row space-x-16 bg-logo-dark relative"
    >
      <div className="z-10 w-full bg-[url(/hero.png)] bg-cover bg-no-repeat bg-top"></div>
      <div className="z-0 polka-bg absolute top-0 left-0 h-full w-full"></div>
      <div className="w-full h-full flex flex-col  justify-center space-y-16 z-10">
        <div className="space-y-8">
          <p className="text-5xl text-white ">If You Can Dream It,</p>
          <p className="text-5xl text-white">We Can Achieve It</p>
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
