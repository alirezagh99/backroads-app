import React from "react";
import TourItem from "./TourItem";
import tour1 from "../assets/images/tour-1.jpeg";
import tour2 from "../assets/images/tour-2.jpeg";
import tour3 from "../assets/images/tour-3.jpeg";
import tour4 from "../assets/images/tour-4.jpeg";
import Title from "./Title";
const data = [
  {
    id: 1,
    img: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    country: "china",
    price: "1400",
    days: "6",
  },
  {
    id: 2,
    img: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    country: "indonesia",
    price: "2100",
    days: "11",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    country: "hong kong",
    price: "5000",
    days: "8",
  },
  {
    id: 4,
    img: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    country: "kenya",
    price: "3300",
    days: "20",
  },
];
function Tours() {
  return (
    <section id="tours" className="mt-20">
      <Title title1="FEATURED" title2="TOURS" />
      <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-10">
        {data.map((tour) => {
          return (
            <TourItem
              img={tour.img}
              date={tour.date}
              title={tour.title}
              country={tour.country}
              price={tour.price}
              days={tour.days}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
