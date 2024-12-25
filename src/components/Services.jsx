import React from "react";
import ServiceItem from "./ServiceItem";
import { FaTree } from "react-icons/fa6";
import { FaWallet, FaSocks } from "react-icons/fa";
import Title from "./Title";
const data = [
  {
    id: 1,
    h4: "Saving Money",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    icon: <FaWallet />,
  },
  {
    id: 2,
    h4: "endless hiking",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    icon: <FaTree />,
  },
  {
    id: 3,
    h4: "amazing comfort",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
    icon: <FaSocks />,
  },
];
function Services() {
  return (
    <section id="services" className="bg-[#F1F5F8] mt-16 py-20 px-5">
      <Title title1="OUR" title2="SERVICES" />
      <div className="flex flex-col mt-20 lg:flex-row justify-center gap-10">
        {data.map((service) => {
          return (
            <ServiceItem
              key={service.id}
              h4={service.h4}
              p={service.p}
              icon={service.icon}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;
