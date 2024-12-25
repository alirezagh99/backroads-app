import React from "react";
import ServiceItem from "./ServiceItem";
import { FaTree } from "react-icons/fa6";
import { FaWallet, FaSocks } from "react-icons/fa";
import Title from "./Title";
function Services() {
  return (
    <section id="services" className="bg-[#F1F5F8] mt-16 py-20 px-5">
      <Title title1="OUR" title2="SERVICES" />
      <div className="flex flex-col mt-20 lg:flex-row justify-center gap-10">
        <ServiceItem
          h4="Saving Money"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
          icon={<FaWallet />}
        />
        <ServiceItem
          h4="Saving Money"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
          icon={<FaTree />}
        />
        <ServiceItem
          h4="Saving Money"
          p="Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia."
          icon={<FaSocks />}
        />
      </div>
    </section>
  );
}

export default Services;
