import React from "react";
import tour1 from "../assets/images/tour-1.jpeg";
import { FaMap } from "react-icons/fa";
function TourItem(props) {
  return (
    <div className="flex flex-col lg:w-1/4 mx-8 lg:mx-0 bg-[#F1F5F8] shadow-lg hover:scale-105 hover:shadow-2xl duration-500 transition-all">
      <div className="relative">
        <img src={props.img} alt="nature" />
        <span className="date absolute bottom-0 right-0 text-[rgba(0,0,0,0.7)] bg-blue-300 p-2">
          {props.date}
        </span>
      </div>
      <div className="flex flex-col p-5">
        <h5 className="font-bold tracking-[0.2em] mb-4 text-[rgba(0,0,0,0.8)]">
          {props.title}
        </h5>
        <p className="text-[rgba(0,0,0,0.7)] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="flex flex-row justify-between text-blue-400">
          <span className="flex flex-row items-center gap-1">
            <FaMap />
            {props.country}
          </span>
          <span>From ${props.price}</span>
          <span>{props.days} days</span>
        </div>
      </div>
    </div>
  );
}

export default TourItem;
