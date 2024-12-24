import React from "react";
import ServiceItem from "./ServiceItem";
import { FaTree } from "react-icons/fa6";
import { FaWallet, FaSocks } from "react-icons/fa";

function Services() {
  return (
    <section className="bg-[#F1F5F8] mt-16 py-20 px-5">
      <h3 className="tracking-widest mb-10 font-bold text-[rgba(0,0,0,0.8)] text-center text-4xl">
        OUR <span className="text-blue-400">SERVICES</span>
      </h3>
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
