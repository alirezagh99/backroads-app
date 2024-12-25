import React from "react";
import aboutImg from "../assets/images/about.jpeg";

function About() {
  return (
    <section id="about" className="about-us mt-10 px-5">
      <h2 className="text-4xl font-bold text-[rgba(0,0,0,0.85)] tracking-widest mb-16 text-center block">
        ABOUT <span className="text-blue-400">US</span>
      </h2>
      <div className="flex flex-col justify-center gap-10 lg:flex-row mt-10">
        <div className="lg:w-1/3 relative">
          <div className="w-full absolute hidden lg:block border-8 -z-10 -top-5 -left-5 border-blue-400 h-full"></div>
          <img src={aboutImg} alt="beach" />
        </div>
        <div className="lg:w-1/3">
          <h3 className="tracking-widest text-[rgba(0,0,0,0.8)] mb-5 font-bold text-2xl">
            EXPLORE THE DIFFERENCE
          </h3>
          <p className="text-[rgba(0,0,0,0.75)] mb-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="text-[rgba(0,0,0,0.75)] mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <button className="tracking-widest bg-blue-400 duration-500 text-white py-2 px-4 hover:bg-blue-200 hover:text-[rgba(0,0,0,0.8)] transition-all">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
