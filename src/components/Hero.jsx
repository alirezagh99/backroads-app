import React from "react";
import backImg from "../assets/images/main.jpeg";
function Hero() {
  return (
    <div className="hero relative bg-black">
      <img className="w-full block opacity-80 from-blue-400" src={backImg} />
      <div className="absolute w-full lg:w-2/3 left-1/2 top-1/2 -translate-x-1/2 text-center -translate-y-1/2">
        <h1 className="text-2xl lg:text-6xl mb-4 text-white font-bold tracking-widest">
          CONTINUE EXPLORING
        </h1>
        <p className="tracking-[0.2em] font-semibold w-2/3 text-sm lg:text-base mb-4 m-auto text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          nesciunt aut, facere id ducimus libero voluptatem consequatur laborum
        </p>
        <button className="tracking-widest text-base lg:text-xl text-blue-400 px-8 py-3 border border-white transition-all hover:bg-transparent bg-white">
          EXPLORE TOURS
        </button>
      </div>
    </div>
  );
}

export default Hero;
