import SectionWrapper from "../section-wrapper";

export default function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      className="bg-logo-dark h-dvh flex flex-col sm:flex-row">
      {/* <div className="h-full w-full bg-[url(/hero.png)] bg-contain bg-no-repeat bg-top sm:bg-left">
        <div className="w-full h-full bg-black/25 flex flex-col items-center justify-center space-y-8">
          <p className="text-6xl text-white text-center">
            If you can dream it, <br></br> we can achieve it
          </p>

          <button className="btn btn-primary text-white btn-xl">
            Book an Appointment
          </button>
        </div>
      </div> */}

      <div className="w-full bg-[url(/hero.png)] bg-cover bg-no-repeat bg-top"></div>
      <div className="w-full h-full bg-logo-dark flex flex-col items-center justify-center space-y-12">
        <p className="text-6xl text-white text-center leading-20">
          If You Can Dream It, <br></br> We Can Achieve It
        </p>

        <button className="btn btn-primary text-white btn-xl">
          Book an Appointment
        </button>
      </div>
    </SectionWrapper>
  );
}
