import React from "react";
import TourItem from "./TourItem";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";

function Tours() {
  return (
    <section id="tours" className="mt-20">
      <h3 className="tracking-widest mb-10 font-bold text-[rgba(0,0,0,0.8)] text-center text-4xl">
        FEATURED <span className="text-blue-400">TOURS</span>
      </h3>
      <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-10">
        <TourItem
          img={tour1}
          date="august 26th, 2020"
          title="Tibet Adventure"
          country="china"
          price="2100"
          days="6"
        />
        <TourItem
          img={tour2}
          date="october 1th, 2020"
          title="best of java"
          country="indonesia"
          price="1400"
          days="11"
        />
        <TourItem
          img={tour3}
          date="september 15th, 2020"
          title="explore hong kong"
          country="hong kong"
          price="5000"
          days="8"
        />
        <TourItem
          img={tour4}
          date="december 5th, 2019"
          title="kenya highlights"
          country="kenya"
          price="3300"
          days="20"
        />
      </div>
    </section>
  );
}

export default Tours;
